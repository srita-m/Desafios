import Counter from './Counter'
import './ItemDetail.css';

export const ItemDetail = ({item}) => {

  return (
    <div>
        
        <div className="card-detail">
        
            <div className="card-detail-left">

                <img className="imgMax" src={item.img} alt={item.Title}  />
            </div>
            <div className="card-detail-right">
            <h1>{item.Title}</h1>
                <p>{item.descripcion}</p>
                <p className="price">${item.precio}</p>
                <p>Stock: {item.stock}</p>
                <p>Categoria: {item.categoria}</p>
                <Counter stock={item.stock} initial={0} />
            </div>
        </div>
    </div>
  )
}