import { Link, Outlet } from "react-router-dom";
import "./userDashboard.scss";
import { CiLogout } from "react-icons/ci";

function UserDashboard() {
  return (
    <>
      <section className="user-dashboard">
      <section className="user-dashboard__sidebar sidebar">
                <Link to={"/auth/dashboard/admin"} className="sidebar__title">Maxitiendas<br/> D.P.</Link>
                <ul className="sidebar__nav">
                    <li className="sidebar__li"><Link to={"/auth/dashboard/user/profile"}>Perfil</Link></li>
                    <li className="sidebar__li"><Link to={"/auth/dashboard/user"}>Carrito</Link></li>
                    <li className="sidebar__li"><Link to={"/auth/dashboard/user/purchases"}>Mis Compras</Link></li>
                    <li className="sidebar__li"><Link to={"/auth/dashboard/user/returns"}>Reembolsos</Link></li>
                </ul>
                <button className="sidebar__btn"><CiLogout/> Cerrar Sesion</button>
            </section>

            <section className="user-dashboard__main main">
                <Outlet/>
            </section>
      </section>
    </>
  )
}

export default UserDashboard