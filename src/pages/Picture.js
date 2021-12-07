import React from 'react'
import ReactDOM from 'react-dom';
import './Picture.css';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom"
import $ from 'jquery'

function Home() {
    function onClickOne(e){
        $('.wrapper').empty();
        let temp_html = `<div class="item">
        <div class="polaroid"><img src="./img/고1-1.jpg" />
            <div class="caption">예나 지금이나 윙크 잘하는 귀여운 윤지</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고1-7.jpg" />
            <div class="caption">개학한지 일주일만에 왜 이런 사진을</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고1-3.jpg" />
            <div class="caption">2017년 1월 2일. 학교</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고1-5.jpg" />
            <div class="caption">커여운 윙크 윤지2</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고1-4.jpg" />
            <div class="caption">윤지가 아직도 얘기하는 '그' 사진</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고1-6.jpg" />
            <div class="caption">영화관에서! 고1 현장학습 in 해운대</div>
        </div>
    </div>`
        $('.wrapper').append(temp_html);
    }

    function onClickTwo(e){ 
        $('.wrapper').empty();
        let temp_html = `<div class="item">
        <div class="polaroid"><img src="./img/고2-1.jpg" />
            <div class="caption">2017.12.25 크리스마스 in 경주월드</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고2-2.jpg" />
            <div class="caption">Merry Christmas!</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고2-3.jpg" />
            <div class="caption">Merry Christmas 2</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/2019-1.jpg" />
            <div class="caption">2019년 3월 3일 강남에서 </div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/20211206.jpg" />
            <div class="caption">놀랍게도 2019년 크리스마스</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/2019-2.jpg" />
            <div class="caption">단체샷!</div>
        </div>
    </div>

    

    `
        $('.wrapper').append(temp_html);
    }

    function onClickThree(e){ 
        $('.wrapper').empty();
        let temp_html = `<div class="item">
        <div class="polaroid"><img src="./img/고2-1.jpg" />
            <div class="caption">2017.12.25 크리스마스 in 경주월드</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고2-2.jpg" />
            <div class="caption">Merry Christmas!</div>
        </div>
    </div>

    <div class="item">
        <div class="polaroid"><img src="./img/고2-3.jpg" />
            <div class="caption">Merry Christmas 2</div>
        </div>
    </div>

    `
        $('.wrapper').append(temp_html);

    }

   

    
    return (
        <div className='picture'>
            <br />
            <div class="row">

                <div class="rgyPostIt" onClick={onClickOne}> # 고1</div>
                <div class="rgyPostIt" onClick={onClickTwo}> # 고2, 2019년</div>
                <div class="rgyPostIt" onClick={onClickThree}> # 2021년</div>
                
            </div>

            <div class="wrapper">


                <div class="item">
                    <div class="polaroid"><img src="./img/고1-1.jpg" />
                        <div class="caption">예나 지금이나 윙크 잘하는 귀여운 윤지</div>
                    </div>
                </div>

                <div class="item">
                    <div class="polaroid"><img src="./img/고1-7.jpg" />
                        <div class="caption">개학한지 일주일만에 왜 이런 사진을</div>
                    </div>
                </div>

                <div class="item">
                    <div class="polaroid"><img src="./img/고1-3.jpg" />
                        <div class="caption">2017년 1월 2일. 학교</div>
                    </div>
                </div>

                <div class="item">
                    <div class="polaroid"><img src="./img/고1-5.jpg" />
                        <div class="caption">커여운 윙크 윤지2</div>
                    </div>
                </div>

                <div class="item">
                    <div class="polaroid"><img src="./img/고1-4.jpg" />
                        <div class="caption">윤지가 아직도 얘기하는 '그' 사진</div>
                    </div>
                </div>

                <div class="item">
                    <div class="polaroid"><img src="./img/고1-6.jpg" />
                        <div class="caption">영화관에서! 고1 현장학습 in 해운대</div>
                    </div>
                </div>



            </div>
            

        </div>
    )

}


export default Home
