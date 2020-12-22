import React, { useState, useEffect } from 'react';
import './Paginator.css';

function Details({ itemperpage, totalitem, paginator }) {

    var items = []

    var totalpages = Math.ceil(totalitem / itemperpage);
    for (let i = 1; i < totalpages; i++) {
        items.push(i)
    }

    return (

        <div className="details">
            {
                items.map(e =>
                    <button className="buttons" onClick={() => paginator(e)}>{e}</button>

                )
            }

        </div>

    )
}
export default Details;
