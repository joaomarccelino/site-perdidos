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
      name: "EP - Ao vivo no Solana",
      link: "https://open.spotify.com/intl-pt/album//6sB8MC8J5YOz9k3Az7FFDn?si=ToqQA1xJRFO0Q9yc4o2Ylg"
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