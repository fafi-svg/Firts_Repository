function activar(){
    document.getElementById("radio-register").checked=true;
}
let company = document.querySelector("div.expanded-company");
let features = document.querySelector("div.expanded-features");
let menu_company =  document.getElementById("menu_expanded_company");
let menu_features =  document.getElementById("menu_expanded_features");
menu_company.style.padding="0px";
menu_features.style.padding="0px";
console.log(menu_company);
company.addEventListener("click", ()=>{
    console.log(menu_company.padding);
    if(menu_company.style.padding == "0px"){
        focus(menu_company)
    }
    else{
        menu_company.style.padding= "0px"
        menu_company.style.height = "0px"
    }
})
features.addEventListener("click", ()=>{
    if(menu_features.style.padding == "0px"){
        focus(menu_features)
    }
    else{
        menu_features.style.padding= "0px"
        menu_features.style.height = "0px"
    }
})
function focus(menu){
    menu.style.padding= "20px"
    menu.style.height = "max-content"
}
function focusOut(menu){
    menu.style.padding= "0px"
    menu.style.height = "0px"
}
company.addEventListener("focusout", ()=>{
    focusOut(menu_company);
})
features.addEventListener("focusout", ()=>{
    focusOut(menu_features);
})