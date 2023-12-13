import "./navbar.scss";
import { BsCart3 } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../../reducers/modal/modalSlice";

function Navbar() {
    const dispatch = useDispatch()
    
    const openModal = ()=>{
        dispatch(setModal(true))
    }

    return (
        <>
            <nav className="nav">
                <form className="nav__form">
                    <input type="text" className="nav__form--input" placeholder="Busca tu producto aquì" />
                </form>
                <ul className="nav__ul">
                    <li className="nav__li"><button className="nav__btn"><BsCart3 className="nav__icon"/></button></li>
                    <li className="nav__li"><Link onClick={openModal} to="/auth/login" className="nav__btn">Iniciar Sesion <CiLogin className="nav__icon"/></Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar