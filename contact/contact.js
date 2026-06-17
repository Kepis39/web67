const infa = [
    {head: "Main Headquarters", name: "123 Estatein Plaza, City Center, Metropolis", desc: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.", mail:"info@estatein.com", phone:"+1 (123) 456-7890", loc:"Metropolis"},
    {head: "Regional Offices", name: "456 Urban Avenue, Downtown District, Metropolis", desc: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",mail:"info@restatein.com", phone:"+1 (123) 628-7890", loc:"Metropolis"}
];
const inf = document.getElementById('office-cards-container');
    inf.innerHTML = infa.map(
        i => `<div class="office-card">
                <p><span>${i.head}</span></p>
                <h3>${i.name}</h3>
                <p>${i.desc}</p>
                <div class="office-details">
                    <div>
                        <img src="kartinki/properties/mail (2).png" alt="">
                        <p><span>${i.mail}</span></p>
                    </div>
                    <div>
                        <img src="kartinki/properties/number.png" alt="">
                        <p><span>${i.phone}</span></p>
                    </div>
                    <div>
                        <img src="kartinki/Details/location.png" alt="">
                        <p><span>${i.loc}</span></p>
                    </div>
                </div>
                <button class="btn-primary">Get Direction</button>
            </div>`
    ).join('')


const peoples = [
    {img1: "kartinki/contact/Image (2).png", img2: "kartinki/contact/Image (3).png", img3: "kartinki/contact/Image (4).png", img4: "kartinki/contact/Image (5).png", img5: "kartinki/contact/Image (6).png", img6: "kartinki/contact/Image (7).png",},
];
const ludiaaa = document.getElementById('gallery-container');
ludiaaa.innerHTML = peoples.map(
        i => `<div class="gallery-grid">
            <div class="gallery-top">
                <img src="${i.img1}" alt="">
                <img src="${i.img2}" alt="">
            </div>
            <div class="gallery-center">
                <img src="${i.img3}" alt="">
                <div class="gallery-pair">
                    <img src="${i.img4}" alt="">
                    <img src="${i.img5}" alt="">
                </div>
            </div>
            <div class="gallery-bottom">
                <div class="gallery-text">
                    <img class="badge-icon" src="kartinki/main1/wow.png" alt="">
                    <h1>Explore Estatein's World</h1>
                    <p>Step inside the world of Estatein, where professionalism meets warmth, and expertise meets
                        passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know
                        us better.</p>
                </div>
                <img src="${i.img6}" alt="">
            </div>
        </div>`
    ).join('')
