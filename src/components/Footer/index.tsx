import './style.css';
import Whatsapp from '../../assets/whatsapp.svg';
import Instagram from '../../assets/instagram.svg';
import Youtube from '../../assets/youtube.svg';
import Facebook from '../../assets/facebook.svg';
const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <h2 className="sec-title">contato</h2>
      <div className="social-icons">
        <a href="https://wa.me/5515981503380" target="_blank"><img src={Whatsapp} alt="whatsapp" /></a>
        <a href="https://www.instagram.com/perdidosbanda/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
        <a href="https://www.youtube.com/@perdidosbanda" target="_blank"><img src={Youtube} alt="Youtube" /></a>
        <a href="https://www.facebook.com/perdidosband" target="_blank"><img src={Facebook} alt="Facebook" /></a>
      </div>
      <p>© 2024 Perdidos. Todos direitos reservados.</p>
    </footer>
  )
}

export default Footer;