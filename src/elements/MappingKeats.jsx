import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/FooterTwo";

const SocialShare = [
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/thanah-raveendran'},
]

class MappingKeats extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Mapping Keats' />

                <Header headertransparent="header--transparent" colorblack="color--black" logo="symbol-dark" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Mapping Keats</h2>
                                    <p>UCF 2022 Capstone</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Mapping Keats</h2>
                                        <p className="subtitle">Full Stack Mapping Visualization Tool</p>
                                        <p>A web application that visualizes all 252 of John Keats’s letters in a variety of forms. Aims to create a resource that is equally accessible and informative that allows users to investigate individual letters in great detail based on verified data, with functionality ranging from viewing original letter images, transcriptions of letters and even geographical tracking of letter movements throughout the centuries. Below is a video demo of the application at work.</p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            
                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4>Website</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Program</span>
                                                <h4>UCF CS Capstone</h4>
                                            </div>
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30">
                                            <img src="./assets/images/portfolio/mapping-keats-video.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ToXFbM3Hfto' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                        <div className="thumb mb--30">
                                            <img src="./assets/images/portfolio/mapping-keats-demo1.jpg" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src="./assets/images/portfolio/mapping-keats-demo2.jpg" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src="./assets/images/portfolio/mapping-keats-demo3.jpg" alt="Portfolio Images"/>
                                        </div>
                                        <div className="thumb mb--30">
                                            <img src="./assets/images/portfolio/mapping-keats-demo4.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Related Work */}
                
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />  


            </React.Fragment>
        )
    }
}
export default MappingKeats;
