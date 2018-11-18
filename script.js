let circulum =[
    {
        "content" : "Open Year Round",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',
    },
    {
        "content" : "Monday-Friday 7:00am to 6:00pm",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',

    },
    {
        "content" : "For childeren ages 6weaks through 6years",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',

    },{
        "content" : "Your choice of 5,4,3 or 2 full days",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',

    },{
        "content" : "All of our teachers have at least two years of early education and care experiance",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',

    },{
        "content" : "Tution includes nutritious breakfast, lunch and snacks prepared by our own chef",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',

    },{
        "content" : "Infant, toddler and Preschool Rooms",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',

    },{
        
        "content" : "Beautiful large indoor and outdoor play spaces",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',

    },{
        "content" : "Art/Project Studio Space",
        "icon" : '<i class="fas fa-arrow-circle-right" id="circle-arrow"></i>',

    }
]
function                                                                                                                                                                                                        initialize(){
    let icon = document.querySelector('.arrow');
    for (let i = 0 ; i <= circulam.length ; i++){
        icon.innerHTML += `
        <p>${circulum[i].icon}${circulum[i].content}</p>
        `;
    }
}