// ── MENU DATA (from RFC PDF) ──
const menuItems = [
  // Fast Food
  { name:"Classic Maggi", img:"images/classic_maggie.jpg.jpeg", desc:"The all-time favourite classic maggi.", price:79, cat:"fastfood", type:"veg" },
  { name:"RFC Spl Crispy Chicken Maggi", img:"images/chichen_noodles.jpeg", desc:"Spicy and crispy chicken tossed with maggi.", price:159, cat:"fastfood", type:"nonveg", badge:"Chef's Pick" },
  { name:"RFC Classic Veg Sandwich", img:"images/veg_sandwich.jpg.png", desc:"Classic toasted sandwich loaded with fresh veggies.", price:135, cat:"fastfood", type:"veg" },
  { name:"Chicken & Cheese Club Sandwich", img:"images/cheese_burger.jpeg", desc:"Triple layered sandwich with chicken and melted cheese.", price:199, cat:"fastfood", type:"nonveg" },
  { name:"Classic Chicken Burger", img:"images/chichen_burger.jpeg", desc:"Juicy chicken patty with fresh lettuce and mayo.", price:135, cat:"fastfood", type:"nonveg" },
  { name:"Double Patty Veg Monster Burger", img:"images/veg_burger.jpeg", desc:"A giant burger with double veg patties and cheese.", price:199, cat:"fastfood", type:"veg" },
  { name:"Peri-Peri Chicken Loaded Pizza", img:"images/chichen_pizza.jpeg", desc:"Spicy peri-peri chicken chunks with gooey cheese.", price:249, cat:"fastfood", type:"nonveg", badge:"Popular" },
  { name:"Chicken Tikka Frankie", img:"images/chicken_tikka.jpeg", desc:"Chicken tikka wrapped in a soft frankie roll.", price:119, cat:"fastfood", type:"nonveg" },
  { name:"Chicken White Sauce Pasta", img:"images/white_paste.jpeg", desc:"Creamy white sauce pasta with tender chicken.", price:159, cat:"fastfood", type:"nonveg" },
  { name:"Chicken Schezwan Momos", img:"images/schzwan_momo.jpeg", desc:"Spicy schezwan chicken stuffed momos.", price:139, cat:"fastfood", type:"nonveg" },

  // Fried Chicken & Snacks
  { name:"Crispy Chicken Leg (2 Pcs)", img:"images/chicken_legs_new.jpg", desc:"Golden fried crispy chicken legs.", price:149, cat:"snacks", type:"nonveg" },
  { name:"Crispy Chicken Popcorn", img:"images/snacks_img2.jpg", desc:"Bite-sized crispy chicken pieces.", price:169, cat:"snacks", type:"nonveg", badge:"Popular" },
  { name:"Half Bucket Chicken", img:"images/snacks_img4.jpg", desc:"12 Pcs: 2 legs, 4 strips, 6 popcorn.", price:389, cat:"snacks", type:"nonveg" },
  { name:"Korean Chicken Loaded French Fries", img:"images/korean_fries.jpg", desc:"Fries topped with sweet & spicy Korean chicken.", price:149, cat:"snacks", type:"nonveg", badge:"New" },
  { name:"Cheese Corn Nuggets", img:"images/corn_nuggets.jpg", desc:"Golden nuggets filled with melting cheese and corn.", price:109, cat:"snacks", type:"veg" },
  { name:"Tandoori Chicken Bread Omelette", img:"images/tandoori_omelette.jpg", desc:"Spicy tandoori chicken stuffed inside an omelette.", price:149, cat:"snacks", type:"nonveg" },

  // Rice Bowls
  { name:"Korean Chilli Chicken Rice Bowl", img:"images/korean_chicken_bowl.jpg", desc:"Sweet and spicy Korean chicken with rice.", price:255, cat:"rice", type:"nonveg" },
  { name:"Chilli Paneer Rice Bowl", img:"images/paneer_bowl.jpg", desc:"Spicy chilli paneer served over a bed of rice.", price:199, cat:"rice", type:"veg" },
  { name:"Crispy Chicken Leg Rice Bowl", img:"images/chic_leg_rice_bowl.jpeg", desc:"Flavorful rice served with a crispy chicken leg.", price:210, cat:"rice", type:"nonveg" },
  { name:"Jumbo Chicken Tikka Loaded Rice Bowl", img:"images/chicken_tikka_bowl.jpeg", desc:"Our biggest rice bowl loaded with chicken tikka.", price:299, cat:"rice", type:"nonveg", badge:"Must Try" },

  // Drinks
  { name:"Oreo Milkshake", img:"images/oreo_milkshake.jpg", desc:"Thick and creamy milkshake blended with Oreo cookies.", price:139, cat:"drinks", type:"veg", bgPos:"center top" },
  { name:"Chocolate Milkshake", img:"images/chocolate_milkshake.jpg", desc:"Rich and decadent chocolate milkshake.", price:129, cat:"drinks", type:"veg", bgPos:"center top" },
  { name:"Filter Coffee", img:"images/filter_coffee.jpg", desc:"Traditional South Indian filter coffee.", price:25, cat:"drinks", type:"veg" },
  { name:"Hazelnut Coffee", img:"images/hazelnut_coffee.jpg", desc:"Premium coffee brewed with a rich hazelnut flavor.", price:119, cat:"drinks", type:"veg", badge:"Premium" },

  // Desserts
  { name:"Double Chocolate Brownie with Ice Cream", img:"images/double_chocolate_brownie.jpg", desc:"Warm chocolate brownie served with vanilla ice cream.", price:149, cat:"desserts", type:"veg" },
  { name:"Sizzling Brownie Hot Plate", img:"images/sizzling_brownie.jpg", desc:"Brownie topped with ice cream on a hot sizzling plate.", price:169, cat:"desserts", type:"veg", badge:"Special", bgPos:"center top" },
  { name:"Mixed Fresh Fruit Falooda", img:"images/fruit_falooda2.jpg", desc:"Traditional falooda loaded with fresh fruits and ice cream.", price:149, cat:"desserts", type:"veg" },
  { name:"The Classic Vanilla Choco Waffle", img:"images/vanilla_choco_waffle.jpg", desc:"Crispy waffle served with vanilla and chocolate syrup.", price:135, cat:"desserts", type:"veg" }
];

