const h=document.querySelector('header.nav'),solid=h.dataset.solid==='1';
const s=()=>h.classList.toggle('solid',solid||scrollY>40);s();addEventListener('scroll',s,{passive:true});
const b=document.querySelector('.burger'),l=document.querySelector('.links');
b.onclick=()=>{const o=l.classList.toggle('open');h.classList.toggle('menu',o);b.setAttribute('aria-expanded',o)};
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
