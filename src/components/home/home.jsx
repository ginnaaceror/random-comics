import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css'

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
        randomNum(comic.num - 1)
    }

    return (
        <div className='comics-container'> 
            <h1 className='logo'>RANDOM COMICS</h1>
            <img className='comic-image'src={comic.img} alt='' />
            <div className='comic-title'>Title: {comic.title}</div>
            <button className='comic-button'onClick={currentNum}>🔀</button>
        </div>
    )

}