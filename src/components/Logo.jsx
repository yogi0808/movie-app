const Logo = ({ xl = false }) => {
  if (xl) {
    return <img src="/tmdb-logo-big.svg" />
  } else {
    return <img src="/tmdb-logo-small.svg" />
  }
}

export default Logo
