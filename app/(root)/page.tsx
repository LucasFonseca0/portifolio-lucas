
import Introduction from "../components/homeComponents/Introduction";
import AboutMe from "../components/homeComponents/AboutMe";
import Skills from "../components/homeComponents/Skills";
import Projects from "../components/homeComponents/Projects";

export default function Home() {
  return (
    <div className="relative bg-white w-full ">
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
