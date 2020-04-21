const ABOUT_ME = 'about me';
const EXPERIENCE = 'experience';
const EDUCATION = 'education';
const MY_WORK = 'my work';
const CONTACT_ME = 'contact me';

const ABOUT_ME_VALUE = `
<u>Software Engineer</u>, looking for software development opportunities.
I have experience in Python, Java-SE, C, and C++ on both Windows and Linux operating systems.<br><br>
<b>Server-Side Management:</b> I have experience setting up and maintaining an nginx server on a Linux system, 
configuring firewalls, running bash scripts and Python code for server operations, and CloudFlare DNS management.<br><br>
<b>ASP.NET Technology</b>: Experience building websites using ASP.NET, 
using the MVC model with jQuery, AJAX, JSON, Bootstrap, and SQL Server 2012`;
const EXPERIENCE_VALUE = `
<b><u>2019 - today </u></b>: Python Developer at <a href="www.traxretail.com/" target="_blank">Trax retail</a>
<ul>
<li>Big Date analiysis using: Pandas, MySql</li>
<li>Automatic Testing</li>
<li>Milk</li>
</ul>`;
const EDUCATION_VALUE = `
<b><u>2012 - 2017 </u></b>: Bachelor of Science (B.Sc.) in Software Engineering <i>from SCE College of Engineering</i>
<p>
Final Project: Developed a computer application that detects and tracks the movement of a rectangular object in real-time.<br> 
The application is designed to focus on changes that occur in the scope of the object and gives efficient monitoring of changes which occur on rectangular objects, such as screens, pieces of paper, or even a window in a building.<br> 
It was written in Python using packages such as OpenCV, NumPy, SciPy, and SymPy, and based on many algorithms and techniques found in image processing and motion detection.
</p>
`;
                        

links_name = [ABOUT_ME, EXPERIENCE, EDUCATION, MY_WORK, CONTACT_ME];

list_attrebutes = {
  'about me': ABOUT_ME_VALUE,
  'experience': EXPERIENCE_VALUE,
  'education': EDUCATION_VALUE,
  'my work': 'value of my work',
  'contact me': 'value of contact me'
  };

function CreateLinks() {
    var i;
    for (i = 0; i < links_name.length; i++) {
        var header_right = document.getElementsByClassName("header_right")[0];

        // Create anchor element. 
        var a = document.createElement('a');  

        // Set inner html text.
        a.innerHTML = links_name[i]

        //Set href attribute
        a.setAttribute("href", '#' + links_name[i].replace(' ', '_'));
        a.setAttribute("class", links_name[i].replace(' ', '_'));
        a.setAttribute("onclick", 'addContent(this);');
        
        // Append anchor element to the header_right. 
        header_right.appendChild(a)
    }   
  }

function addContent(event) {
  var title = event.textContent;
  var text = list_attrebutes[title]
  var main_title = document.getElementsByClassName('main_title')[0];
  var p_content = document.getElementsByClassName('p_content')[0];
  main_title.innerHTML = title;
  p_content.innerHTML = text;
};

function fillAboutMe() {
  var title = ABOUT_ME;
  var text = ABOUT_ME_VALUE;
  var main_title = document.getElementsByClassName('main_title')[0];
  var p_content = document.getElementsByClassName('p_content')[0];
  main_title.innerHTML = title;
  p_content.innerHTML = text;
};
CreateLinks();
fillAboutMe();