import { Outlet } from "react-router-dom";
import "./dashboard.scss";

function Dashboard() {
  return (
    <>
        <section className="dashboard">
            <Outlet/>
        </section>
    </>
  )
}

export default Dashboard;