let openbutton=document.getElementById("openbutton");
let closebutton=document.getElementById("closebutton");
let contentcontainer=document.getElementById("contentcontainer")
let h1=document.getElementById("h1")
let colbuttunid=document.getElementById("colbuttunid")
let menuid=document.getElementById("menuid")
let ul=document.getElementById("ul")

openbutton.addEventListener("click",(e)=>{
    contentcontainer.classList.add("donus")
    colbuttunid.classList.add("donusbuton")
    menuid.classList.add("zindex")
    ul.classList.add("menugerirem");
    ul.classList.remove("menuilerirem");
    
    e.preventDefault()
})



closebutton.addEventListener("click",(e)=>{
    contentcontainer.classList.remove("donus")  
    colbuttunid.classList.remove("donusbuton")
    menuid.classList.remove("zindex")
    ul.classList.add("menuilerirem");
    ul.classList.remove("menugerirem");
    
        
    e.preventDefault()
})