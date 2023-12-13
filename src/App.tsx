import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Register from './components/register/Register'
import Auth from './pages/auth/Auth'
import Login from './components/login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path='/auth/*' element={<Auth/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
