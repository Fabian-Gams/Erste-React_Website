import React, { useState, useEffect } from 'react';

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Sabine Müller",
    text: "Ich wollte schon immer mal echte Pink Lady Äpfel direkt frisch vom Baum aus der Region probieren. Ein tolles Konzept - super saftig und regional!",
    image: "https://img.magnific.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 2,
    name: "Lukas Becker",
    text: "Es ist der Wahnsinn! Früher mussten neuseeländische Apfelsorten um die halbe Welt geflogen werden. Jetzt hole ich sie mir knackfrisch beim Bauern um die Ecke. Schmeckt genial und schont die Umwelt!",
    image: "https://img.magnific.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 3,
    name: "Anna Schmidt",
    text: "Meine Kinder lieben die süßen Honeycrisp-Äpfel. Dass wir die jetzt direkt vom regionalen Erzeuger kaufen können, hat uns absolut überzeugt. Man schmeckt die Frische bei jedem Biss!",
    image: "https://t4.ftcdn.net/jpg/06/74/56/59/360_F_674565936_QnG6mnvRv4WOjb5wZKxH5PQ76Cm9rASI.jpg"
  },
  {
    id: 4,
    name: "Christian Weber",
    text: "Als absoluter Apfel-Fan bin ich begeistert von der Sortenvielfalt bei ApfelFreude. Exotische Aromen gepaart mit den Vorteilen von kurzen, regionalen Transportwegen - das ist für mich die Zukunft des bewussten Einkaufs!",
    image: "https://img.magnific.com/free-photo/brunette-man-isolated-white-background_1368-4404.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 5,
    name: "Julia Wagner",
    text: "Ich finde es klasse, wie hier globale Sorten und lokales Handwerk verschmelzen. Die Äpfel sind unglaublich knackig, halten sich super lange im Kühlschrank und man unterstützt gleichzeitig direkt die Landwirte aus unserer eigenen Region.",
    image: "https://i.pinimg.com/736x/99/52/e0/9952e0597680112d8b905ab74f4516f5.jpg"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === TESTIMONIAL_DATA.length - 1 ? 0 : prevIndex + 1
      );
    }, 6500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const { name, text, image } = TESTIMONIAL_DATA[currentIndex];

  return (
    <div id="TestimonialsSection" className="container my-5" style={{ maxWidth: '900px' }}>
      <div className="card shadow p-5 rounded-4 d-flex align-items-center justify-content-center"
        style={{ 
          backgroundColor: '#74C365',
          border: '4px solid #004526',
          minHeight: '400px' 
        }}>
        <div className="row g-4 align-items-center w-100">
          <div className="col-12 col-md-4 text-center">
            <img 
              src={image} 
              alt={name} 
              className="rounded-circle img-fluid shadow-sm"
              style={{ 
                width: '160px', 
                height: '160px', 
                objectFit: 'cover',
                border: '5px solid #004526' 
              }}/>
          </div>
          <div className="col-12 col-md-8 ps-md-4 text-center text-md-start">
            <p className="card-text fst-italic lh-base fs-4 mb-3 text-white">
              "{text}"
            </p>
            <h3 className="fw-bold mb-0" style={{ color: '#004526' }}>
              {name}
            </h3>
            <small className="fs-6" style={{ color: 'white' }}>
              Glückliche Kundschaft von ApfelFreude
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}