import "./products.scss"
import { IoIosStarOutline } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { IState } from "../../interfaces/IState";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../reducers/shoppingCart/shoppingCart";
import { useEffect } from "react";
import { addFilteredProducts } from "../../reducers/filteredProducts/filteredProducts";

function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state:IState)=>state.products)
    const filteredProducts = useSelector((state:IState)=>state.filteredProducts)
    const filterOptionState = useSelector((state:IState)=>state.filterOption.option)

    const isLoading = useSelector((state:IState)=>state.loading.isLoading)
    const available = filteredProducts.filter((p)=>p.stock === "disponible")

    useEffect(()=>{
        switch(filterOptionState){
            case "":
                dispatch(addFilteredProducts(products))
            break;
            case "todo":
                dispatch(addFilteredProducts(products))
            break;
            case "granos":
                const granos = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(granos))
            break;
            case "lacteos":
                const lacteos = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(lacteos))
            break;
            case "carnes":
                const carnes = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(carnes))
            break;
            case "aceites":
                const aceites = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(aceites))
            break;
            case "higiene":
                const higiene = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(higiene))
            break;
            case "bebidas":
                const bebidas = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(bebidas))
            break;
            case "alcohol":
                const alcohol = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(alcohol))
            break;
            case "cigarros":
                const cigarros = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(cigarros))
            break;
            case "dulceria":
                const dulceria = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(dulceria))
            break;
            case "galletas":
                const galletas = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(galletas))
            break;
            case "enlatados":
                const enlatados = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(enlatados))
            break;
            case "condimentos":
                const condimentos = products.filter((p)=> p.category === filterOptionState)
                dispatch(addFilteredProducts(condimentos))
            break;
            case "todo-select":
                const todoSelect = [...filteredProducts].sort(()=> Math.random() - 0.5)
                dispatch(addFilteredProducts(todoSelect))
            break;
            case "menor":
                const menor = [...filteredProducts].sort((a, b)=>{return a.currentPrice - b.currentPrice})
                dispatch(addFilteredProducts(menor))
            break;
            case "mayor":
                const mayor = [...filteredProducts].sort((a, b)=>{return b.currentPrice - a.currentPrice})
                dispatch(addFilteredProducts(mayor))
            break;
        }
    },[filterOptionState])

    if(isLoading){
        return <span>Cargando...</span>
    }

  return (
    <>
        <section className="products">

            {available.length > 0 ? available.map((p)=>{
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
                        <button onClick={()=> dispatch(addToCart(p))} className="product__btn"><IoBag/></button>
                    </div>
                </div>
            </div>
            }): <span>No hay productos registrados</span>}

        </section>
    </>
  )
}

export default Products