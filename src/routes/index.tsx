import { createFileRoute } from "@tanstack/react-router";


const BASE = "https://isacarrd.vercel.app/assets";
const TITLE = "Isabele Cardoso | Desenvolvedora Front-end";
const DESC =
  "Portfólio de Isabele Cardoso, desenvolvedora front-end especializada em HTML, CSS, JavaScript e React. Veja projetos e entre em contato.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "Isabele Cardoso, isacarrd, desenvolvedora front-end, portfólio, React, JavaScript, HTML, CSS",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Isabele Cardoso",
          alternateName: ["Bele", "Isa", "isacarrd"],
          jobTitle: "Desenvolvedora Front-end",
          email: "mailto:isacarrddev@gmail.com",
          sameAs: [
            "https://github.com/isacarrd",
            "https://www.linkedin.com/in/isabele-cardoso-arag%C3%A3o-isacarrd/",
          ],
          knowsAbout: ["HTML5", "CSS3", "JavaScript", "React", "Git", "Figma"],
        }),
      },
    ],
  }),
  component: Index,
});

const skills = [
  {skill: "Figma", imgSkill: '/public/figmaOrange.svg'},
  {skill: "HTML5", imgSkill: '/public/html5Orange.svg'},
  {skill: "CSS3", imgSkill: '/public/css3Orange.svg'},
  {skill: "Git", imgSkill: '/public/gitOrange.svg'},
  {skill:"JavaScript", imgSkill: '/public/javascriptOrange.svg'},
  {skill: "ReactJS", imgSkill: '/public/reactnativeOrange.svg'},
];
const projects = [
  {
    name: "heartOfPoets",
    imgProj: "/public/heartOfpoets.png",
    urlProj: "https://heartofpoets.vercel.app/",
    urlRepo: "https://github.com/isacarrd/heartOfPoets",
  },
  {
    name: "Mercadinho Aragão",
    imgProj: "/public/mercadinhoAragao.png",
    urlProj: "https://mercadinho-aragao.vercel.app/",
    urlRepo: "https://github.com/isacarrd/mercadinhoAragao",
  },
  {
    name: "Redragon K530",
    imgProj: "/public/redDragon.png",
    urlProj: "https://redragon-draconic.vercel.app/",
    urlRepo: "https://github.com/isacarrd/redragon-draconic",
  },
  {
    name: "ViaCep",
    imgProj: "/public/viacep.png",
    urlProj: "https://viacep-tawny.vercel.app/",
    urlRepo: "https://github.com/isacarrd/viaCep",
  },
  {
    name: "Gerenciador de Produtos",
    imgProj: "/public/gerenciadorProdutos.png",
    urlProj: "https://gerenciador-fase1.vercel.app/",
    urlRepo: "https://github.com/isacarrd/gereciadorTeste",
  },
];
const CV = `${BASE}/IsabeleCardoso-DgxpzYKv.pdf`;

function Index() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="nav">
        <a href="#inicio" className="nav-logo flex flex-row gap-1 items-center" aria-label="Início">
          <img src="/public/logo-16.png" alt="Logo" className="w-fit h-fit" />
          Front-End
        </a>
        <nav aria-label="Navegação principal">
          <ul>
            <li>
              <a href="#sobre" className="font-bold">
                Sobre
              </a>
            </li>
            <li>
              <a href="#habilidades" className="font-bold">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projetos" className="font-bold">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato" className="font-bold">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="conteudo">
        <section id="inicio" className="hero container">
          <div>
            <p className="hero-hello">Olá, eu sou</p>
            <h1 className="hero-name">Isabele Cardoso</h1>
            <p className="hero-role">Desenvolvedora Front-end</p>
            <div className="hero-actions">
              <a className="btn" href={CV} download>
                Baixar CV
              </a>
              <a className="btn btn-ghost" href="#contato">
                Fale comigo
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="container section" aria-labelledby="sobre-t">
          <h2 id="sobre-t" className="title">
            Quem sou eu?
          </h2>
          <p className="lead">
            Sou Isabele Cardoso, desenvolvedora web especializada em <strong>front-end</strong>.
            Tenho um ano de experiência prática no desenvolvimento de aplicações web, com ênfase em
            projetos pessoais que aplicam princípios de usabilidade e organização de código.
          </p>
          <ul className="social">
            <li>
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/isabele-cardoso-arag%C3%A3o-isacarrd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/linkedinOrange.svg"
                  className="lg:w-8 lg:h-8 w-6 h-6"
                  alt="Linkedin Icon"
                />
              </a>
            </li>
            <li>
              <a
                aria-label="GitHub"
                href="https://github.com/isacarrd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/public/githubOrange.svg"
                  className="lg:w-8 lg:h-8 w-6 h-6"
                  alt="Github Icon"
                />
              </a>
            </li>
          </ul>
        </section>

        <section id="habilidades" className="container section" aria-labelledby="hab-t">
          <h2 id="hab-t" className="title">
            Habilidades
          </h2>
          <ul className="skills">
            {skills.map((s) => (
              <li key={s.skill} className="skill">
                <img src={s.imgSkill} className="lg:w-8 lg:h-8 w-6 h-6" />
                <span className="text-[#ff4b00]"> {s.skill} </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="projetos" className="container section" aria-labelledby="proj-t">
          <h2 id="proj-t" className="title">
            Projetos
          </h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.name}>
                <article className="project">
                  <h3>{p.name}</h3>
                  <img src={p.imgProj} className="rounded-xl"/>
                  <div className="flex justify-between flex-wrap py-4">
                    <a href={p.urlProj} target="_blank" rel="noopener noreferrer">
                      Ver Projeto
                    </a>
                    <a href={p.urlRepo} target="_blank" rel="noopener noreferrer">
                      Ver no GitHub
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section id="contato" className="container section" aria-labelledby="cont-t">
          <h2 id="cont-t" className="title">
            Entre em contato
          </h2>
          <div className="contact">
            <form
              className="form"
              action="mailto:isacarrddev@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label>
                Nome
                <input name="nome" required autoComplete="name" />
              </label>
              <label>
                E-mail
                <input type="email" name="email" required autoComplete="email" />
              </label>
              <label>
                Assunto
                <input name="assunto" />
              </label>
              <label>
                Mensagem
                <textarea name="mensagem" rows={5} required />
              </label>
              <button className="btn" type="submit">
                Enviar
              </button>
            </form>
            <address className="contact-info">
              <p>
                <span>LinkedIn</span>{" "}
                <a href="https://www.linkedin.com/in/isabele-cardoso-arag%C3%A3o-isacarrd/">
                  Isabele Cardoso
                </a>
              </p>
              <p>
                <span>E-mail</span> <a href="mailto:isacarrddev@gmail.com">isacarrddev@gmail.com</a>
              </p>
              <p>
                <span>GitHub</span> <a href="https://github.com/isacarrd">isacarrd</a>
              </p>
            </address>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © 2026 Isabele Cardoso ·{" "}
          <a href={CV} download>
            Baixar CV
          </a>
        </p>
      </footer>
    </>
  );
}
