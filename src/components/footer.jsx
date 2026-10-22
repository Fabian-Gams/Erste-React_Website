import React, { Component } from 'react';

class Footer extends Component {
    scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 90; 
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    render() { 
        const footerLinkStyle = {
            color: '#004526',
            textDecoration: 'none',
            transition: 'color 0.2s ease-in-out',
            fontWeight: '600'
        };

        return (
            <footer id="FooterSection" className="text-white mt-auto" style={{ backgroundColor: '#74C365', borderTop: '4px solid #004526' }}>
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <h3 className="fs-3 fw-bold mb-2" style={{ color: '#004526' }}>
                                Bleibe knackfrisch informiert!
                            </h3>
                            <p className="fs-6 mb-4 text-white">
                                Melde dich für unseren Newsletter an und verpasse keine neuen Apfelsorten aus der Region.
                            </p>
                            <form onSubmit={(e) => e.preventDefault()} className="d-flex flex-column flex-sm-row gap-2 max-width-md mx-auto mx-lg-0" style={{ maxWidth: '450px' }}>
                                <input 
                                    type="email" 
                                    className="form-control form-control-lg border-2" 
                                    placeholder="Deine E-Mail-Adresse" 
                                    aria-label="E-Mail-Adresse für Newsletter"
                                    required 
                                    style={{ 
                                        borderColor: '#004526',
                                        borderRadius: '10px'
                                    }}/>
                                <button 
                                    type="submit" 
                                    className="btn btn-lg text-white fw-bold px-4"
                                    style={{ 
                                        backgroundColor: '#004526',
                                        borderRadius: '10px',
                                        whiteSpace: 'nowrap'
                                    }}
                                    onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                                    onMouseLeave={(e) => e.target.style.opacity = '1'}>
                                    Anmelden
                                </button>
                            </form>
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-end">
                            <h4 className="fs-4 fw-bold mb-3" style={{ color: '#004526' }}>
                                Navigation
                            </h4>
                            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                <li>
                                    <a  href="#AboutUsSection" 
                                        style={footerLinkStyle}
                                        onClick={(e) => this.scrollToSection(e, 'AboutUsSection')}
                                        onMouseEnter={(e) => e.target.style.color = 'white'}
                                        onMouseLeave={(e) => e.target.style.color = '#004526'}>
                                        Über Uns
                                    </a>
                                </li>
                                <li>
                                    <a  href="#OurPromisesSection" 
                                        style={footerLinkStyle}
                                        onClick={(e) => this.scrollToSection(e, 'OurPromisesSection')}
                                        onMouseEnter={(e) => e.target.style.color = 'white'}
                                        onMouseLeave={(e) => e.target.style.color = '#004526'}>
                                        Unsere Versprechen
                                    </a>
                                </li>
                                <li>
                                    <a href="#ProductSection" 
                                        style={footerLinkStyle}
                                        onClick={(e) => this.scrollToSection(e, 'ProductSection')}
                                        onMouseEnter={(e) => e.target.style.color = 'white'}
                                        onMouseLeave={(e) => e.target.style.color = '#004526'}>
                                        Unsere Sorten
                                    </a>
                                </li>
                                <li>
                                    <a href="#BuySection" 
                                        style={footerLinkStyle}
                                        onClick={(e) => this.scrollToSection(e, 'BuySection')}
                                        onMouseEnter={(e) => e.target.style.color = 'white'}
                                        onMouseLeave={(e) => e.target.style.color = '#004526'}>
                                        Jetzt Kaufen
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="text-center p-3 fw-semibold" style={{ backgroundColor: '#004526', color: '#74C365' }}>
                    &copy; ApfelFreude 2026
                </div>
            </footer>
        );
    }
}
 
export default Footer;
