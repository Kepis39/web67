const houses = [
    {img:"/kartinki/main1/MoyaDacha.png", name:"Seaside Serenity Villa", description:"A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...", bed:"4-Bedroom", shower:"3-Bathroom"},
    {img:"/kartinki/main1/City.png", name:"Metropolitan Haven", description:"A chic and fully-furnished 2-bedroom apartment with panoramic city views...", bed:"2-Bedroom", shower:"2-Bathroom"},
    {img:"/kartinki/main1/VipHouse.png", name:"Rustic Retreat Cottage", description:"An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...", bed:"3-Bedroom", shower:"3-Bathroom"}
];

const cardDiv = document.getElementById('cards');
cardDiv.innerHTML = houses.map(
    i => `<div class="card">
            <div class="cardCont">
                <img src="${i.img}" alt="" class="mainimg">
                <div class="containerCont">
                    <h3>${i.name}</h3>
                    <p>${i.description}<a href="">Read more</a></p>
                    <div class="houseOpt">
                        <button><img src="/kartinki/main1/bed.png" alt="">${i.bed}</button>
                        <button><img src="/kartinki/main1/shower.png" alt="">${i.shower}</button>
                        <button><img src="/kartinki/main1/villa.png" alt="">Villa</button>
                    </div>
                    <div class="price">
                        <div>
                            <p>Price</p>
                            <h3>$550.000</h3>
                        </div>
                        <button class="purpleButton">View Property Details</button>
                    </div>
                </div>
            </div>
          </div>`
).join('');

const review = [
    {titlename:"Exceptional Service!", text:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!", img:"/kartinki/main1/Zolo.png", person:"Wade Warren", state:"USA, California"},
    {titlename:"Efficient and Reliable", text:"Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.", img:"/kartinki/main1/Emily.png", person:"Emelie Thomson", state:"USA, Florida"},
    {titlename:"Trusted Advisors", text:"The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!", img:"/kartinki/main1/John.png", person:"John Mans", state:"USA, Nevada"}
];
const reviewDiv = document.getElementById('reviews');
reviewDiv.innerHTML = review.map(
    i => `<div class="review">
            <div class="reviewContainer">
                <img src="/kartinki/main1/stars.png" alt="">
                <div class="desc">
                    <h3>${i.titlename}</h3>
                    <p>${i.text}</p>
                </div>
                <div class="person">
                    <img src="${i.img}" alt="">
                    <div>
                        <h3>${i.person}</h3>
                        <p style="color=#999999">${i.state}</P>
                    </div>
                </div>
            </div>
          </div>`
).join('');