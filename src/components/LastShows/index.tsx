import ImageSlider from '../ImageSlider';
import './style.css';
import Macacas from '/public/assets/MACACAS.jpeg';
import FestadaUva from '/public/assets/FESTADAUVA.jpeg';
const LastShow = () => {
  const images = [
    {
      image: Macacas,
      description: 'Macaca Bikers - 2024',
    },
    {
      image: FestadaUva,
      description: 'Festa da Uva - 2024',
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