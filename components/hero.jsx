import CodeforcesRating from "./sub/cf-rating";
import FocusPanel from "./sub/focus";
import CodeforcesHeatmap from "./sub/heatmap";

export default function Hero() {
  return (
    <div id="hero" className="w-full block lg:flex pt-24">
      <FocusPanel />
      <div className="w-full lg:w-1/2 p-10 ">
        <CodeforcesHeatmap />
        <CodeforcesRating />
      </div>
    </div>
  );
}
