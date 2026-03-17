import { useEffect, useMemo, useState } from 'react';
import './styles.css';
import './animations.css';
import { Instagram } from "lucide-react";
import logoImage from "../assets/logoImage.png";
import FounderImage from "../assets/fundadora.jpeg";
import fogueteImage from "../assets/foguete.jpeg";
import heroBg from "../assets/hero-bg.jpg";
import terraEspaco from "../assets/terraEspaco.jpeg";
import telescopio from "../assets/telescopio.jpg";
import feed1 from "../assets/feed1.jpg";
import feed2 from "../assets/feed2.png";
import feed3 from "../assets/feed3.png";
import feed4 from "../assets/feed4.png";
import feed5 from "../assets/feed5.png";

const feedbackImages = [feed1, feed2, feed3, feed4, feed5];

const CHAR_SETS = {
  number: "0123456789",
  letter: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
};

function AnimatedChar({ finalChar, delay = 0 }) {
  const isNumber = /[0-9]/.test(finalChar);
  const isLetter = /[a-zA-ZÀ-ÿ]/.test(finalChar);

  const [displayChar, setDisplayChar] = useState(finalChar);

  useEffect(() => {
    if (!isNumber && !isLetter) {
      setDisplayChar(finalChar);
      return;
    }

    const chars = isNumber ? CHAR_SETS.number : CHAR_SETS.letter;
    let iterations = 0;
    const maxIterations = isNumber ? 25 : 32;
    let interval;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        if (iterations >= maxIterations) {
          setDisplayChar(finalChar);
          clearInterval(interval);
          return;
        }

        const randomIndex = Math.floor(Math.random() * chars.length);
        setDisplayChar(chars[randomIndex]);
        iterations += 1;
      }, 70);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [finalChar, delay, isNumber, isLetter]);

  return <span className="flip-char">{displayChar}</span>;
}

function AnimatedText({ text }) {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <span className="animated-text">
      {chars.map((char, index) => (
        <AnimatedChar
          key={`${char}-${index}`}
          finalChar={char}
          delay={index * 60}
        />
      ))}
    </span>
  );
}

