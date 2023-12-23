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
import { addFilteredProducts } from "../../reducers/filteredProducts/filteredProducts";

function Home() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        const verifyToken = async () => {
            try {
                dispatch(setLoading({isLoading: true}))
                const result: IUser = await verifyTokenRequest()
                dispatch(setLoading({isLoading: false}))
                //
                if (result.id) {
                    dispatch(setUser(result))
                } 
            } catch (error) {
                console.log(error)
                dispatch(setLoading({isLoading: false}))
            }
        }

        const getAllProducts = async () => {
            try {
                dispatch(setLoading({isLoading: true}))
                const products: IProduct[] = await getProductsRequest()
                dispatch(setLoading({isLoading: false}))
                //
                if (products.length > 0) {
                    dispatch(addProducts(products))
                    dispatch(addFilteredProducts(products))
                } 
            } catch (error) {
                console.log(error)
                dispatch(setLoading({isLoading: false}))
            }
        }
        getAllProducts()
        verifyToken()
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