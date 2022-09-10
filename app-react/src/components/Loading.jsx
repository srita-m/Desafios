import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
      <div className="content">
        <div className="load-wrapp">
        <div className="load-1">
          <p>Procesando </p>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="clear"></div>
        </div>
        </div>
    );
}

export default Loading;


