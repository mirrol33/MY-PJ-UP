// main.js
const mainComp = {
  template: `
    <div class="main-wrap">
    <section class="section01"></section>
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
    </div>
    `,
    methods: {
        goPage(){
            location.href = "./about.html";
        }
    },
};

export default mainComp;
