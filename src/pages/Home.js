import React from 'react';
import './home.css';
import { Typing } from 'typing-effect-reactjs';
import $ from 'jquery';


function Home() {
    const messages = "22번째 생일을 축하해";


    return (
        <body>

            <div className='home'>

                <div className="container">

                    
                
                    <div className="middle-part">
                        <img class="homeImg"src="./img/HBDYJ.gif"></img>
                    </div>

                    <div className="bottom-part">
                        <div className="writing">
                            <Typing
                                text={messages}
                                typeSpeed={300}
                                deleteSpeed={100}
                                disableBlinkingOnEnd={1000}
                                cursorThickness={0.08}
                                blinkingSpeed={0} />



                        </div>

                    </div>

                </div>



            </div>
            

        </body>

    )
}

export default Home
