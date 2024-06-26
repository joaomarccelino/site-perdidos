import { useState } from 'react';
import Logo from '../../assets/logo-perdidos.svg';
import './style.css';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }
  return (
    <header className='container header'>
      <img src={Logo} alt="Perdidos" className="header-logo" />
      <nav className='nav'>
        <ul className='nav-menu'>
          <li>
            <a className='nav-menu-item' href="#about">Sobre</a>
          </li>
          <li>
            <a className='nav-menu-item' href="#releases">Lançamentos</a>
          </li>
          <li>
            <a className='midia-kit-btn' href="/src/assets/midia-kit.pdf" download="midia-kit.pdf">Mídia Kit</a>
          </li>
          <li>
            <a className='nav-menu-item' href='#contact'>Contato</a>
          </li>
        </ul>
        <button className='icon-btn mobile-btn' onClick={handleShowMobileMenu}>
          {
            showMobileMenu ?
              <IoClose color="var(--g2)" size={30} />
              :
              <IoMenuSharp color="var(--g2)" size={30} />
          }
        </button>
        {
          showMobileMenu
          &&
          <ul className='mobile-nav-menu'>
            <li>
              <a className='nav-menu-item' href="#about">Sobre</a>
            </li>
            <li>
              <a className='nav-menu-item' href="#releases">Lançamentos</a>
            </li>
            <li>
              <a className='midia-kit-btn' href="/src/assets/midia-kit.pdf" download="midia-kit.pdf">Mídia Kit</a>
            </li>
            <li>
              <a className='nav-menu-item' href='#contact'>Contato</a>
            </li>
          </ul>
        }

      </nav>
    </header>
  )
}

export default Header;