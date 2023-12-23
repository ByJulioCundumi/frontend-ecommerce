import { useDispatch, useSelector } from "react-redux";
import "./filters.scss";
import { useRef } from "react";
import { IState } from "../../interfaces/IState";
import { addFilteredProducts } from "../../reducers/filteredProducts/filteredProducts";

function Filters() {
    const selectRef = useRef<HTMLSelectElement | null>(null);
    const products = useSelector((state: IState) => state.products)
    const filtered = useSelector((state: IState) => state.filteredProducts)
    const dispatch = useDispatch()

    const filterOption = (option: string) => {
        const filteredProducts = products.filter((p) => p.category === option)
        dispatch(addFilteredProducts(filteredProducts))
        if(option === "todo"){
            dispatch(addFilteredProducts(products))
        } 
    }

    const selectOption = ()=>{
        if(selectRef.current){
            const option = selectRef.current.value;
            switch (option) {
                case "todo-select":
                    const allProducts = [...filtered].sort(() => Math.random() - 0.5)
                    dispatch(addFilteredProducts(allProducts));
                    break;

                case "menor":
                    const lowerFiltered = [...filtered].sort((a, b) => a.currentPrice - b.currentPrice);
                    dispatch(addFilteredProducts(lowerFiltered));
                    break;

                case "mayor":
                    const higherFiltered = [...filtered].sort((a, b) => b.currentPrice - a.currentPrice);
                    dispatch(addFilteredProducts(higherFiltered));
                    break;

                default:
                    break;
            }
        }
    }


    return (
        <>
            <section className="filters">
                <h1 className="filters__title">Maxitiendas <br /> D.P.</h1>
                <div className="filters__category">

                    <div className="filters__category--names">
                        <h3 className="filters__category--title">Productos</h3>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("todo")} className="radio" type="radio" name="products" id="todos" />
                            <label htmlFor="todos">Mostrar Todos</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("granos")} className="radio" type="radio" name="products" id="granos" />
                            <label htmlFor="granos">Granos</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("lacteos")} className="radio" type="radio" name="products" id="lacteos" />
                            <label htmlFor="lacteos">Lacteos</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("carnes")} className="radio" type="radio" name="products" id="carnes" />
                            <label htmlFor="carnes">Carnes</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("aceites")} className="radio" type="radio" name="products" id="aceites" />
                            <label htmlFor="aceites">Aceites</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("higiene")} className="radio" type="radio" name="products" id="higiene" />
                            <label htmlFor="higiene">Higiene</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("bebidas")} className="radio" type="radio" name="products" id="bebidas" />
                            <label htmlFor="bebidas">Bebidas</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("alcohol")} className="radio" type="radio" name="products" id="alcohol" />
                            <label htmlFor="alcohol">Alcohol</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("cigarros")} className="radio" type="radio" name="products" id="cigarros" />
                            <label htmlFor="cigarros">Cigarros</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("dulceria")} className="radio" type="radio" name="products" id="dulceria" />
                            <label htmlFor="dulceria">Dulceria</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("galletas")} className="radio" type="radio" name="products" id="galletas" />
                            <label htmlFor="galletas">Galletas</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("enlatados")} className="radio" type="radio" name="products" id="enlatados" />
                            <label htmlFor="enlatados">Enlatados</label>
                        </div>
                        <div className="filters__category--select">
                            <input onClick={() => filterOption("condimentos")} className="radio" type="radio" name="products" id="condimentos" />
                            <label htmlFor="condimentos">Condimentos</label>
                        </div>
                    </div>

                    <div className="filters__category--prices">
                        <h3 className="filters__category--title">Precios</h3>

                        <div className="filters__order">
                            <select ref={selectRef} className="filters__select" onChange={selectOption}>
                                <option value="todo-select" className="filters__select-option">Ordenar por:</option>
                                <option value="menor" className="filters__select-option">Menor a mayor</option>
                                <option value="mayor" className="filters__select-option">Mayor a menor</option>
                            </select>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Filters