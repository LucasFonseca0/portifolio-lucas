import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "name": "LUCAS FONSECA",
          "role": "Fullstack developer",
          "intro": "Hello, I'm Lucas Fonseca. I create responsive <1>websites</1> and performant <1>servers</1>",
          "about_me": "About me",
          "about_me_text": "I'm a <1>Fullstack developer</1> with experience in <1>NextJs</1> on the frontend and <1>NestJs</1> as well as <1>.NET</1> on the backend. I use Tailwind CSS to ensure elegant interfaces and Docker for consistent environments.<br /><br />My experience covers <1>SQL</1> and <1>NoSQL</1> databases, using ORMs like Mongoose and Prisma. I'm proficient in <3>Git</3> and GitHub for collaborative version control.",
          "projects": "Projects",
          "in_development": "In Development",
          "project_link": "Project Link",
          "skills": "Skills",
          "what_people_think": "What people think about me?",
         "hotelHopper_title": "HotelHopper",
          "hotelHopper_description": "Hotel Hopper is a full-stack application that allows users to browse hotels, make reservations, and manage their orders. Auth system use JWT token.",
          "authSystem_title": "Fully AuthSystem with RefreshJWTtoken",
          "authSystem_description": "AuthSystem-RefreshJWTtoken-GoogleAuth-EmailVerification is a fullstack project that provides a robust authentication system. The backend is built with NestJS and the frontend with Next.js. The system includes JWT authentication with refresh tokens, authentication via Google, and email verification.",
          "inventoryApp_title": "Inventory management app",
          "inventoryApp_description": "This is the Inventory management app. The aim of this app is to provide an inventory manager that anyone can use with ease. It is especially geared towards small businesses.",
          "dotNetLibrary_title": "DotNetLibrary RestfulAPI",
          "dotNetLibrary_description": "WebAPI8 is a .NET web application that provides RESTful APIs for managing authors and books. It allows users to perform CRUD operations on authors and books, as well as retrieve a list of authors and books.",
          "consoleJob_title": "Console.job",
          "consoleJob_description": "Console.job is a comprehensive platform where individuals can hire freelancers and recruit people for jobs. It aims to connect employers with talented freelancers and job seekers, providing tools for job postings, application management, and candidate recruitment.",
          "leo_souza": "<0>@Leo Souza</0> - Frontend developer",
          "review_leo": "<0>Precise</0>, <0>analytical</0>, <0>proactive</0>. These are the three steps of Lucas's work methodology. He uses available resources and those he doesn't have to develop solutions and never leaves any project hanging. Efficient, intelligent, and collaborative, this is the professional Lucas is.",
          "mozart_soares": "<0>@Mozart Soares</0> - Fullstack developer",
          "review_mozart": "Lucas is a very <0>hardworking</0> and <0>talented</0> developer. He navigates through challenges, quickly learns new technologies, and adapts to new teams, stacks, and projects. He is an excellent addition to any team and has proven his skills in diverse projects using various languages and working in all areas (front-end, back-end, and databases). I am confident that his profile suits perfectly any software engineer opportunities that may arise.",
          "calvin_soares": "<0>@Calvin Soares</0> - Fullstack developer",
          "review_calvin": "Lucas is a very <0>hardworking</0> person, always creating programming content, always helping in any way he can. He is a good person and an even better professional.",
          "awards": "Awards",
          "award_1": "2023 – <span>Gold medal</span> in the regional chess tournament of northern Portugal. 🏆",
          "award_2": "2023 – <span>Gold medal</span> in the district chess tournament of Viana do Castelo, Portugal. 🏆",
          "award_3": "2019 – <span>Bronze medal</span> in OBMEP (Brazilian Mathematics Olympiad). 📊",
          "award_4": "2019 - <span>Bronze medal</span> in OBA (Brazilian Astronomy Olympiad). 🚀",
          "award_5": "2017 - <span>Bronze medal</span> in OBMEP (Brazilian Mathematics Olympiad). 📊"
        },
      },
      pt: {
        translation: {
          "name": "LUCAS FONSECA",
          "role": "Desenvolvedor Fullstack",
          "author": "Desconhecido",
          "about_me": "Sobre mim",
          "about_me_text": "Sou um desenvolvedor <1>Fullstack</1> com experiência em <1>NextJs</1> no frontend e <1>NestJs</1> e <1>.NET</1> no backend. Utilizo Tailwind CSS para garantir interfaces elegantes e Docker para ambientes consistentes.<br /><br />Minha experiência abrange bancos de dados <1>SQL</1> e <1>NoSQL</1>, utilizando ORMs como Mongoose e Prisma. Sou proficiente em <3>Git</3> e GitHub para controle de versão colaborativo.",
          "projects": "Projetos",
          "in_development": "Em Desenvolvimento",
          "project_link": "Link do Projeto",
          "skills": "Habilidades",
          "what_people_think": "O que as pessoas pensam sobre mim?",
           "hotelHopper_title": "HotelHopper",
          "hotelHopper_description": "Hotel Hopper é uma aplicação full-stack que permite aos usuários navegar por hotéis, fazer reservas e gerenciar seus pedidos. O sistema de autenticação usa token JWT.",
          "authSystem_title": "Sistema de Autenticação Completo com Refresh JWT Token",
          "authSystem_description": "AuthSystem-RefreshJWTtoken-GoogleAuth-EmailVerification é um projeto fullstack que fornece um sistema de autenticação robusto. O backend é construído com NestJS e o frontend com Next.js. O sistema inclui autenticação JWT com tokens de atualização, autenticação via Google e verificação de email.",
          "inventoryApp_title": "Aplicativo de Gestão de Inventário",
          "inventoryApp_description": "Este é o aplicativo de gestão de inventário. O objetivo deste aplicativo é fornecer um gerenciador de inventário que qualquer pessoa possa usar com facilidade. É especialmente voltado para pequenas empresas.",
          "dotNetLibrary_title": "DotNetLibrary RestfulAPI",
          "dotNetLibrary_description": "WebAPI8 é uma aplicação web .NET que fornece APIs RESTful para gerenciar autores e livros. Permite aos usuários realizar operações CRUD em autores e livros, além de recuperar uma lista de autores e livros.",
          "consoleJob_title": "Console.job",
          "consoleJob_description": "Console.job é uma plataforma abrangente onde indivíduos podem contratar freelancers e recrutar pessoas para empregos. Visa conectar empregadores com freelancers talentosos e candidatos a emprego, fornecendo ferramentas para anúncios de emprego, gerenciamento de candidaturas e recrutamento de candidatos.",
          "leo_souza": "<0>@Leo Souza</0> - Desenvolvedor Frontend",
          "review_leo": "<0>Preciso</0>, <0>analítico</0>, <0>proativo</0>. Esses são os três passos da metodologia de trabalho do Lucas. Ele usa os recursos disponíveis e os que não tem para desenvolver soluções e nunca deixa nenhum projeto pendente. Eficiente, inteligente e colaborativo, esse é o profissional que Lucas é.",
          "mozart_soares": "<0>@Mozart Soares</0> - Desenvolvedor Fullstack",
          "review_mozart": "Lucas é um desenvolvedor muito <0>trabalhador</0> e <0>talentoso</0>. Ele trabalha superando qualquer desafio e é capaz de aprender rapidamente novas tecnologias e se adaptar a novas equipes, stacks e projetos. Ele é uma excelente adição a qualquer equipe e provou suas habilidades em projetos diversos, usando várias linguagens e trabalhando em todas as áreas (front-end, back-end e bancos de dados). Estou confiante de que seu perfil se encaixa perfeitamente em qualquer oportunidade de engenheiro de software que possa surgir.",
          "calvin_soares": "<0>@Calvin Soares</0> - Desenvolvedor Fullstack",
          "review_calvin": "Lucas é uma pessoa muito <0>esforçada</0>, sempre criando conteúdo de programação, sempre ajudando da forma que pode. É uma boa pessoa e um profissional melhor ainda.",
          "awards": "Prêmios",
          "award_1": "2023 – <span>Medalha de ouro</span> no torneio regional de xadrez do norte de Portugal. 🏆",
          "award_2": "2023 – <span>Medalha de ouro</span> no torneio distrital de xadrez de Viana do Castelo, Portugal. 🏆",
          "award_3": "2019 – <span>Medalha de bronze</span> na OBMEP (Olimpíada Brasileira de Matemática). 📊",
          "award_4": "2019 - <span>Medalha de bronze</span> na OBA (Olimpíada Brasileira de Astronomia). 🚀",
          "award_5": "2017 - <span>Medalha de bronze</span> na OBMEP (Olimpíada Brasileira de Matemática). 📊"
          
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
