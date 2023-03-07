import DieType from "./interfaces"


function Die(props: {die: DieType, handleDieClick: (die: DieType) => void}) {
  return (
      <div
        className={!props.die.isClicked ? "die" : "die die-clicked"}
        onClick={() => props.handleDieClick(props.die)}
      >
      {props.die.value}
      </div>
    )
  }
  
  export default Die