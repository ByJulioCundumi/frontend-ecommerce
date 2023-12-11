import Filters from "../../components/filters/Filters";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Recommended from "../../components/recommended/Recommended";
import "./home.scss";

function Home() {
    return (
        <>
            <section className="home">
                <div className="home__container">
                <Filters/>
                <Navbar/>
                <Recommended/>
                <Products/>
                </div>
            </section>
        </>
    )
}

export default Home;