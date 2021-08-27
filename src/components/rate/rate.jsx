import React, { useState } from 'react';
import './rate.css'
import { FaStar } from 'react-icons/fa'

export function Rating() {
    const [rating, setRating] = useState(null);
    
    return (
        <div>
            <h2>Calification</h2>
            <div>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label>
                        <input type='radio' name='rating' value={ratingValue} />
                        <FaStar className='star' size={40}/>
                        </label>
                    )
                })}
            </div>
        </div>
    )
}