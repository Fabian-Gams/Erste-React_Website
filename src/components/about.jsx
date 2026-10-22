import React, { Component } from 'react';

class AboutUs extends Component {
    state = {  } 
    render() { 
        return (<div id="AboutUsSection" className="d-flex flex-column align-items-center text-center mx-auto text-white mt-5" style={{ maxWidth: '1000px' }}>
  <h2 className="display-1 fw-bold text-uppercase tracking-tight mb-4">
    Wer ist ApfelFreude?
  </h2>
  <p className="fs-2 fw-semibold mb-4" style={{ color: '#74C365' }}>
    Wir bringen die Antwort für den regionalen Apfelgenuss.
  </p>
  <p className="fs-3 lh-lg text-light font-weight-light pt-3">
    Wir bei <span className="fw-bold text-white">ApfelFreude</span> glauben, dass ein Apfel mehr ist als nur ein schneller Snack.
    <br />Er ist ein Meisterwerk der Natur.
    <br />Unsere Reise begann mit der Faszination für die unglaubliche Vielfalt an Aromen und Texturen - vom spritzig-sauren Granny Smith bis zum honigsüßen Fuji.
    <br />Wir verbinden traditionelles Obstwissen mit modernem Service, um dir genau den Apfel zu liefern, der zu deinem Geschmack passt.
    <br />Hierfür arbeiten wir eng mit lokalen Bauern zusammen, die ihre Äpfel mit Liebe und Sorgfalt anbauen.
    <br />Unser Ziel ist es, dir nicht nur frische Äpfel zu liefern, sondern auch ein Stück Natur und Freude in deinen Alltag zu bringen.
  </p>
</div>

    );
    }
}
 
export default AboutUs;