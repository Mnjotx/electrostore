import card1 from './images/amex.png'
import card2 from './images/paypal.png'
import card3 from './images/master-card.png'
import card4 from './images/visa.png'
import card5 from './images/discover.png'
import logo from "./images/WhatsApp Image 2026-02-12 at 11.08.16 AM.png"
import { Link } from 'react-router-dom'



export const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light mt-5 pt-5 pb-4">
                <hr className="m-0 border-secondary d-none" />

                <div className="container">
                  
                    <div className="row gy-4 mt-2">

                    
                        <div className="col-lg-3 col-12 col-md-6 mb-4 mb-md-0">
                           <img height="70px" src={logo} className="mb-3" alt="Logo"></img>
                            <p className="text-white-50">
                                We are here to serve you
                            </p>
                        </div>

                        {/* PRODUCTS */}
                        <div className="col-lg-3 col-6 col-md-6 mb-4 mb-md-0">
                            <h5 className="fw-semibold mb-4 text-uppercase fs-6" style={{ letterSpacing: '1px' }}>Products</h5>
                            <ul className="list-unstyled d-flex flex-column gap-3">
                                <li><Link className="text-decoration-none text-white-50" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'} to={`/related?id=69f97d54c7b314e3bd5cfd1c`}>MOBILES</Link></li>
                                <li><Link className="text-decoration-none text-white-50" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'} to={`/related?id=69fc216095f242419555e674`}>LEDs</Link></li>
                                <li><Link className="text-decoration-none text-white-50" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'} to={`/related?id=6a01696dd50408a5bdc4e6c1`}>AIRPODS</Link></li>
                                <li><Link className="text-decoration-none text-white-50" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'} to={`/related?id=69fc207795f242419555e641`}>LAPTOPS</Link></li>
                            </ul>
                        </div>

                        {/* FEATURES */}
                        <div className="col-lg-3 col-6 col-md-6 mb-4 mb-md-0">
                            <h5 className="fw-semibold mb-4 text-uppercase fs-6" style={{ letterSpacing: '1px' }}>Features</h5>
                            <ul className="list-unstyled d-flex flex-column gap-3">
                                <li><Link className="text-decoration-none text-white-50" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'} to={`/about`}>About Us</Link></li>
                                <li><Link className="text-decoration-none text-white-50" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'} to={`/contact`}>Contact Us</Link></li>
                                <li><Link className="text-decoration-none text-white-50" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'} to={`/myorder`}>Order</Link></li>
                                <li><Link className="text-decoration-none text-white-50" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'} to={`/about`}>Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        {/* HELP */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="fw-semibold mb-3 text-uppercase fs-6" style={{ letterSpacing: '1px' }}>
                                We are here to help you
                            </h5>
                            <p className="text-white-50 mb-3">
                                If any problem, email us
                            </p>

                            <input
                                type="email"
                                className="form-control mb-3 bg-dark text-light border-secondary shadow-none"
                                placeholder="Your email"
                            />
                            <button className="btn btn-primary w-100 fw-semibold text-uppercase py-2" style={{ letterSpacing: '1px' }}>
                                Send
                            </button>
                        </div>
                    </div>

                    <hr className="my-5 border-secondary" />

                    <div className="row align-items-center gy-3 pb-3">

                        
                        <div className="col-md-4 text-center text-md-start">
                            <p className="mb-0 text-white-50 small">
                                &copy; ElectoMart 2025. All Rights Reserved
                            </p>
                        </div>

                       
                        <div className="col-md-4 text-center">
                            <div className="d-flex justify-content-center gap-4 fs-5 text-white-50">
                                <i className="fa-brands fa-facebook" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.color = '#1877F2'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}></i>
                                <i className="fa-brands fa-instagram" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.color = '#E4405F'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}></i>
                                <i className="fa-brands fa-x-twitter" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}></i>
                            </div>
                        </div>

                    
                        <div className="col-md-4 text-center text-md-end">
                            <div className="d-flex justify-content-center justify-content-md-end gap-3 opacity-75">
                                <img src={card1} width="45" alt="amex" />
                                <img src={card2} width="45" alt="paypal" />
                                <img src={card3} width="45" alt="mastercard" />
                                <img src={card4} width="45" alt="visa" />
                                <img src={card5} width="45" alt="discover" />
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
