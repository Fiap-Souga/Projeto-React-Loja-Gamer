import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Jogos from './pages/Jogos'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#1A1A1A] pt-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App