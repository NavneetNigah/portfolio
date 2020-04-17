var current_banner=1;
var wishList = new Array();
var previousResult =[];
var phPattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
function change_banner()
{
   if(current_banner>3){current_banner=1;} document.getElementById('banner').style.backgroundImage="url('images/banner"+current_banner+".jpg')";
    current_banner++;
}

setInterval(change_banner,2000);

function add_wishlist(btn)
{
    if(btn.innerHTML=="Remove")
    {
        btn.innerHTML="Add Wishlist";
        btn.style.color="#096";
        btn.style.borderColor="#096";
    }else{
        btn.innerHTML="Remove";
        btn.style.color="#333";
        btn.style.borderColor="#333";
        var Nname = btn.getAttribute('data-name');
        var Nprice = btn.getAttribute('data-price');
        var Nimage = btn.getAttribute('data-image'); 
        var property={Nname,Nprice,Nimage};
       var propertyArray=(window.localStorage.propertyArray)?JSON.parse(window.localStorage.propertyArray):[];
        property.srno=propertyArray.length+1;
        propertyArray.push(property);
        window.localStorage.setItem('propertyArray',JSON.stringify(propertyArray));
        //document.getElementById('wishlist-table').innerHTML='<tr><td class="image"><img src="'+Nimage+'"></td><td class="title">'+Nname+'</td><td class="detail">'+Nprice+'</td><td class="action"><a href="javascript:void(0)" onclick="remove_wishlist(this)">X</a></td></tr>';
    }
}

function next_page()
{
    document.getElementById('pagging').style.display="none";
    document.getElementById('empty').style.display="block";
}

function remove_wishlist(e)
{
e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
localStorage.clear(e.parentNode.parentNode);
}


function submit_add_prperty()
{
var name=document.getElementById('name');
var nameVal=document.getElementById('name').value;
var phone=document.getElementById('phone');
var phoneVal=document.getElementById('phone').value;
var price=document.getElementById('price');
var priceVal=document.getElementById('price').value;
var description=document.getElementById('description');
var descriptionVal=document.getElementById('description').value;
var error=document.getElementById('error');
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(name.value==""){
        error.innerHTML='<div class="error">Please enter your Name.</div>';
    name.focus();}
    else if(phone.value=="" || phPattern.test(phone.value) == false){
        error.innerHTML='<div class="error">Please enter valid Phone Number.</div>';
        phone.focus();
    }
    else if(price.value==""){
        error.innerHTML='<div class="error">Please enter your Property Price.</div>';
        price.focus();
    }
    else if(description.value==""){
        error.innerHTML='<div class="error">Please enter your Property Description.</div>';
        description.focus();
    }else{error.innerHTML='<div class="success">Successfully Saved.</div>';}
    var nm = document.getElementById('nameR');

    nm.innerHTML='<div class="">'+nameVal+'</div>';
    var Dhtml ="";
    Dhtml = document.getElementById('phoneR').innerHTML='<div class="">'+phoneVal+'</div>';
    Dhtml += document.getElementById('typeR').innerHTML='<div class="">'+nameVal+'</div>';
    Dhtml += document.getElementById('priceR').innerHTML='<div class="">'+priceVal+'</div>';
    Dhtml += document.getElementById('descriptionR').innerHTML='<div class="">'+descriptionVal+'</div>';
    Dhtml += document.getElementById('linkR').innerHTML='<div class=""><a href="property.html">VIEW</a></div>';
    Dhtml += document.getElementById('reslt-add').style.opacity = 1;
    localStorage.name12 = 'Navneet';
    
    //setTimeout(function(){ location.reload(true); }, 2000);
}

