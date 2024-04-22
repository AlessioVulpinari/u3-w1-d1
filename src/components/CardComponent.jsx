import "./Cardcomponent.css"

const CardComponent = (props) => {
  return (
    <div className='card'>
      <img src={props.src} alt={props.alt} />
      <div>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <a href={props.link}>Link</a>
      </div>
    </div>
  )
}

export default CardComponent
