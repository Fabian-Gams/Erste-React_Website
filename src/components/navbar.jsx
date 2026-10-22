import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: '',
            isMenuOpen: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    toggleMenu = () => {
        this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
    };

    closeMenu = () => {
        this.setState({ isMenuOpen: false });
    };

    scrollToSection = (e, sectionId) => {
    e.preventDefault();
    this.closeMenu();
    
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector('.navbar'); 
    if (element) {
        const navbarHeight = navbar ? navbar.offsetHeight : 70; 
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

    handleScroll = () => {
        const sections = ['AboutUsSection', 'OurPromisesSection', 'ProductSection', 'FooterSection', 'BuySection'];
        const scrollPosition = window.scrollY;
        if (scrollPosition < 940) {
            this.setState({ activeSection: '' });
            return;
        }

        const isAtBottom = (window.innerHeight + scrollPosition) >= document.documentElement.scrollHeight - 20;
        if (isAtBottom) {
            this.setState({ activeSection: 'FooterSection' });
            return;
        }

        const triggerPoint = scrollPosition + 200;
        const testimonialElement = document.getElementById('TestimonialSection');
        if (testimonialElement) {
            const tTop = testimonialElement.offsetTop;
            const tHeight = testimonialElement.offsetHeight;
            
            if (triggerPoint >= tTop && triggerPoint < tTop + tHeight) {
                this.setState({ activeSection: 'FooterSection' });
                return;
            }
        }

        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if (triggerPoint >= offsetTop && triggerPoint < offsetTop + offsetHeight) {
                    this.setState({ activeSection: sectionId });
                    break;
                }
            }
        }
    };

        render() { 
        const { activeSection, isMenuOpen } = this.state;
        const { cartCount, onCartToggle } = this.props; 

        const defaultStyle = {
            color: 'white',
            transition: 'color 0.2s ease-in-out'
        };

        const activeStyle = {
            color: '#004526',
            transition: 'color 0.2s ease-in-out'
        };

        return (
            <nav id="NavbarSection" className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor: '#74C365'}} role="navigation" aria-label="Hauptnavigation">
                <div className="container-fluid d-flex align-items-center">
                    <a className="navbar-brand" href="index.html" aria-label="Zur Hero-Sektion der Webseite" onClick={this.closeMenu}>
                        <img src="assets/images/Apple.png" alt="Firma Logo" height="60" className="d-inline-block align-text-top"/>
                    </a>
                    <h1 className="navbar-company m-0 align-items-center" style={{color: 'white', fontStyle: 'italic', fontSize: '1.8rem', marginLeft: '10px', justifyContent: 'center'}}>
                        APFELFREUDE
                    </h1>
                    <button 
                        className="navbar-toggler position-relative" 
                        type="button" 
                        onClick={this.toggleMenu}
                        aria-controls="navbarNav" 
                        aria-expanded={isMenuOpen} 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        {cartCount > 0 && !isMenuOpen && (
                            <span 
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                style={{ fontSize: '0.75rem', padding: '4px 7px', zIndex: 2 }}>
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{fontSize: '1.2rem', fontWeight: 'bold', alignItems: 'center'}}>
                            <li className="nav-item">
                                <a className="nav-link" 
                                  style={activeSection === 'AboutUsSection' ? activeStyle : defaultStyle}  
                                  href="#AboutUsSection"
                                  onClick={(e) => this.scrollToSection(e, 'AboutUsSection')}
                                  onMouseEnter={(e) => activeSection !== 'AboutUsSection' && (e.target.style.color = '#004526')}
                                  onMouseLeave={(e) => activeSection !== 'AboutUsSection' && (e.target.style.color = 'white')}>
                                    Über Uns
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                  className="nav-link" 
                                  style={activeSection === 'OurPromisesSection' ? activeStyle : defaultStyle} 
                                  href="#OurPromisesSection"
                                  onClick={(e) => this.scrollToSection(e, 'OurPromisesSection')}
                                  onMouseEnter={(e) => activeSection !== 'OurPromisesSection' && (e.target.style.color = '#004526')}
                                  onMouseLeave={(e) => activeSection !== 'OurPromisesSection' && (e.target.style.color = 'white')}>
                                    Unsere Versprechen
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" 
                                  style={activeSection === 'ProductSection' ? activeStyle : defaultStyle} 
                                  href="#ProductSection"
                                  onClick={(e) => this.scrollToSection(e, 'ProductSection')}
                                  onMouseEnter={(e) => activeSection !== 'ProductSection' && (e.target.style.color = '#004526')}
                                  onMouseLeave={(e) => activeSection !== 'ProductSection' && (e.target.style.color = 'white')}>
                                    Unsere Sorten
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" 
                                  style={activeSection === 'FooterSection' ? activeStyle : defaultStyle} 
                                  href="#FooterSection"
                                  onClick={(e) => this.scrollToSection(e, 'FooterSection')}
                                  onMouseEnter={(e) => activeSection !== 'FooterSection' && (e.target.style.color = '#004526')}
                                  onMouseLeave={(e) => activeSection !== 'FooterSection' && (e.target.style.color = 'white')}>
                                    Newsletter
                                </a>
                            </li>
                            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                                <button 
                                  className="nav-link btn position-relative" 
                                  style={{
                                      ...(activeSection === 'BuySection' ? activeStyle : defaultStyle),
                                      backgroundColor: '#004526',
                                      color: 'white',
                                      padding: '8px 20px',
                                      borderRadius: '25px',
                                      border: '2px solid #004526',
                                      fontSize: '1.1rem'
                                  }} 
                                  onClick={(e) => {
                                      e.preventDefault();
                                      this.closeMenu();
                                      if (onCartToggle) onCartToggle();
                                  }}
                                  onMouseEnter={(e) => {
                                      e.target.style.backgroundColor = 'white';
                                      e.target.style.color = '#004526';
                                  }}
                                  onMouseLeave={(e) => {
                                      e.target.style.backgroundColor = '#004526';
                                      e.target.style.color = 'white';
                                  }}>
                                    Jetzt Kaufen
                                    {cartCount > 0 && (
                                        <span 
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                            style={{ fontSize: '0.8rem', padding: '5px 8px' }}>
                                            {cartCount}
                                        </span>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;