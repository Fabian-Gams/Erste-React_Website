import React from 'react';

const CartSlider = ({ isOpen, onClose, cartItems, onUpdateQuantity }) => {
  const sliderStyle = {
    position: 'fixed',
    top: 0,
    right: isOpen ? '0' : '-400px',
    width: '400px',
    height: '100%',
    backgroundColor: '#74C365',
    borderLeft: '4px solid #004526',
    boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
    transition: 'right 0.3s ease-in-out',
    zIndex: 1060,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    color: '#333'
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.priceNum * item.quantity), 0);

  return (
    <div style={sliderStyle}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 style={{ color: '#004526', margin: 0, fontWeight: 'bold' }}>Dein Warenkorb</h4>
        <button className="btn-close" onClick={onClose} aria-label="Schließen"></button>
      </div>
      <div className="flex-grow-1" style={{ overflowY: 'auto', paddingRight: '5px' }}>
        {cartItems.length === 0 ? (
          <p className="text-muted text-center mt-5">Der Warenkorb ist noch leer.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="d-flex align-items-center justify-content-between p-2 mb-3 border-bottom">
              <div style={{ flex: 1, marginRight: '10px' }}>
                <h6 className="mb-0 fw-bold" style={{ color: '#004526' }}>{item.title}</h6>
                <small className="text-muted">{(item.priceNum * item.quantity).toFixed(2)}€</small>
              </div>
              <div className="d-flex align-items-center bg-light rounded" style={{ border: '1px solid #ced4da' }}>
                <button 
                  className="btn btn-sm px-2 py-1" 
                  onClick={() => onUpdateQuantity(item.title, -1)}
                  style={{ border: 'none', background: 'transparent', fontWeight: 'bold' }}>
                  -
                </button>
                <span className="px-2" style={{ minWidth: '25px', textAlign: 'center', fontWeight: 'bold' }}>
                  {item.quantity}
                </span>
                <button 
                  className="btn btn-sm px-2 py-1" 
                  onClick={() => onUpdateQuantity(item.title, 1)}
                  style={{ border: 'none', background: 'transparent', fontWeight: 'bold' }}>
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-3 pt-3 border-top">
          <div className="d-flex justify-content-between mb-3" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            <span>Gesamtsumme:</span>
            <span style={{ color: '#004526' }}>{totalPrice.toFixed(2)}€</span>
          </div>
          <button className="btn btn-success w-100 py-2 fw-bold" style={{ backgroundColor: '#004526', border: 'none' }}>
            Zur Kasse gehen
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSlider;
