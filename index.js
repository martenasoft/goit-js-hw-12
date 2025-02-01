import{a as g,i as y,S as f}from"./assets/vendor-CmoQ05sv.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="48580405-254aeb3d0592dc0b65db12949",m=20;let n=1,c="";async function u(s,l){s!==c&&(n=1,c=s);try{const r=(await g.get("https://pixabay.com/api/",{params:{key:h,q:s,min_width:360,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:n}})).data;if(r.hits.length===0&&n===1){y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}l(r.hits,n,m,r.total)}catch(a){console.log(a),y.error({title:"Error",message:"Something went wrong. Please try again later."})}}function b(s){n++,u(c,s)}function p(s,l,a,r){const e=document.getElementById("gallery");let t="";s.forEach(o=>{t+=`<li class="gallery-item">
                <a href="${o.largeImageURL}" >
                  <img src="${o.webformatURL}" alt="${o.tags}" data-source="${o.largeImageURL}">
                </a>
                <ul class="gallery-info">
                    <li class="gallery-info-item">
                        <p class="gallery-item-title">Likes</p>
                        <p class="gallery-item-value">${o.likes}</p>
                    </li>
                    <li class="gallery-info-item">
                        <p class="gallery-item-title">Views</p>
                        <p class="gallery-item-value">${o.views}</p>
                    </li>
                      <li class="gallery-info-item">
                        <p class="gallery-item-title">Comments</p>
                        <p class="gallery-item-value">${o.comments}</p>
                    </li>
                      <li class="gallery-info-item">
                        <p class="gallery-item-title">Downloads</p>
                        <p class="gallery-item-value">${o.downloads}</p>
                    </li>
                </ul>

            </li>`});const i=document.getElementById("loadMore"),d=document.getElementById("loader");i.style.display="none",d.style.display="block",setTimeout(()=>{e.innerHTML+=t,new f(".gallery-item a",{captionsData:"alt",captionDelay:250}),a*l<r&&(i.style.display="block"),d.style.display="none"},1e3)}const E=document.getElementById("searchForm"),L=document.getElementById("loadMore");E.addEventListener("submit",async s=>{const l=document.getElementById("searchQuery"),a=document.getElementById("submitButton"),r=document.getElementById("gallery");s.preventDefault();const e=l.value.trim();e&&(r.style.display="none",a.disabled=l.disabled=!0,await u(e,p),a.disabled=l.disabled=!1,r.style.display="flex")});L.addEventListener("click",()=>b(p));
//# sourceMappingURL=index.js.map
