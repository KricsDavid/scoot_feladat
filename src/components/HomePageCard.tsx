import './css/homepagecard.css'

type HomePageCardProp = {
  title: string,
  logo: string,
  description: string
}

const HomePageCard = (props: HomePageCardProp) => {
    const {title, logo, description} = props
  return (
    <div className='homepage-card'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default HomePageCard