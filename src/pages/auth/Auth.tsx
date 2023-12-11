import "./auth.scss";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <>
        <section className="auth">
            <Outlet/>
        </section>
    </>
  )
}

export default Auth