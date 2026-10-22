import React, { Component } from 'react';

class ProductCard extends Component {
    render() { 
        return (
        <div id="ProductSection" className="card" style={{ width: '18rem', backgroundColor: '#74C365', border: '4px solid #004526', margin: '10px' }}>
            <img src={this.props.image} className="card-img-top" alt={this.props.title} />
            <div className="card-body" style={{ textAlign: 'center' }}>
                <h5 className="card-title fs-5 fw-bold mb-3 tracking-tight" style={{ color: '#004526' }}>{this.props.title}</h5>
                <p className="card-text fs-6 font-weight-light lh-base mb-0 text-white">{this.props.description}</p>
                <p className="price-text" style={{ fontWeight: 'bold', marginTop: '10px' }}>Preis: {this.props.price}</p>
                
                <button 
                    onClick={(e) => { 
                        e.preventDefault(); 
                        this.props.onAddToCart(this.props.title, this.props.priceNum); 
                    }} 
                    className="btn btn-success"
                    style={{ backgroundColor: '#004526', borderColor: '#004526' }}>
                    In den Warenkorb
                </button>
             </div>
        </div>
        );
    }
}
 
export default ProductCard;
