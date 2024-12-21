import React from 'react';

import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './HeaderStyles.css'

const Header = () => (
    <div className='gpt3__header section__padding' id='home'>
        <div className="gpt3__header-content">
            <h1 className="gradient__text">
                Let&apos;s Build Something Amazing With GPT-3 OpenAI
            </h1>
            <p>
                Yet bed any for travelling assistance indulgence unpleasing. 
                Not thoughts all exercise blessing. Indulgence way everything 
                joy alteration boisterous the attachment. Party we years to order 
                allow asked of.
            </p>
            <div className="gpt3__header-content__input">
                <input type="email" placeholder='Your Email Address' />
                <button type='button'>Get Started</button>
            </div>
            <div className="gpt3__header-content__people">
                <img src={people} alt="people" />
                <p>1600 People Requested Access a Visit in Last 24 Hours</p>
            </div>
        </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
        </div>
    </div>
);

export default Header;