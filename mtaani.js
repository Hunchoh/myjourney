const close = document.getElementById('close')
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    } )
}

const search = () =>{
    const searchbox = document.getElementById("search-item").textvaluevalue.toUpperCase(); 
    const storeitems = document.getElementsByClassName(".pro-container");
    const product = document.querySelectorAll(".pro")
    const pname = document.getElementsByTagName("span")

    for(var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('span')[0];

        if(match){
            let textvalue = match.textcontent || match.innerHTML

            if(textvalue.toUpperCase().indexof(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }

    }
}