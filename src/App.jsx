import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Screens/Home'
import Kitchen from './Screens/Kitchen'
import Bathroom from './Screens/Bathroom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/bathroom" element={<Bathroom />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App