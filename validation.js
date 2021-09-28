let fnameNode=document.getElementById("firstnamenews");
let spanfoot1=document.getElementById('errorfoot1');
function validatefname(){
    spanfoot1.innerHTML="";
    let firstname=fnameNode.value;
    if(firstname=="")
    {
        spanfoot1.innerHTML="This field Required";
        fnameNode.style.border="2px solid red";
        spanfoot1.style.color="red";
    }
    else{
        fnameNode.style.border="2px solid green";
    }
}

let emailNode=document.getElementById("emailnews");
let  spanfoot2=document.getElementById("errorfoot2");
function validationemail(){
    spanfoot2.innerHTML='';
    let emailId=emailNode.value;
    let substr=emailId.substring(emailId.indexOf('@')+1);
    if(emailId=='')
    {
        spanfoot2.innerHTML="This field Required";
        emailNode.style.border="3px solid red";
        spanfoot2.style.color="red";
    }
    else if(!emailId.includes('@')||substr=='')
    {
        spanfoot2.innerHTML="Invalid EmailId";
        emailNode.style.border="2px solid red";
        spanfoot2.style.color="red";
    }
    else{
        emailNode.style.border="2px solid green";
    }

}
//let =document.getElementById("submitfornews");

function submitfornews(){
    let fnameNode=document.getElementById("firstnamenews");
    let spanfoot1=document.getElementById('errorfoot1');
    let emailNode=document.getElementById("emailnews");
    let  spanfoot2=document.getElementById("errorfoot2");
    spanfoot1.innerHTML="";
    let firstname=fnameNode.value;
    if(firstname=="")
    {
        spanfoot1.innerHTML="This field Required";
        fnameNode.style.border="2px solid red";
        spanfoot1.style.color="red";
    }
    else{
        fnameNode.style.border="2px solid green";
    }

    spanfoot2.innerHTML='';
    let emailId=emailNode.value;
    let substr=emailId.substring(emailId.indexOf('@')+1);
    if(emailId=='')
    {
        spanfoot2.innerHTML="This field Required";
        emailNode.style.border="3px solid red";
        spanfoot2.style.color="red";
    }
    else if(!emailId.includes('@')||substr=='')
    {
        spanfoot2.innerHTML="Invalid EmailId";
        emailNode.style.border="2px solid red";
        spanfoot2.style.color="red";
    }
    else{
        emailNode.style.border="2px solid green";
    }

}
    


/*register form validation*/
let fullnameNode=document.getElementById("fullname");
let spanNode1=document.getElementById('errorfname');
function validatefullname(){
    spanNode1.innerHTML="";
    let fullname=fullnameNode.value;
    if(fullname=="")
    {
        spanNode1.innerHTML="This field Required";
        fullnameNode.style.border="2px solid red";
        spanNode1.style.color="red";
        spanNode1.style.fontSize="15px";
    }
    else{
        fullnameNode.style.border="2px solid green";
    }
}

let remailNode=document.getElementById("registeremail");
let  spanNode2=document.getElementById("erroremail");
function validateemail(){
    spanNode2.innerHTML='';
    let emailId=remailNode.value;
    let substr=emailId.substring(emailId.indexOf('@')+1);
    if(emailId=='')
    {
        spanNode2.innerHTML="This field Required";
        remailNode.style.border="3px solid red";
        spanNode2.style.color="red";
        spanNode2.style.fontSize="15px";
    }
    else if(!emailId.includes('@')||substr=='')
    {
        spanNode2.innerHTML="Invalid EmailId";
        remailNode.style.border="2px solid red";
        spanNode2.style.color="red";
        spanNode2.style.fontSize="15px";
    }
    else{
        remailNode.style.border="2px solid green";
    }

}

let npassNode=document.getElementById("npass");
let spanNode3=document.getElementById('errornpass');
function validatenpass(){
    spanNode3.innerHTML="";
    let npass=npassNode.value;
    if(npass=="")
    {
        spanNode3.innerHTML="This field Required";
        npassNode.style.border="2px solid red";
        spanNode3.style.color="red";
        spanNode3.style.fontSize="15px";
    }
    else if(npass<=0 || npass>5){
        spanNode3.innerHTML="This field must be between 1 to 4";
        npassNode.style.border="2px solid red";
        spanNode3.style.color="red";
        spanNode3.style.fontSize="15px";

    }
    else{
        npassNode.style.border="2px solid green";
    }
}
