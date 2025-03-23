import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import GameMain from './components/layout/GameMain'
import GameWrapper from './components/layout/GameWrapper'
import { GameProvider } from './components/GameProvider'
//import { AIProvider } from './components/AIProvider'
//import { AIPoetryDisplay } from './components/AI/AIPoetryDisplay'


function App() {
  return (
    <div>
      <GameProvider>
        {/*<AIProvider> */}
        <GameWrapper>
          <Header />
          <GameMain />
          {/* <AIPoetryDisplay className="game-ai-poetry"  /> */}
          <Footer />
        </ GameWrapper>
        {/*</AIProvider> */}
      </GameProvider>
    </div>
  )
}

export default App