import React from 'react';
    import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
    import './App.css';
    import About from './About';
    import Testimonials from './Testimonials';
    import IntakeForm from './IntakeForm';
    import quiltImage1 from './assets/quilt1.jpg'; // Import the images
    import quiltImage2 from './assets/quilt2.jpg';
    import quiltImage3 from './assets/quilt3.jpg';

    function App() {
      return (
        <Router>
          <div className="App">
            <header>
              <h1>Status Thimble Quilts</h1>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/intake">Intake Form</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </header>
            <main>
              <Routes>
                <Route path="/" element={
                  <>
                    <section className="hero">
                      <h2>Welcome to Status Thimble Quilts</h2>
                      <p>Crafting vibrant, handcrafted quilts inspired by Kaffe Fassett's bold designs.</p>
                      <button>Learn More</button>
                    </section>
                    <Testimonials />
                  </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={
                  <section className="services">
                    <h2>Our Services</h2>
                    <ul>
                      <li>Edge-to-Edge Quilting</li>
                      <li>Custom Quilting</li>
                      <li>Quilt Repair</li>
                      <li>Quilt Classes</li>
                    </ul>
                  </section>
                } />
                <Route path="/intake" element={<IntakeForm />} />
                <Route path="/contact" element={
                  <section className="contact">
                    <h2>Contact Us</h2>
                    <p>Reach out to us for custom orders and inquiries.</p>
                  </section>
                } />
              </Routes>
            </main>
            <footer>
              <p>&copy; 2024 Status Thimble Quilts</p>
            </footer>
          </div>
        </Router>
      );
    }

    export default App;
