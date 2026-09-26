const weddingDate = new Date('2026-10-14T20:29:00+05:30').getTime();

function tick(){
  const d=Math.max(0,weddingDate-Date.now());
  const s=Math.floor(d/1000);
  const days=document.querySelector('#days');
  const hours=document.querySelector('#hours');
  const mins=document.querySelector('#mins');
  const secs=document.querySelector('#secs');
  if(!days||!hours||!mins||!secs)return;
  days.textContent=String(Math.floor(s/86400)).padStart(2,'0');
  hours.textContent=String(Math.floor(s%86400/3600)).padStart(2,'0');
  mins.textContent=String(Math.floor(s%3600/60)).padStart(2,'0');
  secs.textContent=String(s%60).padStart(2,'0');
}
tick(); setInterval(tick,1000);

const translations={
  entryBrideName:['Harika','హారిక'], entryGroomName:['Arun Kumar','అరుణ్ కుమార్'], brideName:['Lakshmi Venkata Sri Harika','లక్ష్మీ వెంకట శ్రీ హారిక'], groomName:['Muthyala Arun Kumar','ముత్యాల అరుణ్ కుమార్'], footerDate:['14 OCTOBER 2026 · MANDAPETA','14 అక్టోబర్ 2026 · మండపేట'], skyland:['Skyland, Mandapeta','స్కైల్యాండ్, మండపేట'], weddingAddress:['Sri Kanya Grand<br>Gollapantha Road, Near AS Grand, Mandapeta','శ్రీ కన్యా గ్రాండ్<br>గొల్లపంత రోడ్, ఏఎస్ గ్రాండ్ సమీపంలో, మండపేట'],
  entryMantra:['OM NAMO VENKATESAYA','ఓం నమో వెంకటేశాయ'], enter:['ENTER WEBSITE','వెబ్‌సైట్‌లోకి ప్రవేశించండి'],
  navHome:['HOME','హోమ్'],navWelcome:['WELCOME','స్వాగతం'],navBlessings:['BLESSINGS','ఆశీస్సులు'],navFamilies:['FAMILIES','కుటుంబాలు'],navGallery:['GALLERY','చిత్రాలు'],navCeremonies:['CEREMONIES','వేడుకలు'],navInvited:['INVITED','ఆహ్వానం'],
  playMusic:['PLAY MUSIC','సంగీతం వినండి'],pauseMusic:['PAUSE MUSIC','సంగీతం ఆపండి'],
  blessingLine:['WITH THE BLESSINGS OF LORD VENKATESWARA SWAMY','శ్రీ వెంకటేశ్వర స్వామి వారి ఆశీస్సులతో'],gettingMarried:['WE ARE GETTING MARRIED','మేము వివాహ బంధంలోకి అడుగుపెడుతున్నాము'],saveDate:['SAVE THE DATE','తేదీని గుర్తుంచుకోండి'],scratchTitle:['— SCRATCH TO REVEAL —','— స్క్రాచ్ చేసి చూడండి —'],muhurtham:['14 OCTOBER 2026 · MUHURTHAM 8:29 PM','14 అక్టోబర్ 2026 · ముహూర్తం రాత్రి 8:29'],muhurthamSub:['THE AUSPICIOUS WEDDING MUHURTHAM','శుభ ముహూర్తం'],days:['DAYS','రోజులు'],hours:['HRS','గం.'],mins:['MINS','ని.'],secs:['SECS','సె.'],forever:['ॐ Until our forever begins ॐ','ॐ మా శాశ్వత ప్రయాణం ప్రారంభమయ్యే వరకు ॐ'],scratchHelp:['CLICK & DRAG · SWIPE TO REVEAL','క్లిక్ చేసి లాగండి · స్వైప్ చేయండి'],
  noteFromUs:['A NOTE FROM US','మా నుండి ఒక సందేశం'],welcomeTitle:['WELCOME','స్వాగతం'],welcomeText:['With hearts full of joy and gratitude, we invite you to celebrate the beginning of a beautiful new chapter. Your presence, blessings and love will make these precious moments even more special.','ఆనందం మరియు కృతజ్ఞతతో నిండిన హృదయాలతో, మా జీవితంలోని అందమైన కొత్త అధ్యాయానికి మీరు సాక్షులుగా రావాలని ఆహ్వానిస్తున్నాము. మీ సమక్షం, ఆశీస్సులు మరియు ప్రేమ ఈ మధుర క్షణాలను మరింత ప్రత్యేకంగా చేస్తాయి.'],signature:['With love & gratitude,<br><strong>Lakshmi Venkata Sri Harika<br>Muthyala Arun Kumar</strong>','ప్రేమతో మరియు కృతజ్ఞతలతో,<br><strong>లక్ష్మీ వెంకట శ్రీ హారిక<br>ముత్యాల అరుణ్ కుమార్</strong>'],govinda:['“Govinda! Govinda! Venkata Ramana Govinda!”','“గోవిందా! గోవిందా! వెంకట రమణ గోవిందా!”'],invocation:['A traditional invocation to Lord Venkateswara','శ్రీ వెంకటేశ్వర స్వామి వారికి సంప్రదాయ ప్రార్థన'],
  seekingGrace:['SEEKING HIS GRACE','ఆయన కృపను కోరుతూ'],blessingsTitle:['BLESSINGS FROM TIRUMALA','తిరుమల నుండి ఆశీస్సులు'],blessingQuote:['“May the divine blessings of Lord Venkateswara from the sacred hills of Tirumala fill this union with love, peace, prosperity and devotion, and guide the couple throughout their beautiful journey together.”','“పవిత్రమైన తిరుమల కొండల శ్రీ వెంకటేశ్వర స్వామి వారి దివ్య ఆశీస్సులు ఈ దాంపత్యాన్ని ప్రేమ, శాంతి, ఐశ్వర్యం మరియు భక్తితో నింపి, వారి అందమైన జీవన ప్రయాణమంతా వారికి మార్గదర్శకంగా నిలవాలని కోరుకుంటున్నాము.”'],withFaith:['With faith in Sri Venkateswara Swamy','శ్రీ వెంకటేశ్వర స్వామి వారిపై విశ్వాసంతో'],
  twoHearts:['TWO HEARTS · ONE PROMISE','రెండు హృదయాలు · ఒక వాగ్దానం'],meetCouple:['MEET THE COUPLE','వధూవరులను కలుసుకోండి'],bride:['BRIDE','వధువు'],groom:['GROOM','వరుడు'],brideParents:['D/O Sri Sriramachandra Murthy<br>& Smt. Bagyalakshmi','శ్రీ శ్రీరామచంద్ర మూర్తి<br>& శ్రీమతి భాగ్యలక్ష్మి గారి కుమార్తె'],groomParents:['S/O Late Sri Muthyala Venkateswara Rao & Smt. Seetha Mahalakshmi','దివంగత శ్రీ ముత్యాల వెంకటేశ్వర రావు & శ్రీమతి సీతా మహాలక్ష్మి గారి కుమారుడు'],
  moments:['MOMENTS WE TREASURE','మేము మదిలో దాచుకున్న మధుర క్షణాలు'],galleryTitle:['GALLERY','చిత్రాల సమాహారం'],swipe:['SWIPE OR USE THE ARROWS','స్వైప్ చేయండి లేదా బాణాలను ఉపయోగించండి'],presence:['YOUR PRESENCE IS OUR BLESSING','మీ సమక్షమే మా ఆశీర్వాదం'],ceremoniesTitle:['SCHEDULE OF SACRED CEREMONIES','శుభ కార్యక్రమాల వివరాలు'],swipeCeremonies:['SWIPE OR USE THE ARROWS','స్వైప్ చేయండి లేదా బాణాలను ఉపయోగించండి'],
  cordially:['WE CORDIALLY INVITE YOU TO','మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము'],invitedTitle:['HARIKA & ARUN KUMAR','హారిక & అరుణ్ కుమార్'],invitedText:['Join us as we celebrate every ritual, every smile and every blessing that leads to our forever.','మా శాశ్వత బంధానికి దారితీసే ప్రతి ఆచారం, ప్రతి చిరునవ్వు మరియు ప్రతి ఆశీర్వాదాన్ని మాతో కలిసి జరుపుకోండి.'],preWedding:['HALDI & SANGEETH','హల్దీ & సంగీత్'],weddingVenue:['WEDDING VENUE','వివాహ వేదిక'],directions:['📍 GET DIRECTIONS','📍 మార్గం చూడండి'],scanVenue:['SCAN FOR WEDDING VENUE','వివాహ వేదిక కోసం స్కాన్ చేయండి'],
  twoSouls:['Two souls, one beautiful journey.','రెండు హృదయాలు, ఒక అందమైన జీవన ప్రయాణం.'],thankYou:['With love and gratitude, thank you for being part of our story.','ప్రేమతో మరియు కృతజ్ఞతలతో, మా కథలో భాగమైనందుకు ధన్యవాదాలు.'],seekingBlessings:['SEEKING YOUR BLESSINGS','మీ ఆశీస్సులను కోరుకుంటూ'],seekingText:['As we begin this beautiful new chapter, we warmly seek your love, prayers, and blessings.','మా జీవితంలోని ఈ అందమైన కొత్త అధ్యాయాన్ని ప్రారంభిస్తున్న వేళ, మీ ప్రేమ, ప్రార్థనలు మరియు ఆశీస్సులను మనస్ఫూర్తిగా కోరుకుంటున్నాము.'],invitedBy:['INVITED BY','ఆహ్వానిస్తున్నవారు'],invitedByText:['Family & loved ones of Lakshmi Venkata Sri Harika & Muthyala Arun Kumar','లక్ష్మీ వెంకట శ్రీ హారిక & ముత్యాల అరుణ్ కుమార్ కుటుంబ సభ్యులు మరియు ఆత్మీయులు'],revealedTitle:['MUHURTHAM REVEALED!','ముహూర్తం వెల్లడైంది!'],revealedText:['The auspicious wedding moment is revealed.','శుభ వివాహ ముహూర్తం వెల్లడైంది.']
};

