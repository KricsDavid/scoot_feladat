import Hero from '../components/Hero'
import HomePageCard from '../components/HomePageCard'

import cardLogo1 from '/mobile-screen-button-solid.svg'
import cardLogo2 from '/scooter-svgrepo-com.svg'
import cardLogo3 from '/scooter.svg'

type Card = {
    title: string,
    logo: string,
    description: string
}

const cards: Card[] = [
    {
        title: "Locate with app",
        logo:cardLogo1,
        description:"Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
    },
    {
        title: "Pick your scooter",
        logo:cardLogo2,
        description:"We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
    },
    {
        title:"Enjoy the ride",
        logo:cardLogo3,
        description:"Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you're off! Always lock bikes away from walkways and accessibility ramps."
    }
]

const Home = () => {

  return (
    <div>
        <Hero/>
        <section className='card-holder'>
            <HomePageCard {...cards[0]}/>
            <HomePageCard {...cards[1]}/>
            <HomePageCard {...cards[2]}/>
        </section>
    </div>
  )
}

export default Home