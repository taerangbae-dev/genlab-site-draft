try{

var ZZ=window.CSS&&CSS.supports&&CSS.supports('zoom','1');function fitOne(f){var c=f.firstElementChild;while(c&&c.classList.contains('snap'))c=c.nextElementSibling;if(!c)return;var w=f.clientWidth;if(!w)return;var k=w/1920;if(ZZ){c.style.transform='none';c.style.zoom=k;}else{c.style.transform='scale('+k+')';}}
function fitAll(){document.querySelectorAll('.fit').forEach(fitOne);}
window.addEventListener('resize',fitAll);window.addEventListener('orientationchange',fitAll);window.addEventListener('pageshow',fitAll);document.addEventListener('visibilitychange',fitAll);fitAll();
if(window.ResizeObserver){var RO=new ResizeObserver(function(es){es.forEach(function(e){fitOne(e.target)})});document.querySelectorAll('.fit').forEach(function(f){RO.observe(f)});}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitAll);
(function(){var S=[].slice.call(document.querySelectorAll('.sl')),i=0;function vis(){return [].slice.call(document.querySelectorAll('.sl:not([hidden])'));}
function show(n){i=Math.max(0,Math.min(S.length-1,n));S.forEach(function(s,k){s.classList.toggle('cur',k===i)});document.getElementById('pn').textContent=(i+1)+' / '+S.length;fitAll();if(window.ztPlay)ztPlay(S[i]);}
function enter(){S=vis();var vis2=S.findIndex(function(s){return s.getBoundingClientRect().bottom>80});document.body.classList.add('pres');show(vis2<0?0:vis2);var r=document.documentElement;if(r.requestFullscreen)r.requestFullscreen().catch(function(){});}
function exit(){document.body.classList.remove('pres');S.forEach(function(s){s.classList.remove('cur')});if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(function(){});setTimeout(function(){fitAll();S[i].scrollIntoView();},50);}
window.__ztGo=function(n){show(n)};window.__ztAt=function(){return [i,S.length]};document.getElementById('present').addEventListener('click',enter);
document.getElementById('pv').addEventListener('click',function(){show(i-1)});
document.getElementById('nx').addEventListener('click',function(){show(i+1)});
document.getElementById('px').addEventListener('click',exit);
document.addEventListener('fullscreenchange',function(){if(!document.fullscreenElement&&document.body.classList.contains('pres'))exit();});
document.addEventListener('keydown',function(e){if(!document.body.classList.contains('pres'))return;if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();show(i+1)}else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();show(i-1)}else if(e.key==='Escape')exit();});
S.forEach(function(s){s.addEventListener('click',function(){if(document.body.classList.contains('pres'))show(i+1)})});
})();
(function(){
var root=document.getElementById('zm');if(!root)return;
var $=function(id){return document.getElementById(id)};
var CH={'카카오톡':['#FEE500','#191919'],'네이버 톡톡':['#03C75A','#fff'],'쇼핑몰 게시판':['#5f6b80','#fff'],'LINE':['#06C755','#fff'],'이메일':['#868e96','#fff'],'웹 채팅':['#4c6ef5','#fff']};
var PILLS=[].slice.call(root.querySelectorAll('.zm-p[data-n]'));
function chp(c){var k=CH[c.chn];return '<span class="chp" style="--b:'+k[0]+';--f:'+k[1]+'">'+c.chn+'</span>';}
var BADGE={'카카오톡':['카카오','#FEE500','#191919'],'네이버 톡톡':['네이버','#03C75A','#fff'],'LINE':['LINE','#06C755','#fff'],'이메일':['메일','#868e96','#fff'],'웹 채팅':['웹','#4c6ef5','#fff'],'무신사':['무신사','#000','#fff'],'29CM':['29CM','#111','#fff'],'쿠팡':['쿠팡','#e5322d','#fff'],'지그재그':['지그재그','#e0337a','#fff']};
var CHI={"카카오톡": ["#FEE500", "<svg viewBox=\"0 0 24 24\"><path d=\"M12 4.5C7.3 4.5 3.5 7.4 3.5 11c0 2.3 1.6 4.4 4 5.5l-1 3.6 4.1-2.7c.5.1.9.1 1.4.1 4.7 0 8.5-2.9 8.5-6.5S16.7 4.5 12 4.5z\" fill=\"#3C1E1E\"/></svg>"], "네이버 톡톡": ["#03C75A", "<svg viewBox=\"0 0 24 24\" fill=\"#fff\"><path d=\"M14.6 12.6 9.2 5H5.5v14h3.9v-7.6L14.8 19h3.7V5h-3.9z\"/></svg>"], "스마트스토어": ["#03C75A", "<svg viewBox=\"0 0 24 24\" fill=\"#fff\"><path d=\"M14.6 12.6 9.2 5H5.5v14h3.9v-7.6L14.8 19h3.7V5h-3.9z\"/></svg>"], "LINE": ["#06C755", "<svg viewBox=\"0 0 24 24\" fill=\"#fff\"><path d=\"M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314\"/></svg>"], "이메일": ["#868e96", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2.2\"><rect x=\"4\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\"/><path d=\"m4.5 7 7.5 6 7.5-6\"/></svg>"], "웹 채팅": ["#4c6ef5", "<svg viewBox=\"0 0 24 24\" fill=\"#fff\"><path d=\"M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z\"/></svg>"], "무신사": ["#000", "<svg viewBox=\"0 0 24 24\"><text x=\"12\" y=\"17.4\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#fff\" font-family=\"Arial,sans-serif\" letter-spacing=\"-.5\">M</text></svg>"], "29CM": ["#000", "<svg viewBox=\"0 0 24 24\"><text x=\"12\" y=\"16.3\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"900\" fill=\"#fff\" font-family=\"Arial,sans-serif\" letter-spacing=\"-.5\">29</text></svg>"], "쿠팡": ["#fff", "<svg viewBox=\"0 0 24 24\"><text x=\"12\" y=\"18.5\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"900\" fill=\"#e5322d\" font-family=\"Arial,sans-serif\" letter-spacing=\"-.5\">c</text></svg>"], "지그재그": ["#ff4fa0", "<svg viewBox=\"0 0 24 24\"><text x=\"12\" y=\"17.4\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"900\" fill=\"#fff\" font-family=\"Arial,sans-serif\" letter-spacing=\"-.5\">Z</text></svg>"], "카페24 자사몰": ["#2b59ff", "<svg viewBox=\"0 0 24 24\"><text x=\"12\" y=\"16.3\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"900\" fill=\"#fff\" font-family=\"Arial,sans-serif\" letter-spacing=\"-.5\">24</text></svg>"]};function badge(n){var b=CHI[n];return '<i class="chb chi" style="background:'+b[0]+'">'+b[1]+'</i>';}function mic(n){var b=CHI[n];return b?'<i class="mi" style="background:'+b[0]+'">'+b[1]+'</i>':'';}
var LOGO={"카카오톡": "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\"><path d=\"M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z\"/></svg>", "네이버 톡톡": "<svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"currentColor\"><path d=\"M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z\"/></svg>", "LINE": "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\"><path d=\"M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314\"/></svg>", "이메일": "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"><path d=\"M2 5h20v14H2z M2 5l10 8 10-8\"/></svg>", "웹 채팅": "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"><path d=\"M4 4h16v11H9l-5 4z\"/></svg>", "쇼핑몰 게시판": "<svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linejoin=\"round\"><path d=\"M4 4h16v11H9l-5 4z\"/></svg>"};
var MALL={'카페24 자사몰':'#2b59ff','스마트스토어':'#03a94e','무신사':'#000','29CM':'#111','지그재그':'#e0337a','쿠팡':'#e5322d'};
var CASES=[
 {q:'“반품할게요”',act:'반품 접수',n:'김하늘',a:'김',col:'#7c5cf2',ch:'kk',chn:'카카오톡',m:'카페24 자사몰',get ord(){return (window.FX&&FX.is('D66'))?'20261005-0004127':'20261012-0004127'},cu:'지난주 받은 니트 반품할게요. 사이즈가 커요.',ai:'주문 확인했어요. 반품 접수를 마쳤고, 회수 기사님이 방문할 예정이에요.',pv:'AI: 반품 접수를 마쳤어요.',tag:'#반품접수',
  rows:[['카페24','주문 조회 · 10/05 결제, 니트 1'],['매뉴얼','반품 기간 확인 · 7일 이내'],['카페24','반품 접수 · 수거 신청 포함',1],['구글 시트','접수 기록 남김']]},
 {q:'“취소해 주세요”',act:'주문 취소',n:'이도윤',a:'이',col:'#ef5a5a',ch:'nv',chn:'네이버 톡톡',m:'스마트스토어',ord:'2026101158431207',cu:'어제 주문한 거 취소해 주세요.',ai:'출고 전이라 바로 취소했어요. 환불은 결제하신 수단으로 돌아가요.',pv:'AI: 출고 전이라 바로 취소했어요.',tag:'#주문취소',
  rows:[['스마트스토어','주문 조회'],['이지어드민','출고 상태 확인 · 출고 전'],['스마트스토어','주문 취소',1],['구글 시트','접수 기록 남김']]},
 {q:'“취소돼요?”',act:'취소 승인',n:'한지우',a:'한',col:'#111827',ch:'ms',chn:'무신사',m:'무신사',ord:'202610110927',cu:'무신사에서 산 셔츠인데 취소돼요?',ai:'출고 전이라 취소 요청을 승인했어요. 환불은 무신사에서 진행돼요.',pv:'AI: 무신사 취소를 승인했어요.',tag:'#주문취소',
  rows:[['무신사','주문 조회 · 취소 요청 있음'],['이지어드민','출고 상태 확인 · 출고 전'],['무신사','취소 요청 승인',1],['구글 시트','접수 기록 남김']]},
 {q:'“언제 와요?”',act:'배송 확인',n:'윤서아',a:'윤',col:'#e0337a',ch:'zz',chn:'지그재그',m:'지그재그',ord:'20261010-55812',cu:'지그재그에서 주문한 원피스 언제 와요?',ai:'어제 출고됐고 오늘 도착 예정이에요. 송장번호도 같이 보내드릴게요.',pv:'AI: 오늘 도착 예정이에요.',tag:'#배송조회',
  rows:[['사방넷','주문 조회 · 판매처 지그재그'],['사방넷','출고 확인 · 10/11 출고'],['CJ대한통운','배송 조회 · 오늘 도착 예정']]},
 {q:'“처리됐나요?”',act:'취소 승인',n:'정하린',a:'정',col:'#495057',ch:'cm',chn:'29CM',m:'29CM',ord:'1028457713',cu:'29CM에서 취소 요청했는데 처리됐나요?',ai:'출고 전이라 방금 취소를 승인했어요. 환불은 29CM에서 진행돼요.',pv:'AI: 29CM 취소를 승인했어요.',tag:'#주문취소',
  rows:[['29CM','취소 요청 조회'],['이지어드민','출고 상태 확인 · 출고 전'],['29CM','취소 승인',1],['구글 시트','접수 기록 남김']]},
 {q:'“받으셨나요?”',act:'교환 확인',n:'오세훈',a:'오',col:'#e5322d',ch:'cp',chn:'쿠팡',m:'쿠팡',ord:'31000184729',cu:'쿠팡 교환으로 보낸 신발 받으셨나요?',ai:'오늘 입고 확인했어요. 새 상품은 내일 출고됩니다.',pv:'AI: 교환 입고를 확인했어요.',tag:'#교환처리',
  rows:[['쿠팡','교환 요청 조회'],['쿠팡','교환 입고 확인',1],['구글 시트','접수 기록 남김']]},
 {q:'“회수가 안 와요”',act:'회수 접수',n:'최민준',a:'최',col:'#2f80ed',ch:'ln',chn:'LINE',m:'카페24 자사몰',ord:'20261009-0003981',cu:'반품 신청했는데 기사님이 안 오셨어요.',ai:'회수 접수를 다시 넣었어요. 롯데택배 기사님이 방문합니다.',pv:'AI: 회수 접수를 다시 넣었어요.',tag:'#회수접수',
  rows:[['카페24','반품 상태 확인'],['롯데택배','회수 접수',1],['담당자 알림','담당자에게 알림']]}
];
var HAND='<div class="cv"><span class="av" style="background:#f2994a">유<i class="chb chi" style="background:#FEE500"><svg viewBox="0 0 24 24"><path d="M12 4.5C7.3 4.5 3.5 7.4 3.5 11c0 2.3 1.6 4.4 4 5.5l-1 3.6 4.1-2.7c.5.1.9.1 1.4.1 4.7 0 8.5-2.9 8.5-6.5S16.7 4.5 12 4.5z" fill="#3C1E1E"/></svg></i></span><div class="cb"><div class="cr"><b>유나래</b><span class="pc">김상담</span><span class="tm">2분 전</span></div><p>AI: 환불 금액은 담당자가 이어서 안내드려요.</p><div class="tg"><span class="mp"><i class="mi" style="background:#2b59ff"><svg viewBox="0 0 24 24"><text x="12" y="16.3" text-anchor="middle" font-size="12" font-weight="900" fill="#fff" font-family="Arial,sans-serif" letter-spacing="-.5">24</text></svg></i>카페24 자사몰</span><span class="t y">#상담원연결</span></div></div></div>';
function row(c,sel,time,done){return '<div class="cv'+(sel?' sel new':'')+'"><span class="av" style="background:'+c.col+'">'+c.a+''+badge(c.chn)+'</span><div class="cb"><div class="cr"><b>'+c.n+'</b><span class="aic">가상 CS 직원</span><span class="tm">'+time+'</span></div><p>'+(done?c.pv:'고객: '+c.cu)+'</p><div class="tg">'+(c.m!==c.chn?'<span class="mp">'+mic(c.m)+c.m+'</span>':'')+'<span class="t g'+(done?'':' off')+'">'+c.tag+'</span></div></div></div>';}
var D=5000,N=CASES.length,P=D*N,cur=-1,wasDone=false;
function setCase(i){cur=i;var c=CASES[i];wasDone=false;
 var sw=function(id,t){var e=$(id);e.textContent=t;e.classList.remove('go');void e.offsetWidth;e.classList.add('go');};if(!(window.FX&&FX.is('D19'))){sw('zm-q',c.q);sw('zm-act',c.act);}$('zm-name').textContent=c.n;$('zm-ord').textContent=c.ord;$('zm-chn').innerHTML=(LOGO[c.chn]?LOGO[c.chn]:mic(c.chn))+c.chn;
 var av=$('zm-av');av.firstChild.nodeValue=c.a;av.style.background=c.col;var bd=CHI[c.chn],ae=$('zm-avc');ae.className='chb chi';ae.innerHTML=bd[1];ae.style.background=bd[0];
 $('zm-cu').textContent=c.cu;$('zm-ait').textContent=c.ai;
 $('zm-rows').innerHTML=c.rows.map(function(r){return '<div class="mr'+(r[2]?' wr':'')+'"><span class="ck">✓</span><span class="ms">'+r[0]+'</span><span>'+r[1]+'</span></div>'}).join('');
 var p1=CASES[(i+N-1)%N],p2=CASES[(i+N-2)%N];
 var p3=CASES[(i+N-3)%N];$('zm-list').innerHTML=row(c,true,'방금',false)+row(p1,false,'1분 전',true)+HAND+row(p2,false,'3분 전',true)+row(p3,false,'4분 전',true);
 $('zm-mall').innerHTML=mic(c.m)+c.m+' 주문';$('zm-mall').style.display=c.m===c.chn?'none':'';
}
function render(t){var i=Math.floor(t/D)%N,u=t-i*D;if(i!==cur)setCase(i);var c=CASES[i];
 var show=function(id,on){$(id).classList.toggle('off',!on)};
 show('zm-cu',u>500);show('zm-ty',u>1000&&u<=1700);show('zm-ai',u>1700);show('zm-memo',u>2000);
 var rs=$('zm-rows').children,k;for(k=0;k<rs.length;k++){var o=u>2250+k*500;rs[k].classList.toggle('off',!o);rs[k].classList.toggle('on',o);}
 var done=u>2250+rs.length*500;
 var lit={};lit['ch:'+c.chn]=u>200;for(k=0;k<rs.length;k++)if(u>2250+k*500)lit[c.rows[k][0]]=1;
 PILLS.forEach(function(p){p.classList.toggle('on',!!lit[p.getAttribute('data-n')])});
 if(done!==wasDone){wasDone=done;var top=$('zm-list').firstElementChild;top.querySelector('.t').classList.toggle('off',!done);top.querySelector('p').textContent=done?c.pv:'고객: '+c.cu;}
}
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce||window.__zmStatic){render(D-300);return;}
var t0=performance.now();
var fxW=root.querySelector('.win'),fxHold=false,fxAcc=0,fxLast=t0;if(fxW){fxW.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')fxHold=true});fxW.addEventListener('pointerleave',function(){fxHold=false});}var fxOff=0,fxStop=0,fxLoop;if('IntersectionObserver' in window)new IntersectionObserver(function(es){var v=es[es.length-1].isIntersecting;if(v&&fxOff){fxOff=0;var n=performance.now();t0+=n-fxStop;if(typeof fxLast==='number')fxLast=n;requestAnimationFrame(fxLoop)}else if(!v)fxOff=1}).observe(root);(fxLoop=function loop(now){if(fxOff){fxStop=now;return}if((window.FX&&FX.is('D19'))){if(!fxHold)fxAcc+=Math.max(0,now-fxLast);fxLast=Math.max(fxLast,now);var k=Math.floor(fxAcc/7000),w=fxAcc-k*7000;render((((k%N)+N)%N)*D+Math.min(w*1.5,D-1));}else{fxLast=now;render(((((now-t0)*1.5)%P)+P)%P);}requestAnimationFrame(loop);})(t0);
})();


