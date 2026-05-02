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
        // if the component unmounted before request was complete, don't tell user
        if (err instanceof DOMException && err.name === "AbortError") return;
        // any other error, tell the user
        setError(err instanceof Error ? err.message : "Failed to load activity");
      }
    };

    apiCall();
    return () => controller.abort();
  }, []);

  return (
    <div className="font-terminal text-nav-button-louder bg-black py-2 rounded-lg
    border border-t-[#212121] border-l-[#212121] border-b-0 border-r-0
    flex-1 min-w-0 overflow-hidden flex flex-row items-center group">
      {error && <span>Couldn't load GitHub activity: {error}</span>}
      {!error && events.length === 0 && <span>Loading...</span>}
      <div className="flex flex-row gap-12 w-max animated-ticker group-hover:[animation-play-state:paused]">
        {[...events, ...events].map((event) => {
          const createdAtAEST = new Date(event.created_at).toLocaleDateString("en-AU", { timeZone: "Australia/Brisbane" });
          return (
            <div key={event.id} className="whitespace-nowrap">
              {event.type}: {event.repo.name} - {createdAtAEST}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default GitHubActivityTicker;
