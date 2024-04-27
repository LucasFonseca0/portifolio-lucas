import TranslateAnimation from "@/app/animation/TranslateAnimation.animation";


const Skills = () => {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl md:text-5xl  relative flex justify-center font-extrabold">
        <span className="absolute inset-0 bg-primaryDark h-1/2 -z-10"></span>
        <span className="absolute  right-0 w-[100%]  h-1/2 -z-10 flex justify-center items-center  translate-y-[50%] ">
          <span className="h-1 w-full bg-secondary"></span>
        </span>
       
        <TranslateAnimation.TranslateUp>

        <p  className="bg-white rounded-2xl p-3 text-secondary ">SKILLS</p>
        </TranslateAnimation.TranslateUp>
      </h2>
      <div className="p-4 sm:p-6  md:p-8 w-full flex flex-col gap-4 sm:text-xl md:text-2xl overflow-hidden ">
        <TranslateAnimation.TranslateRight>
          <div>
            <p className="w-[80%]">
              Sou um desenvolvedor full-stack com especialização em Next.js no
              frontend e Nest.js no backend. Utilizo Tailwind CSS para garantir
              interfaces elegantes e Docker para ambientes consistentes. Minha
              experiência abrange bancos de dados SQL e NoSQL, utilizando ORMs
              como Mongoose e Prisma. Sou proficiente em Git e GitHub para
              controle de versão colaborativo.
            </p>
          </div>
        </TranslateAnimation.TranslateRight>
  
          <TranslateAnimation.TranslateLeft>
        <div className="flex flex-row-reverse text-right " >
            <p className="w-[80%]  ">
              Minha capacidade de comunicação é um diferencial, facilitando a
              colaboração eficaz em equipes multidisciplinares. Estou sempre
              atento às últimas novidades tecnológicas e mantenho-me atualizado
              sobre as tendências do setor, garantindo que meu trabalho esteja
              sempre alinhado com as melhores práticas e soluções inovadoras.
            </p>
        </div>
          </TranslateAnimation.TranslateLeft>
      </div>
    </section>
  );
};

export default Skills;
