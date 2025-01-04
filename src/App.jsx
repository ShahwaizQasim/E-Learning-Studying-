import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home/home'

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
