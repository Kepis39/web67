const fanta = [
    {img:"/kartinki/service/Icon Container (8).png",title:"Valuation Mastery",text:"Discover the true worth of your property with our expert valuation services."},
    {img:"/kartinki/service/Icon Container (9).png",title:"Strategic Marketing",text:"Selling a property requires more than just a listing; it demands a strategic marketing approach."},
    {img:"/kartinki/service/Icon Container (10).png",title:"Negotiation Wizardry",text:"Negotiating the best deal is an art, and our negotiation experts are masters of it."},
    {img:"/kartinki/service/Icon Container (11).png",title:"Closing Success",text:"A successful sale is not complete until the closing. We guide you through the intricate closing process."},
    {img:"/kartinki/service/Icon Container.png",title:"Tenant Harmony",text:"Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."},
    {img:"/kartinki/service/Icon Container (1).png",title:"Maintenance Ease",text:"Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."},
    {img:"/kartinki/service/Icon Container (2).png",title:"Financial Peace of Mind",text:"Managing property finances can be complex. Our financial experts take care of rent collection"},
    {img:"/kartinki/service/Icon Container (3).png",title:"Legal Guardian",text:"Stay compliant with property laws and regulations effortlessly."},
    {img:"/kartinki/service/Icon Container (4).png",title:"Market Insight",text:"Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"},
    {img:"/kartinki/service/Icon Container (5).png",title:"ROI Assessment",text:"Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"},
    {img:"/kartinki/service/Icon Container (6).png",title:"Customized Strategies",text:"Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"},
    {img:"/kartinki/service/Icon Container (7).png",title:"Diversification Mastery",text:"Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"}
];
const sprite = document.getElementById('tverh');
const cola = document.getElementById('tniz');
const sprite2 = document.getElementById('tverh2');
const cola2 = document.getElementById('tniz2');
const pepsi = document.getElementById('pepsii');
const pepsi2 = document.getElementById('pepsi1');
const spriteCard = fanta.slice(0,3);
const colaCard = fanta.slice(3,4);
const spriteCard2 = fanta.slice(4,7);
const colaCard2 = fanta.slice(7,8);
const pepsiCard = fanta.slice(8,10);
const pepsiCard2 = fanta.slice(10,12);

sprite.innerHTML = spriteCard.map(
    i => `<div class="fanta">
            <div class="fantaCont">
                <div>
                    <img src="${i.img}" alt="">
                    <h2>${i.title}</h2>
                </div>
                <p>${i.text}</p>
            </div>
         </div>`
).join('');
cola.innerHTML = colaCard.map(
    i => `<div class="fanta">
            <div class="fantaCont">
                <div>
                    <img src="${i.img}" alt="">
                    <h2>${i.title}</h2>
                </div>
                <p>${i.text}</p>
            </div>
         </div>`
).join('');
sprite2.innerHTML = spriteCard2.map(
    i => `<div class="fanta">
            <div class="fantaCont">
                <div>
                    <img src="${i.img}" alt="">
                    <h2>${i.title}</h2>
                </div>
                <p>${i.text}</p>
            </div>
         </div>`
).join('');
cola2.innerHTML = colaCard2.map(
    i => `<div class="fanta">
            <div class="fantaCont">
                <div>
                    <img src="${i.img}" alt="">
                    <h2>${i.title}</h2>
                </div>
                <p>${i.text}</p>
            </div>
         </div>`
).join('');
pepsi.innerHTML = pepsiCard.map(
    i => `<div class="fanta">
            <div class="fantaCont">
                <div>
                    <img src="${i.img}" alt="">
                    <h2>${i.title}</h2>
                </div>
                <p>${i.text}</p>
            </div>
         </div>`
).join('');
pepsi2.innerHTML = pepsiCard2.map(
    i => `<div class="fanta">
            <div class="fantaCont">
                <div>
                    <img src="${i.img}" alt="">
                    <h2>${i.title}</h2>
                </div>
                <p>${i.text}</p>
            </div>
         </div>`
).join('');