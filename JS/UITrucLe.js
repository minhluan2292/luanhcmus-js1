//--------------------------------
if(document.getElementById("xray-search-module") ){
	var url=window.location.href;
	window.location.assign(url);
}
function advocate(){
	if(document.getElementById("advocate-modal") ){
	document.getElementById("advocate-modal").remove();
	document.getElementById("pagekey-public_profile_v3_desktop").className="";
	}
}
function adddiv(){
		var div = document.createElement("div");
		div.id="Extractor-listbuilder-wrapper";
		div.className="Extractor-listbuilder-wrapper single-user-page";
		div.class = "Extractor-listbuilder-wrapper single-user-page";
		div.style.top ="183px";
		div.style.left ="0px";
		document.body.appendChild(div);   
	//-----------------
	var div2 = document.createElement("div");
	div2.id="Extractor-listbuilder-header";
	div2.class="Extractor-listbuilder-header";
	div2.className ="Extractor-listbuilder-header";
	document.getElementById("Extractor-listbuilder-wrapper").appendChild(div2);
	//-----------------
	var div21 = document.createElement("div");
	div21.id="handle-drag";
	div21.class="";
	document.getElementById("Extractor-listbuilder-header").appendChild(div21);
	//-----------------
	var div22 = document.createElement("div");
	div22.id="Extractor-collapse";
	div22.class="Extractor-collapse";
	div22.className="Extractor-collapse";
	document.getElementById("Extractor-listbuilder-header").appendChild(div22);
	//-----------------
	var div23 = document.createElement("div");
	div23.id="Extractor-listbuilder-actions-header";
	div23.class="Extractor-listbuilder-actions-header";
	div23.className="Extractor-listbuilder-actions-header";
	document.getElementById("Extractor-listbuilder-wrapper").appendChild(div23);
	//-----------------Movie icon
	//-----------------
		var div3 = document.createElement("div");
	div3.id="Extractor-listbuilder-body";
	div3.class="Extractor-listbuilder-body";
	div3.className="Extractor-listbuilder-body";
	document.getElementById("Extractor-listbuilder-wrapper").appendChild(div3);
	
}
/*-----------------------*/
function addifr(hash){
	 if(document.getElementsByTagName("code")[1]===undefined)
	{
		var ifr = document.createElement("iframe");
		ifr.id = "wowi_user";
		ifr.style.width = "215px";
		ifr.style.height = "150px";
    	ifr.style.border="0px";
		ifr.scrolling = "no";
		ifr.src = "https://xtruc-vngenius.rhcloud.com/workspace/QLG/LinkedinExtractor/profile.php"+hash;
		document.getElementById("Extractor-listbuilder-body").appendChild(ifr);
	}
}
//--------------------------------------------------------------------------------------------------hashtag
  function profile_info()
  {
  	var i=1;
  	var content="";
  	var memberID="";
	for(j=0;j<i;j++)
	{
		i++;
		content = document.getElementsByTagName("code")[j].textContent;
		if(content.search(" {\"data\":{\"patentView\"") >0)
		{
			break;
		}
	}
	content = content.slice(content.search("\"urn:li:member:")+15);
	memberID = content.substr(0,content.search("\","));	 
	return memberID;
  }
  
var hashresult="";

