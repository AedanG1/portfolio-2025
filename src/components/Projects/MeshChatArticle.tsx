const MeshChatArticle = () => {
  return (
    <article>
      <div>
        <h2 id="overview">
          Overview
        </h2>
        <hr></hr>
        <p>
          Mesh Chat is a secure, end-to-end encrypted messaging system built
          on an n-to-n mesh network architecture. Messages are encrypted
          client-side using RSA-OAEP and never decrypted in transit. Servers
          route ciphertext without ever having access to message contents.
          Each message carries both a transport signature (server-to-server
          integrity) and a content signature (client-to-client
          authenticity), ensuring messages can't be tampered with or spoofed
          at any layer of the network.
        </p>
        <p>
          The mesh topology distributes trust across multiple servers using
          a gossip protocol for state replication. There's no central point
          of failure or single server with visibility into the full network.
        </p>
      </div>

      <div>
        <h3 id="development-approach">
          Development Approach
        </h3>
        <p>
          This project started with two days of learning. I spent that time
          working through the cryptography primitives, authentication flows,
          and distributed systems concepts needed to design the system
          properly. From that foundation I wrote a detailed protocol
          specification covering the cryptographic scheme, JSON envelope
          format, gossip-based state replication, and multi-phase
          authentication flow before writing a single line of code.
        </p>
        <p>
          The implementation was built using Claude Code as an AI-assisted
          development tool, working through the specification across 10
          development phases. My next step is to write full documentation
          auditing the implementation against the spec, both to deepen my
          understanding of how each piece was built and to verify it against
          what I designed.
        </p>
      </div>

      <div>
        <h2 id="cryptography">
          Cryptography
        </h2>
        <hr></hr>

        <div>
          <h3 id="asymmetric-keys">
            Asymmetric Keys
          </h3>
          <p>
            Both the servers and clients generate at least one asymmetric key
            pair. Each server generates one asymmetric key pair for signing
            (RSA-PSS) messages between other servers. Each client generates
            both an asymmetric key pair for signing (RSA-PSS) and one for
            encrypting and decrypting messages (RSA-OAEP).
          </p>
        </div>
      </div>

      <div>
        <h3 id="e2e-encryption">
          End-to-End Encryption
        </h3>
        <p>
          When a user wants to send a message to another user, the sender's
          client encrypts the message using the receiver's public RSA-OAEP
          key. The sender's client also signs a hash of the payload using
          their own private RSA-PSS key. The message is then sent to the
          sender's local server that they're connected to. Their local
          server checks who the recipient is, and either delivers it
          directly to the recipient (if recipient is connected to the same
          local server) or forwards the message to the recipient's local
          server for their local server to deliver it to them. Once the
          recipient's client receives the message, it's job is to verify the
          content signature in the payload (with the sender's public RSA-PSS
          key) to verify that the contents weren't tampered with. Once
          verified, the recipient's client decrypts the message with the
          recipient's own private RSA-OAEP key. Never during transport does
          the server decrypt the message.
        </p>
      </div>

      <div>
        <h3 id="signatures">
          Transport & Content Signatures
        </h3>
        <p>
          Each message between servers has a transport signature. The
          transport signature is created by using the sending server's
          private RSA-PSS key to sign the payload. The receiving server uses
          the sending server's public RSA-PSS key to verify that the
          contents weren't tampered with and that the message did indeed
          come from who the sending server says they are. The content
          signatures are used by the clients to sign the ciphertext inside
          the payload so that the receiving client can verify that the
          message wasn't tampered with and that the message came from who
          the recipient says they are.
        </p>
      </div>

      <div>
        <h3 id="registration&login">
          Registration & Login
        </h3>
        <p className="mb-2">
          To create an account, a user must enter a display name and
          password. The client is then responsible for hashing the password
          with the username (HMAC-SHA256) and creating a pair of
          public/private keys. One pair used for encrypting/decrypting
          (RSA-OAEP), and one pair used for signatures (RSA-PSS). The
          plain-text password is used to create a password derived key to
          encrypt the private keys, using an Argon2id KDF (Key Derived
          Function). The Argon2id KDF uses the plaintext password, a salt,
          and a work factor to create a unique fixed-length key. WebCrypto
          then encrypts the private keys with AES-256-GCM. The client hashed
          password, the public keys, the private key blobs, and username is
          then sent to the server. The server checks if the username is in
          use and if not, creates a unique UUID v4, runs the client hash
          through an Argon2id hash, and writes the Argon2id hash, the public
          keys, the private key blobs, username, and UUID v4 to its
          persistent database. The user is now registered.
        </p>
        <p>
          In order for a user to login, the user enters their details and
          clicks login. The client then sends a login request to the server
          which contains the username and a hash of the username and
          password (HMAC-SHA256) that was entered. The server looks up the
          username in its persistent database, if it finds a corresponding
          username, it compares the client hash to the Argon2id hash in the
          database. If they match, the server sends a nonce challenge
          message that includes a nonce and the AES-256-GCM encrypted
          private key blobs associated with the user. The client then needs
          to use the password that was entered to create the Argon2id
          password derived key to decrypt the private key blobs with
          AES-256-GCM (WebCrypto). The AES-256-GCM encrypted private key
          blobs have the Argon2id salt that needs to be extracted in order
          to create the same password derived key to decrypt the private key
          blobs. The blob is structured as a concatenation of fixed-length
          sections: the first 16 bytes are the Argon2id salt, the next 12
          bytes are the AES-256-GCM IV, and the remaining bytes are the
          encrypted private key. The client extracts each section by slicing
          the blob at known byte offsets. Once the client has the decrypted
          private keys, it can sign the nonce with the private key (RSA-PSS)
          and return it to the server. The server then verifies the
          signature on the nonce with the public key (RSA-PSS) associated
          with the user and if it's verified, the user is logged in. The
          final step is to cache both private keys as non-extractable
          CryptoKeys. The private encryption key for decrypting incoming
          messages and the private signing key for signing outgoing
          messages.
        </p>
      </div>

      <div>
        <h2 id="managing-state">
          Managing State of the Mesh
        </h2>
        <hr></hr>

        <div>
          <h3 id="websockets">
            WebSockets
          </h3>
          <p>
            Each server to server and client to server connection uses
            WebSockets.
          </p>
        </div>
      </div>

      <div>
        <h3 id="in-memory-tables">
          In-memory Tables
        </h3>
        <p>
          Each server has in-memory tables of the list of servers, their
          addresses (IP:Port), local users, and the server locations of each
          user on the network. These tables act as the "address book" of the
          network for each server.
        </p>
      </div>

      <div>
        <h3 id="gossip">
          Gossip
        </h3>
        <p>
          In order for each server to keep the state of the network up to
          date, each server is responsible for broadcasting changes to the
          "address book". If a server joins the network, it is given an
          up-to-date version of the network state. It also has the
          responsibility to broadcast its presence to every other server on
          the network, that way every server knows there's a new server on
          the network. This broadcast comes with all the essential
          information that the other servers need such as the new server's
          public RSA-PSS key and address. If a new user joins a server (or
          leaves), that server is responsible for letting every other server
          know that a new user has joined as well. Messages are then
          forwarded to the next server.
        </p>
      </div>

      <div>
        <h3 id="avoiding-loops">
          Avoiding Loops
        </h3>
        <p>
          Servers keep a seen messages cache for server delivered messages
          in order to drop duplicate messages received.
        </p>
      </div>

      <div>
        <h3 id="heartbeat">
          Heartbeat
        </h3>
        <p>
          Servers keep track of the last time they received a message from
          all individual servers on the network. Every 15s a server is
          responsible for sending out a Heartbeat message to verify that
          they're still connected to the network. If after 45s a message or
          heartbeat hasn't been received from a server, a reconnection
          attempt is made using the server's address before the server is
          dropped from the network.
        </p>
      </div>
    </article>
  )
}

export default MeshChatArticle;
