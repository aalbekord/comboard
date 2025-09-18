import "./Card.css"

const Card = (props) => {
  return (
    <>
      <div className="container">
        <img src={props.img} alt={`${props.name} logo}`} className="logo"/>
        <div className="textBox">
          <h2>{props.name}</h2>
          <a href={props.website} className="cardButton">View Shop</a>
        </div>
      </div>
    </>
  )
}
export default Card;