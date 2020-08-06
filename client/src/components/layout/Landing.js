import PropTypes from 'prop-types'
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css"

import {
    Button,
    Navbar,
    NavDropdown,
    Nav,
    Row,
    Col,
    Image
} from 'react-bootstrap';

class Landing extends Component {
    render() {
        return (
            <div className="mainContainer">
                <nav className="site-header sticky-top py-1">
                    <div className="container d-flex flex-column flex-md-row justify-content-between">
                        {/*<a className="py-2" href="#" aria-label="Product">*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"*/}
                        {/*         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                        {/*         className="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false">*/}
                        {/*        <title>Product</title>*/}
                        {/*        <circle cx="12" cy="12" r="10"/>*/}
                        {/*        <path*/}
                        {/*            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        <img src='gallcompany.png' style={{height: '25%', width: '15%', paddingTop: '0.6%'}}/>
                        <NavDropdown title="Industries" id="basic-nav-dropdown" style={{margin: '-1% -9%  0% -9%'}}>
                            <NavDropdown.Item href="#action/3.1">Financial Services</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Aero Space & Defense</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Public Sector</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Capital Projects</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Retail</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Private Equity</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Functions" id="basic-nav-dropdown" style={{margin: '-1% -9%  0% -9%'}}>
                            <NavDropdown.Item href="#action/3.1">Analytics</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Strategy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Corporate Finance</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Marketing & Sales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Risk</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Insights" id="basic-nav-dropdown" style={{margin: '-1% -9%  0% -9%'}}>
                            <NavDropdown.Item href="#action/3.1">Business Resilience</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Artificial Intelegence</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Climate Change</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Agile Organizations</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Diversity & Inclusion</NavDropdown.Item>
                        </NavDropdown>
                        <a className="py-2 d-none d-md-inline-block" style={{marginLeft: '-5em', marginTop: '-1%'}} href="#">Careers</a>
                        <a className="py-2 d-none d-md-inline-block" style={{marginLeft: '-10em', marginTop: '-1%'}} href="#">About us</a>
                        <Button href="/login" variant="primary" style={{margin: '0.7em 2em', color: 'white'}}>Log In</Button>{' '}

                    </div>
                </nav>

                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <Image src="csr.jpg" fluid style={{border: 'solid 3px #ffe484'}} />

                        <h1 className="display-4 font-weight-normal h1content">Our firm is designed to operate as one—a single global partnership united by a strong set of values, including a deep commitment to diversity.</h1>
                        {/*<p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your*/}
                        {/*    marketing efforts with this example based on Apple’s marketing pages.</p>*/}
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <Image className="PIC" src="Dedicated.jpg" />

                    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5 Centered">Our mission on the small business initiative</h2>
                            <Row style={{paddingLeft: '30%', paddingTop: '2em'}}>
                            <p className="lead">read the article</p>
                            <a href='#'><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-align-middle"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z"/>
                            </svg></a>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5 Centered">Award winning analytic rigor and working with the best talent is how we navigate your business through obstacles</h2>
                            <Row style={{paddingLeft: '30%', paddingTop: '2em'}}>
                                <p className="lead">read the article</p>
                                <a href='#'><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-align-middle"
                                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z"/>
                                </svg></a>
                            </Row>
                        </div>
                    </div>

                    <Image className="PIC" src="navi.jpg" />
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <Image className="PIC" src="covidRes.png" />

                    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5 Centered">During the Covid era, we have extended hours for online support</h2>
                            <Row style={{paddingLeft: '30%', paddingTop: '2em'}}>
                                <p className="lead">read the article</p>
                                <a href='#'><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-align-middle"
                                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z"/>
                                </svg></a>
                            </Row>
                        </div>
                    </div>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5 Centered">Analytics and Strategy consulting are our core components, we couple it with our in-house AI engine for a winning recipe</h2>
                            <Row style={{paddingLeft: '30%', paddingTop: '2em'}}>
                                <p className="lead">read the article</p>
                                <a href='#'><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-align-middle"
                                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z"/>
                                </svg></a>
                            </Row>
                        </div>
                    </div>

                    <Image className="PIC" src="data2.jpg" />
                </div>


                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{height: '18em'}}>
                    <div className="my-3 py-3">
                        <h2 className="display-5">OUR CORPORATE PARTNERS</h2>
                    </div>
                    <div className="bg-white shadow-sm mx-auto"
                         style={{width: "70%", height: "300px", borderRadius: "35px 35px 0 0", paddingTop: "2.5em"}}>
                        <ul className="partners">
                            <li id=""><Image  style={{width: "40px"}} src="Nat_logo.svg.png" /></li>
                            <li id=""><Image  style={{width: "50px"}} src="beaute.svg" /></li>
                            <li id=""><Image  style={{width: "60px"}} src="Tesco.svg.png" /></li>

                            <li id=""><Image  style={{width: "100px"}} src="Boeing.svg.png" /></li>
                            <li id=""><Image  style={{width: "70px"}} src="diligentlabs.png" /></li>
                            <li id=""><Image  style={{width: "50px"}} src="Shell.svg.png" /></li>
                        </ul>
                    </div>
                </div>

                <footer className="container py-5">
                    <div className="row">
                        <div className="col-12 col-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                 className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false">
                                <title>Product</title>
                                <circle cx="12" cy="12" r="10"/>
                                <path
                                    d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                            </svg>
                            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Cool stuff</a></li>
                                <li><a className="text-muted" href="#">Random feature</a></li>
                                <li><a className="text-muted" href="#">Team feature</a></li>
                                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                                <li><a className="text-muted" href="#">Another one</a></li>
                                <li><a className="text-muted" href="#">Last time</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Resource</a></li>
                                <li><a className="text-muted" href="#">Resource name</a></li>
                                <li><a className="text-muted" href="#">Another resource</a></li>
                                <li><a className="text-muted" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Business</a></li>
                                <li><a className="text-muted" href="#">Education</a></li>
                                <li><a className="text-muted" href="#">Government</a></li>
                                <li><a className="text-muted" href="#">Gaming</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Team</a></li>
                                <li><a className="text-muted" href="#">Locations</a></li>
                                <li><a className="text-muted" href="#">Privacy</a></li>
                                <li><a className="text-muted" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}


export default Landing;