(function(){var V={"none": {"cov-h": "고객이 <q class=\"zm-sw\" id=\"zm-q\">“반품할게요”<\/q> 하면,<br>AI가 답하고 <em class=\"zm-sw\" id=\"zm-act\">반품 접수<\/em>까지 끝냅니다.", "cov-p1": "<b>문의는 한 화면에<\/b><span>카톡·톡톡·게시판·전화까지<\/span>", "cov-p4": "<b>건당 500원<\/b><span>AI가 해결한 문의만<\/span>", "02-h": "답장은 한 줄인데, <em>그 뒤의 일<\/em>은 이만큼입니다", "02-n": "이 칸들은 가상 CS 직원이 답장하면서 직접 처리하고 기록까지 남깁니다. 판단이 필요한 건만 담당자에게 넘깁니다.", "03-c": "브랜드 매뉴얼대로 답하고,<br><em>시스템에 직접 들어가 처리<\/em>합니다.<br>정한 건은 상담원에게 넘깁니다.", "03-cb": "제로톡 + 가상 CS 직원", "04-h": "기능은 엔터프라이즈급, <em>비용은 0원 · 제로톡<\/em>", "04-s": "매출 100억~1조 커머스를 제대로 풀어 줄 상담 솔루션이 없어 직접 만들었습니다.<br>AI가 일하기 좋게 설계했습니다. 필요한 기능은 갖췄고, 없는 기능은 만들어 드립니다.", "09-h": "<em>해결한 만큼만<\/em> 받으니, 쓸수록 고객사가 이득입니다", "03-l": "<h4>쓰시는 채널<\/h4><div class=\"chs ds-var\"><span class=\"ds-ch \"><svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z\"/><\/svg>카카오톡<\/span><span class=\"ds-ch \"><svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z\"/><\/svg>네이버 톡톡<\/span><span class=\"ds-ch \">쇼핑몰 게시판<\/span><span class=\"ds-ch \">전화<\/span><\/div>", "d04-n": "", "d25-s": "상담원과 상담 솔루션에 나가던 돈 대신, AI가 끝낸 문의만큼만 내시면 됩니다.", "d25-lab": "상담원 인건비", "d26-q": "“언제 와요?”", "d26-x": "판매처마다 관리자 화면이 따로라, <b>무신사·쿠팡·스마트스토어<\/b>처럼 몰이 늘수록 칸이 곱해집니다."}, "tool": {"cov-h": "<q class=\"zm-sw\" id=\"zm-q\" hidden><\/q>상담 화면은 그대로 두고,<br>AI가 <em class=\"zm-sw\" id=\"zm-act\">반품 접수<\/em>까지 끝냅니다.", "cov-p1": "<b>지금 도구 위에<\/b><span>상담원 화면은 그대로<\/span>", "cov-p4": "<b>건당 500원<\/b><span>옮기시면 상담 솔루션 0원<\/span>", "02-h": "상담원은 답장 한 줄을 위해 <em>화면을 이만큼<\/em> 엽니다", "02-n": "상담 화면은 그대로 두고, 이 칸들을 가상 CS 직원이 직접 처리합니다. 판단이 필요한 건만 상담원에게 넘깁니다.", "03-l": "<h4>지금 쓰시는 상담 도구<\/h4><div class=\"chs ds-var\"><span class=\"ds-ch \">상담 도구 그대로<\/span><span class=\"ds-ch \">상담원 4명<\/span><span class=\"ds-ch \">카카오톡·톡톡 연결됨<\/span><\/div>", "03-cb": "가상 CS 직원 + 처리", "03-c": "지금 상담 도구 위에서<br>브랜드 매뉴얼대로 답하고,<br><em>시스템에 직접 들어가 처리<\/em>합니다.", "04-h": "지금 도구 그대로, <em>옮기시면 기능이 더<\/em> 붙습니다", "04-s": "가상 CS 직원과 처리는 지금 쓰시는 상담 도구 위에서도 됩니다. 제로톡으로 옮기시면 아래 기능을 상담 솔루션 0원에 씁니다.", "09-h": "<em>해결한 만큼만<\/em> 받으니, 쓸수록 고객사가 이득입니다", "d04-n": "지금 상담 솔루션을 그대로 쓰시면 그 비용은 줄지 않습니다.", "d25-s": "상담원과 상담 솔루션에 나가던 돈 대신, AI가 끝낸 문의만큼만 내시면 됩니다.", "d25-lab": "상담원 인건비", "d26-q": "“언제 와요?”", "d26-x": "판매처마다 관리자 화면이 따로라, <b>무신사·쿠팡·스마트스토어<\/b>처럼 몰이 늘수록 칸이 곱해집니다."}, "ai": {"cov-h": "<q class=\"zm-sw\" id=\"zm-q\" hidden><\/q>답장은 지금 AI가 해도,<br>이제 <em class=\"zm-sw\" id=\"zm-act\">반품 접수<\/em>까지 끝냅니다.", "cov-p1": "<b>지금 AI는 그대로<\/b><span>답장 뒤의 일을 맡습니다<\/span>", "cov-p4": "<b>건당 500원<\/b><span>못 끝낸 문의는 0원<\/span>", "02-h": "AI가 답장한 뒤에도, <em>이 칸들은 사람이<\/em> 넣습니다", "02-n": "지금 AI는 그대로 두고, 답장 뒤에 남던 칸을 가상 CS 직원이 직접 넣습니다. 판단이 필요한 건만 담당자에게 넘깁니다.", "03-l": "<h4>지금 쓰시는 가상 CS 직원<\/h4><div class=\"chs ds-var\"><span class=\"ds-ch \">AI 답장 ✓<\/span><span class=\"ds-ch \">접수는 담당자 대기<\/span><span class=\"ds-ch \">카카오톡·톡톡<\/span><\/div>", "03-cb": "답장 뒤를 맡는 처리", "03-c": "AI가 답한 건을 이어받아<br><em>시스템에 직접 들어가 처리<\/em>하고,<br>정한 건은 담당자에게 넘깁니다.", "04-h": "옮기시면, <em>답장과 처리가 한 화면<\/em>에서 끝납니다", "04-s": "지금 AI를 끄지 않고 처리부터 붙일 수 있습니다. 제로톡으로 옮기시면 답장·처리·상담원이 한 화면에 모입니다.", "09-h": "처리비는 <em>끝낸 건<\/em>에만 받습니다", "d04-n": "", "d25-s": "상담원과 상담 솔루션에 나가던 돈 대신, AI가 끝낸 문의만큼만 내시면 됩니다.", "d25-lab": "상담원 인건비", "d26-q": "“언제 와요?”", "d26-x": "판매처마다 관리자 화면이 따로라, <b>무신사·쿠팡·스마트스토어<\/b>처럼 몰이 늘수록 칸이 곱해집니다."}, "bpo": {"cov-h": "고객이 <q class=\"zm-sw\" id=\"zm-q\">“반품할게요”<\/q> 하면,<br>위탁 대신 AI가 <em class=\"zm-sw\" id=\"zm-act\">반품 접수<\/em>까지 끝냅니다.", "cov-p1": "<b>위탁 대신 직접 처리<\/b><span>답장부터 접수·기록까지<\/span>", "cov-p4": "<b>건당 500원<\/b><span>인원·시간 계약 없이<\/span>", "02-h": "위탁 상담원은 답장만 하고, <em>이 칸들<\/em>은 다시 직접 넣습니다", "02-n": "가상 CS 직원은 답장하면서 이 칸들을 직접 처리하고 기록까지 남깁니다. 판단이 필요한 건만 담당자에게 넘깁니다.", "04-h": "위탁할 때 안 보이던 응대, <em>한 화면에서 다 보입니다<\/em>", "04-s": "상담 내용·처리 기록·자동화율을 제로톡 한 화면과 대시보드로 매일 확인합니다.", "09-h": "인원 계약이 아니라 <em>해결한 만큼만<\/em> 받습니다", "d04-n": "", "d25-s": "위탁 상담 계약(인원·시간) 대신, AI가 끝낸 문의만큼 처리비를 내시면 됩니다.", "d25-lab": "위탁 상담 비용", "d26-q": "“언제 와요?”", "d26-x": "판매처마다 관리자 화면이 따로라, <b>무신사·쿠팡·스마트스토어<\/b>처럼 몰이 늘수록 칸이 곱해집니다."}, "global": {"cov-h": "해외 고객이 <q class=\"zm-sw\" id=\"zm-q\">“반품할게요”<\/q> 해도,<br>AI가 현지 말로 <em class=\"zm-sw\" id=\"zm-act\">반품 접수<\/em>까지 끝냅니다.", "cov-p1": "<b>현지 말로 24시간<\/b><span>일본어·영어·중국어 등<\/span>", "cov-p4": "<b>건당 500원<\/b><span>현지 상담원 없이<\/span>", "02-h": "해외 문의 한 건에도, <em>그 뒤의 일<\/em>은 이만큼입니다", "02-n": "현지 몰·물류까지 확인해 현지 말로 답하고 처리합니다. 판단이 필요한 건만 한국 담당자에게 한국어로 넘깁니다.", "04-h": "해외 채널도, <em>한 화면에서<\/em> 다 받습니다", "04-s": "LINE·WhatsApp·인스타그램·이메일 해외 문의를 제로톡 한 화면에서 한국어로 번역해 봅니다.", "09-h": "현지 상담원 대신, <em>해결한 만큼만<\/em> 받습니다", "d04-n": "", "d25-s": "상담원과 상담 솔루션에 나가던 돈 대신, AI가 끝낸 문의만큼만 내시면 됩니다.", "d25-lab": "상담원 인건비", "d26-q": "“Where is my order?”", "d26-x": "나라마다 몰·택배가 따로라, <b>Shopify·Qoo10·Shopee<\/b>처럼 나라가 늘수록 칸이 곱해집니다."}, "none2": {"cov-h": "고객이 <q class=\"zm-sw\" id=\"zm-q\">“반품할게요”<\/q> 하면,<br>AI가 답하고 <em class=\"zm-sw\" id=\"zm-act\">반품 접수<\/em>까지 끝냅니다.", "cov-p1": "<b>문의는 한 화면에<\/b><span>카톡·톡톡·게시판·전화까지<\/span>", "cov-p4": "<b>건당 500원<\/b><span>AI가 해결한 문의만<\/span>", "02-h": "답장은 한 줄인데, <em>그 뒤의 일<\/em>은 이만큼입니다", "02-n": "이 칸들은 가상 CS 직원이 답장하면서 직접 처리하고 기록까지 남깁니다. 판단이 필요한 건만 담당자에게 넘깁니다.", "03-c": "브랜드 매뉴얼대로 답하고,<br><em>시스템에 직접 들어가 처리<\/em>합니다.<br>정한 건은 상담원에게 넘깁니다.", "03-cb": "제로톡 + 가상 CS 직원", "04-h": "기능은 엔터프라이즈급, <em>비용은 0원 · 제로톡<\/em>", "04-s": "매출 100억~1조 커머스를 제대로 풀어 줄 상담 솔루션이 없어 직접 만들었습니다.<br>AI가 일하기 좋게 설계했습니다. 필요한 기능은 갖췄고, 없는 기능은 만들어 드립니다.", "09-h": "<em>해결한 만큼만<\/em> 받으니, 쓸수록 고객사가 이득입니다", "03-l": "<h4>쓰시는 채널<\/h4><div class=\"chs ds-var\"><span class=\"ds-ch \"><svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z\"/><\/svg>카카오톡<\/span><span class=\"ds-ch \"><svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"currentColor\"><path d=\"M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z\"/><\/svg>네이버 톡톡<\/span><span class=\"ds-ch \">쇼핑몰 게시판<\/span><span class=\"ds-ch \">전화<\/span><\/div>", "d04-n": "", "d25-s": "상담원과 상담 솔루션에 나가던 돈 대신, AI가 끝낸 문의만큼만 내시면 됩니다.", "d25-lab": "상담원 인건비", "d26-q": "“언제 와요?”", "d26-x": "판매처마다 관리자 화면이 따로라, <b>무신사·쿠팡·스마트스토어<\/b>처럼 몰이 늘수록 칸이 곱해집니다."}};
var ORDER={"none": ["표지", "레퍼런스", "지금 응대 한 건 · 문제", "직접 세팅 · 문제", "상담 솔루션 비용 · 문제", "성공 사례 · 업종별", "케이스 · 상품 문의", "케이스 · 배송 문의", "케이스 · 취소 문의", "케이스 · 반품·환불 문의", "케이스 · A/S 문의", "매출 지키기", "똑똑하게 생각", "직접 들어가 처리", "처리 영상", "모든 채널", "모를 때", "세팅", "흐름도 예시", "직접 세팅하면", "전담팀", "제로톡", "제로톡 · 수신함", "제로톡 · 할 일", "제로톡 · 빈 시간", "제로톡 · 업데이트 · 처음", "비용", "VOC", "VOC · 한눈에 보기", "VOC · 불만 지점", "VOC · 미리 알림", "문의"], "tool": ["표지", "레퍼런스", "지금 응대 한 건", "상담 솔루션 비용 · 문제", "성공 사례 · 업종별", "케이스 · 상품 문의", "케이스 · 배송 문의", "케이스 · 취소 문의", "케이스 · 반품·환불 문의", "케이스 · A/S 문의", "매출 지키기", "똑똑하게 생각", "직접 들어가 처리", "처리 영상", "모든 채널", "모를 때", "세팅", "흐름도 예시", "직접 세팅하면", "전담팀", "제로톡", "제로톡 · 수신함", "제로톡 · 할 일", "제로톡 · 빈 시간", "제로톡 · 업데이트 · 처음", "비용", "VOC", "VOC · 한눈에 보기", "VOC · 불만 지점", "VOC · 미리 알림", "문의"], "ai": ["표지", "레퍼런스", "지금 응대 한 건", "직접 세팅 · 문제", "성공 사례 · 업종별", "케이스 · 상품 문의", "케이스 · 배송 문의", "케이스 · 취소 문의", "케이스 · 반품·환불 문의", "케이스 · A/S 문의", "매출 지키기", "똑똑하게 생각", "직접 들어가 처리", "처리 영상", "모를 때", "세팅", "흐름도 예시", "전담팀", "제로톡", "제로톡 · 수신함", "제로톡 · 할 일", "제로톡 · 빈 시간", "제로톡 · 업데이트 · 처음", "비용", "VOC", "VOC · 한눈에 보기", "VOC · 불만 지점", "VOC · 미리 알림", "문의"], "bpo": ["표지", "레퍼런스", "지금 응대 한 건", "성공 사례 · 업종별", "케이스 · 상품 문의", "케이스 · 배송 문의", "케이스 · 취소 문의", "케이스 · 반품·환불 문의", "케이스 · A/S 문의", "매출 지키기", "직접 들어가 처리", "처리 영상", "모를 때", "세팅", "흐름도 예시", "전담팀", "제로톡", "제로톡 · 빈 시간", "비용", "VOC", "VOC · 한눈에 보기", "VOC · 불만 지점", "VOC · 미리 알림", "문의"], "global": ["표지", "레퍼런스", "지금 응대 한 건", "성공 사례 · 업종별", "케이스 · 해외 배송", "똑똑하게 생각", "직접 들어가 처리", "모든 채널", "모를 때", "세팅", "흐름도 예시", "직접 세팅하면", "전담팀", "제로톡", "제로톡 · 수신함", "제로톡 · 할 일", "제로톡 · 빈 시간", "제로톡 · 업데이트 · 처음", "비용", "VOC", "VOC · 한눈에 보기", "VOC · 불만 지점", "VOC · 미리 알림", "문의"], "none2": ["표지", "레퍼런스", "지금 응대 한 건 · 문제", "직접 세팅 · 문제", "상담 솔루션 비용 · 문제", "성공 사례 · 업종별", "케이스 · 상품 문의", "케이스 · 배송 문의", "케이스 · 취소 문의", "케이스 · 반품·환불 문의", "케이스 · A/S 문의", "매출 지키기", "똑똑하게 생각", "처리 영상", "모든 채널", "모를 때 · 안심", "제로톡", "제로톡 · 수신함", "제로톡 · 할 일", "제로톡 · 빈 시간", "제로톡 · 업데이트 · 처음", "제로톡 비용", "세팅 · 보안", "흐름도 예시", "직접 세팅하면", "전담팀", "비용 · 채용 비교", "VOC · 한눈에 보기", "VOC · 불만 지점", "VOC · 미리 알림", "문의"]};var ALLS=[].slice.call(document.querySelectorAll("section.sl")),SEC={},TAIL=ALLS[ALLS.length-1].nextSibling,PAR=ALLS[0].parentNode;ALLS.forEach(function(x){SEC[x.getAttribute("aria-label").replace(/^\d+\.\s*/,"")]=x;});function applyOrder(k){var o=ORDER[k]||ORDER.none;ALLS.forEach(function(x){x.hidden=true;});o.forEach(function(n){var x=SEC[n];if(x){x.hidden=false;PAR.insertBefore(x,TAIL);}});var nav=document.querySelector(".nav");if(nav){nav.innerHTML=o.filter(function(n){return SEC[n]}).map(function(n,i){return '<a href="#'+SEC[n].id+'"><b>'+(i<9?"0":"")+(i+1)+"</b>"+(n==="레퍼런스"?"사용 고객사":n)+"</a>";}).join("");}if(window.fitAll)fitAll();}function setPan(k){if(!V[k]||k==='none2')k='none';window.__pan=k;applyOrder(k);document.body.classList.remove('pan-none','pan-tool','pan-ai','pan-bpo','pan-global','pan-none2');document.body.classList.add('pan-'+k);
document.querySelectorAll('[data-v]').forEach(function(e){var v=V[k][e.getAttribute('data-v')];if(v!=null)e.innerHTML=v;});
document.querySelectorAll('.pan button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-pan')===k);b.setAttribute('aria-pressed',b.getAttribute('data-pan')===k);});
try{localStorage.setItem('zt-pan',k)}catch(e){}}
window.__ZT={setPan:setPan,order:function(){return ORDER},sec:SEC};document.querySelectorAll('.pan button').forEach(function(b){b.addEventListener('click',function(){setPan(b.getAttribute('data-pan'));try{if((window.FX&&FX.is('D18'))){history.replaceState(null,'','#'+b.getAttribute('data-pan')+(document.documentElement.classList.contains('fx18-edit')?'&edit':''));window.scrollTo(0,0)}else history.replaceState(null,'','#'+(b.getAttribute('data-pan')))}catch(e){}})});
var h=(location.hash||'').slice(1),st=null;try{st=localStorage.getItem('zt-pan')}catch(e){}
if((window.FX&&FX.is('D18'))){var q=h.split('&')[0].split('/'),pk=V[q[0]]?q[0]:'none';window.__fx18go=q[1]||(/^s\d+$/.test(q[0])?q[0]:'');setPan(pk)}else setPan(V[h]?h:(st||'none'));})();

}catch(e){console.warn("deck script",0,e)}
try{
(function(){var v=document.querySelector(".opv video");if(!v)return;var li=[].slice.call(document.querySelectorAll(".ops li"));var T=[0,6.5,19.9,25.7,30.2,41.7,99];function u(){var t=v.currentTime,k=-1;for(var i=0;i<6;i++)if(t>=T[i]&&t<T[i+1])k=i;li.forEach(function(e,i){e.classList.toggle("on",i===k);e.classList.toggle("done",k>i||t>=T[6]);});}v.addEventListener("timeupdate",u);})();
}catch(e){console.warn("deck script",1,e)}
try{

(function(){
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var SEC=[].slice.call(document.querySelectorAll('section.sl')).filter(function(s){return s.querySelector('.cs-m')});
SEC.forEach(function(sec){sec.querySelectorAll('.cs-a .cs-ar>div').forEach(function(d){if(!d.querySelector('.cs-dots')){var t=document.createElement('span');t.className='cs-dots';t.innerHTML='<i></i><i></i><i></i>';d.insertBefore(t,d.firstChild);}});sec.classList.add('cs-play');});
function play(sec){
 if(!sec||SEC.indexOf(sec)<0)return;
 (sec._zt||[]).forEach(clearTimeout);var T=sec._zt=[];
 var at=function(ms,f){T.push(setTimeout(f,ms/1.5))};/*ztSpeed*/
 var items=[].slice.call(sec.querySelectorAll('.cs-m>.cs-c,.cs-m>.cs-a'));
 var akt=sec.querySelector('.akt-out');
 items.forEach(function(e){e.classList.remove('in','typ','done')});if(akt)akt.classList.remove('in');
 var t=500;
 items.forEach(function(e){
  if(e.classList.contains('cs-a')){
   at(t,function(){e.classList.add('typ')});t+=1000;
   at(t,function(){e.classList.remove('typ');e.classList.add('in')});t+=350;
   var n=e.querySelectorAll('.cs-act i');
   [].forEach.call(n,function(c,k){c.style.transitionDelay=(k*0.147)+'s'});
   at(t,function(){e.classList.add('done')});t+=n.length*220+700;
  }else{at(t,function(){e.classList.add('in')});t+=900;}
 });
 if(akt)at(t+100,function(){akt.classList.add('in')});
}
window.ztPlay=play;
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(document.body.classList.contains('pres'))return;var s=en.target;if(en.isIntersecting&&en.intersectionRatio>=.45){if(!s._seen){s._seen=1;play(s)}}else if(!en.isIntersecting){s._seen=0}})},{threshold:[0,.45]});SEC.forEach(function(s){io.observe(s)});}
else SEC.forEach(function(s){s.classList.remove('cs-play')});
})();

}catch(e){console.warn("deck script",2,e)}
try{

(function(){
function ff(){var out='';[].forEach.call(document.styleSheets,function(sh){try{[].forEach.call(sh.cssRules,function(r){if(r.type===5&&/ZT Noto/.test(r.cssText))out+=r.cssText})}catch(e){}});return out}
var F=null;
function load(fr){if(fr.getAttribute('data-on'))return;var k=fr.getAttribute('data-k'),t=document.getElementById('emb-'+k);if(!t)return;if(F===null)F=ff();
 var h=t.textContent.replace(/<\\\/script/g,'</script').replace(/<%%\//g,'</');window.__vocLoad=load;(window.__vocT||[]).forEach(function(x){if(window.FX&&FX.is(x.id))h=x.f(k,h)});fr.srcdoc='<!doctype html><html><head><meta charset="utf-8"><style>'+((window.FX&&FX.is('D21')&&window.__fx21css)?window.__fx21css():F)+'</style></head><body>'+h+'</body></html>';fr.setAttribute('data-on','1')}
window.__ztEmb=load;function all(){[].forEach.call(document.querySelectorAll('iframe.emb'),function(fr){var s=fr.closest('section');if(s&&!s.hidden)load(fr)})}
if(document.readyState!=='loading')setTimeout(all,300);else document.addEventListener('DOMContentLoaded',function(){setTimeout(all,300)});
window.addEventListener('zt-ready',function(){setTimeout(all,300)});
if(window.MutationObserver)[].forEach.call(document.querySelectorAll('iframe.emb'),function(fr){var sec=fr.closest('section');if(!sec)return;var was=sec.classList.contains('cur');new MutationObserver(function(){var c=sec.classList.contains('cur');if(c&&!was){fr.removeAttribute('data-on');load(fr)}was=c}).observe(sec,{attributes:true,attributeFilter:['class']})});
})();

}catch(e){console.warn("deck script",3,e)}
try{
(function(){var R=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;if(R||!("IntersectionObserver" in window))return;function stop(x){(x._t||[]).forEach(clearTimeout);x._t=[];x._on=0}function run(x){stop(x);x._on=1;x.classList.add("zr-run");var e=x.querySelectorAll("[data-t]"),m=0;[].forEach.call(e,function(n){n.classList.remove("on")});[].forEach.call(e,function(n){var t=+n.getAttribute("data-t");if(t>m)m=t;x._t.push(setTimeout(function(){n.classList.add("on")},t))});x._t.push(setTimeout(function k(){if(window.FX&&FX.is("D63"))x._t.push(setTimeout(k,1000));else run(x)},m+6000))}var io=new IntersectionObserver(function(es){es.forEach(function(en){var x=en.target;if(en.isIntersecting&&en.intersectionRatio>.4){if(!x._on)run(x)}else if(x._on){stop(x);x.classList.remove("zr-run")}})},{threshold:[0,.4,.8]});[].forEach.call(document.querySelectorAll("section[data-zr]"),function(x){io.observe(x)})})();
}catch(e){console.warn("deck script",4,e)}
try{
(function(){if(!window.MutationObserver)return;[].forEach.call(document.querySelectorAll("[data-count]"),function(el){var to=+el.getAttribute("data-count"),fmt=function(v){return v.toLocaleString("ko-KR")};new MutationObserver(function(){var sec=el.closest("section");if(!sec||!sec.classList.contains("zr-run"))return;if(el._r)return;el._r=1;var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/3400);el.textContent=fmt(Math.round(to*k));if(k<1)requestAnimationFrame(f);else el._r=0})(t0)}).observe(el.closest(".fk-s"),{attributes:true,attributeFilter:["class"]})})})();
}catch(e){console.warn("deck script",5,e)}
try{
(function(){var R=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;if(R||!window.MutationObserver)return;[].forEach.call(document.querySelectorAll(".cs-bk"),function(bk){var sec=bk.closest("section");sec.classList.add("bk-js");var rows=[].slice.call(bk.querySelectorAll(".bk-r"));[].forEach.call(sec.querySelectorAll(".cs-m>.cs-a"),function(a){var keys=[].map.call(a.querySelectorAll(".cs-act i"),function(i){return i.textContent.replace(/^[✓★\s]+/,"").replace(/^핵심 · /,"").trim()});var mine=rows.filter(function(r){return keys.indexOf(r.getAttribute("data-k"))>=0});new MutationObserver(function(){if(a.classList.contains("in")){mine.forEach(function(r,j){if(r._t)return;r._t=setTimeout(function(){r.classList.add("run");setTimeout(function(){r.classList.add("done")},650)},j*380)})}else{mine.forEach(function(r){clearTimeout(r._t);r._t=0;r.classList.remove("run","done","gone");var c=r.closest(".cs-pc");if(c)c.classList.remove("gone")})}}).observe(a,{attributes:true,attributeFilter:["class"]})})})})();
}catch(e){console.warn("deck script",6,e)}
try{
(function(){var R=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;if(R||!window.MutationObserver)return;[].forEach.call(document.querySelectorAll(".cs-m>.cs-a"),function(a){var rows=[].slice.call(a.querySelectorAll(".pc-r"));if(!rows.length)return;a.closest("section").classList.add("pk-js");new MutationObserver(function(){if(a.classList.contains("in")&&!a.classList.contains("typ")){rows.forEach(function(r,j){if(r._t)return;r._t=setTimeout(function(){r.classList.add("run");setTimeout(function(){r.classList.add("done");if(r.classList.contains("rd"))setTimeout(function(){r.classList.add("gone");var c=r.closest(".cs-pc");if(c&&!c.querySelector(".pc-r:not(.gone)"))c.classList.add("gone")},900)},600)},250+j*420)})}else if(!a.classList.contains("in")){rows.forEach(function(r){clearTimeout(r._t);r._t=0;r.classList.remove("run","done","gone");var c=r.closest(".cs-pc");if(c)c.classList.remove("gone")})}}).observe(a,{attributes:true,attributeFilter:["class"]})})})();
}catch(e){console.warn("deck script",7,e)}
try{
(function(){var R=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;if(R)return;[].forEach.call(document.querySelectorAll(".hopm"),function(g){var sec=g.closest("section"),me=g.querySelector(".p2me"),cnt=sec.querySelector(".p2c");var dots=[].slice.call(g.querySelectorAll(".p2d.on")),T=[];sec.classList.add("hop-js");function reset(){T.forEach(clearTimeout);T=[];dots.forEach(function(d){d.classList.remove("hop")});if(cnt)cnt.textContent="0";}function run(){reset();var t=300,n=0,prevTop=null;dots.forEach(function(d){var x=d.offsetLeft+d.offsetWidth/2-20,y=d.offsetTop+d.offsetHeight/2-20;if(prevTop!==null&&d.offsetTop!==prevTop)t+=500;prevTop=d.offsetTop;T.push(setTimeout(function(){me.style.transform="translate("+x+"px,"+y+"px)";d.classList.add("hop");n++;if(cnt)cnt.textContent=n;},t));t+=420;});T.push(setTimeout(run,t+2600));}if("IntersectionObserver" in window){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&e.intersectionRatio>=.4){if(!sec._h){sec._h=1;run()}}else if(!e.isIntersecting){sec._h=0;reset()}})},{threshold:[0,.4]}).observe(sec)}var mo=new MutationObserver(function(){if(sec.classList.contains("cur")){reset();run()}});mo.observe(sec,{attributes:true,attributeFilter:["class"]});})})();
}catch(e){console.warn("deck script",8,e)}
try{
(function(){var R=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;if(R)return;[].forEach.call(document.querySelectorAll(".pd"),function(pd){var sec=pd.closest("section"),W=[].slice.call(pd.querySelectorAll(".cw")),TB=[].slice.call(pd.querySelectorAll(".pd-tabs span")),cur=pd.querySelector(".cur"),sw=pd.querySelector(".hsw"),wt=pd.querySelector(".hwt"),ub=pd.querySelector(".ubn"),T=[],SEQ=[[1,3],[0,0],[3,7],[0,0],[4,9],[0,0],[5,11],[0,0],[2,4],[0,0],[6,1]],ACT=["주문번호 찾기","답장 입력","출고 상태 확인","답장 입력","송장 복사","답장 입력","반품 기준 찾기","답장 입력","회수 요청 입력","답장 입력","새 문의 또 확인"],RP=["주문 확인했어요.","주문 확인했어요. 출고는 끝났고요,","주문 확인했어요. 출고는 끝났고요, 지금 배송 중이에요.","주문 확인했어요. 출고는 끝났고요, 지금 배송 중이에요. 반품은 30일 이내 가능하고","주문 확인했어요. 출고는 끝났고요, 지금 배송 중이에요. 반품은 30일 이내 가능하고 회수 접수해 드릴게요."],rk=0;function clr(){T.forEach(clearTimeout);T=[];pd.classList.remove("sol");W.forEach(function(w){w.classList.remove("fc","typ")});TB.forEach(function(b){b.classList.remove("act")})}function run(){clr();rk=0;var rp0=pd.querySelector(".rpl");if(rp0)rp0.textContent="";var n=0,w8=3,t=1400,loops=1;for(var L=0;L<loops;L++){SEQ.forEach(function(q,i){T.push(setTimeout(function(){W.forEach(function(w){w.classList.remove("fc","typ")});TB.forEach(function(b){b.classList.remove("act")});var w=W[q[0]];if(!w)return;w.classList.add("fc");if(TB[q[1]])TB[q[1]].classList.add("act");var rp=pd.querySelector(".rpl");if(q[0]===0){w.classList.add("typ");if(rp){rp.textContent=RP[Math.min(rk,RP.length-1)];rk++}}var X=w.offsetLeft+w.offsetWidth*0.55,Y=w.offsetTop+w.offsetHeight*0.5;cur.style.transform="translate("+X+"px,"+Y+"px)";var ab=pd.querySelector(".actb");if(ab){ab.textContent=ACT[i];ab.style.transform="translate("+(X+26)+"px,"+(Y+18)+"px)";ab.classList.add("on")}n++;sw.textContent=n;if(q[0]===6||i%3===2){w8++;wt.textContent=w8;if(ub)ub.textContent=w8}},t));t+=700})}T.push(setTimeout(function(){W.forEach(function(w){w.classList.remove("fc","typ")});var ab=pd.querySelector(".actb");if(ab)ab.classList.remove("on");pd.classList.add("sol");sw.textContent="0";wt.textContent="0";if(ub)ub.textContent="0";var rp=pd.querySelector(".rpl");if(rp)rp.textContent=RP[RP.length-1];},t+400));T.push(setTimeout(run,t+7200))}sw.textContent="0";wt.textContent="3";if("IntersectionObserver" in window){new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&e.intersectionRatio>=.4){if(!sec._p){sec._p=1;run()}}else if(!e.isIntersecting){sec._p=0;clr()}})},{threshold:[0,.4]}).observe(sec)}new MutationObserver(function(){if(sec.classList.contains("cur")){run()}}).observe(sec,{attributes:true,attributeFilter:["class"]});})})();
}catch(e){console.warn("deck script",9,e)}
try{
/* 반영본: 개선 항목 스크립트 */
try{(function(){
var q=null;try{q=new URLSearchParams(location.search).get('to')}catch(e){}
q=(q||'').trim().slice(0,30);if(!q)return;
[].forEach.call(document.querySelectorAll('.brand .fx01-to'),function(s){s.textContent=q+' 대표님께 · 2026년 10월'});

})()}catch(e){console.error("[D01]",e)}
try{(function(){
var LIVE=["zr-run", "cs-play", "bk-js", "pk-js", "hop-js"],kept=[],pg=null,R=document.documentElement;
function page(on){if(on&&!pg){pg=document.createElement('style');pg.id='fx05-page';pg.textContent='@page{size:1920px 1080px;margin:0}';document.head.appendChild(pg)}else if(!on&&pg){pg.remove();pg=null}}
FX.on('D05',page);page(FX.is('D05'));
/* 인쇄 직전: 움직임을 끝난 모습으로 */
window.addEventListener('beforeprint',function(){if(!FX.is('D05'))return;kept=[];
  LIVE.forEach(function(c){[].forEach.call(document.getElementsByClassName(c),function(e){kept.push([e,c])})});
  kept.forEach(function(k){k[0].classList.remove(k[1])});
  [].forEach.call(document.querySelectorAll('[data-count]'),function(e){e.textContent=(+e.getAttribute('data-count')).toLocaleString('ko-KR')});
  if(window.fitAll)fitAll()});
window.addEventListener('afterprint',function(){kept.forEach(function(k){k[0].classList.add(k[1])});kept=[];if(window.fitAll)fitAll()});
[].forEach.call(document.querySelectorAll('.fx05-pdf'),function(b){b.addEventListener('click',function(){window.print()})});

})()}catch(e){console.error("[D05]",e)}
try{(function(){var Z=window.__ZT;if(!Z||!window.FX)return;
var G=window.__g2o;
if(!G){G=window.__g2o={T:[],t:0};var O=Z.order();
Object.keys(O).forEach(function(p){var d=Object.getOwnPropertyDescriptor(O,p),g=d.get||(function(v){return function(){return v}})(d.value);
Object.defineProperty(O,p,{configurable:true,enumerable:true,get:function(){var l=g.call(O).slice();G.T.forEach(function(t){if(FX.is(t.id))l=t.f(l,p)||l});return l}})});
G.re=function(){clearTimeout(G.t);G.t=setTimeout(function(){if(G.T.some(function(t){return FX.is(t.id)}))Z.setPan(window.__pan||'none')},0)}}
G.T.push({id:'D07',f:function(l){var n='성공 사례 · 업종별';if(l.indexOf(n)>=0)return l;
var i=-1;l.some(function(x,k){if(x.indexOf('케이스 · ')===0){i=k;return true}});if(i<0)i=Math.min(2,l.length);
l.splice(i,0,n);return l}});G.re();
})()}catch(e){console.error("[D07]",e)}
try{(function(){
var M=[].slice.call(document.querySelectorAll('.ds.cs .cs-m')),q=0,mo=null;
function R(e){return e.getBoundingClientRect()}
/* 보이는 칩 글(전/후 중 지금 켜진 쪽) */
function act(s){var w=s.closest('fx-a,fx-b');if(!w)return true;var on=FX.is(w.getAttribute('data-fx'));return w.tagName==='FX-A'?on:!on}
/* 접힌 관리자 줄: 같은 시스템 칩이 이어지면 첫 칩만 */
function dups(m){[].forEach.call(m.querySelectorAll('.cs-pc'),function(pc){var prev=null;
  [].forEach.call(pc.querySelectorAll('.pc-r'),function(r){var s=[].filter.call(r.querySelectorAll('.sy'),act)[0];
    [].forEach.call(r.querySelectorAll('.sy'),function(x){x.classList.remove('fx16-dup')});
    if(!s){prev=null;return}var t=s.textContent.trim();if(t===prev)s.classList.add('fx16-dup');prev=t})})}
/* 상자에 다 들어가게: 앞 대화부터 한 줄로 접고(★ 단계는 되도록 펼침), 그래도 넘치면 앞에서부터 뺌 */
function trim(m){var on=FX.is('D16'),k=[].slice.call(m.children).filter(function(e,i){return !(i===0&&e.classList.contains('cs-c'))});
  k.forEach(function(e){e.classList.remove('fx16-cut','fx16-fold','fx16-f2')});m.classList.remove('fx16-ms');if(!on)return;
  dups(m);
  var v=k.filter(function(e){return R(e).height>0}),n=v.length;if(n<2)return;
  var top=R(v[0]).top,g=Math.max(0,R(v[1]).top-R(v[0]).bottom);
  m.classList.add('fx16-ms');var bot=R(v[n-1]).bottom;m.classList.remove('fx16-ms');
  var A=bot-top+0.5,H=v.map(function(e){return R(e).height});
  function fit(c,f,F){var h=0,j=0;for(var i=c;i<n;i++){h+=i<f?F[i]:H[i];j++}return h+g*(j-1)<=A}
  if(fit(0,0,H))return;
  var pre=v.slice(0,-1);
  pre.forEach(function(e){e.classList.add('fx16-fold')});var F=v.map(function(e){return R(e).height});
  pre.forEach(function(e){e.classList.add('fx16-f2')});var F2=v.map(function(e){return R(e).height});
  pre.forEach(function(e){e.classList.remove('fx16-fold','fx16-f2')});
  var key=v.map(function(e){return !!e.querySelector('.pc-r.key,i.key')});
  /* 고르는 순서: ★ 단계 펼침 수 > ★ 단계 보임 수 > 앞 질문이 빠진 고객 답으로 시작하지 않음 > 보이는 대화 수 > 펼친 대화 수 */
  function gt(s,b){for(var j=0;j<s.length;j++)if(s[j]!==b[j])return s[j]>b[j];return false}
  var best=null,bs=null;
  for(var c=0;c<n;c++)for(var f=c;f<n;f++){if(!fit(c,f,F))continue;
    var kf=0,kv=0;for(var i=0;i<n;i++)if(key[i]){if(i>=f)kf++;if(i>=c)kv++}
    var dg=c>0&&v[c].classList.contains('cs-c')?0:1;
    var s=[kf,kv,dg,n-c,n-f];if(!bs||gt(s,bs)){bs=s;best=[c,f]}}
  if(!best)best=[n-1,n-1];
  var c0=best[0],f0=best[1],G=F.slice();
  v.forEach(function(e,i){if(i<c0)e.classList.add('fx16-cut');else if(i<f0)e.classList.add('fx16-fold')});
  /* 남는 자리가 있으면 접힌 줄을 두 줄까지 펼침(뒤에서부터) */
  for(var i=f0-1;i>=c0;i--){var t=G[i];G[i]=F2[i];if(fit(c0,f0,G))v[i].classList.add('fx16-f2');else G[i]=t}
  /* 안전장치: 그래도 넘치면 앞에서부터 뺌 */
  for(var i=0;i<n-1&&R(v[n-1]).bottom>bot+1;i++){v[i].classList.remove('fx16-fold','fx16-f2');v[i].classList.add('fx16-cut')}}
function all(){q=0;M.forEach(function(m){var s=m.closest('section');if(s&&!s.hidden)trim(m)});if(mo)mo.takeRecords()}
function sched(){if(!q)q=requestAnimationFrame(all)}
if(window.MutationObserver){mo=new MutationObserver(sched);M.forEach(function(m){mo.observe(m,{subtree:true,attributes:true,attributeFilter:['class']})})}
M.forEach(function(m){m.addEventListener('animationend',sched,true);m.addEventListener('transitionend',sched,true)});
window.addEventListener('resize',sched);window.addEventListener('load',sched);
if(window.ResizeObserver){var ro=new ResizeObserver(sched);M.forEach(function(m){ro.observe(m.closest('.fit')||m)})}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(sched);
FX.listen(sched);sched();setTimeout(sched,600);

})()}catch(e){console.error("[D16]",e)}
try{(function(){
var R=document.documentElement;
function ed(){return (location.hash.slice(1).split('&').indexOf('edit')>=0)||/[?&]edit(=|&|$)/.test(location.search)}
if(ed())R.classList.add('fx18-edit');
window.addEventListener('hashchange',function(){if(ed())R.classList.add('fx18-edit')});
function sec(id){var c=[].filter.call(document.querySelectorAll('section.sl'),function(s){return s.id===id&&!s.hidden});return c[0]||null}
function mark(id){var p=window.__pan||'none';try{history.replaceState(null,'','#'+p+(id?'/'+id:'')+(R.classList.contains('fx18-edit')?'&edit':''))}catch(e){}}
/* 머리띠 제목 두 번 누르기: 판 버튼 줄 켜고 끄기(준비용) */
document.addEventListener('dblclick',function(e){if(!FX.is('D18')||!e.target.closest||!e.target.closest('.top .brand'))return;
  R.classList.toggle('fx18-edit');var s=window.getSelection&&window.getSelection();if(s)s.removeAllRanges();mark('')});
/* 장 목록: 주소에 판과 장을 함께 */
document.addEventListener('click',function(e){if(!FX.is('D18'))return;var a=e.target.closest&&e.target.closest('.nav a[href^="#"]');if(!a)return;
  var id=a.getAttribute('href').slice(1),s=sec(id);if(!s)return;e.preventDefault();s.scrollIntoView();mark(id)});
/* #판/장 으로 열면 그 장으로 */
if(FX.is('D18')&&window.__fx18go){var go=window.__fx18go;window.addEventListener('load',function(){setTimeout(function(){var s=sec(go);if(s)s.scrollIntoView()},60)})}

})()}catch(e){console.error("[D18]",e)}
try{(function(){
var X="html:root{--display:'ZT Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif;--mono:'ZT Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif}.eb i,.cell,.str b,.aif b,.tr b,.tr em,.lg b,.jc .v,.kpi b,.pt td,.tk .id,.tk .bar2,.rl .hc,.sc,.wn{font-variant-numeric:tabular-nums}",FF=null;
window.__fx21css=function(){if(FF===null){FF='';[].forEach.call(document.styleSheets,function(sh){try{[].forEach.call(sh.cssRules,function(r){if(r.type===5&&/ZT Pretendard/.test(r.cssText))FF+=r.cssText})}catch(e){}})}return FF+X};
FX.on('D21',function(){[].forEach.call(document.querySelectorAll('iframe.emb[data-on]'),function(fr){fr.removeAttribute('data-on');if(window.__ztEmb)window.__ztEmb(fr)})});

})()}catch(e){console.error("[D21]",e)}
try{(function(){
var R=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('video[data-lazyplay]'),function(v){
  v.autoplay=false;v._me=0;v._user=0;
  if(R){v.controls=true;return}   /* 움직임 줄이기: 자동 재생 안 함, 직접 재생 */
  if(!('IntersectionObserver' in window)){v.controls=true;return}
  function go(){if(v._user||!v.paused)return;v._me=1;var p=v.play();if(p&&p.catch)p.catch(function(){v._me=0})}
  function halt(){if(v.paused)return;v._me=1;v.pause()}
  /* 보는 사람이 멈춘 것인지(스크립트가 멈춘 것이 아니면) 기억 */
  v.addEventListener('pause',function(){if(v._me){v._me=0;return}if(v._vis)v._user=1});
  v.addEventListener('play',function(){if(v._me){v._me=0;return}v._user=0});
  new IntersectionObserver(function(es){es.forEach(function(en){v._vis=en.isIntersecting&&en.intersectionRatio>=.35;if(v._vis)go();else halt()})},{threshold:[0,.35,.6,1]}).observe(v);
});

})()}catch(e){console.error("[D22]",e)}
try{(function(){
if(!('IntersectionObserver' in window))return;
var HOLD='html.zt-hold *,html.zt-hold *::before,html.zt-hold *::after{animation-play-state:paused!important}';
function hold(fr){var w,d;try{w=fr.contentWindow;d=fr.contentDocument}catch(e){return}
  if(!w||!d||!d.documentElement)return;var on=!fr._vis&&Date.now()>=(fr._warm||0);
  if(d.head&&!d.getElementById('zt-hold')){var st=d.createElement('style');st.id='zt-hold';st.textContent=HOLD;d.head.appendChild(st)}
  d.documentElement.classList.toggle('zt-hold',on);
  if(w.__ztHold&&!on){w.__ztHold=false;var q=w.__ztQ||[];w.__ztQ=[];q.forEach(function(f){try{f()}catch(e){}})}else w.__ztHold=on}
var io=new IntersectionObserver(function(es){es.forEach(function(en){en.target._vis=en.isIntersecting;hold(en.target)})},{rootMargin:'100px 0px'});
/* 처음 열린 틀은 8초 동안 그대로 돌려 화면을 채운 뒤에 멈춤(PDF 저장 때 빈 화면으로 찍히지 않게) */
[].forEach.call(document.querySelectorAll('iframe.emb'),function(fr){fr._vis=false;io.observe(fr);fr.addEventListener('load',function(){fr._warm=Date.now()+8000;hold(fr);setTimeout(function(){hold(fr)},8100)})});

})()}catch(e){console.error("[D22]",e)}
try{(function(){
var top=document.querySelector('header.top'),nav=top&&top.querySelector('.nav'),btn=top&&top.querySelector('.fx23-b');if(!top||!nav||!btn)return;
nav.id=nav.id||'fx23-nav';
function cur(){var b=null,m=0;[].forEach.call(document.querySelectorAll('section.sl:not([hidden])'),function(s){var r=s.getBoundingClientRect(),v=Math.min(r.bottom,innerHeight)-Math.max(r.top,0);if(v>m){m=v;b=s}});return b}
function open(v){top.classList.toggle('fx23-open',v);btn.setAttribute('aria-expanded',v?'true':'false');
  if(v){nav.style.setProperty('--fx23r',Math.ceil(nav.querySelectorAll('a').length/2));var tr=top.getBoundingClientRect(),br=btn.getBoundingClientRect();top.style.setProperty('--fx23x',Math.max(16,Math.min(br.left-tr.left,innerWidth-616))+'px');
    var c=cur(),k=0;[].forEach.call(nav.querySelectorAll('a'),function(a){var on=!!c&&a.getAttribute('href')==='#'+c.id&&!k;if(on)k=1;a.classList.toggle('fx23-cur',on)})}}
btn.addEventListener('click',function(e){e.stopPropagation();open(!top.classList.contains('fx23-open'))});
nav.addEventListener('click',function(e){if(e.target.closest('a'))setTimeout(function(){open(false)},0)});
document.addEventListener('click',function(e){if(top.classList.contains('fx23-open')&&!e.target.closest('.nav'))open(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&top.classList.contains('fx23-open'))open(false)});
FX.on('D23',function(on){if(!on)open(false)});
/* 발표 중: 숫자 + Enter · Home · End · ↑ · ↓ */
var pc=document.querySelector('.pctl'),go=document.createElement('span'),buf='',bt=0;go.className='fx23-go';if(pc)pc.insertBefore(go,pc.firstChild);
function clr(){buf='';go.classList.remove('on');go.textContent=''}
document.addEventListener('keydown',function(e){
  if(!FX.is('D23')||!document.body.classList.contains('pres')||!window.__ztGo||e.ctrlKey||e.metaKey||e.altKey)return;
  var at=window.__ztAt(),k=e.key;
  if(/^[0-9]$/.test(k)){e.preventDefault();buf=(buf+k).slice(-3);go.textContent=buf+' ↵';go.classList.add('on');clearTimeout(bt);bt=setTimeout(clr,4000);return}
  if(k==='Enter'&&buf){e.preventDefault();var n=parseInt(buf,10);clr();if(n>=1)window.__ztGo(Math.min(n,at[1])-1);return}
  if(k==='Backspace'&&buf){e.preventDefault();buf=buf.slice(0,-1);go.textContent=buf+' ↵';if(!buf)clr();return}
  if(k==='Home'){e.preventDefault();clr();window.__ztGo(0)}
  else if(k==='End'){e.preventDefault();clr();window.__ztGo(at[1]-1)}
  else if(k==='ArrowDown'){e.preventDefault();clr();window.__ztGo(at[0]+1)}
  else if(k==='ArrowUp'){e.preventDefault();clr();window.__ztGo(at[0]-1)}
  else if(k==='Escape')clr();
});

})()}catch(e){console.error("[D23]",e)}
try{(function(){var t=0;new MutationObserver(function(){clearTimeout(t);t=setTimeout(function(){
var need=[].some.call(document.querySelectorAll('iframe.emb:not([data-on])'),function(f){var s=f.closest('section');return s&&!s.hidden});
if(need)window.dispatchEvent(new Event('zt-ready'))},60)}).observe(document.body,{attributes:true,attributeFilter:['class']});
})()}catch(e){console.error("[D26]",e)}
try{(function(){
function fx28(id,pairs,skip){
  var C=pairs.map(function(p){var h=p[0].slice(1),n=p[1].slice(1),r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);
    return {hx:new RegExp('#'+h+'(?![0-9a-f])','ig'),rgb:new RegExp('rgba?\\(\\s*'+r+',\\s*'+g+',\\s*'+b+'\\s*(?:[,/]\\s*([0-9.]+%?))?\\s*\\)','g'),
      to:p[1],R:parseInt(n.substr(0,2),16),G:parseInt(n.substr(2,2),16),B:parseInt(n.substr(4,2),16)}});
  function tr(v){if(/gradient/i.test(v))return v;C.forEach(function(c){v=v.replace(c.hx,c.to).replace(c.rgb,function(m,a){return a!=null?'rgba('+c.R+', '+c.G+', '+c.B+', '+a+')':'rgb('+c.R+', '+c.G+', '+c.B+')'})});return v}
  var S=null;
  function scan(){S=[];
    function walk(rs){for(var i=0;i<rs.length;i++){var r=rs[i];
      if(r.style&&!(skip&&r.selectorText&&skip.test(r.selectorText))){var st=r.style;for(var j=0;j<st.length;j++){var p=st[j],v=st.getPropertyValue(p),n=tr(v);if(n!==v)S.push([st,p,v,st.getPropertyPriority(p),n])}}
      if(r.cssRules&&r.cssRules.length)walk(r.cssRules)}}
    [].forEach.call(document.styleSheets,function(sh){var o=sh.ownerNode;if(o&&o.textContent&&o.textContent.indexOf('fx-a,fx-b{display:contents}')===0)return;try{walk(sh.cssRules)}catch(e){}})}
  function ap(on){if(!S){if(!on)return;scan()}S.forEach(function(x){x[0].setProperty(x[1],on?x[4]:x[2],x[3])})}
  FX.on(id,ap);if(FX.is(id))ap(true)}
fx28('D28',[["#67e8f9", "#8fb4ff"], ["#fbbf24", "#8fb4ff"], ["#e0457b", "#e5484d"], ["#e11d48", "#e5484d"], ["#be123c", "#e5484d"], ["#d9480f", "#e5484d"], ["#ef5a5a", "#e5484d"], ["#9f1239", "#b4232a"], ["#fff1f2", "#fde8e7"], ["#fecdd3", "#f3b4b2"], ["#f3a6bd", "#f3b4b2"], ["#ff9b93", "#ff8a8a"], ["#ff6b8a", "#ff8a8a"], ["#fde8ef", "#fde8e7"], ["#c0315f", "#e5484d"]],/\.akt/);
})()}catch(e){console.error("[D28]",e)}
try{(function(){
var sec=document.getElementById('s3');if(!sec)return;
var q=[].filter.call(sec.querySelectorAll('.p2m .p2q'),function(e){return /반품할게요/.test(e.textContent)})[0];if(!q)return;
var c=[],e=q;for(var i=0;i<7;i++){e=e&&e.nextElementSibling;c.push(e)}
var d=c[2],n=c[6];if(!d||!n||!d.classList.contains('p2d')||!n.classList.contains('p2n'))return;
var b=n.querySelector('b');d.classList.add('fx30-d');n.classList.add('fx30-n');
function f(on){d.classList.toggle('on',on);b.textContent=on?'6':'5'}
FX.on('D30',f);if(FX.is('D30'))f(true);

})()}catch(e){console.error("[D30]",e)}
try{(function(){
var B=document.body,T=0,was=false;
function poke(){if(!FX.is('D39')||!B.classList.contains('pres'))return;if(!B.classList.contains('fx39-ui'))B.classList.add('fx39-ui');clearTimeout(T);T=setTimeout(function(){B.classList.remove('fx39-ui')},2000)}
['mousemove','pointerdown','touchstart','wheel'].forEach(function(e){document.addEventListener(e,poke,{passive:true})});
/* 발표 시작 때 한 번 보여 주고 2초 뒤 숨김 */
new MutationObserver(function(){var p=B.classList.contains('pres');if(p===was)return;was=p;
  if(p)poke();else{clearTimeout(T);B.classList.remove('fx39-ui')}}).observe(B,{attributes:true,attributeFilter:['class']});
FX.on('D39',function(on){if(on)poke();else{clearTimeout(T);B.classList.remove('fx39-ui')}});

})()}catch(e){console.error("[D39]",e)}
try{(function(){
function fx40(id,pairs){
  var C=pairs.map(function(p){var h=p[0].slice(1),r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);
    return {hx:new RegExp('#'+h+'(?![0-9a-f])','ig'),rgb:new RegExp('rgba?\\(\\s*'+r+',\\s*'+g+',\\s*'+b+'\\s*\\)','g'),to:p[1]}});
  var S=null;
  function scan(){S=[];
    function walk(rs){for(var i=0;i<rs.length;i++){var r=rs[i];
      if(r.style){var st=r.style,v=st.getPropertyValue('color');if(v){var n=v;C.forEach(function(c){n=n.replace(c.hx,c.to).replace(c.rgb,c.to)});if(n!==v)S.push([st,v,st.getPropertyPriority('color'),n])}}
      if(r.cssRules&&r.cssRules.length)walk(r.cssRules)}}
    [].forEach.call(document.styleSheets,function(sh){var o=sh.ownerNode;if(o&&o.textContent&&o.textContent.indexOf('fx-a,fx-b{display:contents}')===0)return;try{walk(sh.cssRules)}catch(e){}})}
  function ap(on){if(!S){if(!on)return;scan()}S.forEach(function(x){x[0].setProperty('color',on?x[3]:x[1],x[2])})}
  FX.on(id,ap);if(FX.is(id))ap(true)}
fx40('D40',[['#7a8698','#646c77'],['#8a94a6','#646c77'],['#8a96a8','#646c77']]);
})()}catch(e){console.error("[D40]",e)}
try{(function(){var T=window.__vocT=window.__vocT||[];T.push({id:'D40',f:function(k,h){return h+"<style>:root{--faint:#646c77}.note{color:#646c77!important;font-size:18px!important}<\/style>"}});FX.on('D40',function(){[].forEach.call(document.querySelectorAll('iframe.emb[data-on]'),function(fr){fr.removeAttribute('data-on');if(window.__vocLoad)window.__vocLoad(fr)})});
})()}catch(e){console.error("[D40]",e)}
try{(function(){var c=document.querySelector('#s49 .sc-c.on');if(!c)return;
function set(on){c.classList.toggle('on',!on)}FX.on('D43',set);if(FX.is('D43'))set(true);
})()}catch(e){console.error("[D43]",e)}
try{(function(){var T=window.__vocT=window.__vocT||[];T.push({id:'D43',f:function(k,h){if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("\n    <div class=\"lb\" style=\"margin-top:4px\">상담원 응대 품질 <span class=\"nwb\">새 기능<\/span><\/div>\n    <table class=\"ag\"><thead><tr><th>상담원<\/th><th>응대<\/th><th>친절 점수<\/th><th>주의<\/th><\/tr><\/thead><tbody id=\"ag\"><\/tbody><\/table><\/section>").join("<\/section>");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("\n  <section class=\"panel sk\">").join("\n  <section class=\"panel agp\"><div class=\"lb\" style=\"margin-top:4px\">상담원 응대 품질 <span class=\"nwb\">새 기능<\/span><\/div>\n    <table class=\"ag\"><thead><tr><th>상담원<\/th><th>응대<\/th><th>친절 점수<\/th><th>주의<\/th><\/tr><\/thead><tbody id=\"ag\"><\/tbody><\/table><\/section>\n  <section class=\"panel sk\">");h+="<style>.chat{height:384px!important}.agp{left:128px;top:654px;width:580px;height:336px;padding:22px 26px;display:flex;flex-direction:column;justify-content:center;gap:8px}.agp .lb{margin-top:0!important}.kw #rules{flex:1;gap:16px!important}.kw #rules>.rl{flex:1;align-content:center;padding:20px 22px}.kw .rl .nm{font-size:23px}.kw .ws span{font-size:17px}.kw .rl .hc{font-size:32px}.lane:first-child{flex:none}.lane:first-child>div:empty{min-height:44px}<\/style>"; return h}});FX.on('D43',function(){[].forEach.call(document.querySelectorAll('iframe.emb[data-on]'),function(fr){fr.removeAttribute('data-on');if(window.__vocLoad)window.__vocLoad(fr)})});
})()}catch(e){console.error("[D43]",e)}
try{(function(){var Z=window.__ZT;if(!Z||!window.FX)return;
var G=window.__g2o;
if(!G){G=window.__g2o={T:[],t:0};var O=Z.order();
Object.keys(O).forEach(function(p){var d=Object.getOwnPropertyDescriptor(O,p),g=d.get||(function(v){return function(){return v}})(d.value);
Object.defineProperty(O,p,{configurable:true,enumerable:true,get:function(){var l=g.call(O).slice();G.T.forEach(function(t){if(FX.is(t.id))l=t.f(l,p)||l});return l}})});
G.re=function(){clearTimeout(G.t);G.t=setTimeout(function(){if(G.T.some(function(t){return FX.is(t.id)}))Z.setPan(window.__pan||'none')},0)}}
G.T.push({id:'D47',f:function(l){var n='VOC';if(l.indexOf(n)>=0)return l;
var i=l.indexOf('VOC · 한눈에 보기');if(i<0)return l;l.splice(i,0,n);return l}});G.re();
})()}catch(e){console.error("[D47]",e)}
try{(function(){var T=window.__vocT=window.__vocT||[];T.push({id:'D48',f:function(k,h){if(["voc1"].indexOf(k)>=0)h=h.split(".replace(/\"vg\"/,'\"vg'+gid+'\"').replace('url(#vg_s60)','url(#vg'+gid+')')").join(".replace(/id=\"vg_s6\\d\"/,'id=\"vg'+gid+'\"').replace(/url\\(#vg_s6\\d\\)/,'url(#vg'+gid+')')");if(["voc2"].indexOf(k)>=0)h=h.split(".replace(/\"vg\"/,'\"vg'+gid+'\"').replace('url(#vg_s61)','url(#vg'+gid+')')").join(".replace(/id=\"vg_s6\\d\"/,'id=\"vg'+gid+'\"').replace(/url\\(#vg_s6\\d\\)/,'url(#vg'+gid+')')");if(["voc3"].indexOf(k)>=0)h=h.split(".replace(/\"vg\"/,'\"vg'+gid+'\"').replace('url(#vg_s62)','url(#vg'+gid+')')").join(".replace(/id=\"vg_s6\\d\"/,'id=\"vg'+gid+'\"').replace(/url\\(#vg_s6\\d\\)/,'url(#vg'+gid+')')"); return h}});FX.on('D48',function(){[].forEach.call(document.querySelectorAll('iframe.emb[data-on]'),function(fr){fr.removeAttribute('data-on');if(window.__vocLoad)window.__vocLoad(fr)})});
})()}catch(e){console.error("[D48]",e)}
try{(function(){var T=window.__vocT=window.__vocT||[];T.push({id:'D49',f:function(k,h){if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("<p class=\"sub\">지금 들어오는 리뷰와 문의, 상담원 답변까지 AI가 계속 지켜봅니다. <b>위험한 말이 보이면 슬랙·제로톡으로 바로 알립니다.<\/b><\/p>").join("<p class=\"sub\">리뷰와 문의는 매일 읽고, <b>위험한 말이 보이면 슬랙·카카오톡·제로톡 중 고르신 곳으로 바로 알립니다.<\/b><\/p>");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("<div class=\"lb\" style=\"margin-top:4px\">상담원 응대 품질 <span class=\"nwb\">새 기능<\/span><\/div>").join("<div class=\"lb\" style=\"margin-top:4px\">상담원 응대 품질(거친 응대 감지) <span class=\"nwb\">출시 예정<\/span><\/div>");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("<p class=\"note\">거친 응대 감지는 새 기능 기획안 · 대화와 숫자는 예시입니다<\/p>").join("<p class=\"note\">거친 응대 감지는 출시 예정 · 대화와 숫자는 예시입니다<\/p>");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split(" {n:'거친 응대',lv:['rk-h','높음'],to:'@CS팀장 · 권장 문장',w:['고객 탓하기','퉁명한 말투','책임 회피','정책과 다른 안내'],ai:1,h:2},\n").join("");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split(" {k:'chat',ag:0,lines:[['c','교환 신청했는데 언제 와요?'],['a','공지에 다 써 있는데요.']],r:2,w:['고객 탓하기','퉁명한 말투'],flags:['고객 탓','퉁명'],sug:'확인해 볼게요. 교환 상품은 내일 출고 예정이에요.',\n  sk:['t','cs-긴급','거친 응대 · 김상담','@CS팀장','“공지에 다 써 있는데요.” · 권장 문장 보냄'],\n  zt:['t','◎','응대 주의 · 김상담','권장 문장을 상담원 화면에 보냈어요']},\n").join("");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("tx:'잘 마르는데 소음이 조금 있어요',r:3,").join("tx:'잘 마르는데 소음이 조금 있어요',r:2,"); return h}});FX.on('D49',function(){[].forEach.call(document.querySelectorAll('iframe.emb[data-on]'),function(fr){fr.removeAttribute('data-on');if(window.__vocLoad)window.__vocLoad(fr)})});
})()}catch(e){console.error("[D49]",e)}
try{(function(){document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('#s21 a.fx51-l');
if(a&&document.body.classList.contains('pres'))e.stopPropagation()},true);
})()}catch(e){console.error("[D51]",e)}
try{(function(){
var x0=null,y0=0;
document.addEventListener('touchstart',function(e){if(!FX.is('D53')||!document.body.classList.contains('pres')||e.touches.length!==1){x0=null;return}x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
document.addEventListener('touchend',function(e){if(x0===null)return;var t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;x0=null;
  if(Math.abs(dx)<50||Math.abs(dx)<Math.abs(dy)*1.5)return;var b=document.getElementById(dx<0?'nx':'pv');if(b)b.click()},{passive:true});

})()}catch(e){console.error("[D53]",e)}
try{(function(){function put(fr,on){try{var d=fr.contentDocument;if(!d||!d.head)return;var x=d.getElementById('fx-d55');
if(on&&!x){x=d.createElement('style');x.id='fx-d55';x.textContent='.chd{display:none!important}';d.head.appendChild(x)}else if(!on&&x)x.remove()}catch(e){}}
function all(){[].forEach.call(document.querySelectorAll('iframe.emb'),function(f){put(f,FX.is('D55'))})}
document.addEventListener('load',function(e){var t=e.target;if(t&&t.tagName==='IFRAME'&&t.classList.contains('emb'))put(t,FX.is('D55'))},true);
FX.on('D55',all);all();
})()}catch(e){console.error("[D55]",e)}
try{(function(){var Z=window.__ZT;if(!Z||!window.FX)return;
var G=window.__g2o;
if(!G){G=window.__g2o={T:[],t:0};var O=Z.order();
Object.keys(O).forEach(function(p){var d=Object.getOwnPropertyDescriptor(O,p),g=d.get||(function(v){return function(){return v}})(d.value);
Object.defineProperty(O,p,{configurable:true,enumerable:true,get:function(){var l=g.call(O).slice();G.T.forEach(function(t){if(FX.is(t.id))l=t.f(l,p)||l});return l}})});
G.re=function(){clearTimeout(G.t);G.t=setTimeout(function(){if(G.T.some(function(t){return FX.is(t.id)}))Z.setPan(window.__pan||'none')},0)}}
var g=[].filter.call(document.querySelectorAll('section.sl'),function(s){return /해외 배송$/.test(s.getAttribute('aria-label')||'')})[0];if(!g)return;
function set(on){g.id=on?'s15g':'s15';g.setAttribute('aria-label',(on?'15':'0')+'. 케이스 · 해외 배송')}
FX.on('D61',set);if(FX.is('D61'))set(true);
G.T.push({id:'D61',f:function(l){return l}});G.re();
})()}catch(e){console.error("[D61]",e)}
try{(function(){var T=window.__vocT=window.__vocT||[];T.push({id:'D62',f:function(k,h){if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("if(isR)m[5]++;else m[4]++;drawSrc(i,f[1]);").join("drawSrc(i,f[1]);");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("if(f[2]){SR[5-f[2]][1]++;drawStars()}").join("if(f[2]){drawStars()}");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("function(){TY[f[5]][1]++;IS[f[6]][1]++;drawTy(f[5]);drawIs(f[6]);drawSrc(-1)}").join("function(){drawTy(f[5]);drawIs(f[6]);drawSrc(-1)}");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("(function up(){if(k<e.n){v+=e.p===1?1:1;k++;$(e.tk).textContent=v;bump($(e.tk));p[4]+=0.2;drawP(e.p);later(up,380)}else{").join("(function up(){if(false){}else{");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("sig:['타는 냄새 7건','u']").join("sig:['타는 냄새 6건','u']");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("later(function(){\n      var t=[0,'#'+(tkno++)].concat(e.ticket);\n      flyChip(c2,$('tr2'),'개선 요청 '+t[1]+' · '+t[2],$('pr'+e.p),$('l0'),function(){TK.push(t);drawT(t);\n        later(function(){var old=TK.filter(function(x){return x[0]===1})[0];if(old){old[0]=2;old[7]=[30+ei%3*4,14+ei%3*2]}t[0]=1;drawT()},2200)});\n    },500);").join("");if(["voc1", "voc2", "voc3"].indexOf(k)>=0)h=h.split("var TK=[[1,'#49',").join("var TK=[[0,'#52','품질팀','초음파 가습기 3L · 사용 중','물통 패킹 누수 점검','물 샘 8주 평균의 2.4배','380만 원'],[1,'#49',"); return h}});FX.on('D62',function(){[].forEach.call(document.querySelectorAll('iframe.emb[data-on]'),function(fr){fr.removeAttribute('data-on');if(window.__vocLoad)window.__vocLoad(fr)})});
})()}catch(e){console.error("[D62]",e)}
try{(function(){
var o=document.getElementById('zm-ord');if(!o)return;
FX.on('D66',function(on){var a='20261012-0004127',b='20261005-0004127';if(o.textContent===(on?a:b))o.textContent=on?b:a});

})()}catch(e){console.error("[D66]",e)}

}catch(e){console.warn("deck script",10,e)}