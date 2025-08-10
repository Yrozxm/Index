import ParticlesBackground from "./ParticlesBackground.tsx";
import "./App.css";

export default function App() {
  return (
    <>
      <ParticlesBackground />

      <main className="wrap" role="main">
        <header className="header" aria-label="Perfil de yrozxm">
          <figure className="avatar" aria-hidden="true">
            <img src="/avatar.gif" alt="Avatar de yrozxm" />
          </figure>
          <div>
            <h1>Heyo, I'm yrozxm!~</h1>
            <p className="subtitle">Welcome to my website, &gt;u&lt;!</p>
            <div>
              <a href="https://github.com/Yrozxm" target="_blank" rel="noopener noreferrer">
                <img
                  src="/social.png"
                  width="32"
                  height="32"
                  alt="GitHub"
                />
              </a>
            </div>
            <br />
            <div>
              <img
                src="https://img.shields.io/badge/Status-Online-brightgreen?style=flat-square"
                alt="Status: Online"
              />
            </div>
          </div>
        </header>

        <div className="columns">
          <section className="section" aria-labelledby="about">
            <h2 id="about">About Me</h2>
            <p>
              Welcome! I Love <strong>programming</strong>-it's my hobby. I'll never add anything here again.
            </p>
            <p>
              <strong>My current timezone:</strong> Portugal Time (PT)
            </p>
            <p>
              <strong>Born in:</strong> Portugal{" "}
              <span className="flag" role="img" aria-label="Portugal flag">
                🇵🇹
              </span>
            </p>

            <h2>Interests</h2>
            <ul className="list">
              <li>Linux/Windows</li>
              <li>Programming</li>
              <li>Old-Style</li>
              <li>Retro</li>
              <li>Furry Porn</li>
              <li>Books</li>
            </ul>
          </section>

          <aside className="section" aria-labelledby="contacts">
            <h2 id="contacts">Contacts</h2>
            <ul className="list contacts">
              <li>
                Discord: <strong>pawsbny_</strong>
              </li>
              <li>
                E-Mail: <strong>yrozxm [at] Ni [dot] com</strong>
              </li>
            </ul>

            <h2>Friends!</h2>
            <div className="friends">
              <p>I don't have any friends yet.</p>
            </div>
          </aside>

          <section className="section" style={{ gridColumn: "1 / -1" }}>
            <h2>notes Random </h2>
            <ul className="list">
              <li>
                A cocaína é produzida a partir de folhas de coca, e geralmente é um pó branco, mas com outras formas de produção pode-se chegar à uma pedra (crack). Normalmente, os traficantes colocam outros compostos juntos ao pó branco (como talco, areia fina, etc) para "render" mais. Quando introduzida direto na veia, os efeitos são imediatos.
                Os efeitos da cocaína quando cheirada demoram de 1 a 2 minutos para começarem, e se prolongam por 30-40 minutos. Se for introduzida na veia ou fumada, os efeitos aparecem instantaneamente, mas duram pouco mais de 10 minutos, após isso vem a depressão.

                Lista de efeitos:

                Sensação de estar mais forte, inteligente, enérgico, ativo
                falta de apetite
                ansiedade
                sensação de estar sendo perseguido/observado
                agressividade
                desejo sexual
                impotência sexual
                aceleração dos batimentos cardíacos
                pupilas dilatadas⠀
              </li>
              <hr></hr>
              <li>opinas opinas e nao pinas é nada</li>
              <hr></hr>
              <li>              
                eu e tu...😒
                na cama...
                no escuro...🌃
                tu a chupares-me...😩
                e a fazeres barulho... 😴
                quando chegas perto do meu ouvido...🏾👂
                e me deixas maluco...😅
                te bato...🏼😅
                te insulto...🙊
                então acendo a luz...💡
                vejo sangue nos meus lençóis...
                finalmente te apanhei...😂😂
                ...MOSQUITO DO CRL
              </li>
              <hr></hr>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
