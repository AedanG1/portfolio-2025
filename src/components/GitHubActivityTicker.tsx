import { useEffect, useState } from "react";
import GitHubActivities from "./GitHubActivities";
import Icons from "@assets/Icons/Icons";

export type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
};

const EVENT_AMOUNT = 15;

const GitHubActivityTicker = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [animationState, setAnimationState] = useState<boolean>(true);

  let statusColor;
  if (error) {
    statusColor = "#FF0000";
  } else if (!animationState) {
    statusColor = "#FFB700";
  } else {
    statusColor = "#00FF1E";
  }

  useEffect(() => {
    const controller = new AbortController();

    const apiCall = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/AedanG1/events/public?per_page=${EVENT_AMOUNT}`,
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

  const toggleAnimation = () => {
    setAnimationState(!animationState);
  };

  return (
    <>
    <div className="hidden md:flex flex-row gap-4 items-center -mr-4">
      {/* Switch */}
      <button 
      onClick={() => toggleAnimation()}
      className={`${animationState ? 'ticker-switch__on' : 'ticker-switch__off'} 
      hover:cursor-pointer shadow-nav-button w-5 h-11 rounded-xs border border-black`}/>

      {/* Status LED */}
      {Icons.StatusLed(statusColor)}

      {/* Worn Label */}
      <span className="font-worn text-nav-button-subtle text-xs flex flex-col items-center">
        <span>GitHub</span>
        <span>Activity</span>
      </span>

    </div>
    <div className="hidden font-terminal text-nav-button-louder bg-black py-2 rounded-lg
    border border-t-[#212121] border-l-[#212121] border-b-0 border-r-0
    flex-1 min-w-0 overflow-hidden md:flex flex-row items-center">
      {error && <span>Couldn't load GitHub activity: {error}</span>}
      {!error && events.length === 0 && <span>Loading...</span>}
      <div 
      style={{animationPlayState: animationState ? 'running' : 'paused'}}
      className="flex flex-row gap-12 w-max animated-ticker">
        <GitHubActivities events={events} />
      </div>
    </div>
    </>
  );
};

export default GitHubActivityTicker;
