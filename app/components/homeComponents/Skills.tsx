
import TranslateAnimation from "@/app/animation/TranslateAnimation.animation";
import AutoSlider from "../skillsComponents/autoSlider";

const Skills = () => {
  return (
    <section >
      <h2 className="text-2xl sm:text-3xl md:text-5xl relative flex justify-center font-extrabold">
        <span className="absolute inset-0 bg-pastel h-1/2 -z-10"></span>
        <span className="absolute  right-0 w-[37%] md:w-[40%] h-1/2 -z-10 flex justify-center items-center  translate-y-[50%] ">
          <span className="h-1 w-full bg-secondary"></span>
        </span>
        <span className="absolute left-0 w-[37%] md:w-[40%] h-1/2 -z-10 flex justify-center items-center  translate-y-[50%] ">
          <span className="h-1 w-full bg-secondary"></span>
        </span>
        SKILLS
      </h2>
      <div className="  ">
        <AutoSlider/>
        
        <p>Sou um desenvolvedor full-stack com especialização em Next.js no frontend e Nest.js no backend. Utilizo Tailwind CSS para garantir interfaces elegantes e Docker para ambientes consistentes. Minha experiência abrange bancos de dados SQL e NoSQL, utilizando ORMs como Mongoose e Prisma. Sou proficiente em Git e GitHub para controle de versão colaborativo.</p>


        
        
      </div>
    </section>
  );
};

export default Skills;