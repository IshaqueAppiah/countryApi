import { Link } from "react-router-dom"
const Card = (props) => {

  
  return (
    <Link to={`${props.data.name}`}>
    <div className="card">
      <div className="img">
        <img src={props.data.flags.png} alt="" />
      </div>
      <div className="country-data">
        <h3 value={props.data.name}>{props.data.name}</h3>
        <h6><span className="data-weight">Population</span>: {props.data.population}</h6>
        <h6><span className="data-weight">Region</span>: {props.data.region}</h6>
        <h6><span className="data-weight">Capital</span>: {props.data.capital}</h6>
      </div>
    </div>
    </Link>
  )
}

export default Card
