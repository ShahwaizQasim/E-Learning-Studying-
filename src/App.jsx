import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home/home'

// https://www.figma.com/design/IhJoUgv70HxznOjDM8Flaa/E-Learning-Site-(Community)?node-id=10-358&t=EEe8Bw0lezFAMTBt-0

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
