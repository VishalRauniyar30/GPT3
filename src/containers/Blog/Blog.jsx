import React from 'react';

import Article from '../../components/Article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './BlogStyles.css';

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A Lot is Happening, <br />We are Blogging About It.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date='December 07 2024' text='GPT-3 And Open AI is the Future. Let us Explore How it is?' />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date='December 07 2024' text='GPT-3 And Open AI is the Future. Let us Explore How it is?' />
                    <Article imgUrl={blog03} date='December 07 2024' text='GPT-3 And Open AI is the Future. Let us Explore How it is?' />
                    <Article imgUrl={blog04} date='December 07 2024' text='GPT-3 And Open AI is the Future. Let us Explore How it is?' />
                    <Article imgUrl={blog05} date='December 07 2024' text='GPT-3 And Open AI is the Future. Let us Explore How it is?' />
                </div>  
            </div>
        </div>
    )
}

export default Blog