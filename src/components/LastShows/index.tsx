import ImageSlider from '../ImageSlider';
import './style.css';
import Catedral from '/public/assets/catedral.jpeg';
import FestaJunina from '/public/assets/festa-junina.jpeg';
import FicaFatec from '/public/assets/fica-fatec.jpeg';
const LastShow = () => {
  const images = [
    {
      image: Catedral,
      description: 'Show Catedral - 2023',
    },
    {
      image: FestaJunina,
      description: 'Show Festa Junina de Votorantim - 2023',
    },
    {
      image: FicaFatec,
      description: 'Fica Fatec - 2023',
    },
  ];
  return (
    <section className='container last-shows'>
      <h2 className="sec-title">trabalhos recentes</h2>
      <ImageSlider slides={images} />
    </section>
  )
}

export default LastShow;