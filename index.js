import{a as m,S as p,i as c}from"./assets/vendor-C0BilFIf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const y="48580405-254aeb3d0592dc0b65db12949",d=20;let o=1;async function g(s,e=!1){return e&&(o=1),await m.get("https://pixabay.com/api/",{params:{key:y,q:s,min_width:360,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:o}}).then(r=>(++o,{response:r,currentPage:o,perPage:d}))}class f{constructor(e,r,l){this.gallery=e,this.loader=r,this.loadMoreButton=l}render(e){let r="";return e.forEach(l=>{r+=this.template(l)}),this.append(r),new p(".gallery-item a",{captionsData:"alt",captionDelay:250}),this}scroll(){const e=document.getElementsByClassName("gallery-info-item");if(e[0]===void 0)return;const r=e[0].getBoundingClientRect();window.scrollBy(0,r.height*2)}clear(){return this.gallery.innerHTML="",this}append(e){return this.gallery.innerHTML+=e,this}loaderLabel(e=!1){return this.loader.style.display=e?"block":"none",this}loadMore(e=!1){return this.loadMoreButton.style.display=e?"block":"none",this}template(e){return`<li class="gallery-item">
                <a href="${e.largeImageURL}" >
                  <img src="${e.webformatURL}" alt="${e.tags}" data-source="${e.largeImageURL}">
                </a>
                <ul class="gallery-info">
                    <li class="gallery-info-item">
                        <p class="gallery-item-title">Likes</p>
                        <p class="gallery-item-value">${e.likes}</p>
                    </li>
                    <li class="gallery-info-item">
                        <p class="gallery-item-title">Views</p>
                        <p class="gallery-item-value">${e.views}</p>
                    </li>
                      <li class="gallery-info-item">
                        <p class="gallery-item-title">Comments</p>
                        <p class="gallery-item-value">${e.comments}</p>
                    </li>
                      <li class="gallery-info-item">
                        <p class="gallery-item-title">Downloads</p>
                        <p class="gallery-item-value">${e.downloads}</p>
                    </li>
                </ul>

            </li>`}}const h=document.getElementById("searchForm"),i=new f(document.getElementById("gallery"),document.getElementById("loader"),document.getElementById("loadMore"));let u="";h.addEventListener("submit",async s=>{s.preventDefault();let e=document.getElementById("searchQuery").value.trim(),r=e!==u;r&&(u=e,i.clear(!1)),i.loadMore(!1).loaderLabel(!1),g(e,r).then(l=>{if(i.loaderLabel(!1).loadMore(l.currentPage*l.perPage<l.response.data.total).render(l.response.data.hits).scroll(),l.response.data.total===0&&r){i.loaderLabel(!1),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(l=>{c.error({title:"Error",message:"Something went wrong. Please try again later."})})});
//# sourceMappingURL=index.js.map
