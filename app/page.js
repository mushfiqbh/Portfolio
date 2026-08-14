import Hero from "@/components/hero";
import Project from "@/components/project";
import Presenter from "@/components/sub/presenter";
import Achievement from "@/components/achievement";
import Competencies from "@/components/competencies";

export default function Home() {
  return (
    <main id="home">
      <Presenter />
      <Hero />
      <Project />
      <Competencies />
      <Achievement />
    </main>
  );
}
