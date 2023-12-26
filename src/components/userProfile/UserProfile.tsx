import { useSelector } from "react-redux";
import "./userProfile.scss";
import { IState } from "../../interfaces/IState";

function UserProfile() {
    const user = useSelector((state: IState) => state.user)
    return (
        <>
            <section className="userProfile">
                <div className="userProfile__container">
                    <img className="userProfile__img" src="https://res.cloudinary.com/dscmahnke/image/upload/f_auto,q_auto/v1/maxitiendas/rf1qixpcm51x36mh91wy" alt="" />
                    <div className="userProfile__text">
                        <div className="userProfile__role">
                            <p className="title">Rol:</p>
                            <p>Usuario</p>
                        </div>
                        <div className="userProfile__names">
                            <div className="userProfile__firstname">
                                <p className="title">Nombre:</p>
                                <p>{user.firstname}</p>
                            </div>
                            <div className="userProfile__lastname">
                                <p className="title">Apellido:</p>
                                <p>{user.lastname}</p>
                            </div>
                        </div>
                        <div className="userProfile__email">
                            <p className="title">Email:</p>
                            <p>{user.email}</p>
                        </div>
                        <div className="userProfile__password">
                            <p className="title">Contraseña:</p>
                            <p>{user.password || "contraseña"}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserProfile