import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainPage from './pages/main/MainPage'
import Login from './pages/login/Login'

function App() {

  return (
    <div className='content'>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
