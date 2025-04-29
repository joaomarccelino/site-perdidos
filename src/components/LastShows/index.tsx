import ImageSlider from '../ImageSlider';
import './style.css';
import Macacas from '/public/assets/MACACAS.jpeg';
import FestivalShow from '/public/assets/fest-osnpp.jpg';
import FestivalShow2 from '/public/assets/fest-osnpp2.jpg';
import Clareia from '/public/assets/clareia1.jpg';
import Clareia2 from '/public/assets/clareia2.jpg';
import FestadaUva from '/public/assets/FESTADAUVA.jpeg';
const LastShow = () => {
  const images = [
    {
      image: FestivalShow,
      description: 'Festival o Show Não Pode Parar - 2024',
    },
    {
      image: FestivalShow2,
      description: 'Festival o Show Não Pode Parar - 2024',
    },
    {
      image: Macacas,
      description: 'Macaca Bikers - 2024',
    },
    {
      image: FestadaUva,
      description: 'Festa da Uva - 2024',
    },
  ];

  const imagesClareia = [
    {
      image: Clareia,
      description: 'Festival Clareia - 2024',
    },
    {
      image: Clareia2,
      description: 'Festival Clareia - 2024',
    }
  ]
  return (
    <section className='container last-shows'>
      <h2 className="sec-title">festival clareia</h2>
      <div className="card-show">
        <p className='show-description'>
          Mais do que um festival, o CLAREIA é um grito coletivo de liberdade e expressão. Idealizado e produzido pela banda PERDIDOS em parceria com o músico e designer Gustavo Machado, o festival nasceu do desejo de iluminar a cena independente e criar um espaço onde a música autoral pudesse ser celebrada com verdade, intensidade e afeto. As duas primeiras edições reuniram bandas parceiras, artistas da região e um público que acredita no poder transformador da arte. Tudo de forma totalmente independente — na raça, na união e no amor à música e à arte. O CLAREIA é resistência, é celebração, é encontro. 
        </p>
        <ImageSlider slides={imagesClareia} />
      </div>
      <h2 className="sec-title">trabalhos recentes</h2>
      <ImageSlider slides={images} />
    </section>
  )
}

export default LastShow;