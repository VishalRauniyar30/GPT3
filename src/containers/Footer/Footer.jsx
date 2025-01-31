import React from 'react'

import gpt3Logo from '../../assets/logo.svg';
import './FooterStyles.css';

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do You Want to Step in to the Future Before Others
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="gpt3_logo" />
                    <p>Crechterwood K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Term & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get In Touch</h4>
                    <p>Crechterwood K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>@2024 GPT-3. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer