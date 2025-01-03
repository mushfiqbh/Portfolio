import CodeforcesRating from "./sub/cf-rating";
import FocusPanel from "./sub/focus";

export default function Hero() {
  return (
    <div id="hero" className="w-full block lg:flex pt-24">
      <FocusPanel />
      <div className="w-full lg:w-1/2 p-5 lg:p-10">
        <CodeforcesRating />
      </div>
    </div>
  );
}
