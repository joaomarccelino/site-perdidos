import Header from '../Header';
import './style.css';

const About = () => {
  return (
    <section className='about' id='about'>
      <Header />
      <div className="who-we-are container">
        <div></div>
        <div className="about-text">
          <h2 className='sec-title'>quem somos nós</h2>
          <p className='about-body-text'>Nascida em São Miguel Arcanjo, PERDIDOS mescla sua origem de ritmos brasileiros com elementos do indie rock, incorporando cavaco e guitarra baiana em suas composições Formada por Antonio Estevam (cavaco e guitarra baiana), João Auro (bateria) e João Lucas (baixo e voz), juntos trazem bagagens de festivais até a mistura de referências musicais. O EP de estreia, intitulado de ''Azul'' contempla com quatro faixas que contam experiências de amizades e amores trazendo desde ijexá pop a um baião melancólico, produzindo uma sonoridade única e envolvente. Em seu segundo EP, “Todo Tempo, o Tempo Todo” a banda mergulha fundo explorando temas como relacionamentos, amizades e nos vários significados da palavra “Tempo”.</p>
          <a href="https://wa.me/5515981503380" target="_blank" className='about-btn'>CONTRATE AGORA</a>
        </div>
      </div>
      <div className="last-job container">
        <h2 className='sec-title'>último trabalho</h2>
        <iframe className='last-job-video' width="1160" height="630" src="https://www.youtube.com/embed/uyiDKT_9lEg?si=1io4dGOMjuIn4z5A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
    </section>
  )
}

export default About;