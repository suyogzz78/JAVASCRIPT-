 function fetchgit()
    {
        const api='https://api.github.com/users/suyogzz78'
        const xhr= new XMLHttpRequest();
        xhr.open('GET',api);
        xhr.onload=function()
        {
            if(xhr.status===200)
                {
                    const sdata=JSON.parse(this.responseText)
                    const card= document.getElementById('card')
                    card.innerHTML=''

                    const img = document.createElement('img')
                    img.src=sdata.avatar_url;

                    const followers=document.createElement('p')
                    followers.textContent=sdata.followers;

                    const following=document.createElement('p')
                    following.textContent=sdata.following;
                    
                    card.appendChild(img);
                    card.appendChild(followers);
                    card.appendChild(following);

                    
                }
        }
        xhr.send()
    }