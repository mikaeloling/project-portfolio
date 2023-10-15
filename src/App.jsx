// Code: App component
import './App.css'
import { FeaturedProjects } from './Components/Featuredprojects'
import { Introduction } from './Components/Introduction'
import { Tech } from './Components/Tech'
import { Mywords } from './Components/Mywords'
import { Skills } from './Components/Skills'
import { LetsTalk } from './Components/Letstalk'

function App() {
  

  return (
    <>
    <Introduction />
    <Tech />
    <FeaturedProjects />
    <Mywords />
    <Skills />
    <LetsTalk />
    </>
  )
}

export default App
