import scooters_title_bg from '../assets/scooters_title_bg.jpg'
import scooters_img from '../assets/scooters.jpg'

const Scooters = () => {
  return (
    <div>
      <div className="title" style={{ backgroundImage: `url(${scooters_title_bg})` }}>
        <h1>Scooters</h1>
      </div>
      <section>

      </section>

      <section>
        <h2 style={{ fontSize: 1.5 + "rem" }}>Available scooters</h2>

        <div id="available-scooters">

          {/* Itt jelenjenek meg az API-ból kapott robogók */}

        </div>

        <img id="scooters_img" src={scooters_img} alt="scooters" />
      </section>

    </div>
  )
}

export default Scooters