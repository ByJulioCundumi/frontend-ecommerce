import "./adminDashboard.scss";
import { Link, Outlet } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { GrDocumentStore } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";


function AdminDashboard() {
  return (
    <>
        <section className="dashboard">
            <section className="dashboard__sidebar sidebar">
                <Link to={"/auth/dashboard/admin"} className="sidebar__title">Maxitiendas<br/> D.P.</Link>
                <ul className="sidebar__nav">
                    <li className="sidebar__li"><Link to={"/auth/dashboard/admin"}><BiSolidDashboard/> Panel</Link></li>
                    <li className="sidebar__li"><Link to={"/auth/dashboard/admin/products"}><SiHomeassistantcommunitystore/> Productos</Link></li>
                    <li className="sidebar__li"><Link to={"/auth/dashboard/admin/orders"}><GrDocumentStore/> Pedidos</Link></li>
                    <li className="sidebar__li"><Link to={"/auth/dashboard/admin/returns"}><GrDocumentStore/> Devoluciones</Link></li>
                    <li className="sidebar__li"><Link to={"/auth/dashboard/admin/users"}><HiMiniUsers/> Usuarios</Link></li>
                    <li className="sidebar__li"><Link to={"/auth/dashboard/admin/config"}><IoMdSettings/> Configuración</Link></li>
                </ul>
                <button className="sidebar__btn"><CiLogout/> Cerrar Sesion</button>
            </section>

            <section className="dashboard__main main">
                <Outlet/>
            </section>
        </section>
    </>
  )
}

export default AdminDashboard