import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainPage from './pages/main/MainPage'
import Login from './pages/login/Login'
import Subject from './pages/subject/Subject'
import TopicPage from './pages/topic/Topic'

function App() {

  return (
    <div>
      <Header/>
      <div className="content">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/subjects/:subjectId' element={<Subject/>}/>
          <Route path='/topics/:topicId' element={<TopicPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
