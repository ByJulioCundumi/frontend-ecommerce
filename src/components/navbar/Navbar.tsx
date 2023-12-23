import "./navbar.scss";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../../reducers/modal/modalSlice";
import { useSelector } from "react-redux";
import { IState } from "../../interfaces/IState";
import { CiLogout } from "react-icons/ci";
import { BiSolidDashboard } from "react-icons/bi";
import { unsetUser } from "../../reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "../../api/authRequest";
import { useForm } from "react-hook-form";
import { addFilteredProducts } from "../../reducers/filteredProducts/filteredProducts";
import { BsCart2 } from "react-icons/bs";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import { setCartModal } from "../../reducers/cartModal/cartModal";

function Navbar() {
    const {register, watch} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state: IState) => { return state.user })
    const isLoading = useSelector((state: IState) => { return state.loading.isLoading })
    const products = useSelector((state: IState) => { return state.products })
    const cartModal = useSelector((state: IState) => { return state.cartModal.isOpen })

    const filteredProducts = products.filter((p)=> p.name.includes(watch("search")))
    dispatch(addFilteredProducts(filteredProducts))

    const openModal = () => {
        dispatch(setModal({ isOpen: true }))
    }

    const onClickCartModal = ()=>{
        
        dispatch(setCartModal({isOpen: !cartModal}))
    }

    const logout = () => {
        logoutRequest()
        dispatch(unsetUser())
        navigate("/")
    }

    if(isLoading){
        return <span>Cargando...</span>
    }

    return (
        <>
            <nav className="nav">
                <form className="nav__form">
                    <input type="text" className="nav__form--input" placeholder="Busca tu producto aquì" {...register("search")}/>
                </form>
                {user.id ?
                    <ul className="nav__ul">
                        <li className="nav__li"><p>Bienvenido, {user.email}</p></li>
                        {user.role !== "admin" && <button onClick={onClickCartModal} className="nav__cart"><BsCart2 className="nav__icon"/></button>}
                        <li className="nav__li"><Link to={`/auth/dashboard/${user.role}`} className="nav__btn"><BiSolidDashboard className="nav__icon" /></Link></li>
                        <li className="nav__li"><button onClick={logout} className="nav__btn"><CiLogout className="nav__icon" /></button></li>
                    </ul>
                    :
                    <ul className="nav__ul">
                        {user.role !== "admin" && <button onClick={onClickCartModal} className="nav__cart"><BsCart2 className="nav__icon"/></button>}
                        <li className="nav__li"><Link onClick={openModal} to="/auth/login" className="nav__btn">Iniciar Sesion <CiLogin className="nav__icon" /></Link></li>
                    </ul>}
                    <ShoppingCart/>
            </nav>
        </>
    )
}

export default Navbar