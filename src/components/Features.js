import React from "react"

const Features = () => (
  <section className="hero is-halfheight">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title is-centered">
                  Design Guidelines
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                  The design and analysis guidelines provided in the design center allow you to get to simulation and construction much faster,
                  and with an intuitive understanding of the circuitry to be built.
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title is-centered">
                  Multiple Disciplines
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                  The design center holds designs from multiple different electrical engineering disciplines, providing reference guides to sharpen
                  your skills as a multi-faceted designer and construct circuitry quickly.
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title is-centered">
                  Intuition Aiding
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                  The guides in the design center are meant to aid your intuition as a designer. Mathematically-based and detailed circuit diagrams allow
                  you to understand the step-by-step mechanics for circuitry design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default Features
