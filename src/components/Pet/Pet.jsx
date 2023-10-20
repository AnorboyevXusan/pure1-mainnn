import './style.css'
export default function Pet(props) {
  return (
      <div className="pet">
          <h2>{ props.name}</h2>
          <h2>{ props.animal}</h2>
          <h2>{ props.food}</h2>
      </div>
  )
}
