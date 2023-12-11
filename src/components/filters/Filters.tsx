import "./filters.scss";

function Filters() {
    return (
        <>
            <section className="filters">
                <h1 className="filters__title">Maxitiendas <br/> D.P.</h1>
                <div className="filters__category">

                    <div className="filters__category--names">
                        <h3 className="filters__category--title">Productos</h3>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="products" id="todos" />
                            <label htmlFor="todos">Todos</label>
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
                            <input className="radio" type="radio" name="products" id="comestibles" />
                            <label htmlFor="comestibles">Comestibles</label>
                        </div>
                    </div>

                    <div className="filters__category--prices">
                        <h3 className="filters__category--title">Precios</h3>

                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="prices" id="todo"/>
                            <label htmlFor="todo">Todos</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="prices" id="0-10000"/>
                            <label htmlFor="0-10000">0 - 10mil</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="prices" id="10000-30000"/>
                            <label htmlFor="10000-20000">10mil - 30mil</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="prices" id="30000-50000"/>
                            <label htmlFor="30000-50000">30mil - 50mil</label>
                        </div>
                        <div className="filters__category--select">
                            <input className="radio" type="radio" name="prices" id="mas50000"/>
                            <label htmlFor="mas50000">Más de 50mil</label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filters