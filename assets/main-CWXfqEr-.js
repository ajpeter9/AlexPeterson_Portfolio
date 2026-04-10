(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=window.location.pathname,t=window.location.hash,n=e.includes(`index`)||e===`/`,r=t===`#projects`||e.includes(`projects`),i=`text-green-500 font-semibold`;return`
<nav id="navbar" class="fixed top-0 w-full z-50 bg-[#181717] transition-all duration-300 px-6 py-6">
  <div class="max-w-6xl mx-auto flex justify-between items-center">
    <h1 id="logo" class="font-bold text-white">Alex Peterson</h1>
    
    <div class="space-x-6">
      <a href="index.html" class="${n?i:`px-4 py-2 text-white`}">
        Home
      </a>

      <a href="projects.html" 
         class="${r?i:`px-4 py-2 text-white`}">
        Projects
      </a>
    </div>
  </div>
</nav>
`}document.getElementById(`buttons1`)?.addEventListener(`click`,()=>t(`id1`)),document.getElementById(`buttons2`)?.addEventListener(`click`,()=>t(`id2`)),document.getElementById(`buttons3`)?.addEventListener(`click`,()=>t(`id3`));function t(e){[`id1`,`id2`,`id3`].forEach(t=>{document.getElementById(t).classList.toggle(`hidden`,t!==e)}),[`buttons1`,`buttons2`,`buttons3`].forEach(t=>{document.getElementById(t).classList.toggle(`bg-green-700`,t===`buttons${e.slice(-1)}`)})}export{e as t};