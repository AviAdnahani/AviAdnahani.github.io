const CONTENT = `
<br>
<b>   Phone :</b> <a href="tel:050-438-5097">050-438-5097</a><br><br>
<b>   Email :</b> <a href="mailto:avrahamadnahani@gmail">AvrahamAdnahani@gmail.com</a><br><br>
<b>   Github :</b> <a href="href="https://www.github.com/AviAdnahani/AviAdnahani.github.io">github.com</a><br><br>
<b>   Linkedin :</b> <a href="https://www.linkedin.com/in/avraham-adnahani-45042215b" />linkedin.com</a><br><br>
<b>   CV :</b> <a href="../static/AviAdnahaniCV.pdf" download>AviAdnahaniCV</a>
`; // <a href="/images/myw3schoolsimage.jpg" download>

const CONTENT2 = `
Software Engineer, experienced with python, mySQL, mongoDB and JS. passionate about learning new technologies. open for new opportunities.
`;
const INTRODUCTION = document.createElement('div');

// create top element
const top = document.createElement('div');
top.style.padding = "2%";
top.style.display = "flex";
top.style.flexWrap = "wrap";
top.style.color = "#61605f";

// create image
const img = document.createElement('img');
img.setAttribute('src', '../static/profile_img.jpg');
img.setAttribute('height', '250px');
img.setAttribute('width', '300px');
img.style.boxShadow = "0px 0px 10px 0px black";

// create top text
const txt = document.createElement('div');
txt.style.padding = "2%";
txt.style.fontSize = "2vh";
txt.innerHTML = CONTENT;

top.appendChild(img);
top.appendChild(txt);
INTRODUCTION.appendChild(top);

// create top text
const txt2 = document.createElement('div');
txt2.style.padding = "2%";
txt2.style.fontSize = "4vh";
txt2.style.color = "#3f4949";
txt2.innerHTML = CONTENT2;
INTRODUCTION.appendChild(txt2);

export {INTRODUCTION};