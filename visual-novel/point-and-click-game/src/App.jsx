import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import GameMain from './components/layout/GameMain'
import GameWrapper from './components/layout/GameWrapper'
import { GameProvider } from './components/GameProvider'

function App() {
  return (
    <div>
      <GameProvider>
        <GameWrapper>
          <Header />
          <GameMain />
          <Footer />
        </ GameWrapper>
      </GameProvider>
    </div>
  )
}

export default App