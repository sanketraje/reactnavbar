import React from 'react';
import img1 from './img1.jpg';

function Home()
{
    return(
        
        <div className="back ">
            <div class="container">
                <div className="box">
                    <div id="blink-bg">
                    <h2 id="home">Prof.Ram Meghe Institute of Technology and Research, Badnera.</h2>
                        {/* <h1 > Home Page</h1> */}
                       
                    </div> 
                    <img src={img1} className="mg" width="600" height="300"></img>  
                    <h3>Vision</h3>
                    <p>To become a pace setting center of excellence believing in three universal values namely Synergy, Trust & Passion, with zeal to serve the Nation in the global scenario.</p>
                    <h3>Mission</h3>
                    <p>To dedicate ourselves to the highest standard of technical education & research in core & emerging engineering disciplines and strive for overall personality development of students so as to nurture not only quintessential technocrats but also responsible citizens.</p>
                </div>   
            </div>
        </div>
    )
}

export default Home;