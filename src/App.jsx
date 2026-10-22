import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ProductCard from './components/products';
import AboutUs from './components/about';
import Footer from './components/footer';
import OurPromises from './components/promises';
import Testimonial from './components/testimonial';
import CartSlider from './components/cartslider';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const handleAddToCart = (title, priceNum) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.title === title);
      if (existingItem) {
        return prevItems.map(item => 
          item.title === title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { title, priceNum, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (title, change) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.title === title) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const handleToggleCart = () => {
    setIsCartOpen(prevOpen => !prevOpen);
  };

  return (
  
  <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#00674b' }}>
        <Navbar cartCount={totalCount} onCartToggle={handleToggleCart} />
        <Hero />
        <AboutUs />
        <OurPromises />
        <section id="ProductSection" className="container-fluid py-5">
        <h2 className="text-center display-1 fw-bold text-uppercase tracking-tight mb-4" style={{ color: 'white' }}>
        Unsere Sorten
        </h2>
        <div className="d-flex flex-wrap justify-content-center" style={{ padding: '20px' }}>
        <ProductCard image="assets/images/Honeycrisp_apples.jpg" title="Honeycrisp Apfel" description="Der moderne Klassiker mit einem intensiven, süßen Geschmack sowie fester und knackiger Textur." price="2,99€ pro kg" priceNum={2.99} onAddToCart={handleAddToCart} />
        <ProductCard image="assets/images/Grannysmith_apples.jpg" title="Granny Smith Apfel" description="Der grüne Klassiker mit einem sauren und süßen Geschmack sowie fester und knackiger Textur." price="1,99€ pro kg" priceNum={1.99} onAddToCart={handleAddToCart} />
        <ProductCard image="assets/images/Gala_apples.jpeg" title="Gala Apfel" description="Der rote Klassiker mit milden, süßen Geschmack sowie fester und knackiger Textur." price="2,49€ pro kg" priceNum={2.49} onAddToCart={handleAddToCart} />
        <ProductCard image="assets/images/PinkLady_apples.jpg" title="Pink Lady Apfel" description="Der pinke Star mit einer guten Balance aus Süße und Säure sowie fester und knackiger Textur." price="2,29€ pro kg" priceNum={2.29} onAddToCart={handleAddToCart} />
        <ProductCard image="assets/images/Fuji_apples.jpg" title="Fuji Apfel" description="Der rot-gelbe Riese mit einem intensiv süßen Geschmack sowie fester und knackiger Textur." price="2,79€ pro kg" priceNum={2.79} onAddToCart={handleAddToCart} />
    </div>
    </section>
    <Testimonial />
    <Footer />
    <CartSlider 
      isOpen={isCartOpen} 
      onClose={handleToggleCart} 
      cartItems={cartItems} 
      onUpdateQuantity={handleUpdateQuantity} 
    />
  </div>);
}
