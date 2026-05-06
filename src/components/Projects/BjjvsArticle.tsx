import { bjjvsHero, aws, editTags, editVideo, filter, thumbnail, upload} from "@assets/bjjvs"

const BjjvsArticle = () => {
  return (
    <article>
      <div>
        <img
          src={bjjvsHero}
          loading="lazy"
          alt="A screenshot of the homepage for a Video Sharing app. Shows a grid of videos"
        />
        <h2 id="overview">
          Overview
        </h2>
        <hr></hr>
        <p>
          This video sharing webapp for a martial arts gym allows members to
          watch and favorite instructional videos uploaded by the admin.
          Users are authenticated and authorized using express sessions
          stored in a Redis database. The admin creates tags for the video
          in order to allow members to filter their searches. Upon uploading
          a video, a frame is chosen out of the uploaded video to set as a
          thumbnail. Videos are uploaded directly to an AWS S3 bucket with a
          pre-signed url, then optimized for filesize through AWS
          MediaConvert saving storage space.
        </p>
      </div>
      <div>
        <h3 id="design-rationale">
          Design Rationale
        </h3>
        <p>
          Right now, it can be hard for coaches to get the information and
          knowledge they want to their students. This can be for a number of
          reasons:
        </p>
        <ul>
          <li>
            Students rarely attend every class and can consequently miss
            critical information, concepts, and techniques.
          </li>
          <li>
            Students end up watching a variety of content from different
            people who are at different skill levels who believe in
            different ways of doing things. This can lead to gaps in knowledge and understanding
            or can lead to students learning bad practices.
          </li>
          <li>
            Students and coaches don't have a dedicated or clear way to
            communicate and ask/answer questions outside of class.
          </li>
        </ul>
        <p>
          The goal of this app is to give more structure to the teaching and
          learning relationship that coaches and students can have outside
          the gym. In education, teachers give students access to recorded
          lectures, recorded labs, lecture notes, lecture slides, problem
          sets, etc. in order to teach. Most gyms at the moment don't offer
          any learning resources outside of the hour long class that runs
          everyday. With this video sharing platform, coaches can offer more
          resources for their students to learn and succeed.
        </p>
      </div>
      <h2 id="screenshots">
        Screenshots
      </h2>
      <hr></hr>
      <div>
        <h3 id="library">
          Library
        </h3>
        <img
          src={filter}
          loading="lazy"
          alt="A screenshot of a the Library page of the Video Sharing app. A filter dropdown is shown"
        />
        <p>
          Members can filter videos in Library, This week, and Favorites
          using tags created by an admin.
        </p>
      </div>
      <div>
        <h3 id="upload-video">
          Upload Video
        </h3>
        <img
          src={upload}
          loading="lazy"
          alt="A screenshot of the admin dashboard"
        />
        <p>
          Admins can drag and drop or click to upload videos, add tags that
          have been created, set the skill level, and include the
          instructor's name.
        </p>
      </div>
      <div>
        <h3 id="aws">
          AWS Pipeline
        </h3>
        <img src={aws} loading="lazy" alt="A diagram of the AWS pipeline" />
        <p>
          Upon uploading a video (1,2) the client sends a request to the
          server for a pre-signed url to upload to an AWS S3 bucket. (3) The
          client then sends the uploaded video and thumbnail to the input S3
          bucket. (4) Using a lambda function, (5) a MediaConvert job is
          started that is configured to optimize the video's file size. (6)
          Once upload is complete, the MediaConvert job outputs the new
          optimized video to the S3 output bucket. (7) The client is then
          able to request the optimized video from the S3 output bucket.
        </p>
      </div>
      <div>
        <h3 id="thumbnail">
          Choosing a Thumbnail
        </h3>
        <img
          src={thumbnail}
          loading="lazy"
          alt="A screenshot of the thumbnail choosing feature"
        />
        <p>
          Admins can then select a frame from the uploaded video to set as a
          thumbnail.
        </p>
      </div>
      <div>
        <h3 id="tags">
          Managing Tags
        </h3>
        <img
          src={editTags}
          loading="lazy"
          alt="A screenshot of the manage tags form"
        />
        <p>
          Admins create, edit, and delete tags to attach to videos for
          members to filter videos with.
        </p>
      </div>
      <div>
        <h3 id="videos">
          Managing Videos
        </h3>
        <img
          src={editVideo}
          loading="lazy"
          alt="A screenshot of the manage videos form"
        />
        <p>Here admins can update or delete titles, tags, and videos</p>
      </div>
    </article>
  )
}

export default BjjvsArticle;
