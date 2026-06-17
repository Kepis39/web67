const houses = [
    {img:"/kartinki/main1/MoyaDacha.png", name:"Seaside Serenity Villa", description:"A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...", bed:"4-Bedroom", shower:"3-Bathroom"},
    {img:"/kartinki/main1/City.png", name:"Metropolitan Haven", description:"A chic and fully-furnished 2-bedroom apartment with panoramic city views...", bed:"2-Bedroom", shower:"2-Bathroom"},
    {img:"/kartinki/main1/VipHouse.png", name:"Rustic Retreat Cottage", description:"An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...", bed:"3-Bedroom", shower:"3-Bathroom"}
];

const cardDiv = document.getElementById('properties-grid');
cardDiv.innerHTML = houses.map(
    i => `<div class="property-card">
            <div class="property-card-inner">
                <img src="${i.img}" alt="" class="property-image">
                <div class="property-details">
                    <h3>${i.name}</h3>
                    <p>${i.description}<a href="">Read more</a></p>
                    <div class="property-features">
                        <button><img src="/kartinki/main1/bed.png" alt="">${i.bed}</button>
                        <button><img src="/kartinki/main1/shower.png" alt="">${i.shower}</button>
                        <button><img src="/kartinki/main1/villa.png" alt="">Villa</button>
                    </div>
                    <div class="property-price">
                        <div>
                            <p>Price</p>
                            <h3>$550.000</h3>
                        </div>
                        <button class="btn-primary">View Property Details</button>
                    </div>
                </div>
            </div>
          </div>`
).join('');