let telugu=false;
function setText(el,value){ if(value.includes('<')) el.innerHTML=value; else el.textContent=value; }
function applyLanguage(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[key]) setText(el,translations[key][telugu?1:0]);});
  document.documentElement.lang=telugu?'te':'en';
  document.querySelector('#teluguBtn').textContent=telugu?'English':'తెలుగు';
  const play=document.querySelector('#musicBtn span'); if(play) play.textContent=audio && !audio.paused ? (telugu?'సంగీతం ఆపండి':'PAUSE MUSIC') : (telugu?'సంగీతం వినండి':'PLAY MUSIC');
  if(!document.body.classList.contains('locked')) renderEvents();
  resizeScratch();
}

const entryScreen=document.querySelector('#entryScreen');
const enterBtn=document.querySelector('#enterBtn');
enterBtn.addEventListener('click',()=>{entryScreen.classList.add('hide');document.body.classList.remove('locked');const music=document.querySelector('#music');if(music){music.muted=false;music.play().then(markMusicPlaying).catch(()=>{});}setTimeout(()=>entryScreen.remove(),900);});
document.body.classList.add('locked');

document.querySelector('#teluguBtn').addEventListener('click',()=>{telugu=!telugu;applyLanguage();});

const canvas=document.querySelector('#scratchCanvas');
const card=document.querySelector('#scratchCard');
const ctx=canvas.getContext('2d',{willReadFrequently:true});
let scratching=false,revealed=false,scratched=0,lastPoint=null;
function resizeScratch(){
  if(!card||!canvas)return;
  const rect=card.getBoundingClientRect(); const dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);canvas.style.width=rect.width+'px';canvas.style.height=rect.height+'px';ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.globalCompositeOperation='source-over';
  const g=ctx.createLinearGradient(0,0,rect.width,rect.height);g.addColorStop(0,'#f1cf7b');g.addColorStop(.5,'#d7a74e');g.addColorStop(1,'#a96f28');ctx.fillStyle=g;ctx.fillRect(0,0,rect.width,rect.height);
  ctx.fillStyle='rgba(55,22,8,.82)';ctx.font='600 18px Cinzel';ctx.textAlign='center';ctx.fillText(telugu?'స్క్రాచ్ చేసి చూడండి':'SCRATCH TO REVEAL',rect.width/2,rect.height/2-4);ctx.font='13px Cinzel';ctx.fillStyle='rgba(55,22,8,.68)';ctx.fillText(telugu?'క్లిక్ చేసి లాగండి':'CLICK & DRAG · SWIPE',rect.width/2,rect.height/2+28);
  revealed=false;scratched=0;lastPoint=null;card.classList.remove('revealed');canvas.style.pointerEvents='auto';
}
function scratchAt(e){if(revealed)return;const rect=canvas.getBoundingClientRect();const points=e.getCoalescedEvents?.()||[e];ctx.globalCompositeOperation='destination-out';ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=56;for(const pointEvent of points){const point={x:pointEvent.clientX-rect.left,y:pointEvent.clientY-rect.top};ctx.beginPath();if(lastPoint){ctx.moveTo(lastPoint.x,lastPoint.y);}else{ctx.moveTo(point.x,point.y);}ctx.lineTo(point.x,point.y);ctx.stroke();lastPoint=point;scratched++;}if(scratched>35)revealScratch();}
function revealScratch(){if(revealed)return;revealed=true;card.classList.add('revealed');ctx.clearRect(0,0,canvas.width,canvas.height);canvas.style.pointerEvents='none';showCelebration();}
canvas.addEventListener('pointerdown',e=>{scratching=true;lastPoint=null;canvas.setPointerCapture?.(e.pointerId);scratchAt(e)});canvas.addEventListener('pointermove',e=>{if(scratching)scratchAt(e)});canvas.addEventListener('pointerup',()=>{scratching=false;lastPoint=null});canvas.addEventListener('pointercancel',()=>{scratching=false;lastPoint=null});window.addEventListener('resize',()=>{if(!revealed)resizeScratch()});