function buildMenu(cat) {
  const grid = document.getElementById('menuGrid');
  const items = cat === 'all' ? menuItems : menuItems.filter(i=>i.cat===cat);
  grid.innerHTML = items.map(item=>`
    <div class="menu-card reveal">
      <div class="menu-card-img" style="background-image: url('${item.img}'); background-size: ${item.bgSize || 'cover'}; background-repeat: no-repeat; background-position: ${item.bgPos || 'center'};">
        <div class="${item.type==='veg'?'veg-badge':'nonveg-badge'}"></div>
        ${item.badge?`<span class="badge-new">${item.badge}</span>`:''}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <div class="menu-card-price">₹${item.price} <span>per plate</span></div>
          <a href="https://wa.me/916381883013?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(item.name)}%20(%E2%82%B9${item.price})" class="order-item-btn" target="_blank" rel="noopener noreferrer">Order this item</a>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('menuGrid');
  grid.style.opacity='0'; grid.style.transform='translateY(16px)';
  setTimeout(()=>{ buildMenu(cat); grid.style.transition='all 0.4s'; grid.style.opacity='1'; grid.style.transform='translateY(0)'; },200);
}
buildMenu('all');

// ── GALLERY ──
const galleryImgs = menuItems.map(item => item.img);
const track = document.getElementById('galleryTrack');
const all = [...galleryImgs,...galleryImgs];
track.innerHTML = all.map(img=>`<div class="gallery-card" style="background-image: url('${img}'); background-size: cover; background-position: center;"></div>`).join('');

// ── PARTICLES ──
function createParticles() {
  const container = document.getElementById('particles');
  if(!container) return;
  for(let i=0;i<18;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=Math.random()*5+3;
    p.style.cssText=`width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-delay:${Math.random()*8}s;animation-duration:${6+Math.random()*6}s;`;
    container.appendChild(p);
  }
}
createParticles();

// ── NAV SCROLL ──
const navEl=document.getElementById('nav');
window.addEventListener('scroll',()=>{
  if(navEl) navEl.classList.toggle('scrolled',window.scrollY>60);
});

// ── REVEAL ON SCROLL ──
function observeReveal(){
  const els=document.querySelectorAll('.reveal:not(.visible)');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  },{threshold:0.12});
  els.forEach(el=>obs.observe(el));
}
observeReveal();

// ── PARALLAX ──
function handleParallax(){
  const els=document.querySelectorAll('.parallax-el');
  const sy=window.scrollY;
  els.forEach(el=>{
    const speed=parseFloat(el.dataset.speed||0);
    el.style.transform=`translateY(calc(-50% + ${sy*speed}px))`;
  });
}
window.addEventListener('scroll',handleParallax,{passive:true});

// ── THEME TOGGLE ──
function toggleTheme(){
  const html=document.documentElement;
  html.dataset.theme=html.dataset.theme==='dark'?'light':'dark';
}

// ── 3D CARD TILT ──
document.querySelectorAll('.menu-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left, y=e.clientY-r.top;
    const cx=r.width/2, cy=r.height/2;
    const rx=(y-cy)/cy*8, ry=-(x-cx)/cx*8;
    card.style.transform=`translateY(-8px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    card.style.perspective='600px';
  });
  card.addEventListener('mouseleave',()=>{ card.style.transform=''; });
});
