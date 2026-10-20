(function(){
 /* 웹사이트 삽입용 — 소개서 '직접 응대 개선안' 판으로 맞추고, 이 장만 보이게 */
 var b=document.querySelector('[data-pan="none2"]');if(b)b.click();
 var s=document.querySelector('.sl');if(!s)return;s.removeAttribute('hidden');s.hidden=false;
 var Q=location.search||'';
 var bare=/[?&]bare=1/.test(Q);
 var fit=s.querySelector('.fit');
 function fe(){try{return window.frameElement}catch(e){return null}}
 function crop(){
  window.dispatchEvent(new Event('resize'));
  var c=fit&&fit.firstElementChild;while(c&&c.classList.contains('snap'))c=c.nextElementSibling;
  if(!c)return;
  var H=1080,top=0,bot=H;
  if(bare){
   var hd=[].slice.call(c.querySelectorAll(':scope>.ds-eb,:scope>.ds-h,:scope>.ds-s,:scope>.rfh>.ds-eb,:scope>.rfh>.ds-h,:scope>.rfh>.ds-s,:scope>.rf-h,:scope>.rf-s'));
   hd.forEach(function(e){e.style.visibility='hidden'});
   c.style.marginTop='0px';
   var cr=c.getBoundingClientRect(),k=cr.width/1920;if(!k){c.style.marginTop='';hd.forEach(function(e){e.style.visibility=''});return;}
   var mn=1e9,mx=0;
   [].forEach.call(c.querySelectorAll('*'),function(e){
     if(hd.some(function(h){return h===e||h.contains(e)}))return;
     if(e.children.length&&getComputedStyle(e).position!=='static'&&e.parentElement===c){}
     var r=e.getBoundingClientRect();if(r.width<2||r.height<2)return;
     var cs=getComputedStyle(e);if(cs.visibility==='hidden'||cs.display==='none'||+cs.opacity===0&&!e.closest('[data-t]'))return;
     var t=(r.top-cr.top)/k,bt=(r.bottom-cr.top)/k;
     if(t<0||bt>H+2)return;            /* 캔버스 밖 장식 제외 */
     if(r.height/k>H*0.9)return;          /* 판 전체를 덮는 배경 제외 */
     mn=Math.min(mn,t);mx=Math.max(mx,bt);
   });
   if(mn<1e9){top=Math.max(0,mn-36);bot=Math.min(H,mx+36);}
   c.style.marginTop=(-top)+'px';
  }
  var ratio=1920/(bot-top);
  fit.style.aspectRatio=String(ratio);
  lastW=innerWidth;
  var f=fe();if(f){f.style.aspectRatio=String(ratio);f.setAttribute('data-ready','1');}
  window.dispatchEvent(new Event('resize'));
 }
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){setTimeout(crop,60)});else setTimeout(crop,200);
 /* 움직임이 다 나온 뒤 한 번 더(나중에 나타나는 칸 포함) */
 /* 숨겨진 탭(너비 0)에서 시작한 경우: 보이는 순간 다시 자르기 */
 var lastW=0,tm=0;
 if(window.ResizeObserver)new ResizeObserver(function(){if(innerWidth>0&&Math.abs(innerWidth-lastW)>1){clearTimeout(tm);tm=setTimeout(crop,60)}}).observe(document.documentElement);
})();
