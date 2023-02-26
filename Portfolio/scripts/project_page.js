

main()

function main(){
    const params = window.location.search
    const ID = new URLSearchParams(params).get('id')
    console.log(ID);
    render(ID)
}


function render(ID){
    const project_main_container = document.getElementById('project_main_container')
    const selectedProject = initializeData().find((item) => item.id === ID)
    const projectHTML = `
    <section id="projectDetailsHead" class="section_padding" >
        <div id="projectDetailsHeadText">
            <div>
                <h2 id="projeName">${selectedProject.title}</h2>
                <h5 id="projeCategory">${selectedProject.type}</h5>
            </div>
            
            <p id="projeLongDescription">${selectedProject.description_long}</p>

            <div id="detailsLinkButtons">
                ${renderLinkButton(selectedProject)}
                <a id="privacyPolicyLink">Privacy policy</a>
            </div>    
        </div>
        
        <div id="logo">
            <img src="./assets/logos/${selectedProject.imagesURLs.logoURL}" alt="">
        </div>
    </section>

    <section id="gallerySection" class="section_padding">
        <h2>Gallery</h2>
        <div id="gallery" >
            
        </div>
    </section>

    <section id="retingAndReview" class="section_padding">
        <h2>Retings And Reviews</h2>
    </section>
    `

    project_main_container.innerHTML = projectHTML
    console.log(selectedProject);
}

function renderLinkButton (project){

    let button = ''
    switch(project.type){
        case "mobile application":   
            button = `
                <a href=${project.links[0]} target="_blank" class="GoogleStoreButton">
                    <i class="fa-brands fa-google-play"></i>
                    <div>
                    <p>Download From</p>
                    <p class="bold">Google Play</p>
                    </div>
                </a>
            `
            break
    case "Web application":
            button = `
                <a href=${project.links[0]} target="_blank" class="GoogleStoreButton">
                    <i class="fa-brands fa-github"></i>
                    <div>
                    <p class="bold">Github Pages</p>
                    </div>
                </a>
            `
            break
    }

    return button
}

function initializeData(){
    return  projects = 
    [
        {
            id:"6cc35e60-0db9-43b8-87a6-52222230940e",
            title:"FlashLight",
            type:"mobile application",
            description_short:"Simple Flashlight Application for daily usage",
            description_long:"Simple application that use phone LED flash or phone screen as torch. you can use built in timer to turn off the light automatically.",
            links:[
                "https://play.google.com/store/apps/details?id=com.omarnash.flashlightapp&hl=en",
            ],
            privacyPolicyLink:"",
            status:"public",
            imagesURLs:{
                logoURL:"flashlight_logo_512px.png",
                cardImageURL:"flash_light_large.png",
                screenshots:[
                    'Screenshot_flashlight_app1.png',
                    'Screenshot_flashlight_app2.png',
                    'Screenshot_flashlight_app3.png',
                    'Screenshot_flashlight_app4.png',
                ]
            }
        },
        {
            id:"c1b80d80-f754-4384-b87f-77154c025e53",
            title:"Notes",
            type:"mobile application",
            description_short:"Simple application to write Notes",
            description_long:"Notes application is a simple offline mobile tool application to write simple daily text notes and lists.",
            links:[
                "https://play.google.com/store/apps/details?id=com.omarnash.notebook&hl=en",
            ],
            privacyPolicyLink:"",
            status:"public",
            imagesURLs:{
                logoURL:"note_app_logo_512px.png",
                cardImageURL:"note_app_logo_large.png",
                screenshots:[
                    'screenshot_note_app1.png',
                    'screenshot_note_app2.png',
                    'screenshot_note_app3.png',
                ]
            }
        },
        {
            id:"76b9063a-3b20-420a-87b0-de8056281dd6",
            title:"Unit Converter",
            type:"Web application",
            description_short:"website that provide a collection of free online unit converters for the ease of public use",
            description_long:"The Unit converter converts angle, area, bits & bytes, length, mass, temperature, time and volume units. ",
            links:[
                "https://omarnashawati.github.io/UnitConverter/index.html",
            ],
            privacyPolicyLink:"",
            status:"public",
            imagesURLs:{
                logoURL:"unit_converter_logo_512px.png",
                cardImageURL:"unit_converter_large.png",
                screenshots:[]
            }
        },
    ]
}