function showCelebration(){
  const wrap=document.querySelector('#celebration'),conf=document.querySelector('#confetti');
  conf.innerHTML='';
  for(let i=0;i<30;i++){
    const paper=document.createElement('span');
    paper.style.setProperty('--x',`${Math.cos(i/30*Math.PI*2)*(120+Math.random()*190)}px`);
    paper.style.setProperty('--y',`${Math.sin(i/30*Math.PI*2)*(90+Math.random()*150)}px`);
    paper.style.setProperty('--r',`${Math.random()*720-360}deg`);
    paper.style.animationDelay=`${Math.random()*.18}s`;
    conf.appendChild(paper);
  }
  wrap.classList.add('show');setTimeout(()=>wrap.classList.remove('show'),3200);
}

function updateInviteCountdowns(){
  document.querySelectorAll('.invite-countdown').forEach(box=>{
    const target=new Date(box.dataset.target).getTime();
    const diff=Math.max(0,target-Date.now());
    const total=Math.floor(diff/1000);
    const vals=[Math.floor(total/86400),Math.floor((total%86400)/3600),Math.floor((total%3600)/60),total%60];
    [...box.querySelectorAll('strong')].forEach((el,i)=>el.textContent=String(vals[i]).padStart(2,'0'));
  });
}
updateInviteCountdowns();
setInterval(updateInviteCountdowns,1000);

