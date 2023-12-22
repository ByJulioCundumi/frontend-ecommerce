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
import { IProduct } from "../../interfaces/IProduct";
import { getProductsRequest } from "../../api/productRequest";
import { addProducts } from "../../reducers/products/productsSlice";
import { setLoading } from "../../reducers/loading/loadingSlice";

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        const request = async () => {
            try {
                dispatch(setLoading({isLoading: true}))
                const result: IUser = await verifyTokenRequest()
                const products: IProduct[] = await getProductsRequest()
                dispatch(setLoading({isLoading: false}))
                //
                if (result.id) {
                    dispatch(setUser(result))
                    dispatch(addProducts(products))
                } 
            } catch (error) {
                console.log(error)
                dispatch(setLoading({isLoading: false}))
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