function hashtag(){
 var m="";
 var mem_id="";
 var n="";
 var ctag="";
 var uid="";

 if(document.getElementsByTagName("code")[1]===undefined)
{
 /////////////////////////////////////////////////////
  m = document.getElementsByClassName("profile-overview")[0].getElementsByClassName("masthead")[0].getAttribute("id");//memID
  /////////////////
  
  if(document.getElementsByClassName("nav-item account-settings-tab")[0]!==undefined){
  
	 if(document.getElementsByClassName("nav-item account-settings-tab")[0].getElementsByClassName("img-defer nav-profile-photo")[0].getAttribute("alt")!==undefined){
	  n = document.getElementsByClassName("nav-item account-settings-tab")[0].getElementsByClassName("img-defer nav-profile-photo")[0].getAttribute("alt");//user name
	 }else{
	 	n=document.getElementsByClassName("nav-item account-settings-tab")[0].getElementsByClassName("nav-profile-photo")[0].getAttribute("alt");//user name
	 }
	  uid = document.getElementsByClassName("nav-item account-settings-tab")[0].getElementsByClassName("account-toggle nav-link")[0].getAttribute("href");//user account link
	 
  }else{
  	n =	document.getElementsByClassName("account-toggle")[0].getElementsByClassName("nav-profile-photo")[0].getAttribute("alt");
  	uid = document.getElementsByClassName("account-toggle")[0].getAttribute("href");
  }
  

 /////////////////////// 
	if(uid.search("http://")<1)
	{
		uid=uid.replace("http://","https://");
		
	}
   mem_id = m.slice(7,m.length);

/////////////////////////
}else{
var i=1;
for(j=0;j<i;j++)
{
	i++;
	content = document.getElementsByTagName("code")[j].textContent;
	if(content.search("\"publicContactInfo\":") >0)
	{
		break;
	}
}
	content = content.slice(content.search("\"miniProfile\":")+37);
	miniProfile = content.substr(0,content.search(",")-1);
	content = content.slice(content.search("\"firstName\":")+13);
	firstName = content.substr(0,content.search(",")-1);
	content = content.slice(content.search("\"lastName\":")+12);
	lastName = content.substr(0,content.search(",")-1);
	//alert(firstName +" " + lastName);
	
	/*
	var cname="";
	cname=document.title;
	var cfname=cname.slice(0,cname.search(" "));
	var clname = cname.split(" ")[1];
		for(i=0;i<50;i++){
		ctag=document.getElementsByTagName("code")[i].innerHTML;
		//alert(ctag.search("\"viewee\""));
		if(ctag.search("\"urn:li:member:")>1 && ctag.search(cfname)>1 && ctag.search(clname)>1){
		//	alert(i);
		//	mem_id=document.getElementsByTagName("code")[i].innerHTML.slice(ctag.search("\"viewee\""),document.getElementsByTagName("code")[i].innerHTML.length);
		//	mem_id=mem_id.split("\"")[3]+":";
		//	mem_id=mem_id.split(":")[3];
			mem_id=document.getElementsByTagName("code")[i].innerHTML.slice(ctag.search("\"urn:li:member:"),document.getElementsByTagName("code")[i].innerHTML.length);
			mem_id=mem_id.split(":")[3]+":";
			mem_id=mem_id.split("\"")[0];
			//alert(document.getElementsByTagName("code")[i].innerHTML);
			//alert(mem_id);
			//break;
		}
	
		if(document.getElementsByTagName("code")[i]===undefined)
		{
			break;	
		}
		
	}*/
	
	/*-------------------------------------*/


	var cname="";
	cname=document.title;
	var cfname=cname.slice(0,cname.search(" "));
	var clname = cname.split(" ")[1];
	//alert(cfname+" "+clname);
	var lengtharr=0;
	var arrmemId = [];
	
	for(i=0;i<50;i++){
		if(document.getElementsByTagName("code")[i]===undefined)
		{
			break;	
		}
		ctag=document.getElementsByTagName("code")[i].innerHTML;
		
		//alert(ctag.search("\"viewee\""));
		/*
		if(ctag.search("\"urn:li:member:")>1 && ctag.search("\"firstName\":\""+cfname)>1 && ctag.search(clname)>1)
		{
			mem_id=document.getElementsByTagName("code")[i].innerHTML.slice(ctag.search("\"firstName\":\""+cfname),document.getElementsByTagName("code")[i].innerHTML.length);
			if(mem_id.search("\"urn:li:member:")>1)
			{
				mem_id=mem_id.slice(mem_id.search("\"urn:li:member:"),mem_id.length);
				
				mem_id=mem_id.split(":")[3]+":";
				mem_id=mem_id.split("\"")[0];
					if(mem_id.search(";")>1){
						mem_id=mem_id.split(";")[0];
						arrmemId[lengtharr]=new Array(mem_id,0);
						
						lengtharr++;
						mem_id=mem_id.split(";")[1];
						
					}
	
				arrmemId[lengtharr]=new Array(mem_id,0);
				lengtharr++;
			}
		}
		*/
	//	for(j=0;j<=lengtharr;j++)
	//	{
		
	//	}
		

		
	}
	/*
	var temp=0;
	var al="Candidate Name: "+cfname+" "+clname+"\nMemberID array: \n";
	for(i=0;i<lengtharr;i++){
		for(j=0;j<lengtharr;j++)
		{
			if(arrmemId[i][0]==arrmemId[j][0])
			{
				arrmemId[i][1]++;
			}
		}
		al+=arrmemId[i][0] + " - " +arrmemId[i][1]+"\n";
	}
	for(i=0;i<lengtharr;i++)
	{
		for(j=0;j<lengtharr;j++)
		{
			if(arrmemId[i][1]>arrmemId[j][1])
			{
				temp=i;	
			}
			
		}
	}
	
	al+="Potential memberID: "+arrmemId[temp][0];
	mem_id = arrmemId[temp][0];
	*/
	mem_id = profile_info();
	//var un=document.getElementById("profile-nav-item").getElementsByTagName("img")[0].getAttribute("alt");
	//var ufn= un.split(" ")[0];
	//var uln= un.split(" ")[1];
	/*-------------------------------------*/
	/*
	for(i=0;i<50;i++){
		if(document.getElementsByTagName("code")[i]===undefined)
		{
			break;	
		}
		ctag=document.getElementsByTagName("code")[i].innerHTML;
			if(ctag.search("\"paginationToken\"")>1){
			//ctag=document.getElementsByTagName("code")[i].innerHTML.slice(ctag.search("\"firstName\""),document.getElementsByTagName("code")[i].innerHTML.length);
		//	alert(ctag);
			n=un;
			//n="https://linkedin.com/in/"+n;
			ctag=ctag.slice(ctag.search("\"id\":")+6,ctag.length);
			//alert(ctag);
			uid=ctag.slice(0,ctag.search("\""));
			uid="https://www.linkedin.com/profile/view?id="+miniProfile;
			//alert(n);
			//alert(uid);
			break;	
		}
	}
	al+="\nUser name: "+n;
	al+="\nUser mini profile: "+uid;
	*/
}

uid="https://www.linkedin.com/profile/view?id="+miniProfile;
n = firstName +" " + lastName;
  hashresult = hashresult+"uid="+uid+"user="+n+"memid="+mem_id;
if(document.getElementsByTagName("code")[1]===undefined)  
{
						 var y = document.getElementById("wowi_user").src;
						 var msg =y + "#hhMessage="+encodeURIComponent(hashresult+"##endH##");
						 document.getElementById("wowi_user").src=msg;
}						
  ///--------------------------------new UI----------------
else
{
	hashresult ="#hhMessage="+encodeURIComponent(hashresult+"##endH##");
  	var ifr = document.createElement("iframe");
		ifr.id = "li_newUI";
		ifr.style.width = "215px";
		ifr.style.height = "150px";
    	ifr.style.border="0px";
		ifr.scrolling = "no";
		ifr.src = "https://xtruc-vngenius.rhcloud.com/workspace/QLG/LinkedinExtractor/profile.php"+hashresult;
		document.getElementById("Extractor-listbuilder-body").appendChild(ifr);
}

  ///------------------------------------------------------//
  
}

