var cssId = 'luanCSS';
if (!document.getElementById(cssId))
{
    var head= document.getElementsByTagName('head')[0];
    var link= document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://static.licdn.com/sc/h/dcj5lzeo08xjc479ekjptotb4';
    link.media = 'all';
    head.appendChild(link);
}

var div = document.createElement("div");
div.id="Extractor-listbuilder-wrapper";
div.className="reg-upsell  advocate-cta-enabled lazy-loaded full-click";
div.class = "profile-overview";
div.style.top ="183px";
div.style.left ="0px";
div.style.height="700px";
div.style.width="1000px";
document.body.appendChild(div);