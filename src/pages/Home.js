import React from 'react';
import './home.css';
import { Typing } from 'typing-effect-reactjs';


function Home() {
    const messages="22번째 생일을 축하해";

    return (
        <div className='home'>
            
            
            <div className="container">
                
                <div className="middle-part">
                
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
    )
}

export default Home