const eventData=[
 ['💛','HALDI','12 OCTOBER 2026 · 3:00 PM','Skyland, Mandapeta','Ladies & Girls — Yellow<br><span class="dress-code-row">Boys & Gents — Yellow & White</span>','Ladies & Girls — పసుపు<br><span class="dress-code-row">Boys & Gents — పసుపు మరియు తెలుపు</span>','https://www.google.com/maps/search/?api=1&query=Skyland%2C%20Mandapeta%2C%20Andhra%20Pradesh'],
 ['🕺🏼💃🏼','SANGEETH','12 OCTOBER 2026 · 7:00 PM','Skyland, Mandapeta','An evening of music, dance and celebration.','సంగీతం, నృత్యం మరియు ఆనందోత్సాహాలతో నిండిన సాయంత్రం.','https://www.google.com/maps/search/?api=1&query=Skyland%2C%20Mandapeta%2C%20Andhra%20Pradesh'],
 ['👰🏻‍♀️','PELLIKUTHURU FUNCTION','14 OCTOBER 2026 · MUHURTHAM 7:59 AM','Vijaya Balaji Residence, Mandapeta','The auspicious Pellikuthuru function.','శుభ పెళ్లికూతురు కార్యక్రమం.','https://maps.app.goo.gl/hLj5kpDu4pyynHEc6?g_st=iw'],
 ['🥁','VEERABHADRUNI BONAM','14 OCTOBER 2026 · 11:00 AM','Vijaya Balaji Residence, Mandapeta','A traditional procession to Veerabhadrudi Temple.','పెల్లికూతురు వేదిక నుండి → వీరభద్రుడి ఆలయం వరకు సంప్రదాయ ఊరేగింపు.','https://maps.app.goo.gl/hLj5kpDu4pyynHEc6?g_st=iw'],
 ['💍❤️','THE BIG DAY — WEDDING','14 OCTOBER 2026 · MUHURTHAM 8:29 PM','Sri Kanya Grand, Gollapantha Road, Near AS Grand','The wedding ceremony and the beginning of forever.','వివాహ వేడుక మరియు శాశ్వత బంధానికి శ్రీకారం.','https://www.google.com/maps/search/?api=1&query=Sri%20Kanya%20Grand%2C%20Gollapantha%20Road%2C%20Near%20AS%20Grand%2C%20Mandapeta%2C%20Andhra%20Pradesh'],
 ['🪷','SATYANARAYANA VRATHAM','15 OCTOBER 2026','Ravulapalem','May Lord Satyanarayana bless this sacred gathering with peace, prosperity and devotion.','శ్రీ సత్యనారాయణ స్వామి వారి ఆశీస్సులతో ఈ పవిత్ర కార్యక్రమం శాంతి, సౌభాగ్యం మరియు భక్తితో నిండాలి.','https://www.google.com/maps/search/?api=1&query=Ravulapalem%2C%20Andhra%20Pradesh']
];
const eventTitlesTe={HALDI:'హల్దీ',SANGEETH:'సంగీత్','PELLIKUTHURU FUNCTION':'పెళ్లికూతురు కార్యక్రమం','VEERABHADRUNI BONAM':'వీరభద్రుని బోనం','THE BIG DAY — WEDDING':'శుభ వివాహం','SATYANARAYANA VRATHAM':'సత్యనారాయణ వ్రతం'};
const eventDatesTe={HALDI:'12 అక్టోబర్ 2026 · మధ్యాహ్నం 3:00',SANGEETH:'12 అక్టోబర్ 2026 · సాయంత్రం 7:00','PELLIKUTHURU FUNCTION':'14 అక్టోబర్ 2026 · ముహూర్తం ఉదయం 7:59','VEERABHADRUNI BONAM':'14 అక్టోబర్ 2026 · ఉదయం 11:00','THE BIG DAY — WEDDING':'14 అక్టోబర్ 2026 · ముహూర్తం రాత్రి 8:29','SATYANARAYANA VRATHAM':'15 అక్టోబర్ 2026'};
const eventPlacesTe={'Skyland, Mandapeta':'స్కైల్యాండ్, మండపేట','Pellikuthuru Function Venue':'పెళ్లికూతురు వేదిక','Veerabhadrudi Bonam Venue':'వీరభద్రుడి బోనం వేదిక','Sri Kanya Grand, Gollapantha Road, Near AS Grand':'శ్రీ కన్యా గ్రాండ్, గొల్లపంత రోడ్, ఏఎస్ గ్రాండ్ సమీపంలో','Ravulapalem':'రావులపాలెం'};
function renderEvents(){
  document.querySelector('#eventTrack').innerHTML=eventData.map(e=>`<article class="event-card"><div class="icon">ॐ</div><h3>${telugu?(eventTitlesTe[e[1]]||e[1]):e[1]}</h3><div class="date">${telugu?(eventDatesTe[e[1]]||e[2]):e[2]}</div><p><strong>${telugu?(eventPlacesTe[e[3]]||e[3]):e[3]}</strong><br>${telugu?e[5]:e[4]}</p><a href="${e[6]}" target="_blank" rel="noopener">${telugu?'📍 మార్గం చూడండి':'📍 GET DIRECTIONS'}</a></article>`).join('');
}
renderEvents();

