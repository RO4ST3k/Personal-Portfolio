import { Routes, Route } from 'react-router-dom'
import { NavigationBar } from './components/navigation_bar'
import { Home } from './pages/home'
import { AboutMe } from './pages/about-me'
import { Projects } from './pages/projects'
import './App.css'

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  )
}

export default App
