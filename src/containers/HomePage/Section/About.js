import React, { Component } from "react";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Classical Music for Brain Power</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/iUohO2MSot8"
              title="Mozart - Classical Music for Brain Power"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
  <div className="program">
    <section className="work">
      <h3><em>Eine kleine Nachtmusik</em>, K. 525</h3>
      <ul>
        <li><time>00:00</time> I. Allegro</li>
        <li><time>05:58</time> III. Minuetto</li>
        <li><time>08:21</time> IV. Rondò</li>
      </ul>
      <p className="credits">
        Opole Philharmonic Orchestra — Conductor: Werner Stiefel
      </p>
    </section>

    <section className="work">
      <h3>Rondò in D Major, K. 485 (live recording)</h3>
      <ul>
        <li><time>11:31</time> Rondò</li>
      </ul>
      <p className="credits">Piano: Vadim Chaimovich</p>
    </section>

    <section className="work">
      <h3>Flute and Harp Concerto in C Major, K. 299</h3>
      <ul>
        <li><time>18:12</time> I. Allegro</li>
        <li><time>28:39</time> II. Andantino</li>
        <li><time>36:47</time> III. Rondò. Allegro</li>
      </ul>
      <p className="credits">
        Harp: Ursula Mazurek — Opole Philharmonic Orchestra — Conductor: Silvano Frontalini
      </p>
    </section>

    <section className="work">
      <h3>Piano Sonata No. 10 in C Major, K. 330 (live recording)</h3>
      <ul>
        <li><time>47:22</time> I. Allegro moderato</li>
        <li><time>51:59</time> II. Andante cantabile</li>
        <li><time>58:34</time> III. Allegretto</li>
      </ul>
      <p className="credits">Piano: Vadim Chaimovich</p>
    </section>

    <section className="work">
      <h3><em>Lucio Silla</em>, K. 135: Ouverture</h3>
      <ul>
        <li><time>1:02:35</time> Ouverture</li>
      </ul>
      <p className="credits">
        Opole Philharmonic Orchestra — Conductor: Alexandr Tracz
      </p>
    </section>

    <section className="work">
      <h3>Flute Concerto No. 1 in G Major, K. 313</h3>
      <ul>
        <li><time>1:11:02</time> I. Allegro maestoso</li>
        <li><time>1:20:05</time> III. Rondò – Minuetto</li>
      </ul>
      <p className="credits">
        Flute: Ubaldo Rosso — Opole Philharmonic Orchestra — Conductor: Silvano Frontalini
      </p>
    </section>

    <section className="work">
      <h3>Piano Sonata No. 12 in F Major, K. 332 (live recording)</h3>
      <ul>
        <li><time>1:27:50</time> I. Allegro</li>
        <li><time>1:35:17</time> II. Adagio</li>
        <li><time>1:40:50</time> III. Allegro assai</li>
      </ul>
      <p className="credits">Piano: Vadim Chaimovich</p>
    </section>
  </div>
</div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