const gallery=['couple-close.jpg','couple-bw.jpg','couple-soft.jpg','couple-rings.jpg','couple-garden.jpg','couple-forehead.jpg'];
const track=document.querySelector('#galleryTrack');track.innerHTML=gallery.map((f,i)=>`<figure class="gallery-item" data-src="assets/${f}"><img src="assets/${f}" alt="Wedding photograph ${i+1}" loading="lazy"></figure>`).join('');
let idx=0;const items=[...track.children];
function moveGallery(dir){if(window.innerWidth<951){track.scrollBy({left:dir*280,behavior:'smooth'});return;}idx=Math.max(0,Math.min(items.length-3,idx+dir));track.scrollTo({left:idx*325,behavior:'smooth'});}
document.querySelector('.prev').onclick=()=>moveGallery(-1);document.querySelector('.next').onclick=()=>moveGallery(1);

const eventTrack=document.querySelector('#eventTrack');
function moveCeremony(dir){eventTrack.scrollBy({left:dir*340,behavior:'smooth'});}
document.querySelector('.ceremony-prev').onclick=()=>moveCeremony(-1);document.querySelector('.ceremony-next').onclick=()=>moveCeremony(1);

const lb=document.querySelector('#lightbox'),lbImg=document.querySelector('#lightboxImg');track.addEventListener('click',e=>{const fig=e.target.closest('.gallery-item');if(!fig)return;lbImg.src=fig.dataset.src;lb.classList.add('open')});document.querySelector('#closeLightbox').onclick=()=>lb.classList.remove('open');lb.onclick=e=>{if(e.target===lb)lb.classList.remove('open')};

