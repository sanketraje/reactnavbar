import React from 'react';
import Bus from './Bus.jpg';

function Services()
{
    return(
        <div className="back ">
            <div className="section">
                <div className="box">
                    <div id="blink-bg">
                        <h1>Our Services </h1>
                        <img src={Bus} className="mg" width="800" height="300"></img> 
                        <ul>
                            <li>The institute is located on the NH-6 around 11 km from the Amravati city.</li>
                            <li>The institute is well equipped with the bus services.</li>
                            <li>For the ease of the students from various location in the city the institute has co-ordinated with the AMC city bus.</li>
                            <li>The city bus provides facility to the students for the keep up and drop up service.</li>
                            <li>The city bus has provided a route time table so that it will be helpful for the students to known the timings of the bus services.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;