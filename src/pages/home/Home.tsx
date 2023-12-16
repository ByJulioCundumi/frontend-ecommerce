import { Outlet } from "react-router-dom";
import Filters from "../../components/filters/Filters";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Recommended from "../../components/recommended/Recommended";
import "./home.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/user/userSlice";
import { verifyTokenRequest } from "../../api/authRequest";
import { IUser } from "../../interfaces/IUser";

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        const request = async () => {
            try {
                const result: IUser = await verifyTokenRequest()
                if (result.id) {
                    dispatch(setUser(result))
                } 
            } catch (error) {
                console.log(error)
            }
        }
        request()
    }, [0])

    return (
        <>
            <section className="home">
                <div className="home__container">
                    <Filters />
                    <Navbar />
                    <Recommended />
                    <Products />
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default Home;