function App() {
  useEffect(() => {
    // Scroll animation setup
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, observerOptions);

    // Add ready class and observe elements
    document.querySelectorAll('.anim, .anim-left, .anim-right, .anim-scale, .anim-fade').forEach(el => {
      el.classList.add('ready');
      observer.observe(el);
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    const openMenu = () => mobileMenu?.classList.add('open');
    const closeMenuFunc = () => mobileMenu?.classList.remove('open');

    hamburger?.addEventListener('click', openMenu);
    closeMenu?.addEventListener('click', closeMenuFunc);

    return () => {
      hamburger?.removeEventListener('click', openMenu);
      closeMenu?.removeEventListener('click', closeMenuFunc);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav>
        <a href="#hero" className="nav-logo">
          <img src={logoImage} alt="ZÊNITHA Co." style={{ height: '100px' }} />
        </a>
        <ul className="nav-links">
          <li><a href="#dobra2">Nossa tese</a></li>
          <li><a href="#dobra3"><strong>É Pra Você?</strong></a></li>
          <li><a href="#dobra7">A Fundadora</a></li>
          <li><a href="#dobra8"><strong>Feedbacks</strong></a></li>
        </ul>
        <button className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="mobile-menu">
        <button className="close-menu" aria-label="Fechar">×</button>
        <a href="#dobra2">Nossa tese</a>
        <a href="#dobra3">É Pra Você?</a>
        <a href="#dobra7">A Fundadora</a>
        <a href="#dobra8">Feedbacks</a>
      </div>

      <section
        id="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-headline">
            O mundo é <strong>grande</strong>
            <br />
            <strong>demais</strong> pra você falar só
            <br />
            com as <em>mesmas</em> paredes.
          </h1>

          <p className="hero-sub">
            Na ZÊNITHA, não aceitamos que marcas sólidas continuem sendo o{" "}
            <strong>segredo mais bem guardado do digital.</strong> Usamos o tráfego
            pago para amplificar o que você construiu, garantindo que você seja{" "}
            <b>vista, percebida</b> e <b>inesquecível</b>.
          </p>

          <div className="hero-cta">
            <a href="#dobra9" className="btn-primary">
              RESERVAR LUGAR NO ZÊNITE
            </a>
          </div>
        </div>

        <div className="hero-stats-bar">
          <div className="stat-item">
            <AnimatedText text="Clientes em 5 países" />
          </div>
          <div className="stat-item">
            <AnimatedText text="+7 dígitos gerados" />
          </div>
          <div className="stat-item">
            <AnimatedText text="+40 nichos atendidos" />
          </div>
          <div className="stat-item">
            <AnimatedText text="4 anos no mercado" />
          </div>
        </div>
      </section>

      <section id="dobra2">
        <div className="d2-layout">
          <div className="d2-left">
            <div className="d2-title-box anim d2">
              <h2 className="d2-headline">
                O tráfego pago
                <br />
                acelera a <em>verdade</em>
                <br />
                do seu negócio.
              </h2>
            </div>

            <div className="d2-text-box anim d3">
              <p>
                <strong>Por aqui partimos de um princípio inegociável:</strong> o
                tráfego é uma alavanca e nunca um milagre. Se a base é fraca, os
                anúncios apenas aceleram o desgaste. No mercado atual, crescer não é
                um jogo de quem grita mais alto ou de fórmulas de 2020. Crescer exige
                ocupar o espaço certo, com a mensagem certa, para as pessoas certas.
              </p>
            </div>
          </div>

          <div className="d2-image-wrap anim d2">
            <img src={fogueteImage} alt="Foguete decolando" className="d2-image" />
          </div>
        </div>
      </section>

      <section id="dobra3">
        <div className="inner">
          <div className="d3-grid">
            <div className="fit-card yes anim-left d1">
              <h3 className="fit-title">
                VOCÊ <strong>É</strong> DO NOSSO
                <br />
                UNIVERSO SE:
              </h3>

              <ul className="fit-list">
                <li>Já vende e tem validação mínima;</li>
                <li>Entende que crescimento exige estrutura</li>
                <li>Está aberta a aplicar, analisar e ajustar;</li>
                <li>Valoriza a construção de marca acima de hacks passageiros.</li>
              </ul>
            </div>

            <div className="fit-card no anim-right d1">
              <h3 className="fit-title">
                VOCÊ <strong>NÃO</strong> ESTÁ
                <br />
                PRONTA SE:
              </h3>

              <ul className="fit-list">
                <li>Busca resultados rápidos para salvar o faturamento</li>
                <li>
                  Acredita em fórmulas mágicas ou deseja copiar a estratégia da concorrência.
                </li>
                <li>Não está disposta a ajustar os processos que sustentam o crescimento.</li>
                <li>
                  Procura uma agência de volume para apenas "rodar anúncios" sem intenção.
                </li>
              </ul>
            </div>
          </div>

          <div className="d3-cta anim d2">
            <a href="#dobra9" className="btn-d3">ENTRAR NA ÓRBITA DA ZÊNITHA</a>
          </div>
        </div>
      </section>

      <section id="dobra4">
        <div className="manifesto-layout">
          <div className="manifesto-top">
            <blockquote className="manifesto-quote">
              <span className="manifesto-line-1">A gente não constrói crescimento</span>
              <span className="manifesto-line-2">atropelando o próprio negócio.</span>
            </blockquote>
          </div>

          <div className="manifesto-bottom">
            <p className="manifesto-body">
              Somos o <strong>oposto</strong> do improviso, das promessas vazias e do
              marketing barulhento que só busca o resultado imediato. Na ZÊNITHA,
              atuamos com método, leitura de contexto e visão de longo prazo.
              <strong> Para nós, o topo nunca será sorte e sim (muita) construção.</strong>
            </p>

            <div className="manifesto-cta">
              <a href="#dobra9" className="btn-manifesto">APLICAR PARA UMA VAGA →</a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="dobra5"
        style={{ backgroundImage: `url(${terraEspaco})` }}
      >
        <div className="dobra5-overlay"></div>

        <div className="aviso">
          <div className="aviso-icon">!</div>

          <div className="aviso-content">
            <p><strong>A aplicação não é uma garantia de abertura de projeto. </strong>Escolhemos criteriosamente as marcas que acompanhamos e nosso processo
              de seleção serve para proteger o seu investimento e a integridade da
              nossa entrega.
            </p>
          </div>
        </div>
      </section>

      <section id="dobra6">
        <div className="inner">
          <h2 className="d6-headline anim d2">
            Como caminhamos <em>juntas?</em>
          </h2>

          <div className="d6-process anim d3">
            <div className="d6-line"></div>
            <div className="d6-end-dot"></div>

            <div className="d6-col">
              <div className="d6-number">1</div>
              <p className="d6-step-text">
                O primeiro passo é a nossa call de onboarding. É aqui que entramos no
                universo da sua marca para entender não só os seus números, mas a alma
                do seu negócio e onde exatamente você quer chegar.
              </p>
            </div>

            <div className="d6-col">
              <div className="d6-number">2</div>
              <p className="d6-step-text">
                O próximo passo é onde desenhamos a estratégia. Criamos um plano que
                respeita o que você já construiu, mas que abre caminho para o que
                ainda está por vir.
              </p>
            </div>

            <div className="d6-col">
              <div className="d6-number">3</div>
              <p className="d6-step-text">
                Iniciamos as campanhas e usamos o tráfego para garantir que a sua
                mensagem finalmente pare de falar para as paredes e encontre as pessoas
                que precisam te conhecer.
              </p>
            </div>

            <div className="d6-col">
              <div className="d6-number">4</div>
              <p className="d6-step-text">
                A partir daí, ajustamos e otimizamos cada detalhe diariamente. O foco
                é garantir que o crescimento seja constante e que sua marca ocupe com
                segurança o lugar de destaque que ela merece.
              </p>
            </div>
          </div>

          <div className="d6-cta anim d5">
            <a href="#dobra9" className="btn-d6">QUERO APLICAR PARA UMA VAGA</a>
          </div>
        </div>
      </section>

      <section id="dobra7">
        <div className="inner">
          <div className="d7-grid">
            <div className="d7-photo anim-left d1">
              <img src={FounderImage} alt="Duda Reck" />
            </div>

            <div className="d7-content anim-right d1">
              <div className="f-label">— POR TRÁS DA EMPRESA</div>

              <h2 className="f-name">
                Duda <em>Reck</em>
              </h2>

              <p className="f-role">FUNDADORA E ESTRATEGISTA — <strong>ZÊNITHA CO.</strong></p>

              <p className="f-intro">
                Eu já estive exatamente onde você está hoje.
              </p>

              <div className="f-bio">
                <p>
                  Em 2018, antes de me tornar gestora, eu estava do outro lado:
                  construindo minha própria marca e sentindo na pele o desafio de ter
                  um negócio sólido, mas que o mundo ainda não conhecia. Foi ali que
                  entendi a importância do tráfego pago.
                </p>

                <p>
                  Em 4 anos gerenciei projetos em 5 países, atendi mais de 40 nichos
                  e gerei múltiplos sete dígitos em anúncios para negócios físicos e
                  digitais.
                </p>

                <p>
                  Lidero a ZÊNITHA com um único objetivo:
                  <strong>
                    {" "}entregar a estratégia e a direção que tiram marcas sólidas do
                    mudo e as colocam no topo.
                  </strong>
                </p>
              </div>

              <div className="f-values">
                <span className="vtag">ONIPRESENÇA</span>
                <span className="vtag">INTEGRIDADE</span>
                <span className="vtag">CRITÉRIO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dobra8">
        <div className="feedback-marquee">
          <div className="feedback-track">
            {[...feedbackImages, ...feedbackImages].map((image, index) => (
              <div className="feedback-slide" key={index}>
                <img
                  src={image}
                  alt={`Feedback de cliente ${index + 1}`}
                  className="feedback-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dobra9" style={{ backgroundImage: `url(${telescopio})` }}>
        <div className="cta-overlay"></div>
        <div className="cta-orb"></div>

        <div className="cta-label">Próximo Passo</div>

        <h2 className="cta-headline">
          Sua marca <em>no zênite</em>
        </h2>

        <div className="cta-btn">
          <a href="mailto:publicidade.zenitha@gmail.com" className="btn-primary">
            TIRAR MINHA MARCA DO MUDO
          </a>
        </div>
      </section>

      <footer>
        <a href="#hero" className="footer-logo">
          <img src={logoImage} alt="ZÊNITHA Co." style={{ height: '85px' }} />
        </a>
        <div className="footer-links">
          <a href="#dobra2">Nossa tese</a>
          <a href="#dobra3">É pra você?</a>
          <a href="#dobra7">A Fundadora</a>
          <a href="#dobra8">Feedbacks</a>
        </div>
        <a
          href="https://instagram.com/zenithaco"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-email"
        >
          <Instagram size={18} strokeWidth={1.5} />
          <span>Zênitha</span>
        </a>
        <div className="footer-copy">© 2025 ZÊNITHA Co. Todos os direitos reservados.</div>
      </footer>
    </>
  );
}

export default App;
