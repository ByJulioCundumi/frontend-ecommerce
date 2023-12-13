import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.scss";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = handleSubmit(()=>{

    })

  return (
    <>
        <section className="login">
            <ul className="login__ul">
                <li className="login__li"><Link to={"/auth/login"} className="login__login">Iniciar Sesion</Link></li>
                <li className="login__li"><Link to={"/auth/register"} className="login__Register">Registrarse</Link></li>
            </ul>
            <form className="login__form" onSubmit={onSubmit}>
                <h2 className="login__form--title">Iniciar Sesion</h2>

                <div className="login__form--input">
                    <p>Email:</p>
                    <input type="email" id="" {...register("email",{
                        required: {
                            value: true,
                            message: "Ingrese su email"
                        },
                        minLength: {
                            value: 12,
                            message: "Ingrese un email valido"
                        },
                        maxLength: {
                            value: 50,
                            message: "El email ingresado es demasiado largo. Ingrese un email valido"
                        }
                    })}/>
                    {errors.email && typeof errors.email.message === "string" && <span className="login__error">{errors.email.message}</span>}
                </div>

                <div className="login__form--input">
                    <p>Contraseña:</p>
                    <input type="password" id="" {...register("password", {
                        required: {
                            value: true,
                            message: "Ingrese su contraseña"
                        },
                        minLength: {
                            value: 8,
                            message: "Ingrese una contraseña valida"
                        },
                        maxLength: {
                            value: 30,
                            message: "La contraseña ingresada es demasiado larga"
                        }
                    })}/>
                    {errors.password && typeof errors.password.message === "string" && <span className="login__error">{errors.password.message}</span>}
                </div>

                <button type="submit" className="login__form--btn">Entrar</button>
            </form>
        </section>
    </>
  )
}

export default Login