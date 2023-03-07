import { useEffect, useState } from 'react'
import Die from './Die'
import DieType from './interfaces'
import './App.css'

function App() {
  const [dice, setDice] = useState<DieType[]>([])

  useEffect(() => initializeGame, [])

  function initializeGame(): void {
    const dieCount = 10
    let dice: DieType[] = []

    for (let i = 0; i < dieCount; i++) {
      const randomDieValue = Math.floor(Math.random() * 8) + 1
      
      dice.push({
        id: i,
        isClicked: false,
        value: randomDieValue
      })
    }

    setDice(dice)
  }

  function isGameWon(): boolean {
    const firstDie = dice[0]
    
    for (let die of dice) {
      if (!die.isClicked || die.value !== firstDie.value)
        return false
    }
    
    return true
  }

  function randomizeDice(): void {
    setDice(prevDice => prevDice.map(dice => (
      dice.isClicked ?
      dice :
      {
        ...dice,
        value: Math.floor(Math.random() * 8) + 1 
      }
    )))
  }

  function handleDieClick(die: DieType): void {
    setDice(prevDice => prevDice.map(prevDie => {
      if (prevDie.id === die.id)
        return {
          ...die,
          isClicked: !die.isClicked
        }

      return prevDie
    }))
  }  

  return (
    <main className="main">
      <div className="description">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className="dice">
        {dice.map(die => (
          <Die
            key={die.id}
            die={die}
            handleDieClick={handleDieClick}
          />
        ))}
      </div>
      <button
        className="roll-button"
        onClick={isGameWon() ? initializeGame : randomizeDice}
      >
      {isGameWon() ? "Reset Game" : "Roll"}
      </button>
    </main>
  )
}

export default App
