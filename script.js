(()=>{
 const c=window.REVEAL_CONFIG||{},q=new URLSearchParams(location.search),family=q.get('family')==='parents'||(q.get('family')!=='inlaws'&&c.family==='parents')?'parents':'inlaws';
 const $=id=>document.getElementById(id),set=(id,v)=>{if($(id))$(id).textContent=v};
 const copy=c.copy?.[family]||{};set('familyLabel',copy.label||(family==='parents'?'A LITTLE NOTE FOR MOM & DAD':'A LITTLE NOTE FOR YOU'));set('titleLead',copy.titleLead||'우리 가족의');set('titleEmphasis',copy.titleEmphasis||'가장 설레는 날');set('titleTail',copy.titleTail||'까지');set('mainIntro',copy.intro||'오래 기다리셨죠? 저희에게 찾아온 작은 기쁨을\n가족과 함께 나누는 날이 다가오고 있어요.');
 const voterKey='little-one-vote-'+family;let selected=localStorage.getItem(voterKey);
 function showVote(){document.querySelectorAll('[data-vote]').forEach(b=>{b.disabled=!!selected;b.setAttribute('aria-pressed',String(selected===b.dataset.vote))});set('pollStatus',selected?'선택 완료! 성별은 공개일에 공개됩니다.':'둘 중 하나를 선택하면 성별은 공개일에 공개됩니다.')}
 document.querySelectorAll('[data-vote]').forEach(b=>b.addEventListener('click',()=>{if(selected)return;selected=b.dataset.vote;localStorage.setItem(voterKey,selected);showVote()}));showVote();
 let deadline=Date.parse(c.revealDate||''),released=false;const after=$('afterDate');
 if(Number.isFinite(deadline)){const dateText=new Intl.DateTimeFormat('ko-KR',{dateStyle:'long',timeStyle:'short',timeZone:c.revealTimeZone||undefined}).format(new Date(deadline));set('revealDate',dateText+' 공개 예정')}else set('revealDate','공개 날짜를 config.js에서 설정해 주세요');
 function openDay(){if(released)return;released=true;after.hidden=false;$('countdown').innerHTML='<strong class="today-label">오늘, 함께 만나요</strong>';document.querySelectorAll('[data-vote]').forEach(b=>b.disabled=true);set('pollStatus','투표가 마감됐어요. 함께해 주셔서 고마워요!');if(c.zoomUrl){$('zoomLink').href=c.zoomUrl;$('zoomLink').hidden=false;$('zoomMissing').hidden=true}else set('zoomMissing','Zoom 주소를 config.js에 입력해 주세요.');$('revealPageLink').href='reveal.html?family='+family;$('revealPageLink').hidden=false;$('pageMissing').hidden=true;setTimeout(()=>after.scrollIntoView({behavior:'smooth'}),250)}
 function tick(){if(!Number.isFinite(deadline)||released)return;const left=deadline-Date.now();if(left<=0){openDay();return}const s=Math.floor(left/1000);set('days',String(Math.floor(s/86400)).padStart(2,'0'));set('hours',String(Math.floor(s%86400/3600)).padStart(2,'0'));set('minutes',String(Math.floor(s%3600/60)).padStart(2,'0'));set('seconds',String(s%60).padStart(2,'0'))}
 tick();setInterval(tick,1000);
 const bar=$('progressBar');addEventListener('scroll',()=>{bar.style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100||0)+'%'},{passive:true});
 const obs=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target)}}),{threshold:.15});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
})();
