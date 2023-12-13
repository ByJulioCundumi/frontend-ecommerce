import "./filters.scss";

function Filters() {
    return (
        <>
            <section className="filters">
                <h1 className="filters__title">Maxitiendas <br /> D.P.</h1>
                <div className="filters__category">

                    <div className="filters__category--names">
                        <h3 className="filters__category--title">Productos</h3>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="todos" />
                            <label htmlFor="todos">Mostrar Todos</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="granos" />
                            <label htmlFor="granos">Granos</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="lacteos" />
                            <label htmlFor="lacteos">Lacteos</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="carnes" />
                            <label htmlFor="carnes">Carnes</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="aceites" />
                            <label htmlFor="aceites">Aceites</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="aseo" />
                            <label htmlFor="aseo">aseo</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="bebidas" />
                            <label htmlFor="bebidas">Bebidas</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="alcohol" />
                            <label htmlFor="alcohol">Alcohol</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="cigarros" />
                            <label htmlFor="cigarros">Cigarros</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="dulceria" />
                            <label htmlFor="dulceria">Dulceria</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="galletas" />
                            <label htmlFor="galletas">Galletas</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="enlatados" />
                            <label htmlFor="enlatados">Enlatados</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="condimentos" />
                            <label htmlFor="condimentos">Condimentos</label>
                        </div>
                    </div>

                    <div className="filters__category--prices">
                        <h3 className="filters__category--title">Precios</h3>

                        <div className="filters__order">
                            <select className="filters__select">
                                <option value="" className="filters__select-option">Ordenar por:</option>
                                <option value="" className="filters__select-option">Menor a mayor</option>
                                <option value="" className="filters__select-option">Mayor a menor</option>
                            </select>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Filters