import './app.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Register from './components/register/Register'
import Auth from './pages/auth/Auth'
import Login from './components/login/Login'
import UserDashboard from './components/userDashboard/UserDashboard'
import AdminDashboard from './components/adminDashboard/AdminDashboard'
import AuthRequired from './midlewares/AuthRequired'
import AdminMain from './components/adminMain/AdminMain'
import AdminProducts from './components/adminProducts/AdminProducts'
import AdminOrders from './components/adminOrders/AdminOrders'
import AdminUsers from './components/adminUsers/AdminUsers'
import AdminConfig from './components/adminConfig/AdminConfig'
import AdminReturns from './components/adminReturns/AdminReturns'
import AddProduct from './components/addProduct/AddProduct'
import EditProduct from './components/editProduct/EditProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>

          <Route path='/auth/*' element={<Auth />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />

            <Route element={<AuthRequired />}>
              <Route path='dashboard/*'>
                <Route path='user' element={<UserDashboard />} />

                <Route path='admin/*' element={<AdminDashboard />} >
                  <Route path='' element={<AdminMain/>}/>
                  <Route path='products' element={<AdminProducts/>}/>
                  <Route path='add-product' element={<AddProduct/>}/>
                  <Route path='edit-product/:id' element={<EditProduct/>}/>
                  <Route path='orders' element={<AdminOrders/>}/>
                  <Route path='returns' element={<AdminReturns/>}/>
                  <Route path='users' element={<AdminUsers/>}/>
                  <Route path='config' element={<AdminConfig/>}/>
                </Route>
              </Route>
            </Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
