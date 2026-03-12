import { useEffect } from 'react';
import './styles.css';
import './animations.css';
import logoImage from "../assets/logoImage.png";
import FounderImage from "../assets/fundadora.jpeg";

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
          <img src={logoImage} alt="ZÊNITHA Co." style={{ height: '130px' }} />
        </a>
        <ul className="nav-links">
          <li><a href="#dobra2">Quem Somos</a></li>
          <li><a href="#dobra3">É Pra Você?</a></li>
          <li><a href="#dobra6">Processo</a></li>
          <li><a href="#dobra7">A Fundadora</a></li>
          <li><a href="#dobra8">Feedbacks</a></li>
        </ul>
        <button className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="mobile-menu">
        <button className="close-menu" aria-label="Fechar">×</button>
        <a href="#dobra2">Quem Somos</a>
        <a href="#dobra3">É Pra Você?</a>
        <a href="#dobra6">Processo</a>
        <a href="#dobra7">A Fundadora</a>
        <a href="#dobra8">Feedbacks</a>
      </div>

      <section id="hero">
        <div className="hero-grid"></div>
        <div className="hero-orb"></div>
        <div className="hero-eyebrow">Tráfego Pago Estratégico</div>
        <h1 className="hero-headline">
          O mundo é grande demais
          pra você falar só com
          as <em>mesmas paredes.</em>
        </h1>
        <p className="hero-sub">
          Na ZÊNITHA, usamos o tráfego pago para amplificar o que você construiu, garantindo que você seja vista, percebida e inesquecível.
        </p>
        <div className="hero-cta">
          <a href="#dobra9" className="btn-primary">RESERVAR LUGAR NO ZÊNITE</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5</span>
            <span className="stat-label">Países Atendidos</span>
          </div>
          <div className="stat">
            <span className="stat-number">7 díg.</span>
            <span className="stat-label">Gerados em Anúncios</span>
          </div>
          <div className="stat">
            <span className="stat-number">+40</span>
            <span className="stat-label">Nichos Atendidos</span>
          </div>
          <div className="stat">
            <span className="stat-number">4 anos</span>
            <span className="stat-label">No Mercado</span>
          </div>
        </div>
      </section>

      <section id="dobra2">
        <div className="inner">
          <div className="section-label anim d1">Nosso Princípio</div>
          <h2 className="d2-headline anim d2">
            O tráfego pago acelera a <em>verdade</em> do seu negócio.
          </h2>
          <div className="d2-body anim d3">
            <p>
              Por aqui partimos de um princípio inegociável: o tráfego é uma alavanca e nunca um milagre. Se a base é fraca, os anúncios apenas aceleram o desgaste.
            </p>
            <p>
              No mercado atual, crescer não é um jogo de quem grita mais alto ou de fórmulas de 2020.<br/>
              <strong>Crescer exige ocupar o espaço certo, com a mensagem certa, para as pessoas certas.</strong>
            </p>
          </div>
        </div>
      </section>

      <section id="dobra3">
        <div className="inner">
          <div className="section-label">Fit Estratégico</div>
          <div className="d3-grid">
            <div className="fit-card yes anim-left d1">
              <h3 className="fit-title">✓ Você é do nosso universo se:</h3>
              <ul className="fit-list">
                <li>Já vende e tem validação mínima</li>
                <li>Entende que crescimento exige estrutura</li>
                <li>Está aberta a aplicar, analisar e ajustar</li>
                <li>Valoriza a construção de marca acima de hacks passageiros</li>
                <li>E-commerces, marcas digitais e infoprodutoras consolidadas</li>
              </ul>
            </div>
            <div className="fit-card no anim-right d1">
              <h3 className="fit-title">✗ Você não está pronta se:</h3>
              <ul className="fit-list">
                <li>Busca resultados rápidos para salvar o faturamento</li>
                <li>Acredita em fórmulas mágicas ou deseja copiar a estratégia da concorrência</li>
                <li>Não está disposta a ajustar os processos que sustentam o crescimento</li>
                <li>Procura uma agência de volume para apenas "rodar anúncios" sem intenção</li>
                <li>Negócio ainda sem validação ou produto definido</li>
              </ul>
            </div>
          </div>
          <div className="d3-cta anim d2">
            <a href="#dobra9" className="btn-ghost">Entrar na órbita da Zênitha</a>
          </div>
        </div>
      </section>

      <section id="dobra4">
        <div className="manifesto">
          <div className="manifesto-tag">Cultura Zênitha</div>
          <blockquote className="manifesto-quote">
          A gente não constrói crescimento <br/> <em> atropelando o próprio negócio.</em>
          </blockquote>
          <p className="manifesto-body">
            Somos o oposto do improviso, das promessas vazias e do marketing barulhento que só busca o resultado imediato. Na ZÊNITHA, atuamos com método, leitura de contexto e visão de longo prazo. Para nós, o topo nunca será sorte e sim (muita) <strong>construção.</strong>
          </p>
          <div className="manifesto-cta">
            <a className="btn-dark">Aplicar para uma vaga</a>
          </div>
        </div>
      </section>

      <section id="dobra5">
        <div className="aviso">
          <div className="aviso-icon">⚠</div>
          <div>
            <strong>A aplicação não é uma garantia de abertura de projeto.</strong>
            <p>
              Escolhemos criteriosamente as marcas que acompanhamos e nosso processo de seleção serve para proteger o seu investimento e a integridade da nossa entrega.
            </p>
          </div>
        </div>
      </section>

      <section id="dobra6">
        <div className="inner">
          <div className="section-label anim d1">Caso sua aplicação seja aprovada</div>
          <h2 className="d6-headline anim d2">Como caminhamos juntas?</h2>
          <div className="steps">
            <div className="step anim-scale d1">
              <div className="step-num">01</div>
              <h3 className="step-title">Onboarding</h3>
              <p className="step-text">
                O primeiro passo é a nossa call de onboarding. É aqui que entramos no universo da sua marca para entender não só os seus números, mas a alma do seu negócio e onde exatamente você quer chegar.
              </p>
            </div>
            <div className="step anim-scale d2">
              <div className="step-num">02</div>
              <h3 className="step-title">ESTRATÉGIA</h3>
              <p className="step-text">
                O próximo passo é onde desenhamos a estratégia. Criamos um plano que respeita o que você já construiu, mas que abre caminho para o que ainda está por vir.
              </p>
            </div>
            <div className="step anim-scale d3">
              <div className="step-num">03</div>
              <h3 className="step-title">Campanhas</h3>
              <p className="step-text">
                Iniciamos as campanhas e usamos o tráfego para garantir que a sua mensagem finalmente pare de falar para as paredes e encontre as pessoas que precisam te conhecer.
              </p>
            </div>
            <div className="step anim-scale d4">
              <div className="step-num">04</div>
              <h3 className="step-title">Otimização Contínua</h3>
              <p className="step-text">
                A partir daí, ajustamos e otimizamos cada detalhe diariamente. O foco é garantir que o crescimento seja constante e que sua marca ocupe com segurança o lugar de destaque que ela merece.
              </p>
            </div>
          </div>
          <div className="d6-cta anim d5">
            <a href="#dobra9" className="btn-primary">Quero aplicar para uma vaga</a>
          </div>
        </div>
      </section>

      <section id="dobra7">
        <div className="inner">
          <div className="d7-grid">
            <div className="d7-photo anim-left d1">
              <img src={FounderImage} alt="Fundador" style={{ filter: 'brightness(0.8)' }} />
            </div>
            <div className="anim-right d1">
              <div className="f-label">POR TRÁS DA ZÊNITHA</div>
              <h2 className="f-name">Duda <em>Reck</em></h2>
              <p className="f-role">FUNDADORA E ESTRATEGISTA  ZÊNITHA Co.</p>
              <p className="f-intro">
                Eu já estive exatamente onde você está hoje.
              </p>
              <div className="f-bio">
                <p>
                  Em 2018, antes de me tornar gestora, eu estava do outro lado: construindo minha própria marca e sentindo na pele o desafio de ter um negócio sólido, mas que o mundo ainda não conhecia. Foi ali que entendi a importância do tráfego pago.
                </p>
                <p>
                  Em 4 anos gerenciei projetos em <strong>5 países</strong>, atendi mais de <strong>40 nichos</strong> e gerei <strong>múltiplos sete dígitos</strong> em anúncios para negócios físicos e digitais.
                </p> 
                <p>
                  Lidero a ZÊNITHA com um único objetivo: entregar a estratégia e a direção que tiram marcas sólidas do mudo e as colocam no topo.
                </p>
              </div>
              <div className="f-values">
                <span className="vtag">Integridade</span>
                <span className="vtag">Critério</span>
                <span className="vtag">Onipresença</span>
                <span className="vtag">Autenticidade</span>
                <span className="vtag">Responsabilidade</span>
                <span className="vtag">Assinatura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dobra8">
        <div className="inner">
          <div className="section-label anim-fade d1">Resultados</div>
          <h2 className="d8-headline anim-fade d2">O que nossas clientes dizem</h2>
        </div>
        <div className="track-wrap">
          <div className="track">
            <div className="fcard">
              <div className="fcard-stars">★★★★★</div>
              <p className="fcard-text">
                "A ZÊNITHA transformou completamente minha presença no mercado. Agora tenho uma marca que realmente comunica quem sou."
              </p>
              <div className="fcard-author">MARIA COSTA</div>
              <div className="fcard-niche">Consultora Executiva</div>
            </div>
            <div className="fcard">
              <div className="fcard-stars">★★★★★</div>
              <p className="fcard-text">
                "Profissionalismo e estratégia de alto nível. O processo foi colaborativo e o resultado superou todas as expectativas."
              </p>
              <div className="fcard-author">JOÃO SANTOS</div>
              <div className="fcard-niche">CEO · TechCorp</div>
            </div>
            <div className="fcard">
              <div className="fcard-stars">★★★★★</div>
              <p className="fcard-text">
                "Finalmente tenho uma identidade que reflete a essência do meu trabalho. Meus clientes notaram a diferença imediatamente."
              </p>
              <div className="fcard-author">ANA OLIVEIRA</div>
              <div className="fcard-niche">Arquiteta</div>
            </div>
            <div className="fcard">
              <div className="fcard-stars">★★★★★</div>
              <p className="fcard-text">
                "A ZÊNITHA transformou completamente minha presença no mercado. Agora tenho uma marca que realmente comunica quem sou."
              </p>
              <div className="fcard-author">MARIA COSTA</div>
              <div className="fcard-niche">Consultora Executiva</div>
            </div>
            <div className="fcard">
              <div className="fcard-stars">★★★★★</div>
              <p className="fcard-text">
                "Profissionalismo e estratégia de alto nível. O processo foi colaborativo e o resultado superou todas as expectativas."
              </p>
              <div className="fcard-author">JOÃO SANTOS</div>
              <div className="fcard-niche">CEO · TechCorp</div>
            </div>
            <div className="fcard">
              <div className="fcard-stars">★★★★★</div>
              <p className="fcard-text">
                "Finalmente tenho uma identidade que reflete a essência do meu trabalho. Meus clientes notaram a diferença imediatamente."
              </p>
              <div className="fcard-author">ANA OLIVEIRA</div>
              <div className="fcard-niche">Arquiteta</div>
            </div>
          </div>
        </div>
      </section>

      <section id="dobra9">
        <div className="cta-orb"></div>
        <div className="cta-label">Próximo Passo</div>
        <h2 className="cta-headline">
          A sua marca <em>no zênite.</em>
        </h2>
        <p className="cta-sub">Aceitamos apenas clientes com fit estratégico.</p>
        <div className="cta-btn">
          <a href="mailto:contato@zenitha.co" className="btn-primary">TIRAR MINHA MARCA DO MUDO</a>
        </div>
      </section>

      <footer>
        <a href="#hero" className="footer-logo">
          <img src={logoImage} alt="ZÊNITHA Co." style={{ height: '85px' }} />
        </a>
        <div className="footer-links">
          <a href="#dobra2">Quem somos</a>
          <a href="#dobra3">É pra você?</a>
          <a href="#dobra6">Processo</a>
          <a href="#dobra7">A Fundadora</a>
          <a href="#dobra8">Feedbacks</a>
        </div>
        <a href="mailto:contato@zenitha.co" className="footer-email">contato@zenitha.co</a>
        <div className="footer-copy">© 2025 ZÊNITHA Co. Todos os direitos reservados.</div>
      </footer>
    </>
  );
}

export default App;
