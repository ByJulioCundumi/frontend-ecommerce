import { Outlet } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "./auth.scss";
import { useDispatch } from "react-redux";
import { setModal } from "../../reducers/modal/modalSlice";
import { useNavigate } from "react-router-dom";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = ()=>{
    dispatch(setModal(false))
    navigate("/")
  }

  return (
    <>
        <section className="auth">
          <button onClick={closeModal} className="auth__close"><IoMdClose className="auth__close--icon"/></button>
          <div className="auth__container">
            <Outlet/>
          </div>
        </section>
    </>
  )
}

export default Auth