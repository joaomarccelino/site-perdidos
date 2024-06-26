import './style.css';
import Whatsapp from '../../assets/whatsapp.svg';
import Instagram from '../../assets/instagram.svg';
import Gmail from '../../assets/gmail.svg';
import Facebook from '../../assets/facebook.svg';
const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <h2 className="sec-title">contato</h2>
      <div className="social-icons">
        <a href="/"><img src={Whatsapp} alt="whatsapp" /></a>
        <a href="/"><img src={Instagram} alt="Instagram" /></a>
        <a href="/"><img src={Gmail} alt="Gmail" /></a>
        <a href="/"><img src={Facebook} alt="Facebook" /></a>
      </div>
      <p>© 2024 Perdidos. Todos direitos reservados.</p>
    </footer>
  )
}

export default Footer;