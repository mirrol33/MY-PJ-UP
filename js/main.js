// main.js
const mainComp = {
  template: `
    <div class="main-wrap">
    <section class="section01">
        <div class="section-border" style="clip-path: url(#section-divider-66451522b25877729d78861b);">
        <img src="./images/main/main.jpg" alt="">
        </div>
        <div class="white-up"><img src="./images/main/white_up.png" alt="white up logo"></div>
    </section>
    <section class="section02">
    <div class="text-box">
    <h2>A Dream Of Adventure</h2>
    <p>
    A 78-year-old curmudgeonly balloon salesman, is not your average hero. When he ties thousands of balloons to his house and flies away to the wilds of South America, he finally fulfills his lifelong dream of adventure. But after Carl discovers an 8-year-old stowaway named Russell, this unlikely duo soon finds themselves on a hilarious journey in a lost wo
    </p>
    </div>
    </section>
    <section class="section03">
        <div class="card-box">
            <ul>
                <li @click="goPage">
                    <em>Carl Fredricksen</em>
                </li>
                <li @click="goPage">
                    <em>Russell</em>
                </li>
                <li @click="goPage">
                    <em>Dug</em>
                </li>
                <li @click="goPage">
                    <em>Charles Muntz</em>
                </li>
            </ul>
        </div>
    </section>
    <svg class="section-divider-svg-clip">
    <clipPath id="section-divider-66451522b25877729d78861b" clipPathUnits="objectBoundingBox">
      <path class="section-divider-clip" d="M-1.0044999999999997, 0.9339999999999999 L-1.0044999999999997, 0.9339999999999999 l0,0 c0,0 0.25075,0.066 0.5015,0.066 s0.5015,-0.066 0.5015,-0.066 l0,0l0,0 c0,0 0.25075,0.066 0.5015,0.066 s0.5015,-0.066 0.5015,-0.066 l0,0l0,0 c0,0 0.25075,0.066 0.5015,0.066 s0.5015,-0.066 0.5015,-0.066 l0,0 L1, -1 L0, -1 z"></path>
    </clipPath>
  </svg>
    </div>
    `,
    methods: {
        goPage(){
            location.href = "./about.html";
        }
    },
};

export default mainComp;
