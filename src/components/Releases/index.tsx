import SpotifyRelease from '../SpotifyRelease';
import './style.css';

const Releases = () => {

  const spotReleases = [
    {
      name: "EP Azul",
      link: "https://open.spotify.com/intl-pt/album/5qW2a7KYrGUQDziRtBF4fn?si=CcyOvaPUQhqJSh7wbXQi6Q"
    },
    {
      name: "EP - Todo Tempo, o Tempo Todo",
      link: "https://open.spotify.com/intl-pt/album/3L6V1Can3ThZN2Djkc7A9y?si=4gt5QUvWQS6sr5txT5Ixdw"
    },
    {
      name: "Carlinhos - Ijexá",
      link: "https://open.spotify.com/intl-pt/album/7ippEckqHdgFGHMONRbUOh?si=NcYFZpzHQlu2lkENI8i9lw"
    }
  ]

  return (
    <section className='releases container' id='releases'>
      <h2 className='sec-title'>últimos lançamentos</h2>
      <div className="releases-area">
        {
          spotReleases.map(r => <SpotifyRelease playlistLink={r.link} />)
        }
      </div>
    </section>
  )
}

export default Releases;