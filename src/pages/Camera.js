import React from 'react'
import Webcam from 'react-webcam';
import { useRef, useEffect, useState } from 'react'
import './Camera.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function Home() {
    var num = 0;
    const webRef = useRef(null);
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 800, height: 600 } })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => { console.error(err); })
    }

    const takePhoto = () => {
        const width = 400;
        const height = width / (4 / 3);

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);

        setHasPhoto(true);
    }

    useEffect(() => {
        getVideo();
    }, [videoRef])

    const downLoad = ()=> {
        domtoimage
        .toBlob(document.querySelector('.pic2'))
        .then((blob)=>{saveAs(blob,'birthday'+num+'.png');})

        num = num+1;
        
        
    }

    return (
        <div className='camera'>

            <div class="_camera">

                <video class="thisVideo" ref={videoRef}></video>
                <button onClick={takePhoto}>snap</button>
            </div>

            <br />
            <div className={"result" + (hasPhoto ? 'hasPhoto' : '')}>


                <div class="item" onClick={downLoad}>
                    <div class="polaroid"><canvas className="pic2" ref={photoRef}></canvas>
                        <div class="caption">2021.12.10 (Friday)</div>
                    </div>
                </div>
                

            </div>




        </div>
    )
}

export default Home