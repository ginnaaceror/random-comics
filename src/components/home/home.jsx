import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css'
import { Rating } from '../rate/rate'

export function Comic() {
    const [comic, setComic] = useState(null);

    useEffect(() => {
        axios.get('https://thingproxy.freeboard.io/fetch/https://xkcd.com/info.0.json')
        .then(res => setComic(res.data))
        .catch(error => console.log('Request failed 😢', error));
    }, []);

    const randomNum = (number) => {
        axios.get(`https://thingproxy.freeboard.io/fetch/https://xkcd.com/${number}/info.0.json`)
        .then(res => setComic(res.data))
        .catch(error => console.log('Request failed 😢', error));
    };
    
    console.log(comic)

    if(!comic) {
        return <div>loading...</div>
    }

    const currentNum = () => {
        randomNum(Math.round(Math.random() * (comic.num - 1) + 1))
    }

    return (
        <div className='comics-container'> 
            <h1 className='logo'>RANDOM COMICS</h1>
            <img className='comic-image'src={comic.img} alt='' />
            <h1 className='comic-title'>Title: <br/>{comic.title}</h1>
            <label className='rate-component'><Rating /></label>
            <button className='comic-button' onClick={currentNum}>Next comic!</button>
        </div>
    )

}