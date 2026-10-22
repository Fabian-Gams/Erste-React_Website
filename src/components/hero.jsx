import React, { Component } from 'react';

class Hero extends Component {
    state = {  } 
    render() { 
        return (
            <header style={{ paddingLeft: 0 }}>
                <div id="HeroSection" className='p-5 text-center bg-image' style={{ 
                    backgroundImage: "url('assets/images/AppleWallpaper.jpg')", 
                    height: '1000px', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    backgroundBlendMode: 'darken'
                    }}>
                        <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3' style={{ fontSize: '4.5rem' }}>Die Frische aus der Region</h1>
                                <h4 className='mb-3' style={{ fontSize: '2.5rem' }}>Mit uns bringen wir die beste Qualität direkt zu Ihnen, von den Bauernhöfen in Ihrer Nähe.</h4>
                            </div>
                        <div className="ButtonContainer" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <a href="#AboutUsSection" className="btn btn-success btn-lg" style={{ fontSize: '1.5rem', padding: '15px 30px' }}>Über Uns</a>
                            <a href="#ProductSection" className="btn btn-success btn-lg" style={{ fontSize: '1.5rem', padding: '15px 30px', marginLeft: '20px' }}>Unsere Sorten</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Hero;
