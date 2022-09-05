import React from 'react';

export const ItemCard = ({Item}) => {
    const { Title, precio, stock, img} = Item
    return (
    <div className="card border-secondary mb-3" style={{ margin: "20px" }}>
      <h4 className="card-header">{Title}</h4>
      <img className='img' src={img} alt={Title} />
    <div className="card-body">
      <p className="price">${precio}</p>
      <p className="card-text">Stock:{stock}</p>
      <button className='btn btn-outline-success'> Más información</button>
    </div>
  </div>
    );
}

