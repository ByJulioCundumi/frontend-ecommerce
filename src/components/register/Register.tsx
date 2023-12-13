import { Link } from "react-router-dom";
import "./register.scss";
import { useForm } from "react-hook-form";

function Register() {
  const { register, formState: { errors }, handleSubmit, watch } = useForm();

  const onSubmit = handleSubmit(() => {

  })

  return (
    <>
      <section className="register">
        <ul className="register__ul">
          <li className="register__li"><Link to={"/auth/login"} className="register__login">Iniciar Sesion</Link></li>
          <li className="register__li"><Link to={"/auth/register"} className="register__Register">Registrarse</Link></li>
        </ul>
        <form className="register__form" onSubmit={onSubmit}>
          <h2 className="register__form--title">Resgistrarse</h2>

          <div className="register__form--input">
            <p>Nombre:</p>
            <input type="text" id="" {...register("firstname", {
              required: {
                value: true,
                message: "Ingrese su nombre"
              },
              minLength: {
                value: 2,
                message: "Ingrese un nombre valido"
              },
              maxLength: {
                value: 30,
                message: "El nombre ingresado es demasiado largo. Ingrese un nombre valido"
              }
            })} />
            {errors.firstname && typeof errors.firstname.message === "string" && <span className="register__error">{errors.firstname.message}</span>}
          </div>

          <div className="login__form--input">
            <p>Apellido:</p>
            <input type="text" id="" {...register("lastname", {
              required: {
                value: true,
                message: "Ingrese su apellido"
              },
              minLength: {
                value: 2,
                message: "Ingrese un apellido valido"
              },
              maxLength: {
                value: 30,
                message: "El apellido ingresado es demasiado largo. Ingrese un apellido valido"
              }
            })} />
            {errors.lastname && typeof errors.lastname.message === "string" && <span className="register__error">{errors.lastname.message}</span>}
          </div>

          <div className="login__form--input">
            <p>Email:</p>
            <input type="email" id="" {...register("email", {
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
            })} />
            {errors.email && typeof errors.email.message === "string" && <span className="register__error">{errors.email.message}</span>}
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
                value: 20,
                message: "La contraseña ingresada es demasiado larga"
              }
            })} />
            {errors.password && typeof errors.password.message === "string" && <span className="register__error">{errors.password.message}</span>}
          </div>

          <div className="login__form--input">
            <p>Confirmar Contraseña:</p>
            <input type="password" id="" {...register("confpassword", {
              required: {
                value: true,
                message: "Confirme su contraseña"
              },
              validate: (pass) => {
                if (pass === watch("password")) {
                  return true;
                } else {
                  return "Las contraseñas no coinciden, intente otra vez"
                }
              }
            })} />
            {errors.confpassword && typeof errors.confpassword.message === "string" && <span className="register__error">{errors.confpassword.message}</span>}
          </div>

          <button type="submit" className="register__form--btn">Crear Cuenta</button>
        </form>
      </section>
    </>
  )
}

export default Register