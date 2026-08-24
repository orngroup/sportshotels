// header scroll state
const head=document.querySelector('.site-head');
addEventListener('scroll',()=>{head.classList.toggle('scrolled',scrollY>20)});
// mobile nav
const burger=document.querySelector('.burger'),links=document.querySelector('.nav-links');
if(burger){burger.addEventListener('click',()=>links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));}
// reveal on scroll
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// booking widget -> real ClubSportsHotels engine
function shBook(e){
  e.preventDefault();
  // The live SportsHotels booking engine
  const base='https://accommodation.clubsportshotels.com/Search';
  const dest=document.getElementById('bk-dest')?.value||'';
  const ci=document.getElementById('bk-ci')?.value||'';
  const co=document.getElementById('bk-co')?.value||'';
  const rooms=document.getElementById('bk-rooms')?.value||'1';
  const q=new URLSearchParams();
  if(dest)q.set('destination',dest);
  if(ci)q.set('checkin',ci);
  if(co)q.set('checkout',co);
  q.set('rooms',rooms);
  window.open(base+'?'+q.toString(),'_blank');
  return false;
}
// set date min = today
document.querySelectorAll('input[type=date]').forEach(d=>{d.min=new Date().toISOString().split('T')[0]});
