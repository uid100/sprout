import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../assets/css/cardList.css';

import '../assets/24_01/cuy/Cs119'

const data = require('../data/data.json'); // Import the JSON data

const CardList = () => {
    return (
        <div className="container">
            <div className="row">
                {data.projects.map((card) => (
                    <div key={card.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className='card-header blue-card-header'>
                                <h5 className="card-title">{card.title}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{card.description}</p>
                                <ul>
                                    {data.pages.map(pg => {
                                        const url = process.env.PUBLIC_URL + '/html/' + pg.org + '/' + pg.course + '/' + pg.filename
                                        if (card.title === pg.course) {
                                            console.log("url:" + url);
                                            return <li><a href={url}>{pg.filename}</a></li>;
                                        }
                                        else { console.log(card.title); }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardList;
