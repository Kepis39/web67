const cards = [
    {number:"01",title:"Discover a World of Possibilities",description:"Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."},
    {number:"02",title:"Narrowing Down Your Choices",description:"Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."},
    {number:"03",title:"Personalized Guidance",description:"Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."},
    {number:"04",title:"See It for Yourself",description:"Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."},
    {number:"05",title:"Making Informed Decisions",description:"Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."},
    {number:"06",title:"Getting the Best Deal",description:"We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."}
];
const topCard = document.getElementById('process-top-cards');
const botCard = document.getElementById('process-bottom-cards');
const topCards = cards.slice(0,3);
const botCards = cards.slice(3,6);

topCard.innerHTML = topCards.map(
    i => `<div class="process-card">
            <div class="step-number">
                <p>Step ${i.number}</p>
            </div>
            <div class="step-content">
                <h3>${i.title}</h3>
                <p>${i.description}</P>
            </div>
        </div>`
).join('');
botCard.innerHTML = botCards.map(
    i => `<div class="process-card">
            <div class="step-number">
                <p>Step ${i.number}</p>
            </div>
            <div class="step-content">
                <h3>${i.title}</h3>
                <p>${i.description}</P>
            </div>
        </div>`
).join('');

const Team =[
    {img:"/kartinki/aboutUs/man1.png",name:"Max Mitchell",status:"Founder"},
    {img:"/kartinki/aboutUs/Sarah.png",name:"Sarah Johnson",status:"Chief Real Estate Officer"},
    {img:"/kartinki/aboutUs/David.png",name:"David Brown",status:"Head of Property Management"},
    {img:"/kartinki/aboutUs/NotSarah.png",name:"Michael Turner",status:"Legal Counsel"}
];
const dreamTeam = document.getElementById('team-members');
dreamTeam.innerHTML = Team.map(
    i => `<div class="team-member">
            <div class="member-inner">
                <div class="member-photo">
                    <img src="${i.img}" alt="">
                    <img src="/kartinki/aboutUs/PurpleX.png" alt="" class="social-icon">
                </div>
                <div class="member-info">
                    <h2>${i.name}</h2>
                    <p>${i.status}</p>
                </div>
                <div class="member-contact">
                    <p>Say Hallo</p>
                    <button><img src="/kartinki/aboutUs/PurpleTg.png" alt=""></button>
                </div>
            </div>
          </div>`
).join('');
const Clients =[
    {year:"2019", name:"ABC Corporation", category:"Luxury Home Development", message:"Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs."},
    {year:"2018", name:"GreenTech Enterprises", category:"Retail Space", message:"Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth."}
];
const Peoples = document.getElementById('clients-grid');
Peoples.innerHTML = Clients.map(
    i => `<div class="client-card">
            <div class="client-inner">
                <div class="client-header">
                    <div>
                        <p>since ${i.year}</p>
                        <h2>${i.name}</h2>
                    </div>
                    <button>Visit Website</button>
                </div>
                <div class="client-details">
                    <div class="detail-item">
                        <div>
                            <img src="/kartinki/aboutUs/kvadrat.png" alt="">
                            <p>Domain</p>
                        </div>
                        <p>Commercial Real Estate</p>
                    </div>
                    <div style="width: 0.5px; height: 90%; background-color: #999999;"></div>
                    <div class="detail-item">
                        <div>
                            <img src="/kartinki/aboutUs/molniya.png" alt="">
                            <p>Category</p>
                        </div>
                        <p>${i.category}</p>
                    </div>
                </div>
                <div class="client-testimonial">
                    <p>What They Said</p>
                    <p class="whitep">${i.message}</p>
                </div>
            </div>
          </div>`
).join('');
