import Header from './components/Header'
import TravelCard from './components/TravelCard'
import travelData from './travelData'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="travel-cards">
        {travelData.map(data => <TravelCard {...data}/>)}
      </div>
    </div>
  )
}

export default App