//-------------------------------------------------------------------------------------add style
function addstyle()
{
	var script0  = document.createElement("script");
		script0.type  = "text/javascript";
		script0.src   = "https://xtruc-vngenius.rhcloud.com/workspace/QLG/LinkedinExtractor/js/popup.js";   
		document.getElementsByTagName("head")[0].appendChild(script0);	
	//--------------
	/*
	var script1  = document.createElement("script");
		script1.type  = "text/javascript";
		script1.src   = "https://xtruc-vngenius.rhcloud.com/workspace/QLG/js/jquery-ui.js";   
		document.getElementsByTagName("head")[0].appendChild(script1);	
	//-----------------
		var script2  = document.createElement("script");
		script2.type  = "text/javascript";
		script2.src   = "https://vngenius.com/app/js/jquery-1.10.2.js";   
		document.getElementsByTagName("head")[0].appendChild(script2);	
		*/
	//-----------------
	var link1 = document.createElement( "link" );
	link1.href = "https://xtruc-vngenius.rhcloud.com/workspace/QLG/LinkedinExtractor/css/popup.css";
	link1.type = "text/css";
	link1.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link1);
		//-----------------
	/*	
	var link2 = document.createElement( "link" );
	link2.href = "https://xtruc-vngenius.rhcloud.com/workspace/QLG/LinkedinExtractor/css/jquery-ui.css";
	link2.type = "text/css";
	link2.rel = "stylesheet";
	document.getElementsByTagName("head")[0].appendChild(link2);
	//--------------
	var script3   = document.createElement("script");
	var r = document.createTextNode("   $(document).ready(function() { $( \"#Extractor-listbuilder-wrapper\" ).draggable(); });");
	script3.appendChild(r);
	document.getElementsByTagName("head")[0].appendChild(script3);
	*/
}
//-----------------------------------
if(!document.getElementById("Extractor-listbuilder-wrapper")){
		if(document.getElementById("advocate-modal") ){
			advocate();
		}else{
	addstyle();
	adddiv();	addifr(hashresult);
	hashtag();
		}
  
}

//-------------------------------- Move Div
var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('Extractor-listbuilder-wrapper').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;