import '../../style/manikandan/style.css'
import hero from '../../assets/hero.svg'
import play from '../../assets/play-btn.svg'

const Hero = () => {
  return (
  <>
  <section className='hero'>
    <div className='hero-wrapper'>
    <div className="hero-container-1">
        <h1 className='hero-heading'>Ghost in the Shell</h1>
        <p className='hero-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <button className='watch-now-btn'><p>Watch Now </p><img src={play} alt="" /></button>
    </div>
    <div className='hero-container-2'>
      <img src={hero} alt="" />
    </div>
    </div>
  </section>
  </>
  )
}

export default Hero