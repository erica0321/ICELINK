import React from "react";
import myImg from "./img/jjanggu.jpg";
import "./style/MyPage.css";

function MyPage(props) {
  return (
    <div class="top-container">
      <h2>personal portfolio</h2>
      <div class="myInfo-left">
        <div class="myInfo-first">
          <div id="myImage">
            <img src={myImg}></img>
          </div>
          <div id="myName"> junjoy</div>
          <div class="myOther">
            <div id="myDream">dream : product manager</div>
            <div id="myStack">stack : python </div>
          </div>
        </div>
        <hr />
        <div class="myInfo-link">
          <div id="mySite">More about</div>
          <div class="myOther">
            <div id="myInfo-github">
              <a href="https://github.com/mmmjunjoy">- github -</a>
            </div>
            <div id="myInfo-blog">
              <a href="https://velog.io/@sjb2010">- blog -</a>
            </div>
          </div>
        </div>
        <hr />
        <div class="myInfo-projectsum">
          <div id="projectsum-text">project summary</div>
          <div class="myOther">
            <div class="projectsum">
              <div id="projectsum-title">- dacon</div>
              <div id="projectsum-info">모델 성능 높이기 대회 진행 중</div>
            </div>
            <div class="projectsum">
              <div id="projectsum-title">- icelink</div>
              <div id="projectsum-info">frontend 제작 진행 중</div>
            </div>
          </div>
        </div>
      </div>

      <div class="myInfo-middle">
        <div> my short introduce</div>
        <div>
          -- 이 부분이 사용자 입장에서 자유롭게 서술하는 부분-- 안녕하세요 ,
          저는 한국외국어대학교를 재학중인 심준보입니다. 저의 꿈은 product
          manager이며 , 이를 위해 다양한 분야를 경험중입니다. 현재 , 주는
          backend영역을 공부중이며 , 부가적인 요소로 ai 분야와 frontend 및
          데이터 전처리를 학습하고 있습니다.
        </div>
        <div> my main introduce</div>
        <div>
          -- 이 부분이 크롤링한 데이터를 이용하여 종합해주는 부분-- stack :
          python , java , c interesting : ai , data processing , frontend ,
          backend project : develope icelink platform , greenwashing detect
          service{" "}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
