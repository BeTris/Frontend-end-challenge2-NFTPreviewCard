
window.onload = (event) => {
  console.log("page is fully loaded");

    function hide(){
  const object_d = document.querySelector('.hov');
      
       object_d.style.visibility = 'hidden' ; 
      console.log("hide",object_d);
    }
    function show(){
       const object_d = document.querySelector('.hov');

       object_d.style.visibility = 'visible';

      console.log("vis",object_d);
    }
    document.querySelector('.img-hover').addEventListener('mouseover',show);

    document.querySelector('.img-hover').addEventListener('mouseout',hide);
};