import { useState, useRef } from 'react'
import './App.css'

import shopeeIcon from './assets/shoppee.png'
import fbIcon from './assets/facebook.png'
import instagramIcon from './assets/instagram.png'
import tiktok from './assets/tiktok.png'
import ribbon from './assets/ribbon.png'
import logo from './assets/logo.png'
import ashley from './assets/ashley.png'
import curlene from './assets/curlene.png'
import isha from './assets/isha.png'
import izah from './assets/izah.png'
import lester from './assets/lester.png'
import shem from './assets/shem.png'
import yesha from './assets/yesha.png'
import roadmap from './assets/roadmap.png'
import fbsocial from './assets/fbsocial.png'
import tiktoksocial from './assets/tiktoksocial.png'
import igsocial from './assets/igsocial.png'
import shopeesocial from './assets/shopeesocial.png'
import whitelogo from './assets/whitelogo.png'
import sleeves from './assets/stitchiessleeves.png'
import silkanik from './assets/silkanik.png'
import stitchbuds from './assets/stitchbuds.png'
import pouchies from './assets/pouchies.png'
import lapstitchie from './assets/lapstitchies.png'
import totiebag from './assets/totiebag.png'
import mapImg from './assets/map.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const socialsRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const teamRef = useRef(null);
  const storeRef = useRef(null);
  const scrollRef = useRef(null); // still fine to keep, even if CSS handles movement

  const menuItems = ['SOCIALS', 'ABOUT', 'PRODUCTS', 'TEAM', 'STORE'];

  const sections = {
    SOCIALS: socialsRef,
    ABOUT: aboutRef,
    PRODUCTS: productsRef,
    TEAM: teamRef,
    STORE: storeRef,
  };

  const sectionOffsets = {
    SOCIALS: -80,
    ABOUT: -80,
    PRODUCTS: -80,
    TEAM: -80,
    STORE: -80,
  };

  const scrollToSection = (ref, offset = 0) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const products = [
    { name: 'TOTIE BAG', description: 'It features a signature design that is spacious yet lightweight, with an inner lining and a secure zipper closure.', image: totiebag },
    { name: 'POUCHIES', description: 'It feature a three-tier compartment design with a secure zipper closure and a built-in hook for easy hanging.', image: pouchies },
    { name: 'LAPSTITCHIE', description: 'Built to accommodate a 17-inch device, it offers protective inner foam padding, a convenient front pocket, and a hand-carry option for flexible use.', image: lapstitchie },
    { name: 'STITCHIE SLEEVES', description: 'Sized for a 13-inch ipad, it provides cushioned foam protection, an added front section for small items, and an easy hand-carry feature.', image: sleeves },
    { name: 'SILKANIK', description: 'It is made from smooth silk, providing full coverage while remaining compact and lightweight for comfortable wear.', image: silkanik },
    { name: 'STITCHBUDS', description: 'It is lined with inner foam for protection, secured with a button snap closure, and designed to be compact enough for use as a keychain.', image: stitchbuds },
  ];

  const teamMembers = [
    { role: 'GENERAL MANAGER', name: 'Ashley Atencia', image: ashley },
    { role: 'FINANCE MANAGER', name: 'Izah Timkang', image: izah },
    { role: 'MARKETING STAFF', name: 'Shemaiah Vidal', image: shem },
    { role: 'OPERATIONS MANAGER', name: 'Crisha Cubos', image: isha },
    { role: 'SALES CONSULTANT', name: 'Lester Arellano', image: lester },
    { role: 'LOGISTICS COORDINATOR', name: 'Curlenne Carlos', image: curlene },
    { role: 'CASHIER STAFF', name: 'Yesha Fausto', image: yesha },
  ];

  // duplicate for smooth looping in CSS
  const loopingTeamMembers = [...teamMembers, ...teamMembers];

  const socialCards = [
    { title: "FACEBOOK", link: "https://www.facebook.com/people/Stitchies-Co/61582689445991/", img: fbsocial },
    { title: "TIKTOK", link: "https://www.tiktok.com/@stichiesco", img: tiktoksocial },
    { title: "SHOPEE", link: "#", img: shopeesocial },
    { title: "INSTAGRAM", link: "https://www.instagram.com/stitchies_co/#", img: igsocial },
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          <img src={logo} alt="Logo" className="navbar-logo" />

          <nav className="desktop-menu">
            {menuItems.map((item) => (
              <button
                key={item}
                className="nav-link"
                onClick={() => scrollToSection(sections[item], sectionOffsets[item])}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(prev => !prev)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-menu">
            {menuItems.map((item) => (
              <button
                key={item}
                className="mobile-nav-link"
                onClick={() => {
                  scrollToSection(sections[item], sectionOffsets[item]);
                  setMenuOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* SOCIALS */}
        <section ref={socialsRef} className="section social-section">
          <h2 className="section-title">SOCIALS</h2>
          <div className="social-grid">
            {socialCards.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="social-card"
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.img} alt={item.title} />
                <div className="overlay" />
                <h3>{item.title}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section ref={aboutRef} className="section about-section">
          {/* decorative ribbons */}
          <img src={ribbon} alt="" className="about-ribbon about-ribbon-1" />
          <img src={ribbon} alt="" className="about-ribbon about-ribbon-2" />
          <img src={ribbon} alt="" className="about-ribbon about-ribbon-3" />
          <img src={ribbon} alt="" className="about-ribbon about-ribbon-4" />
          <img src={ribbon} alt="" className="about-ribbon about-ribbon-5" />

          <div className="about-inner">
            {/* top label */}
            <p className="about-eyebrow">ABOUT</p>

            {/* ABOUT + logo row */}
            <div className="about-top">
              <div className="about-text-block">
                <h2 className="section-title light">STITCHIES CO.</h2>
                <p className="about-text">
                  Stitchies Co. was founded on the belief that great style and sustainable practices
                  should go hand in hand. Our name embodies this dual philosophy: craftsmanship and
                  captivation.
                </p>
              </div>

              <div className="about-logo-wrapper">
                <img src={whitelogo} alt="Stitchies Co." className="about-logo" />
              </div>
            </div>

            {/* roadmap centered above Mission / Vision */}
            <div className="about-roadmap-wrapper">
              <img src={roadmap} alt="Roadmap" className="about-roadmap" />
            </div>

            {/* Mission bottom-left, Vision bottom-right */}
            <div className="about-mv-grid">
              <div className="about-card">
                <h3>MISSION</h3>
                <p>
                  Our mission at Stitchies Co. is to achieve the creation of compact essentials
                  that lessen everyday hassle, can be carried anywhere, and reflect both function
                  and style. Through this, we aim to provide practical solutions that highlight
                  our commitment to creativity and innovation in the present market.
                </p>
              </div>

              <div className="about-card">
                <h3>VISION</h3>
                <p>
                  Our vision is to make Stitchies Co. a recognized brand in sustainable and
                  stylish compact products by turning fabric scraps into creative, fashionable,
                  and functional essentials. We encourage people to embrace eco-friendly
                  lifestyles and promote environmental stewardship that leads to lasting social
                  change.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* PRODUCTS */}
        <section ref={productsRef} className="section products-section">
          <h2 className="section-title">OUR PRODUCTS</h2>
          <div className="products-grid">
            {products.map((p) => (
              <div className="product-card" key={p.name}>
                <div className="product-image-wrapper">
                  <img src={p.image} alt={p.name} className="product-image" />
                </div>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section ref={teamRef} className="section team-section">
          <h2 className="section-title">MEET THE TEAM</h2>
          <div
            className="team-scroll hide-scrollbar"
            ref={scrollRef}
          >
            <div className="team-track">
              {loopingTeamMembers.map((m, idx) => (
                <div className="team-card" key={`${m.name}-${idx}`}>
                  <div className="team-image-wrapper">
                    <img src={m.image} alt={m.name} className="team-image" />
                  </div>
                  <div className="team-info">
                    <p className="team-role">{m.role}</p>
                    <p className="team-name">{m.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORE */}
        <section ref={storeRef} className="section store-section">
          <h2 className="section-title">STORE LOCATION</h2>
          <div className="store-map-wrapper">
            <img src={mapImg} alt="Store location" className="store-map" />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <img src={ribbon} alt="" className="footer-ribbon" />

        <div className="footer-columns">
          <div className="footer-col footer-col--links">
  <h3 className="footer-heading">Stitchies Co.</h3>

  <div className="footer-links-grid">
    <button
      className="footer-link"
      onClick={() => scrollToSection(aboutRef, sectionOffsets.ABOUT)}
    >
      About Us
    </button>
    <button
      className="footer-link"
      onClick={() => scrollToSection(productsRef, sectionOffsets.PRODUCTS)}
    >
      Products
    </button>
    <button
      className="footer-link"
      onClick={() => scrollToSection(teamRef, sectionOffsets.TEAM)}
    >
      Team
    </button>
    <button
      className="footer-link"
      onClick={() => scrollToSection(storeRef, sectionOffsets.STORE)}
    >
      Store
    </button>
  </div>
</div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">Email: stitchiescoquette@gmail.com</p>
            <p className="footer-text">Phone: (+63) 995-464-6403</p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-socials">
              <img src={fbIcon} alt="Facebook" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={tiktok} alt="TikTok" />
              <img src={shopeeIcon} alt="Shopee" />
            </div>
          </div>
        </div>

        <p className="footer-copy">COPYRIGHT © 2025 STITCHIES CO.</p>
      </footer>
    </div>
  );
}

export default App;
