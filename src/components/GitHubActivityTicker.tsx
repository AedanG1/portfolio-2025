import { useEffect, useState } from "react";

type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
};

const GitHubActivityTicker = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const apiCall = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/AedanG1/events/public",
          { signal: controller.signal }
        );

        if (!response.ok) {
          if (response.status === 403) {
            const remaining = response.headers.get("x-ratelimit-remaining");
            if (remaining === "0") {
              throw new Error("GitHub API rate limit exceeded");
            }
          }
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: GitHubEvent[] = await response.json();
        setEvents(data);
        setError(null);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Failed to load activity");
      }
    };

    apiCall();
    return () => controller.abort();
  }, []);

  return (
    <div className="font-terminal text-nav-button-louder">
      {error && <span>Couldn't load GitHub activity: {error}</span>}
      {!error && events.length === 0 && <span>Loading...</span>}
      {events.map((event) => (
        <div key={event.id}>
          {event.type}: {event.repo.name} {event.created_at}
        </div>
      ))}
    </div>
  );
};

export default GitHubActivityTicker;
