import TranslateAnimation from "@/app/animation/TranslateAnimation.animation";
import SkillsSVG from "@/app/SVGs/SkillsSVG";

const Skills = () => {

    const logoNames:LogoName[]=["typescript","docker","git","mongodb","nest","next","react","tailwind","database"]

  return (
    <section className="h-[100vh]">
      <div className="w-full h-[11vh] relative bg-primary rounded-ee-[100px]">
        <div className="absolute top-[100%] -translate-y-1/2 h-32 w-96 rounded-b-[60px] rounded-t-[20px] bg-black flex justify-center items-center text-primaryDarkest font-bold text-6xl">About me</div>
      </div>
    </section>
  );
};

export default Skills;
