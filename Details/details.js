const que = [
    {title:"How do I search for properties on Estatein?",desc:"Learn how to use our user-friendly search tools to find properties that match your criteria."},
    {title:"What documents do I need to sell my property through Estatein?",desc:"Find out about the necessary documentation for listing your property with us."},
    {title:"How can I contact an Estatein agent?",desc:"Discover the different ways you can get in touch with our experienced agents."}
];
const queCard = document.getElementById('faq-grid');
queCard.innerHTML = que.map(
    i => `<div class="faq-card">
            <div class="faq-card-inner">
                <h3>${i.title}</h3>
                <p>${i.desc}</p>
                <button>Read More</button>
            </div>
         </div>`
).join(''); 
