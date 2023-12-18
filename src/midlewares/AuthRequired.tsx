import { useSelector } from "react-redux"
import { IState } from "../interfaces/IState"
import { Navigate, Outlet } from "react-router-dom"

function AuthRequired() {
  const user = useSelector((state: IState) => { return state.user })

  if (!user.id) {
    return <Navigate to={"/"} />
  }

  return <Outlet />;
}

export default AuthRequired