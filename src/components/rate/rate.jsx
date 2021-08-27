import React, { useState } from 'react';
import './rate.css'
import { FaStar } from 'react-icons/fa'

export function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null); 

    return (
        <div>
            <h2 className='title-rating'>Rating</h2>
            <div>
                {[...Array(5)].map((star, index) => {
                const ratingValue= index += 1;

                    return (
                        <label>
                            <input 
                                type='radio' 
                                name='rating' 
                                value={ratingValue} 
                                onClick={() => setRating(ratingValue)}
                            />
                            <FaStar 
                                className='star' 
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={40}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
                <div>The rating is: {rating}</div>
            </div>
        </div>
    )
}
