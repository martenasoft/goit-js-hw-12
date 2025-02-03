import{a as u,S as g,i as c}from"./assets/vendor-C0BilFIf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();const p="48580405-254aeb3d0592dc0b65db12949",d=20;let i=1;async function y(s,e=!1){if(e&&(i=1),s==="")throw{message:"Query could not be empty"};return await u.get("https://pixabay.com/api/",{params:{key:p,q:s,min_width:360,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:i}}).then(l=>(++i,{response:l,currentPage:i,perPage:d}))}class f{constructor(e,l,r){this.gallery=e,this.loader=l,this.loadMoreButton=r}render(e){let l="";return e.forEach(r=>{l+=this.template(r)}),this.append(l),new g(".gallery-item a",{captionsData:"alt",captionDelay:250}),this}scroll(){const l=document.getElementById("gallery").getBoundingClientRect();window.scrollTo({top:l.height*2,behavior:"smooth"})}clear(){return this.gallery.innerHTML="",this}append(e){return this.gallery.innerHTML+=e,this}loaderLabel(e=!1){return this.loader.style.display=e?"block":"none",this}loadMore(e=!1){return this.loadMoreButton.style.display=e?"block":"none",this}template(e){return`<li class="gallery-item">
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

            </li>`}}const h=document.getElementById("searchForm"),o=new f(document.getElementById("gallery"),document.getElementById("loader"),document.getElementById("loadMore"));let m="";h.addEventListener("submit",async s=>{s.preventDefault();let e=document.getElementById("searchQuery").value.trim(),l=e!==m;l&&(m=e,o.clear(!1)),o.loadMore(!1).loaderLabel(!0),y(e,l).then(r=>{if(o.loaderLabel(!1).loadMore((r.currentPage-1)*r.perPage<=r.response.data.total).render(r.response.data.hits).scroll(),r.response.data.total===0&&l){o.loaderLabel(!1),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(r=>{o.loaderLabel(!1);const t=r.message!==void 0?r.message:"Something went wrong. Please try again later.";c.error({title:"Error",message:t})})});
//# sourceMappingURL=index.js.map
