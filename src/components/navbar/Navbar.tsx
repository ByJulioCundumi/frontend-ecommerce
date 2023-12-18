import "./navbar.scss";
import { BsCart3 } from "react-icons/bs";
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

function Navbar() {
    const user = useSelector((state: IState) => { return state.user })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const openModal = () => {
        dispatch(setModal({ isOpen: true }))
    }

    const logout = () => {
        logoutRequest()
        dispatch(unsetUser())
        navigate("/")
    }

    return (
        <>
            <nav className="nav">
                <form className="nav__form">
                    <input type="text" className="nav__form--input" placeholder="Busca tu producto aquì" />
                </form>
                {user.id ?
                    <ul className="nav__ul">
                        <li className="nav__li"><p>Bienvenido, {user.email}</p></li>
                        <li className="nav__li"><Link to={`/auth/dashboard/${user.role}`} className="nav__btn"><BiSolidDashboard className="nav__icon" /></Link></li>
                        <li className="nav__li"><button onClick={logout} className="nav__btn"><CiLogout className="nav__icon" /></button></li>
                    </ul>
                    :
                    <ul className="nav__ul">
                        <li className="nav__li"><button className="nav__btn"><BsCart3 className="nav__icon" /></button></li>
                        <li className="nav__li"><Link onClick={openModal} to="/auth/login" className="nav__btn">Iniciar Sesion <CiLogin className="nav__icon" /></Link></li>
                    </ul>}
            </nav>
        </>
    )
}

export default Navbar