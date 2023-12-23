import "./products.scss"
import { IoIosStarOutline } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { IState } from "../../interfaces/IState";
import { useSelector } from "react-redux";

function Products() {
    const products = useSelector((state:IState)=>state.filteredProducts)
    const isLoading = useSelector((state:IState)=>state.loading.isLoading)
    const available = products.filter((p)=>p.stock === "disponible")

    if(isLoading){
        return <span>Cargando...</span>
    }

  return (
    <>
        <section className="products">

            {products.length > 0 ? available.map((p)=>{
                return <div className="product" key={p.id}>
                <img className="product__img" src={p.img.url} alt="" />
                <div className="product__text">
                    <h3 className="product__name">{p.name}</h3>
                    <div className="product__stars">
                    {Array.from({length: p.stars}).map(()=> <IoIosStarOutline className=""/>)} {p.stars}
                    </div>
                    <div className="product__cta">
                        <div className="product__prices">
                            <p className="product__price--prev">${p.prevPrice}</p>
                            <p className="product__price--actual">${p.currentPrice}</p>
                        </div>
                        <button className="product__btn"><IoBag/></button>
                    </div>
                </div>
            </div>
            }): <span>No hay productos registrados</span>}

        </section>
    </>
  )
}

export default Products