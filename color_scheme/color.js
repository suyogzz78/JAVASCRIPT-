const boxes=document.querySelectorAll('.box');
const body=document.querySelector('body');

    boxes.forEach(function(box){
        box.addEventListener('click',function(e){
            console.log(e);
            console.log(e.target);
            if(e.target.id === 'red')
            {
                body.style.backgroundColor=e.target.id;
            }
              if(e.target.id === 'green')
            {
                body.style.backgroundColor=e.target.id;
            }
              if(e.target.id === 'blue')
            {
                body.style.backgroundColor=e.target.id;
            }
              if(e.target.id === 'yellow')
            {
                body.style.backgroundColor=e.target.id;
            }
              if(e.target.id === 'purple')
            {
                body.style.backgroundColor=e.target.id;
            }
            




        });
    });

   