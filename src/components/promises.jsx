import React, { Component } from 'react';

class OurPromises extends Component {
  render() {
    return (
        <div id="OurPromisesSection" className="container-fluid mt-5 px-4" style={{ marginBottom: '100px' }}>
            <div className="container-fluid mt-5 px-4">
                <div className="d-flex flex-column align-items-center text-center mx-auto mb-5" style={{ maxWidth: '1000px' }}>
                  <h2 className="display-1 fw-bold tracking-tight mb-4" style={{ color: 'white' }}>
                      Unsere Versprechen
                  </h2>
                  <p className="fs-2 fw-semibold mb-4" style={{ color: '#74C365' }}>
                      Qualität, die man hören und schmecken kann
                  </p>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 justify-content-center">
                  <div className="col">
                    <div 
                      className="card h-100 text-center p-5 rounded-4 shadow-sm"
                      style={{
                        backgroundColor: '#74C365',
                        border: '3px solid #004526'
                      }}>
                      <h3 className="card-title fs-2 fw-bold mb-3 tracking-tight" style={{ color: '#004526' }}>
                          Knackfrisch
                      </h3>
                      <p className="card-text fs-4 font-weight-light lh-base mb-0 text-white">
                          Jeder Apfel durchläuft strenge Kontrollen. Nur Früchte mit der perfekten, festen Textur schaffen es in unsere Auswahl - für den ultimativen Crunch.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div 
                      className="card h-100 text-center p-5 rounded-4 shadow-sm"
                      style={{
                        backgroundColor: '#74C365',
                        border: '3px solid #004526'
                      }}>
                      <h3 className="card-title fs-2 fw-bold mb-3 tracking-tight" style={{ color: '#004526' }}>
                          Handverlesen
                      </h3>
                      <p className="card-text fs-4 font-weight-light lh-base mb-0 text-white">
                          Wir arbeiten eng mit ausgewählten Erzeugern zusammen. So garantieren wir, dass jede Sorte ihr volles, authentisches Aroma entfaltet.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div 
                      className="card h-100 text-center p-5 rounded-4 shadow-sm"
                      style={{
                        backgroundColor: '#74C365',
                        border: '3px solid #004526'
                      }}>
                      <h3 className="card-title fs-2 fw-bold mb-3 tracking-tight" style={{ color: '#004526' }}>
                          Nachhaltig
                      </h3>
                      <p className="card-text fs-4 font-weight-light lh-base mb-0 text-white">
                          Der Schutz der Natur steht an erster Stelle. Wir setzen auf umweltschonende Anbaumethoden für einen minimalen ökologischen Fußabdruck.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div 
                      className="card h-100 text-center p-5 rounded-4 shadow-sm"
                      style={{
                        backgroundColor: '#74C365',
                        border: '3px solid #004526'
                      }}>
                      <h3 className="card-title fs-2 fw-bold mb-3 tracking-tight" style={{ color: '#004526' }}>
                          Naturrein
                      </h3>
                      <p className="card-text fs-4 font-weight-light lh-base mb-0 text-white">
                          Unsere Partnerbauern verzichten auf chemisch-synthetische Spritzmittel. Du genießt pure Frucht direkt vom Baum - ohne Kompromisse.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div 
                      className="card h-100 text-center p-5 rounded-4 shadow-sm"
                      style={{
                        backgroundColor: '#74C365',
                        border: '3px solid #004526'
                      }}>
                      <h3 className="card-title fs-2 fw-bold mb-3 tracking-tight" style={{ color: '#004526' }}>
                          Fair Gehandelt
                      </h3>
                      <p className="card-text fs-4 font-weight-light lh-base mb-0 text-white">
                          Gute Arbeit verdient gutes Geld. Wir zahlen unseren regionalen Landwirten faire Preise, die eine langfristige und gesunde Landwirtschaft sichern.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div 
                      className="card h-100 text-center p-5 rounded-4 shadow-sm"
                      style={{
                        backgroundColor: '#74C365',
                        border: '3px solid #004526'
                      }}>
                      <h3 className="card-title fs-2 fw-bold mb-3 tracking-tight" style={{ color: '#004526' }}>
                          Voller Durchblick
                      </h3>
                      <p className="card-text fs-4 font-weight-light lh-base mb-0 text-white">
                          Keine Geheimnisse: Über einen einfachen Code auf der Verpackung erfährst du sofort, von welchem Hof und welchem Feld dein Apfel genau stammt.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
      </div>
    );
  }
}

export default OurPromises;