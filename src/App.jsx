import Introduction from './Components/Introduction'
import Tech from './Components/Tech'
import Skills from './Components/Skills'
import LetsTalk from './Components/Letstalk'
import FeaturedProjects from './Components/Featuredprojects'
import MyWords from './Components/Mywords'
import TickerTape from './Components/TickerTape'
import './App.css'
import styled from 'styled-components'

const AppContainer = styled.div`
  
  overflow-x: hidden;
  overflow-y: hidden;
  
  
  `;


function App() {

  return (
    <>
    <AppContainer>
    <Introduction />
    <Tech />
    <FeaturedProjects />
    <MyWords />
    <Skills />
    <LetsTalk />
    <TickerTape />
    </AppContainer>
    </>
  )
}

export default App
