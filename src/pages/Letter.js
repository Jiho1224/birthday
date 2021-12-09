import React, { useState } from 'react'
import './Letter.css'
import Popup from './Popup';

function Home() {

    const [buttonPopup0, setButtonPopup0] = useState(false);

    const [buttonPopup1, setButtonPopup1] = useState(false);

    const [buttonPopup2, setButtonPopup2] = useState(false);

    const [buttonPopup3, setButtonPopup3] = useState(false);

    const [buttonPopup4, setButtonPopup4] = useState(false);

    const [buttonPopup5, setButtonPopup5] = useState(false);

    const [buttonPopup6, setButtonPopup6] = useState(false);

    const [buttonPopup7, setButtonPopup7] = useState(false);

    const [buttonPopup8, setButtonPopup8] = useState(false);

    const [buttonPopup9, setButtonPopup9] = useState(false);

    const [buttonPopup10, setButtonPopup10] = useState(false);

    const [buttonPopup11, setButtonPopup11] = useState(false);

    const [buttonPopup12, setButtonPopup12] = useState(false);

    const [buttonPopup13, setButtonPopup13] = useState(false);

    const zero = () => {
        setButtonPopup0(true)
    }

    const first = () => {
        setButtonPopup1(true)
    }
    const second = () => {
        setButtonPopup2(true)
    }

    const third = () => {
        setButtonPopup3(true)
    }

    const fourth = () => {
        setButtonPopup4(true)
    }

    const fifth = () => {
        setButtonPopup5(true)
    }

    const six = () => {
        setButtonPopup6(true)
    }

    const seven = () => {
        setButtonPopup7(true)
    }

    const eight = () => {
        setButtonPopup8(true)
    }

    const nine = () => {
        setButtonPopup9(true)
    }

    const ten = () => {
        setButtonPopup10(true)
    }

    const eleven = () => {
        setButtonPopup11(true)
    }
    const twelve = () => {
        setButtonPopup12(true)
    }

    const thirteen = () => {
        setButtonPopup13(true)
    }


    return (
        <div className='letter'>
            <div class="dotWrapper">
                <div class="dot" onClick={first}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>

                    <p>윤지야 생일축하해!!! 방학땐 그렇게 자주봤는데 지금은 통 못봤네ㅠㅠ<br />겨울에는 다시 자주 봅시다~~맛있는거 많이 먹어랑
                        <br />-희연-</p>

                </Popup>

                <div class="dot" onClick={second}><img src="./img/message/쪽지.png" /></div>
                <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>

                    <p>울 윤지!! 일년에 한번 얼굴 비춰줄까 말까한 연예인 윤지!! 요즘 뭐야 뭐야 미모에 완전 물 올랐어 이제 진짜 서울여자야 뭐야~
                        <br />오면 나 서울말 알려줘 우리 종강하면 무조건 송정 가야 하는 거 알지?
                        <br />하 이건 진짜 아무한테도 안알려준 나의 비밀 계획이었는데.. 우리 이번에 가서 술병으로 트리 만들자🎄
                        <br />어때 너무 멋있고 너무 감성 있고 너무 귀엽지 그럴 줄 알았어 헌내기들 오랜만에 술 게임도 해야 하니깐 슈퍼인싸 윤지가 요즘 애들은 뭐하고 술 마시는지 알아오도록 해
                        <br />생일 완전 축하하고 맛있는 거 많이 먹어~ 만나면 생일빵 기대해 알랴뷰 윤지💜
                        <br /> - 세영 -</p>

                </Popup>

                <div class="dot" onClick={third}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
                    <p>
                        세젤귀 윤지야 네 앞에 펼쳐진 모든 날이 행복과 사랑으로 가득 차길💛
                        <br /> 생일축하해 사랑해
                        <br /> -채연-
                    </p>


                </Popup>

                <div class="dot" onClick={fourth}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}>
                    <p>
                        나보다 8일이나 늦게 태어난 동생 김윤지!! ㅋㅎㅋㅎㅋㅋ
                        <br />생일 넘넘 축하해!! 맛있는 거 많이 먹고 오늘 하루는 너가 주인공이니까 제일 행복한 하루 되길 바라~~ 생일 축하해~~
                        <br /> -혜민-
                    </p>


                </Popup>
                <div class="dot" onClick={fifth}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}>
                    <p>
                        윤지야 생일 축하한다
                        <br />우리는 영원히 피를 나눈 의형제다 잊지말도록해
                        <br />내가 제일 축하하는거 알지???? 사랑해❤❤
                        <br />그럼 이번년도도 내 버블 상대가 되어줘
                        <br />-정민-
                    </p>


                </Popup>
            </div>

            <div class="dotWrapper">
                <div class="dot" onClick={six}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup6} setTrigger={setButtonPopup6}>

                    <p>
                        안녕 윤지야
                        너의 22번째 생일을 진심으로 축하해!!!
                        <br />자전거 가르쳐줘서 고마워 요즘 자전거 타는데 빠졌잖아^^
                        다음에도 놀러 가자~❤‍🔥
                        <br /> - 유진 -
                    </p>

                </Popup>

                <div class="dot" onClick={seven}><img src="./img/message/쪽지.png" /></div>
                <Popup trigger={buttonPopup7} setTrigger={setButtonPopup7}>

                    <p>
                        김윤지 생일축하해 ~!~!~!
                        <br />박지호가 엄청난 걸 만들고 있다고하군,, 신기해,,
                        <br />비록 올해 생일은 함께 축하해주지는 못하지만 마음만은 함께하고 있다구 💗💗
                        <br />어때 이번 생일은 애들이 케이크를 해주더니 ? (ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅈㅅ) 우리 90살 100살 생일까지도 함께 하자 살앙해
                        <br />- 가영 -
                    </p>

                </Popup>

                <div class="dot" onClick={zero}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup0} setTrigger={setButtonPopup0}>
                    <p>
                        꽝
                    </p>


                </Popup>

                <div class="dot" onClick={eight}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup8} setTrigger={setButtonPopup8}>
                    <p>
                        뮨지 생일축하해🥳🥳
                        <br />우리 뮨지 너무 많이 변해서 지나가서 마주치면 못 알아보겠음 증말! 빨랑 보고싶ㅍ다 나랑 놀자💖
                        <br />시험기간이지만 오늘 하루는 다 접고 즐겨잇~~~!~!~!!!
                        <br />- 수정 -
                    </p>


                </Popup>
                <div class="dot" onClick={nine}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup9} setTrigger={setButtonPopup9}>
                    <p>
                        안녕 윤지야 생일 정말 축하해
                        <br/>오늘은 1년에 한 번 뿐인 너의 날이니까 오늘 하루는 축하도 많이 받고 즐거운 일만 가득했으면 좋겠다
                        <br/>여러 해를 함께 했는데 이렇게 제대로 축하의 말을 전하는건 처음이네
                        <br/>그동안 나랑 많은 시간들을 보내줘서 고마워
                        네가 가진 많은 고민이나 걱정들이 언젠가 모두 풀리길 바라
                        내가 멀리서나마 응원할게
                        <br/>네 친구로서 네가 언제나 행복했으면 좋겠어 진심이야
                        안녕
                        <br/> - 소담 - 
                    </p>


                </Popup>
            </div>
            <div class="dotWrapper">
                <div class="dot" onClick={ten}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup10} setTrigger={setButtonPopup10}>

                    <p>
                    융지야 생일축하해💖 
                    <br/>지호가 쪽지 써달라길래 이 할미는 포스트잇 꺼내고 잇엇지 뭐야 ㅎㅎ 
                    <br/>학교에서 맨날 맨날 보던 찡구들이 이제 생일 때만 한번씩 보는게 너무 아쉽지만 
                    다들 열심히 잘 살고 잇는거 같아 안심도 된당 히히 
                    <br/>생일 진짜 축하하구 늘 그래야하지만 오늘은 특히 더 행복한 하루엿음 좋겟당😊
                    <br/> - 성령 -
                    </p>

                </Popup>

                <div class="dot" onClick={zero}><img src="./img/message/쪽지.png" /></div>
                <Popup trigger={buttonPopup0} setTrigger={setButtonPopup0}>

                    <p>
                        꽝!
                    </p>

                </Popup>

                <div class="dot" onClick={eleven}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup11} setTrigger={setButtonPopup11}>
                    <p>
                    안녕 윤지야 너의 생일을 맞아 내가 짧게나마 편지를 써보았어ㅎㅎ
                    <br/>내가 써줘서 너도 좋지? 다 알고있어❤ 윤지야 너무너무너무 보고싶어,, 
                    <br/>나를 받아줄 사람이 없어ㅠㅠ 너뿐이야 자기야 
                    <br/>고등학교 때도 그렇구 성인이 돼서도 너랑 친구인건 정말 내 최고의 행운인것같아 
                    <br/>내가 잘 표현하진 못하지만 너네들이 있어서 정말 너무 좋아 ㅎㅎ 
                    <br/>오늘 하루도 행복하게 잘 보내구 생일 축하해 윤지야 사랑해 쪽❤
                    <br/> - 승희 - 
                    </p>


                </Popup>

                <div class="dot" onClick={twelve}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup12} setTrigger={setButtonPopup12}>
                    <p>
                    융지야 생일 축하해 🤍❤🤍
                    <br/>오늘 하루 잘 보냈어 ? 내가 없어서 많이 아쉬웠을테지만 일요일 점심 맛있게 먹자 먹고 싶은 거 얼릉 정해둬 ㅠ
                    <br/>매번 12월 생일들 모아가지구 제대로 축하도 못 해줬던 거 같은데 이번엔 만날 수 있어서 넘나 좋당 ㅎㅎ 
                    <br/>이런 말 하는 거 우리 사이에 조금 부끄럽지만 
                    <br/>6년 동안 항상 꿋꿋이 뭔가 열심히 하는 거 보면 진짜 멋진 거 같애 
                    <br/>벌써 22살 1년이 끝나가는데 올해도 잘 보내느라 너무 고생했고 내년 23살도 나랑 같이 행복하게 보내자. 
                    <br/>오래 보자 🔥🔥
                    <br/> - 은진 -
                    </p>


                </Popup>
                <div class="dot" onClick={thirteen}><img src="./img/message/쪽지.png" /></div>

                <Popup trigger={buttonPopup13} setTrigger={setButtonPopup13}>
                    <p>
                        안뇽 윤지! 생일 축하해!
                        <br/>나는 너가 이런 호들갑을 싫어하는 줄 알고 이때까지 이런걸 해볼 생각을 잘 못했단 말이지..
                        <br/>사실 기획은 꽤 전부터 했는데 공모전 하느라 학기 공부하느라.. 하다가..
                        <br/>부랴부랴 만들게 돼서 생각보다 정말 누추한 웹이 된 거 같아 미안하다..
                        <br/>다음부터는 짧은 시간에도 화려하게 만들 수 있도록 
                        <br/>실력을 갈고 닦아서 너에게 선사해줄게
                        <br/>
                        <br/>항상 잘 챙겨줘서 고마워 ㅎㅎ 원래 사람 안 만나고 사는 찐딴데 너 덕에 밖에도 나가고
                        <br/>그러고 살아서 그나마 사람같이 사는 거 같기도 하고 ㅎㅎㅎㅎ
                        <br/>너는 나한테 신세 진게 있다는 말도 안 되는 말을 하지만
                        <br/>나는 항상 너한테 신세를 지고 있는거 같아
                        <br/>그래서 뭐라도 더 해주고 싶은데 너가 부담스러워 하니까...
                        <br/>원래 10일에 만나서 보여주려고 했는데
                        <br/>너가 바빠서 못 만나게 되는 바람에 어떻게 보여줄지 고민이야
                        <br/>
                        <br/>고러면 너한테 안정적인 서비스가 제공되기를 바라면서
                        <br/>다시 한 번 생일 축하하고!! 뿅!!!
                        <br/>- 지호 -
                        
                    </p>


                </Popup>
            </div>





        </div>
    )
}

export default Home
