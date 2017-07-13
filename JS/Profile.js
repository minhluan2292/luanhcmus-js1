var cssId = "luanCSS";
if (!document.getElementById(cssId))
{
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.id   = cssId;
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.href = "https://luanhcmus-js1-minhluan2292363055.codeanyapp.com/JS/profilestyle.css";
    link.media = "all";
    head.appendChild(link);
}

var in_container_wrapper = document.createElement("div");
in_container_wrapper.id="in_container_wrapper";
in_container_wrapper.className="in-container-wrapper";
in_container_wrapper.class = "in-container-wrapper";
document.body.appendChild(in_container_wrapper);

    var in_header_wrapper = document.createElement("div");
    in_header_wrapper.id="in_header_wrapper";
    in_header_wrapper.className="in-header-wrapper";
    in_header_wrapper.class = "in-header-wrapper";
    in_container_wrapper.appendChild(in_header_wrapper);

        var in_header_icon = document.createElement("div");
        in_header_icon.id="in_header_icon";
        in_header_icon.className="Extractor-header-icon";
        in_header_icon.class = "Extractor-header-icon";
        in_header_wrapper.appendChild(in_header_icon);
            var collapse_icon = document.createElement("img");
            collapse_icon.src="https://xtruc-vngenius.rhcloud.com/workspace/QLG/LinkedinExtractor/images/icon-collapse.png";
            collapse_icon.style.height="20";
            collapse_icon.style.width="20";
            in_header_icon.appendChild(collapse_icon);

        var in_header_title = document.createElement("div");
        in_header_title.id="Extractor-header-title";
        in_header_title.className="Extractor-header-title";
        in_header_title.class = "Extractor-header-title";
        in_header_wrapper.appendChild(in_header_title);
            var header_title = document.createElement("h2");
            header_title.innerHTML="Minh Luan Extractor";
            header_title.class="fontcontent";
            header_title.className="fontcontent";
            in_header_title.appendChild(header_title);
    
    var in_content_wrapper = document.createElement("div");
    in_content_wrapper.class="in-content-wrapper";
    in_content_wrapper.className="in-content-wrapper";
    in_container_wrapper.appendChild(in_content_wrapper);


var divprofile = document.createElement("div");
divprofile.id="divprofile";
divprofile.className="profile";
divprofile.class = "profile";
in_content_wrapper.appendChild(divprofile);

  var divinfo = document.createElement("div");
  divinfo.id="divinfo";
  divinfo.className="profile-info";
  divinfo.class = "";
  divprofile.appendChild(divinfo);

  var divavartar = document.createElement("div");
  divavartar.id="divavartar";
  divavartar.className="profile-avartar";
  divavartar.class = "profile-avartar";
  divinfo.appendChild(divavartar);

  var avartar = document.createElement("img");          avartar.src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAUPAAAAJDg4MmQxZmVkLTQ2MzgtNDFiNi05YjJkLTZiYTRhMjA5OTQxMA.jpg";
    divavartar.appendChild(avartar);

 var divrightavartar = document.createElement("div");
    divrightavartar.className="right-avartar";
    divrightavartar.class = "right-avartar";
    divinfo.appendChild(divrightavartar);

    var divprofilecontent = document.createElement("div");
    divprofilecontent.id="divprofilecontent";
    divprofilecontent.className="profile-content ";
    divprofilecontent.class = "profile-content ";
    divrightavartar.appendChild(divprofilecontent);

      var profilename = document.createElement("h1");
      profilename.id="profilename";
      profilename.class="fontcontent";
      profilename.className="fontcontent";
      divprofilecontent.appendChild(profilename);

      var headline = document.createElement("p");
      headline.id="headline";
      headline.className="headline";
      headline.class = "headline";
      divprofilecontent.appendChild(headline);

      var location = document.createElement("p");
      location.id="location";
      divprofilecontent.appendChild(location);

      var industry = document.createElement("p");
      industry.id="";
      divprofilecontent.appendChild(industry);
      

var divsummary = document.createElement("div");
divsummary.id="divsummary";
divsummary.className="summary";
divsummary.class = "summary";
divprofile.appendChild(divsummary);

var summanry_name = document.createElement("h2");
summanry_name.id="summanry_name";
summanry_name.class="title";
summanry_name.className="title";
summanry_name.innerHTML="Summary";
summanry_name.class="fontcontent";
divsummary.appendChild(summanry_name);