var contact_uploaded=false;
function submit_contact()
{
var name=document.getElementById('name');
var phone=document.getElementById('phone');
var sub=document.getElementById('subject');
var msg=document.getElementById('msg');
var error=document.getElementById('error');


// if(email == "" || emailPattern.test(email) == false)

    if(name.value==""){
        error.innerHTML='<div class="error">Please enter your Name.</div>';
    name.focus();}
    else if(phone.value =="" || phPattern.test(phone.value) == false ){
        error.innerHTML='<div class="error">Please enter Valid Phone Number.</div>';
        phone.focus();
    }
    else if(sub.value==""){
        error.innerHTML='<div class="error">Please enter Subject.</div>';
        sub.focus();
    }
    else if(msg.value==""){
        error.innerHTML='<div class="error">Please enter your Message.</div>';
        msg.focus();
    }else{
        if(!contact_uploaded)
        {error.innerHTML='<div class="success">Thank you for contact us.</div>';
        contact_uploaded=true;}else{error.innerHTML='<div class="error">Already Submitted</div>';}
        
         }
    
}
/* cookie start */
    function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    //alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       //setCookie("username", user, 30);
     }
  }
}

/* cookie end */
function search() {
var term = $('#inputsearch').val();
var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("inputsearch");
    filter = input.value.toUpperCase();
var result = document.getElementById("result");
    for (i = 0; i < condos.length; i++) {

        txtValue = condos[i];
        if (txtValue.indexOf(filter) > -1) {
            result.innerHTML = txtValue;
            
        } else {

            result.innerHTML = txtValue;
            
        }
    }

}


function getData ()
{
  var propertyArray=(window.localStorage.propertyArray)?JSON.parse(window.localStorage.getItem('propertyArray')):[];
  var htmltorender="";
  //alert(document.getElementById('main-wishl').innerHTML)
   if(document.getElementById('main-wishl').innerHTML != ""){
     htmltorender += document.getElementById('main-wishl').innerHTML;
   }
    
  for(i=0;i<propertyArray.length;i++){
        // Nname,Nprice,Nimage
        htmltorender+=`<tr>
                    <td class="title">`+propertyArray[i].srno+`</td>
                    <td class="title">`+propertyArray[i].Nname+`</td>
                    
                    <td class="detail">`+propertyArray[i].Nprice+`</td>
                   <td class="image"><img src="`+propertyArray[i].Nimage+`"></td>
                  <td class="action">
                      <a href="javascript:void(0);" onclick="remove_wishlist(this);">X</a>
                     </td>
                 </tr>`;

    }
    document.getElementById('wishlist-table').innerHTML=htmltorender;
}


$(document).ready(function(){
    var url = window.location.href;
    var spliter = url.split("q=");
    if (url.indexOf(spliter[1]) > -1)
    {
        $('.data-flex aside').each(function(){
           if($(this).attr('data-type') == spliter[1])
           {
                //console.log(spliter);
           }
           else
           {
           // $(this).css('display','none').css('height','0').css('width','0');
           $(this).remove();
           }
        });
    }

    if(url.indexOf('wishlist.html') > -1)
    {
      getData();
    }

    //api
    if(url.indexOf('images.html') > -1)
    {
    $.ajax({ //make ajax request to cart_process.php
    url: "https://pixabay.com/api/?username=rexonaninja&key=10971138-63cff514b4b9f3279b0d00ed2&q=home%20house%20Buildings&image_type=all",
    success: function(response) {
      console.log(response);
          if(response.hits.length === 0){
              $("#api-images").empty().text("No Results").show();
          } else{
              $.each(response.hits, function(key, value){
                $("#api-images").prepend("<div class='image image" + key + "' style='width:" + value.webformatWidth + "px; height:" + value.webformatHeight + "px; background: url(" + value.webformatURL + ");'><a href='" + value.pageURL + "' target='_blank'><div class='overlay'></div></a><div class='hidden'></div></div>");
                $(".image"+key+" .hidden").append("<div class='direct-links'><a target='_blank' href='" + value.webformatURL + "' download><i class='fa fa-download'></i> Download</a></div>");
              });
              // clearTimeout(fetchThis.masonryTimeout);
              // fetchThis.masonryTimeout = setTimeout(fetchThis.getMasonryLayout, 400);
              
          }
    }
  });
} //end api if
});

