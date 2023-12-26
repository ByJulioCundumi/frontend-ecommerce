import { useDispatch } from "react-redux"
import "./recommended.scss"
import { setFilterOption } from "../../reducers/filterOption/filterOption"

function Recommended() {
  const dispatch = useDispatch()

  const filterOption = (option:string)=>{
    dispatch(setFilterOption({option:option}))
  }

  return (
    <>
        <section className="recommended">
            <h2 className="recommended__title">Productos Recomendados</h2>
            <div className="recommended__products">
                <button onClick={()=> filterOption("todo")} className="recommended__btn">Todos Los Productos</button>
                <button onClick={()=> filterOption("granos")} className="recommended__btn">Granos</button>
                <button onClick={()=> filterOption("aceites")} className="recommended__btn">Aceites</button>
                <button onClick={()=> filterOption("carnes")} className="recommended__btn">Carnes</button>
                <button onClick={()=> filterOption("higiene")} className="recommended__btn">Higiene</button>
            </div>
        </section>
        
    </>
  )
}

export default Recommended