var divsummary_content = document.createElement("div");
divsummary_content.id="divsummary_content";
divsummary_content.className="divsummary-content";
divsummary_content.class = "divsummary-content";
divsummary.appendChild(divsummary_content);


var divexp = document.createElement("div");
divexp.className="exp";
divexp.class = "exp";
divprofile.appendChild(divexp);

var experience_name = document.createElement("h2");
experience_name.class="title";
experience_name.className="title";
experience_name.innerHTML="Experience";
divexp.appendChild(experience_name);

    var divexpi = document.createElement("ul");
    divexpi.className="";
    divexpi.class = "";
    divexp.appendChild(divexpi);


        
    

var diveducation = document.createElement("div");
diveducation.className="exp";
diveducation.class = "exp";
divprofile.appendChild(diveducation);

var education_name = document.createElement("h2");
education_name.class="title";
education_name.className="title";
education_name.innerHTML="Education";
diveducation.appendChild(education_name);

    var divedui = document.createElement("ul");
    divedui.className="";
    divedui.class = "";
    diveducation.appendChild(divedui);

var divskills = document.createElement("div");
divskills.className="";
divskills.class = "";
divprofile.appendChild(divskills);




profilename.innerHTML="Huỳnh Minh Luân";
headline.innerHTML="Looking for opportunities: Software Engineer (C++), fresher or learning about ReactJS, React Native, Android";
location.innerHTML="Ho Chi Minh, Viet Nam";
industry.innerHTML="Information Technology";
divsummary_content.innerHTML="<p>- Fluent in English.<br>- Have ability to work under pressure and to meet tight deadlines.<br>- Have a high sense of responsibility, hard working, careful, reliable.<br>- Proficiency with standard Microsoft IT packages (Word, Excel, Power Point), boolean search<br>- Knowledge of online networking sites (LinkedIn, Twitter, Facebook, G+, GitHub, etc).</p>";

var exp = [
  {title : 'Senior SW Engineer', company: 'FPT Software',times:'2015-present (2 years)',content:'Code C++'}, 
  {title : 'Software Engineer', company: 'Capgemini',times:'2014-2015 (1 year 1 month)',content:'Support manager. Code C/C++'},
  {title : 'Junior Software Engineer', company: 'Glandore Systems',times:'2013-2014 (1 year 1 month)',content:'Intern and code C/C++'}
];
for(var member of exp)
  {
        var expi = document.createElement("li");
        expi.className="expi";
        expi.class = "expi";
        divexpi.appendChild(expi);


            var expi_title = document.createElement("h4");
            expi_title.className="title-exp";
            expi_title.class = "title-exp";
            expi_title.innerHTML = member.title;
            expi.appendChild(expi_title);

            var expi_company = document.createElement("h5");
            expi_company.className="company-exp";
            expi_company.class = "company-exp";
            expi_company.innerHTML = member.company;
            expi.appendChild(expi_company);

            var expi_time = document.createElement("h5");
            expi_time.className="time-exp";
            expi_time.class = "time-exp";
            expi_time.innerHTML = member.times;
            expi.appendChild(expi_time);

            var expi_content = document.createElement("p");
            expi_content.className="content-exp";
            expi_content.class = "content-exp";
            expi_content.innerHTML = member.content;
            expi.appendChild(expi_content);
  }
var schools = [
  {school : 'University Of Science', degreetype: 'BS',degreename: 'Computer Science',times:'2015-2017',content:'C++/C#...'}, 
  {school : 'Cao Thang Technical School', degreetype: 'Associate',degreename: 'Information Technology',times:'2010-2013',content:'Data mining/C#/ASP.net'}
];

for(var member of schools)
  {
        var edui = document.createElement("li");
        edui.className="expi";
        edui.class = "expi";
        divedui.appendChild(edui);


            var schoolname = document.createElement("h4");
            schoolname.className="title-exp";
            schoolname.class = "title-exp";
            schoolname.innerHTML = member.school;
            edui.appendChild(schoolname);

            var degreename = document.createElement("h5");
            degreename.className="company-exp";
            degreename.class = "company-exp";
            degreename.innerHTML = member.degreetype + ", " + member.degreename;
            edui.appendChild(degreename);

            var degreetime = document.createElement("h5");
            degreetime.className="time-exp";
            degreetime.class = "time-exp";
            degreetime.innerHTML = member.times;
            edui.appendChild(degreetime);

            var degreecontent = document.createElement("p");
            degreecontent.className="content-exp";
            degreecontent.class = "content-exp";
            degreecontent.innerHTML = member.content;
            edui.appendChild(degreecontent);
  }






