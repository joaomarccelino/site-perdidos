type SpotifyReleaseProps = {
  playlistLink: string;
}

const SpotifyRelease = ({playlistLink}: SpotifyReleaseProps) => {
  const playlistURL = playlistLink.replace('https://open.spotify.com/intl-pt/album/', 'https://open.spotify.com/embed/album/')
  console.log(playlistURL)
  return (
    <iframe style={{ borderRadius: '12px' }} 
    src={`${playlistURL}?utm_source=generator&theme=0`}
    allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy" width="100%" height={352} 
    frameBorder={0} />
  )
}

export default SpotifyRelease;