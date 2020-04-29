const whatsapp_title = "whatsapp";
const whatsapp_href = "https://api.whatsapp.com/send?phone=9720504385097";
const whatsapp_src = "https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/whatsapp-512.png";

const email_title = "email";
const email_href="mailto:avrahamadnahani@gmail";
const email_src = "https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png";

const linkdin_title = "linkdin"
const linkdin_href = "https://www.linkedin.com/in/avraham-adnahani-45042215b"
const linkdin_src= " https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/linkedin-512.png"

const github_title = "github"
const github_href = "https://www.github.com/AviAdnahani/AviAdnahani.github.io"
const github_src = "https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"

const location_title = "location"
const location_href = "https://maps.app.goo.gl/FDFf9BeaQq8S4ekb8" 
const location_src = "https://cdn4.iconfinder.com/data/icons/office-and-business-conceptual-flat/178/13-512.png" 


function addFooter() {
    var footer = document.createElement('footer');
    footer.setAttribute('class', 'nav_bar'); 

    footer.appendChild(creatImgLink(whatsapp_src, whatsapp_title, whatsapp_href));
    footer.appendChild(creatImgLink(email_src, email_title, email_href));
    footer.appendChild(creatImgLink(linkdin_src, linkdin_title, linkdin_href));
    footer.appendChild(creatImgLink(github_src, github_title, github_href));
    footer.appendChild(creatImgLink(location_src, location_title, location_href));

    var body = document.getElementsByTagName("body")[0]; 
    body.insertBefore(footer, document.getElementsByTagName("body")[0].childNodes[0]);
}

function creatImgLink(src, title, href){
    var img = document.createElement('img');
    img.setAttribute('class', 'icons'); 
    img.setAttribute('src', src); 
    img.setAttribute('title', title); 
    
    var a = document.createElement('a');
    a.setAttribute('href', href); 
    a.setAttribute('target', '_blank'); 
    a.appendChild(img)
    return a;
}

export { addFooter };