const audio=document.querySelector('#music'),btn=document.querySelector('#musicBtn');
audio.volume=.45;
function markMusicPlaying(){audio.volume=.45;btn.classList.add('playing');btn.innerHTML=`🔊 <span data-i18n="pauseMusic">${telugu?'సంగీతం ఆపండి':'PAUSE MUSIC'}</span>`;}
function attemptAutoplay(){audio.play().then(markMusicPlaying).catch(()=>{});}
window.addEventListener('load',attemptAutoplay);
btn.onclick=async()=>{if(audio.paused){try{await audio.play();btn.classList.add('playing');btn.innerHTML=`🔊 <span data-i18n="pauseMusic">${telugu?'సంగీతం ఆపండి':'PAUSE MUSIC'}</span>`}catch(err){alert(telugu?'మ్యూజిక్ ప్లే చేయడానికి మళ్లీ నొక్కండి.':'Tap again to allow the wedding music to play.')}}else{audio.pause();btn.classList.remove('playing');btn.innerHTML=`♫ <span data-i18n="playMusic">${telugu?'సంగీతం వినండి':'PLAY MUSIC'}</span>`}};

const sections=[...document.querySelectorAll('main section[id]')],dots=[...document.querySelectorAll('.side-dots span')];const navLinks=[...document.querySelectorAll('.nav nav a')];
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=sections.indexOf(e.target);dots.forEach((d,n)=>d.classList.toggle('active',n===i));navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{threshold:.45});sections.forEach(s=>observer.observe(s));

resizeScratch();
