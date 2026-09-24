import {BrowseRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Contato from './pages/contato'
import Jogos from './pages/jogos'
import Error from './pages/error'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#1A1A1A] pt-4">
        <Header/>
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