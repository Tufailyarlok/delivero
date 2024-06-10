document.addEventListener('scroll',()=>{
    const navv=document.querySelector('nav');
  


    if(window.scrollY>0){
        navv.classList.add('scrolled');
    }
    else{
        navv.classList.remove('scrolled');
    }
})
var addItemId=0;
function addTocart(item){
    var selecteditem=document.createElement('div');
    selecteditem.classList.add('cartImg');
    selecteditem.setAttribute('id',addItemId);
    var img=document.createElement('img');
    
    img.setAttribute('src',item.children[0].currentSrc);
    var cartItems=document.getElementById('title');
    selecteditem.append(img);
    cartItems.append(selecteditem);

    var delbtn=document.createElement('button');
    delbtn.innerText='delete';
    delbtn.setAttribute('onclick','del('+addItemId+')');
    selecteditem.append(delbtn);

}
function del(item){
    document.getElementById(item).remove();
}