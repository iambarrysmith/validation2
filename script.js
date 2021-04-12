var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
var title =document.createElement("h1");
var items =document.body.querySelector(".items").style.visibility="hidden";
var vdisplay =document.body.querySelector(".vdisplay");
var howImportant =document.getElementById(".howImportant");



function validate(){
//   for(var i=0; i<pages.length; i++){
//   createPage(pages[i]);
// }
  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
  // var password=document.body.querySelector(".password").value;
  
  if(username==="coolStudent123"){
    messEle.innerHTML=""
      for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}
    // messEle.innerHTML="This should be on the page by itself";
    // document.body.querySelector(".valMess").style.visibility="hidden";
    document.body.querySelector(".username").style.visibility="hidden";
    //document.body.querySelector(".password").style.visibility="hidden";
    document.body.querySelector(".validate").style.visibility="hidden";
    // createPage(pages[i]);
    // messEle.innerHTML="Submitted!"
  }else{
    messEle.innerHTML="The username was incorrect.";
  }
  
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
});








var pages = [
  
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"About"
  },
  {
    name:"View",
    content:"View Notes"
  }
];



// // for(var i=0; i<pages.length; i++){
// //   createPage(pages[i]);
// // }


function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
 });
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  
  if (pg == "Home"){
    homePage();
  }
  if(pg == "About"){
    aboutPage();
  }
  if(pg == "View"){
    viewPage();
    
  }

}

function aboutPage(){
  title.innerHTML="About";
  display.appendChild(title);
  var name = document.createElement("h3");
  name.innerHTML="Barry";
  display.appendChild(name);
  document.body.querySelector(".vdisplay").innerHTML="";
  document.body.querySelector(".items").style.visibility="hidden";
  document.body.querySelector(".subMess").style.visibility="hidden";

}

function homePage(){
  title.innerHTML="Home";
  display.appendChild(title);
  document.body.querySelector(".vdisplay").innerHTML="";
  document.body.querySelector(".items").style.visibility="hidden";
  document.body.querySelector(".subMess").style.visibility="hidden";
  
}

function viewPage(){
  title.innerHTML="View Notes";
  display.appendChild(title);
  document.body.querySelector(".items").style.visibility="visible";
  document.body.querySelector(".subMess").style.visibility="visible";
  renderItems();
 
//   document.body.querySelector(".submit").addEventListener("click", function(){
//   submit();
// })
  
  
}

var list=[];

function renderItems(){
  // document.body.querySelector(".display").innerHTML="";
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML=list[i];
     // ele.innerHTML=howImportant+list[i];
    document.body.querySelector(".vdisplay").appendChild(ele);
  }
}

function submit(){
  // title.innerHTML="View Notes";
  // display.appendChild(title);
  var text=document.body.querySelector(".text").value;
  if(text.length>1){
    document.body.querySelector(".subMess").innerHTML="";
    document.body.querySelector(".vdisplay").innerHTML="";
     list.push(text);
  }else{
    document.body.querySelector(".subMess").innerHTML="Not enough letters. Note length needs to be more than one letter.";
    document.body.querySelector(".vdisplay").innerHTML="";
  }
  var importance=document.body.querySelector(".importance").value;
  if(importance.length>0){
    document.body.querySelector(".subMess").innerHTML="";
    document.body.querySelector(".vdisplay").innerHTML="";
     list.push(importance);
  }
  if(importance.length>0 && text.length<=1){
    document.body.querySelector(".subMess").innerHTML="Not enough letters. Note length needs to be more than one letter.";
    document.body.querySelector(".vdisplay").innerHTML="";
    list.pop(importance);
    // document.body.querySelector(".items").innerHTML="";
  }
  if(isNaN(importance)){
    document.body.querySelector(".subMess").innerHTML="Please enter a number as the importance.";
     document.body.querySelector(".vdisplay").innerHTML="";
    list.pop(importance);
    list.pop(text);
  }
  renderItems();
}

document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
});

// renderItems();


// contentWrite(pages[0].content, "Home");



// document.body.querySelector(".display").innerHTML="";