// Apply saved theme or default to light
(function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.dataset.theme = savedTheme;
})();

// ── PAGE LOADER WITH RETRY ──
const pageLoader = document.getElementById('pageLoader');
const loaderRetryBtn = document.getElementById('loaderRetryBtn');
const loaderStartTime = Date.now();
const minimumLoaderMs = 2000;

if (sessionStorage.getItem('hasSeenLoader') && pageLoader) {
  pageLoader.style.display = 'none';
  pageLoader.classList.add('hidden');
  document.body.classList.remove('is-loading');
}

function handleLoader() {
  if (!pageLoader) return;
  
  if (sessionStorage.getItem('hasSeenLoader')) {
    pageLoader.style.display = 'none';
    pageLoader.classList.add('hidden');
    document.body.classList.remove('is-loading');
    return;
  }
  
  sessionStorage.setItem('hasSeenLoader', 'true');
  const elapsed = Date.now() - loaderStartTime;
  const waitFor = Math.max(0, minimumLoaderMs - elapsed);

  setTimeout(() => {
    pageLoader.classList.add('hidden');
    document.body.classList.remove('is-loading');
  }, waitFor);
}

if (loaderRetryBtn) {
  loaderRetryBtn.addEventListener('click', () => window.location.reload());
}

window.addEventListener('load', handleLoader);
window.addEventListener('error', () => {
  if (loaderRetryBtn) loaderRetryBtn.classList.add('show');
});
window.addEventListener('unhandledrejection', () => {
  if (loaderRetryBtn) loaderRetryBtn.classList.add('show');
});

// ── MENU DATA (from RFC PDF) ──
const menuItems = [
  // Tea
  { name:"Dum Tea", price:15, cat:"tea", type:"veg", img:"images/dum_tea.jpeg", desc:"Traditional strong dum tea." },
  { name:"Masala Tea", price:20, cat:"tea", type:"veg", img:"images/masala_tea.jpeg", desc:"Classic Indian masala tea." },
  { name:"Ginger Tea", price:20, cat:"tea", type:"veg", img:"images/ginger_tea.jpeg", desc:"Refreshing ginger infused tea." },
  { name:"Lemon Tea", price:20, cat:"tea", type:"veg", img:"images/lemon_tea.jpeg", desc:"Light and refreshing lemon tea." },
  { name:"Lemon Honey Tea", price:25, cat:"tea", type:"veg", img:"images/lemon_honey_tea.jpeg", desc:"Healthy honey lemon tea." },
  { name:"Elachi Tea", price:25, cat:"tea", type:"veg", img:"images/elachi_tea.jpeg", desc:"Cardamom flavored tea." },
  { name:"Badam Tea", price:25, cat:"tea", type:"veg", img:"images/badam_tea.jpeg", desc:"Creamy almond flavored tea." },
  { name:"Ginger Lemon Tea", price:25, cat:"tea", type:"veg", img:"images/lemon_gin_tea.jpeg", desc:"Tangy ginger lemon blend." },
  { name:"Ginger Lemon Honey Tea", price:30, cat:"tea", type:"veg", img:"images/lemon_gin_honey_tea.jpeg", desc:"Healthy tea with ginger, lemon and honey." },
  { name:"Chocolate Tea", price:30, cat:"tea", type:"veg", img:"images/choco_tea.jpeg", desc:"Unique chocolate flavored tea." },
  { name:"Green Tea", price:20, cat:"tea", type:"veg", img:"images/green_tea.jpeg", desc:"Classic healthy green tea." },

  // Milo
{ name:"Classic Hot Milo", price:30, cat:"milo", type:"veg", img:"images/classic_milo.jpeg", desc:"Classic hot milo drink served warm." },
{ name:"Hot Choco Milo", price:35, cat:"milo", type:"veg", img:"images/hot_milo.jpeg", desc:"Hot chocolate flavored milo drink." },
{ name:"Iced Milo Shake", price:79, cat:"milo", type:"veg", img:"images/iced_milo.jpeg", desc:"Refreshing chilled milo shake." },
{ name:"Choco Iced Milo Shake", price:99, cat:"milo", type:"veg", img:"images/choc_iced_milo.jpeg", desc:"Chocolate flavored iced milo shake." },
{ name:"Milo Banana Powder Shake", price:109, cat:"milo", type:"veg", img:"images/banana_shake.jpeg", desc:"Banana flavored creamy milo shake." },
{ name:"RFC Spl Kit Kat Milo Shake", price:119, cat:"milo", type:"veg", img:"images/kitkat_shake.jpeg", desc:"Signature KitKat milo shake loaded with chocolate." },

  // Coffee
  { name:"Filter Coffee", price:25, cat:"coffee", type:"veg", img:"images/filter_coffee.jpg", desc:"Traditional South Indian filter coffee." },
  { name:"Black Coffee", price:20, cat:"coffee", type:"veg", img:"images/black_coffee.jpeg", desc:"Strong and bold black coffee." },
  { name:"RFC Spl Chocolate Coffee", price:30, cat:"coffee", type:"veg", img:"images/choco_coffee.jpeg", desc:"Chocolate infused premium coffee." },
  { name:"Hazelnut Coffee", price:30, cat:"coffee", type:"veg", img:"images/hazelnut_coffee.jpg", desc:"Rich hazelnut flavored coffee." },
  { name:"Cold Coffee", price:79, cat:"coffee", type:"veg", img:"images/cold_coffe.jpeg", desc:"Refreshing chilled coffee." },
  { name:"Choco Cold Coffee", price:89, cat:"coffee", type:"veg", img:"images/cold_choco_coffee.jpeg", desc:"Chocolate flavored cold coffee." },

  // Milkshake
{ name:"Vanilla Milk Shake", price:89, cat:"milkshake", type:"veg", img:"images/vanilla_shake.jpeg", desc:"Classic creamy vanilla milkshake." },
{ name:"Chocolate Milk Shake", price:100, cat:"milkshake", type:"veg", img:"images/chocolate_milkshake.jpg", desc:"Rich chocolate flavored milkshake." },
{ name:"Butterscotch Milkshake", price:109, cat:"milkshake", type:"veg", img:"images/butterscotch.jpeg", desc:"Creamy butterscotch delight milkshake." },
{ name:"Cold Boost", price:79, cat:"milkshake", type:"veg", img:"images/cold_boost.jpeg", desc:"Refreshing chilled boost shake." },
{ name:"Cold Bornvita", price:79, cat:"milkshake", type:"veg", img:"images/clod_bornvita.jpeg", desc:"Cold bornvita flavored drink." },
{ name:"Choco Cold Boost", price:89, cat:"milkshake", type:"veg", img:"images/iced_boost.jpeg", desc:"Chocolate boost flavored cold shake." },
{ name:"Choco Cold Bornvita", price:89, cat:"milkshake", type:"veg", img:"images/iced_bornvita.jpeg", desc:"Chocolate bornvita chilled shake." },
{ name:"Oreo Shake", price:120, cat:"milkshake", type:"veg", img:"images/oreo_milkshake.jpg", desc:"Creamy Oreo cookie milkshake." },
{ name:"Hide & Seek Shake", price:120, cat:"milkshake", type:"veg", img:"images/hidenseek.jpeg", desc:"Crunchy Hide & Seek biscuit shake." },
{ name:"Kit Kat Shake", price:130, cat:"milkshake", type:"veg", img:"images/kitkat_shake.jpeg", desc:"Chocolate KitKat loaded milkshake." },
{ name:"Snickers Shake", price:140, cat:"milkshake", type:"veg", img:"images/snickers.jpeg", desc:"Rich Snickers chocolate milkshake." },
{ name:"Bourbon Shake", price:120, cat:"milkshake", type:"veg", img:"images/bournbon.jpeg", desc:"Chocolate bourbon biscuit milkshake." },
{ name:"Strawberry Shake", price:99, cat:"milkshake", type:"veg", img:"images/strawberry.jpeg", desc:"Fresh strawberry flavored milkshake." },
{ name:"Blueberry Shake", price:109, cat:"milkshake", type:"veg", img:"images/bluebeery.jpeg", desc:"Blueberry flavored creamy shake." },
{ name:"Gulkand Shake", price:109, cat:"milkshake", type:"veg", img:"images/gulkand.jpeg", desc:"Traditional rose gulkand milkshake." },
 
// The Regular
{ name:"Boost", price:25, cat:"regular", type:"veg", img:"images/cold_boost.jpeg", desc:"Classic hot boost drink." },
{ name:"Choco Boost", price:30, cat:"regular", type:"veg", img:"images/iced_boost.jpeg", desc:"Chocolate flavored boost drink." },
{ name:"Bornvita", price:25, cat:"regular", type:"veg", img:"images/bournbon.jpeg", desc:"Classic bornvita malt drink." },
{ name:"Choco Bornvita", price:30, cat:"regular", type:"veg", img:"images/clod_bornvita.jpeg", desc:"Chocolate flavored bornvita drink." },
{ name:"Horlicks", price:25, cat:"regular", type:"veg", img:"images/horlick.jpeg", desc:"Classic horlicks hot drink." },
{ name:"Choco Horlicks", price:30, cat:"regular", type:"veg", img:"images/choco_horlicks.jpeg", desc:"Chocolate flavored horlicks drink." },
{ name:"Hot Pepper Milk", price:20, cat:"regular", type:"veg", img:"images/pepper.jpeg", desc:"Traditional spicy pepper milk." },
{ name:"Hot Naatu Sakkarai Paal", price:25, cat:"regular", type:"veg", img:"images/brownsugar.jpeg", desc:"Country sugar flavored hot milk." },
{ name:"Plain Hot Milk", price:15, cat:"regular", type:"veg", img:"images/milk.jpeg", desc:"Simple fresh hot milk." },

// Premium Thickshake
{ name:"Snickers Madness Shake", price:149, cat:"thickshake", type:"veg", img:"images/snickers.jpeg", desc:"Loaded Snickers flavored premium thickshake." },
{ name:"Peanut Butter Power Shake", price:149, cat:"thickshake", type:"veg", img:"images/butterscotch.jpeg", desc:"Rich peanut butter protein thickshake." },
{ name:"Lotus Biscoff Freak Shake", price:149, cat:"thickshake", type:"veg", img:"images/lotus.jpeg", desc:"Creamy Lotus Biscoff loaded shake." },
{ name:"Kit-Kat Shake", price:149, cat:"thickshake", type:"veg", img:"images/kitkat_shake.jpeg", desc:"Chocolate KitKat premium thickshake." },
{ name:"Fantastic Fig & Honey Powershake", price:149, cat:"thickshake", type:"veg", img:"images/honey.jpeg", desc:"Healthy fig and honey power thickshake." },
{ name:"Royal Arabian Date & Nut Shake", price:149, cat:"thickshake", type:"veg", img:"images/datesnnut.jpeg", desc:"Arabian style date and nut shake." },
{ name:"Ferrero Rocher Fantasy Shake", price:149, cat:"thickshake", type:"veg", img:"images/iced_bornvita.jpeg", desc:"Ferrero Rocher inspired premium shake." },
{ name:"RFC Spl Brownie Blast Thickshake", price:149, cat:"thickshake", type:"veg", img:"images/brownieshake.jpeg", desc:"Brownie loaded signature thickshake." },
{ name:"Nutella Goodness Wonder Shake", price:149, cat:"thickshake", type:"veg", img:"images/bournbon.jpeg", desc:"Nutella overloaded creamy shake." },
{ name:"Choco Hazelnut Shake", price:149, cat:"thickshake", type:"veg", img:"images/chocolate_milkshake.jpg", desc:"Chocolate hazelnut flavored thickshake." },

  // Fresh Juice
{ name:"Maadhulai Chaaru", price:100, cat:"juice", type:"veg", img:"images/pomegrate.jpeg", desc:"Fresh pomegranate juice." },
{ name:"Apple Juice", price:100, cat:"juice", type:"veg", img:"images/apple.jpeg", desc:"Freshly prepared apple juice." },
{ name:"Saathukudi Chaaru", price:50, cat:"juice", type:"veg", img:"images/saathukudi.jpeg", desc:"Refreshing sweet lime juice." },
{ name:"Orange Juice", price:70, cat:"juice", type:"veg", img:"images/orange.jpeg", desc:"Fresh orange juice." },
{ name:"Lemon Juice", price:35, cat:"juice", type:"veg", img:"images/lemon.jpeg", desc:"Refreshing homemade lemon juice." },
{ name:"Lemon Soda", price:45, cat:"juice", type:"veg", img:"images/lemon_soda.jpeg", desc:"Chilled lemon soda with fizz." },

// Coolers
{ name:"Virgin Mojito", price:99, cat:"cooler", type:"veg", img:"images/lemon_cooler.jpeg", desc:"Refreshing mint and lime mojito." },
{ name:"Blue Mojito", price:99, cat:"cooler", type:"veg", img:"images/blue_cooler.jpeg", desc:"Cool blue citrus mojito." },
{ name:"Raspberry Cooler", price:99, cat:"cooler", type:"veg", img:"images/raspbeery.jpeg", desc:"Refreshing raspberry flavored cooler." },
{ name:"The Berry Punch", price:99, cat:"cooler", type:"veg", img:"images/beery_punch.jpeg", desc:"Mixed berry punch cooler." },
{ name:"Green Apple Cooler", price:99, cat:"cooler", type:"veg", img:"images/greenapple.jpeg", desc:"Sweet and tangy green apple cooler." },
{ name:"Blueberry Cooler", price:99, cat:"cooler", type:"veg", img:"images/bluebeery_cooler.jpeg", desc:"Refreshing blueberry cooler." },
{ name:"Cranberry Cooler", price:99, cat:"cooler", type:"veg", img:"images/cranbeery.jpeg", desc:"Chilled cranberry flavored cooler." },
{ name:"Strawberry Cooler", price:89, cat:"cooler", type:"veg", img:"images/strawberry_cooler.jpeg", desc:"Sweet strawberry cooler drink." },
{ name:"Orange Cooler", price:89, cat:"cooler", type:"veg", img:"images/orange_cooler.jpeg", desc:"Refreshing orange flavored cooler." },
{ name:"Mango Cooler", price:89, cat:"cooler", type:"veg", img:"images/mango.jpeg", desc:"Fresh mango cooler drink." },
{ name:"Watermelon Cooler", price:89, cat:"cooler", type:"veg", img:"images/watermelon_cooler.jpeg", desc:"Refreshing watermelon cooler." },
{ name:"Nannari Cooler", price:75, cat:"cooler", type:"veg", img:"images/nannari.jpeg", desc:"Traditional nannari cooler." },
{ name:"Lime Mint Cooler", price:69, cat:"cooler", type:"veg", img:"images/lemon_mint.jpeg", desc:"Fresh lime mint cooler." },
   
// Flavoured Milk
{ name:"Chilled Roja Paal (Rose Milk)", price:49, cat:"flavoured_milk", type:"veg", img:"images/rosemilk.jpeg", desc:"Refreshing chilled rose flavored milk." },
{ name:"Chilled Badam Paal (Badam Milk)", price:69, cat:"flavoured_milk", type:"veg", img:"images/iced_badam.jpeg", desc:"Chilled almond flavored milk drink." },
{ name:"Hot Badam Paal", price:30, cat:"flavoured_milk", type:"veg", img:"images/badam_milk.jpeg", desc:"Traditional hot badam milk." },
{ name:"Hot Chocolate", price:35, cat:"flavoured_milk", type:"veg", img:"images/hot_chocolate.jpeg", desc:"Rich and creamy hot chocolate." },
{ name:"Chilled Pista Paal", price:69, cat:"flavoured_milk", type:"veg", img:"images/pista.jpeg", desc:"Refreshing pista flavored chilled milk." },
{ name:"Buttermilk (Moor)", price:35, cat:"flavoured_milk", type:"veg", img:"images/curd.jpeg", desc:"Traditional refreshing buttermilk." },

  // Lassi
  { name:"Classic Matka Lassi", price:69, cat:"lassi", type:"veg", img:"images/lassi.jpeg", desc:"Traditional creamy lassi." },
  { name:"Rose Matka Lassi", price:79, cat:"lassi", type:"veg", img:"images/roselassi.jpeg", desc:"Rose flavored lassi." },
  { name:"Mango Matka Lassi", price:79, cat:"lassi", type:"veg", img:"images/mangolassi.jpeg", desc:"Sweet mango lassi." },
  { name:"Strawberry Matka Lassi", price:79, cat:"lassi", type:"veg", img:"images/strawbeerylassi.jpeg", desc:"Fresh strawberry lassi." },
  { name:"Pineapple Lassi", price:79, cat:"lassi", type:"veg", img:"images/pineapplelassi.jpeg", desc:"Pinaeapple flavored lassi." },
  { name:"Exotic Berry Lassi", price:99, cat:"lassi", type:"veg", img:"images/beerylassi.jpeg", desc:"Berry flavored lassi." },
  { name:"RFC SPL Kesar Pista Lassi", price:119, cat:"lassi", type:"veg", img:"images/pistalassi.jpeg", desc:"Kesar Pista flavored lassi." },
  { name:"RFC SPL Mixed Fruit & Nut Lassi", price:119, cat:"lassi", type:"veg", img:"images/frutilassi.jpeg", desc:"Mixed Fruit & Nut flavored lassi." },
  { name:"RFC SPL Chocolate Lassi", price:129, cat:"lassi", type:"veg", img:"images/chocolassi.jpeg", desc:"Chocolate flavored lassi." },
  { name:"RFC SPL Dry Fruit & Nut Lassi", price:119, cat:"lassi", type:"veg", img:"images/nutlassi.jpeg", desc:"Dry Fruit Mixed lassi." },
  
  // Rice Bowls
  { name:"Crispy Chicken Leg Rice Bowl", price:210, cat:"rice", type:"nonveg", img:"images/legrb.jpeg", desc:"Rice bowl with crispy chicken leg." },
  { name:"Chicken Popcorn Rice Bowl", price:239, cat:"rice", type:"nonveg", img:"images/popcornrb.jpeg", desc:"Loaded popcorn chicken rice bowl." },
  { name:"Korean Chilli Chicken Rice Bowl", price:255, cat:"rice", type:"nonveg", img:"images/korean_chicken_bowl.jpg", desc:"Spicy Korean chicken rice bowl." },
  { name:"Chilli Paneer Rice Bowl", price:199, cat:"rice", type:"veg", img:"images/pannerrb.jpeg", desc:"Paneer loaded rice bowl." },
  { name:"Jumbo Chicken Tikka Loaded Rice Bowl", price:299, cat:"rice", type:"nonveg", img:"images/tikkarb.jpeg", desc:"Rice bowl with loaded Chicken Tikka." },
  
 // Burger
{ name:"Aloo Tikki Burger", price:99, cat:"fastfood", type:"veg", img:"images/alooburger.jpeg", desc:"Classic crispy aloo tikki burger." },
{ name:"Classic Veg Burger", price:119, cat:"fastfood", type:"veg", img:"images/vegburger.jpeg", desc:"Fresh veggie burger with flavorful fillings." },
{ name:"Classic Paneer Burger", price:149, cat:"fastfood", type:"veg", img:"images/pannerburger.jpeg", desc:"Paneer loaded burger with creamy sauces." },
{ name:"Double Patty Veg Monster Burger", price:199, cat:"fastfood", type:"veg", img:"images/vegmonster.jpeg", desc:"Loaded double patty veg monster burger." },
{ name:"Classic Chicken Burger", price:135, cat:"fastfood", type:"nonveg", img:"images/chichen_burger.jpeg", desc:"Juicy crispy chicken burger." },
{ name:"RFC Spl Crispy Chicken Burger", price:155, cat:"fastfood", type:"nonveg", img:"images/rfc_spl_crispy_chicken_burger.jpeg", desc:"Signature crispy chicken burger." },
{ name:"Smokey BBQ Crispy Chicken & Cheese Burger", price:179, cat:"fastfood", type:"nonveg", img:"images/bbqburger.jpeg", desc:"Smokey BBQ crispy chicken burger loaded with cheese." },
{ name:"Double Patty Chicken Monster Burger", price:249, cat:"fastfood", type:"nonveg", img:"images/rfc_spl_crispy_chicken_burger.jpeg", desc:"Huge double patty chicken monster burger." },
{ name:"RFC Spl Crispy Chicken & Cheese Monster Burger", price:299, cat:"fastfood", type:"nonveg", img:"images/monstercheese.jpeg", desc:"Ultimate crispy chicken and cheese loaded monster burger." },

  // Snacks
{ name:"Veg Samosa (5pc Small)", price:60, cat:"snacks", type:"veg", img:"images/vegsamosa.jpeg", desc:"Crispy veg samosa served hot." },
{ name:"Veg Cutlet (4pc)", price:49, cat:"snacks", type:"veg", img:"images/vegcutlet.jpeg", desc:"Crunchy vegetable cutlets." },
{ name:"Veg Roll (2pc)", price:40, cat:"snacks", type:"veg", img:"images/vegroll.jpeg", desc:"Classic veg stuffed rolls." },
{ name:"Paneer Roll (2pc)", price:50, cat:"snacks", type:"veg", img:"images/paneerroll.jpeg", desc:"Paneer stuffed crispy rolls." },
{ name:"Veg Cheese Cutlet (5pc)", price:89, cat:"snacks", type:"veg", img:"images/cheesecutlet.jpeg", desc:"Cheesy vegetable cutlets." },
{ name:"Veg Lollipop (4pc)", price:50, cat:"snacks", type:"veg", img:"images/veglollipop.jpeg", desc:"Crunchy veg lollipop bites." },
{ name:"Aloo Tikki (2pc)", price:50, cat:"snacks", type:"veg", img:"images/alootikka.jpeg", desc:"Classic crispy aloo tikki." },
{ name:"Chicken Samosa (5pc Small)", price:70, cat:"snacks", type:"nonveg", img:"images/chickensamosa.jpeg", desc:"Chicken stuffed crispy samosa." },
{ name:"Chicken Cheese Balls (6pc)", price:109, cat:"snacks", type:"nonveg", img:"images/chickencheesball.jpeg", desc:"Cheesy chicken snack balls." },
{ name:"Chicken Roll (2pc)", price:50, cat:"snacks", type:"nonveg", img:"images/chickenroll.jpeg", desc:"Chicken stuffed crispy rolls." },
{ name:"Bread Butter Jam", price:50, cat:"snacks", type:"veg", img:"images/breadjam.jpeg", desc:"Classic bread butter jam snack." },
  
// Happy Munchies
  { name:"Classic French Fries", price:75, cat:"munchies", type:"veg", img:"images/frenchfry.jpeg", desc:"Crispy golden fries." },
  { name:"Peri-Peri French Fries", price:85, cat:"munchies", type:"veg", img:"images/perifrenchfry.jpeg", desc:"Spicy peri-peri fries." },
  { name:"Korean Chicken Loaded French Fries", price:149, cat:"munchies", type:"nonveg", img:"images/koreanfrenchfry.jpeg", desc:"Loaded Korean style fries." },
  { name:"Veg Nuggets", price:99, cat:"munchies", type:"veg", img:"images/vegnugget.jpeg", desc:"Crispy veg nuggets." },
  { name:"Chicken Nuggets", price:109, cat:"munchies", type:"nonveg", img:"images/chickennugget.jpeg", desc:"Crispy Chicken nuggets." },
  { name:"Chesse Corn Nuggets", price:109, cat:"munchies", type:"veg", img:"images/cornnugget.jpeg", desc:"Crispy Chesse Corn nuggets." },
  { name:"Crab Lollipop", price:260, cat:"munchies", type:"nonveg", img:"images/crablp.jpeg", desc:"Crispy Crab Lollipop." },
  { name:"Fish Fingers", price:290, cat:"munchies", type:"nonveg", img:"images/ff.jpeg", desc:"Sricy Fish Fingers." },
  

  // Crispy Chicken Solo
  { name:"Chicken Leg (2 pcs)", price:149, cat:"chicken_solo", type:"nonveg", img:"images/leg2.jpeg", desc:"Crispy fried chicken legs." },
  { name:"Chicken Fingers (6 pcs)", price:169, cat:"chicken_solo", type:"nonveg", img:"images/snacks_img3.jpg", desc:"Crunchy chicken fingers." },
  { name:"Chicken Strips (4 pcs)", price:149, cat:"chicken_solo", type:"nonveg", img:"images/strip.jpeg", desc:"Juicy chicken strips." },
  { name:"BBQ Chicken Wings (3 pcs)", price:169, cat:"chicken_solo", type:"nonveg", img:"images/bbqwing.jpeg", desc:"BBQ glazed wings." },
  { name:"Crispy Chicken Wings (3 pcs)", price:169, cat:"chicken_solo", type:"nonveg", img:"images/wing3.jpeg", desc:"Crispy chicken wings." },
  { name:"Crispy Chicken Wings (5 pcs)", price:229, cat:"chicken_solo", type:"nonveg", img:"images/wing5.jpeg", desc:"5 pieces crispy chicken wings." },
  { name:"BBQ Crispy Chicken Wings (5 pcs)", price:249, cat:"chicken_solo", type:"nonveg", img:"images/bbq.jpeg", desc:"BBQ crispy wings combo." },
  { name:"Crispy Chicken Popcorn", price:169, cat:"chicken_solo", type:"nonveg", img:"images/snacks_img2.jpg", desc:"Bite-sized crispy chicken popcorn." },
  { name:"Crispy Honey Chicken Wings", price:249, cat:"chicken_solo", type:"nonveg", img:"images/honeychicken.jpeg", desc:"Honey glazed chicken wings." },

  // Bucket Chicken
  { name:"Mini Bucket", price:279, cat:"bucket", type:"nonveg", img:"images/snacks_img4.jpg", desc:"8 pcs mix wings, popcorn and strips." },
  { name:"Half Bucket", price:389, cat:"bucket", type:"nonveg", img:"images/halfbucket.jpeg", desc:"12 pcs chicken combo bucket." },
  { name:"Full Bucket", price:649, cat:"bucket", type:"nonveg", img:"images/fullbucket.jpeg", desc:"20 pcs loaded chicken bucket." },
  { name:"BBQ Bucket", price:479, cat:"bucket", type:"nonveg", img:"images/bbq.jpeg", desc:"BBQ wings and popcorn bucket." },
  { name:"Wings Bucket", price:459, cat:"bucket", type:"nonveg", img:"images/wing.jpeg", desc:"Loaded crispy wings bucket." },

  // Maggi
  { name:"Classic Maggi", price:79, cat:"maggi", type:"veg", img:"images/maggi.jpeg", desc:"Classic favorite maggi." },
  { name:"Green Chilli Maggi", price:99, cat:"maggi", type:"veg", img:"images/greenmaggi.jpeg", desc:"Spicy green chilli maggi." },
  { name:"Veg Maggi", price:99, cat:"maggi", type:"veg", img:"images/vegmaggi.jpeg", desc:"Veg loaded maggi." },
  { name:"Peas Butter Garlic Maggi", price:119, cat:"maggi", type:"veg", img:"images/garlicmaggi.jpeg", desc:"Butter garlic peas maggi." },
  { name:"Cream & Onion Maggi", price:119, cat:"maggi", type:"veg", img:"images/cream_onion_maggi.jpeg", desc:"Creamy onion maggi." },
  { name:"Mexican Cheese Twist Maggi", price:119, cat:"maggi", type:"veg", img:"images/mexican_maggi.jpeg", desc:"Cheesy Mexican twist maggi." },
  { name:"RFC Spl Spicy Paneer Maggi", price:149, cat:"maggi", type:"veg", img:"images/pannermaggi.jpeg", desc:"Spicy paneer loaded maggi." },
  { name:"Peri-Peri Corn Cheese Maggi", price:149, cat:"maggi", type:"veg", img:"images/peri_peri_corn_maggi.jpeg", desc:"Corn cheese peri-peri maggi." },
  { name:"Egg Maggi", price:119, cat:"maggi", type:"nonveg", img:"images/egg_maggi.jpeg", desc:"Egg loaded maggi." },
  { name:"RFC Spl Spicy Chicken Maggi", price:149, cat:"maggi", type:"nonveg", img:"images/classic_maggie.jpg.jpeg", desc:"Spicy chicken maggi." },
  { name:"Peri-Peri Chicken Maggi", price:149, cat:"maggi", type:"nonveg", img:"images/perimaggie.jpeg", desc:"Peri-peri chicken maggi." },
  { name:"RFC Spl Crispy Chicken Maggi", price:159, cat:"maggi", type:"nonveg", img:"images/schickenmaggi.jpeg", desc:"Crispy chicken maggi." },
  { name:"Gooey Chilli Cheese Crispy Chicken Maggi", price:169, cat:"maggi", type:"nonveg", img:"images/cheesemaggie.jpeg", desc:"Cheesy crispy chicken maggi." },

  // Bread Omelette
{ name:"Classic Bread Omelette", price:69, cat:"bread_omelette", type:"veg", img:"images/classicbo.jpeg", desc:"Classic bread omelette with soft fluffy texture." },
{ name:"Cheese Bread Omelette", price:95, cat:"bread_omelette", type:"veg", img:"images/cheesebo.jpeg", desc:"Cheesy bread omelette loaded with melted cheese." },
{ name:"Schezwan Veg Bread Omelette", price:109, cat:"bread_omelette", type:"veg", img:"images/sch_veg_bo.jpeg", desc:"Spicy schezwan flavored veg bread omelette." },
{ name:"Peri-Peri Veg Cheese Bread Omelette", price:119, cat:"bread_omelette", type:"veg", img:"images/peri_peri_veg_cheese_bread_omelette.jpeg", desc:"Peri-peri spiced veg cheese bread omelette." },
{ name:"Classic Chicken Bread Omelette", price:129, cat:"bread_omelette", type:"nonveg", img:"images/chickenbo.jpeg", desc:"Chicken stuffed classic bread omelette." },
{ name:"Schezwan Chicken Bread Omelette", price:139, cat:"bread_omelette", type:"nonveg", img:"images/schezwan_chicken_bread_omelette.jpeg", desc:"Hot schezwan chicken bread omelette." },
{ name:"Peri-Peri Chicken Cheese Bread Omelette", price:149, cat:"bread_omelette", type:"nonveg", img:"images/peribo.jpeg", desc:"Loaded peri-peri chicken cheese bread omelette." },
{ name:"Tandoori Chicken Bread Omelette", price:149, cat:"bread_omelette", type:"nonveg", img:"images/tandoribo.jpeg", desc:"Tandoori flavored chicken bread omelette." },
  
// Sandwiches
{ name:"Desi Aloo Grilled Sandwich", price:99, cat:"sandwich", type:"veg", img:"images/desi_aloo_grilled_sandwich.jpeg", desc:"Grilled sandwich stuffed with spicy desi aloo filling." },
{ name:"RFC Classic Veg Sandwich", price:135, cat:"sandwich", type:"veg", img:"images/rfc_classic_veg_sandwich.jpeg", desc:"Classic veg sandwich loaded with fresh veggies." },
{ name:"Corn & Peas Mayo Sandwich", price:119, cat:"sandwich", type:"veg", img:"images/corn_peas_mayo_sandwich.jpeg", desc:"Creamy mayo sandwich with corn and peas filling." },
{ name:"RFC Classic Paneer Sandwich", price:145, cat:"sandwich", type:"veg", img:"images/rfc_classic_paneer_sandwich.jpeg", desc:"Paneer loaded grilled sandwich." },
{ name:"Tandoori Paneer Sandwich", price:149, cat:"sandwich", type:"veg", img:"images/tandoori_paneer_sandwich.jpeg", desc:"Tandoori flavored paneer grilled sandwich." },
{ name:"Veg Club Sandwich", price:169, cat:"sandwich", type:"veg", img:"images/veg_club_sandwich.jpeg", desc:"Triple layered veg club sandwich." },
{ name:"Egg and Cheese Melt Sandwich", price:149, cat:"sandwich", type:"nonveg", img:"images/egg_cheese_melt_sandwich.jpeg", desc:"Cheesy egg melt grilled sandwich." },
{ name:"RFC Classic Chicken Sandwich", price:159, cat:"sandwich", type:"nonveg", img:"images/rfc_classic_chicken_sandwich.jpeg", desc:"Classic chicken sandwich with juicy filling." },
{ name:"RFC Spl Crispy Chicken Sandwich", price:159, cat:"sandwich", type:"nonveg", img:"images/rfc_spl_crispy_chicken_sandwich.jpeg", desc:"Signature crispy chicken sandwich." },
{ name:"Tandoori Chicken Sandwich", price:159, cat:"sandwich", type:"nonveg", img:"images/tandoori_chicken_sandwich.jpeg", desc:"Tandoori spiced chicken sandwich." },
{ name:"Smokey BBQ Chicken Sandwich", price:159, cat:"sandwich", type:"nonveg", img:"images/smokey_bbq_chicken_sandwich.jpeg", desc:"Smokey BBQ flavored grilled chicken sandwich." },
{ name:"Chicken & Cheese Club Sandwich", price:199, cat:"sandwich", type:"nonveg", img:"images/chicken_cheese_club_sandwich.jpeg", desc:"Loaded chicken and cheese triple layered club sandwich." },


  // Pizza
{ name:"Veggie Delight Pizza", price:149, cat:"pizza", type:"veg", img:"images/vegpizza.jpeg", desc:"Loaded veggie pizza with fresh toppings." },
{ name:"Paneer Tikka Pizza", price:179, cat:"pizza", type:"veg", img:"images/paneerpizza.jpeg", desc:"Spicy paneer tikka pizza with cheesy goodness." },
{ name:"Crispy Chicken Pizza", price:229, cat:"pizza", type:"nonveg", img:"images/chichen_pizza.jpeg", desc:"Crispy chicken pizza topped with melted cheese." },
{ name:"Peri-Peri Chicken Loaded Pizza", price:249, cat:"pizza", type:"nonveg", img:"images/peripizza.jpeg", desc:"Loaded peri-peri chicken pizza with extra cheese." },
{ name:"Chicken Pepperoni Pizza", price:279, cat:"pizza", type:"nonveg", img:"images/pepperonipizza.jpeg", desc:"Pepperoni style chicken pizza with rich flavors." },
{ name:"Jumbo Chicken Party Pizza", price:319, cat:"pizza", type:"nonveg", img:"images/jumbopizza.jpeg", desc:"Large party pizza loaded with juicy chicken toppings." },
{ name:"Chocolate Loaded Pizza", price:350, cat:"pizza", type:"nonveg", img:"images/chocolatepizza.jpeg", desc:"Unique dessert-style chocolate loaded pizza." },
  
// Pasta
{ name:"Classic Veg White Sauce Pasta", price:129, cat:"pasta", type:"veg", img:"images/whitevegpasta.jpeg", desc:"Creamy white sauce pasta loaded with fresh vegetables." },
{ name:"Chicken White Sauce Pasta", price:159, cat:"pasta", type:"nonveg", img:"images/whitepasta.jpeg", desc:"Rich and creamy white sauce pasta with tender chicken." },
{ name:"Red Hot Veg Pasta", price:129, cat:"pasta", type:"veg", img:"images/redvegpasta.jpeg", desc:"Spicy red sauce pasta with mixed vegetables." },
{ name:"Red Hot Chicken Pasta", price:199, cat:"pasta", type:"nonveg", img:"images/redchickenpasta.jpeg", desc:"Hot and spicy chicken pasta in red sauce." },
{ name:"Korean Chilli Veg Pasta", price:149, cat:"pasta", type:"veg", img:"images/koreanvegpasta.jpeg", desc:"Korean style spicy veg pasta." },
{ name:"Korean Chilli Chicken Pasta", price:219, cat:"pasta", type:"nonveg", img:"images/koreanchickenpasta.jpeg", desc:"Spicy Korean chilli chicken pasta loaded with flavors." },
  
// Dessert
{ name:"Double Chocolate Brownie", price:89, cat:"dessert", type:"veg", img:"images/browniee.jpeg", desc:"Rich and soft double chocolate brownie." },
{ name:"Double Chocolate Brownie with Ice Cream", price:149, cat:"dessert", type:"veg", img:"images/browniewithicecream.jpeg", desc:"Warm brownie served with creamy vanilla ice cream." },
{ name:"Sizzling Brownie Hot Plate", price:169, cat:"dessert", type:"veg", img:"images/sizzling_brownie.jpg", desc:"Hot sizzling brownie topped with ice cream and chocolate sauce." },
{ name:"Gulab Jamun with Ice Cream", price:125, cat:"dessert", type:"veg", img:"images/jamunwithice.jpeg", desc:"Soft gulab jamun served with chilled ice cream." },
{ name:"Hot Halwa with Ice Cream", price:139, cat:"dessert", type:"veg", img:"images/halwawithicecream.jpeg", desc:"Traditional hot halwa paired with creamy ice cream." },
{ name:"Chocolate Sandwich", price:70, cat:"dessert", type:"veg", img:"images/chocosandwitch.jpeg", desc:"Chocolate filled sweet sandwich delight." },
 
// The Waffles
{ name:"The Classic Vanilla Choco Waffle", price:135, cat:"waffle", type:"veg", img:"images/chocovanillawaffle.jpeg", desc:"Classic waffle served with vanilla and chocolate flavors." },
{ name:"Belgium Dark Chocolate Waffle", price:149, cat:"waffle", type:"veg", img:"images/belgiumwaffel.jpeg", desc:"Rich Belgian dark chocolate waffle." },
{ name:"KitKat Happiness Waffle", price:159, cat:"waffle", type:"veg", img:"images/kitkatwaffel.jpeg", desc:"Crunchy KitKat loaded chocolate waffle." },
{ name:"Healthy Man's Peanut Butter Waffle", price:159, cat:"waffle", type:"veg", img:"images/peanutwaffle.jpeg", desc:"Peanut butter waffle with a rich creamy texture." },
{ name:"The Nutty Dark Chocolate Symphony", price:169, cat:"waffle", type:"veg", img:"images/nutty_dark_chocolate_waffle.jpeg", desc:"Nutty dark chocolate overloaded waffle delight." },
{ name:"Ferrero Rocher Exotica Waffle", price:169, cat:"waffle", type:"veg", img:"images/ferrerowaffel.jpeg", desc:"Premium Ferrero Rocher inspired waffle." },
{ name:"Warm Hazelnut Waffle", price:169, cat:"waffle", type:"veg", img:"images/warm_hazelnut_waffle.jpeg", desc:"Warm waffle infused with rich hazelnut flavor." },
{ name:"We Love Ice Cream Waffle", price:169, cat:"waffle", type:"veg", img:"images/iceceamwaffle.jpeg", desc:"Loaded waffle topped with delicious ice cream." },
{ name:"Red Velvet Waffle", price:169, cat:"waffle", type:"veg", img:"images/redvelvetwaffle.jpeg", desc:"Soft red velvet waffle with creamy topping." },
  
// Falooda
{ name:"Roja Falooda", price:135, cat:"falooda", type:"veg", img:"images/rose_falooda.jpeg", desc:"Classic rose flavored falooda." },
{ name:"Mango Falooda", price:149, cat:"falooda", type:"veg", img:"images/mango_falooda.jpeg", desc:"Refreshing mango falooda loaded with flavors." },
{ name:"Mixed Fresh Fruit Falooda", price:149, cat:"falooda", type:"veg", img:"images/fruit_falooda.jpg", desc:"Falooda topped with fresh mixed fruits." },
{ name:"Chocolate Falooda", price:149, cat:"falooda", type:"veg", img:"images/choco_falooda.jpeg", desc:"Chocolate flavored creamy falooda." },
{ name:"RFC Spl Brownie Falooda", price:159, cat:"falooda", type:"veg", img:"images/brownie_falooda.jpeg", desc:"Special brownie loaded falooda." },
{ name:"RFC Spl Arabian Date & Nut Falooda", price:159, cat:"falooda", type:"veg", img:"images/datenut_falooda.jpeg", desc:"Arabian style date and nut falooda." },
  
// Frankie Roll Menus
{ name:"Paneer Tikka Frankie", price:109, cat:"frankie", type:"veg", img:"images/pannerfrankie.jpeg", desc:"Soft frankie loaded with spicy paneer tikka." },
{ name:"Cheesy Veg Frankie", price:99, cat:"frankie", type:"veg", img:"images/vegfrankie.jpeg", desc:"Cheesy vegetable stuffed frankie roll." },
{ name:"Spicy Aloo Masala Frankie", price:79, cat:"frankie", type:"veg", img:"images/aloofrankie.jpeg", desc:"Spicy potato masala wrapped in a soft frankie." },
{ name:"Corn & Cheese Frankie", price:89, cat:"frankie", type:"veg", img:"images/cheesefrankie.jpeg", desc:"Creamy cheese and sweet corn frankie." },
{ name:"Schezwan Veg Frankie", price:89, cat:"frankie", type:"veg", img:"images/schezwan_veg_frankie.jpeg", desc:"Spicy schezwan style veg frankie." },
{ name:"Classic Egg Frankie", price:79, cat:"frankie", type:"nonveg", img:"images/ceggfrankie.jpeg", desc:"Classic egg stuffed frankie roll." },
{ name:"Egg & Cheese Frankie", price:89, cat:"frankie", type:"nonveg", img:"images/eggcheesefrankie.jpeg", desc:"Egg and cheese loaded frankie." },
{ name:"Spicy Bhurji Frankie", price:89, cat:"frankie", type:"nonveg", img:"images/bhurji.jpeg", desc:"Spicy egg bhurji wrapped in a frankie." },
{ name:"Chicken Tikka Frankie", price:119, cat:"frankie", type:"nonveg", img:"images/chicken_tikka_frankie.jpeg", desc:"Chicken tikka stuffed flavorful frankie." },
{ name:"Pepper Chicken Frankie", price:119, cat:"frankie", type:"nonveg", img:"images/pepperfrankie.jpeg", desc:"Pepper chicken loaded spicy frankie." },
{ name:"Schezwan Chicken Frankie", price:129, cat:"frankie", type:"nonveg", img:"images/schezwan_chicken_frankie.jpeg", desc:"Hot schezwan chicken frankie roll." },
{ name:"RFC Spl Crispy Chicken Frankie", price:139, cat:"frankie", type:"nonveg", img:"images/crispy_chicken_frankie.jpeg", desc:"Crispy chicken loaded signature frankie." },

// Momos
{ name:"Veg Momos", price:119, cat:"momos", type:"veg", img:"images/veg_momo.jpeg", desc:"Steamed veg momos served with spicy dip." },
{ name:"Schezwan Veg Momos", price:129, cat:"momos", type:"veg", img:"images/spicy_momo.jpeg", desc:"Spicy schezwan flavored veg momos." },
{ name:"Paneer Momos", price:139, cat:"momos", type:"veg", img:"images/paneermomo.jpeg", desc:"Soft momos stuffed with paneer filling." },
{ name:"Paneer Schezwan Momos", price:149, cat:"momos", type:"veg", img:"images/spicy_pannermomo.jpeg", desc:"Paneer momos tossed in schezwan flavor." },
{ name:"Corn & Cheese Momos", price:159, cat:"momos", type:"veg", img:"images/cheese_momo.jpeg", desc:"Cheesy corn stuffed delicious momos." },
{ name:"Mushroom Momos", price:129, cat:"momos", type:"veg", img:"images/mushroom_momo.jpeg", desc:"Juicy mushroom stuffed momos." },
{ name:"Chicken Momos", price:129, cat:"momos", type:"nonveg", img:"images/chicken_momos.jpeg", desc:"Classic chicken stuffed steamed momos." },
{ name:"Chicken & Cheese Momos", price:139, cat:"momos", type:"nonveg", img:"images/chicken_cheese_momos.jpeg", desc:"Chicken momos loaded with cheese filling." },
{ name:"Chicken Peri Peri Momos", price:139, cat:"momos", type:"nonveg", img:"images/peri_momo.jpeg", desc:"Peri peri flavored spicy chicken momos." },
{ name:"Chicken Schezwan Momos", price:139, cat:"momos", type:"nonveg", img:"images/spicy_chicken_momos.jpeg", desc:"Schezwan style spicy chicken momos." },
{ name:"Chicken Tikka Momos", price:149, cat:"momos", type:"nonveg", img:"images/tikka_momo.jpeg", desc:"Chicken tikka stuffed flavorful momos." }
];

function buildMenu(cat, isFeatured = false) {
  const grid = document.getElementById('menuGrid');
  if(!grid) return;
  let items = cat === 'all' ? menuItems : menuItems.filter(i=>i.cat===cat);
  if(isFeatured) {
    items = items.slice(0, 4);
  }
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
          <button class="order-item-btn" onclick="addToPlate('${item.name.replace(/'/g, "&apos;")}', ${item.price}, '${item.img}', event)">Add to My Plate </button>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
  
  // Re-attach 3D tilt effect for new cards
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
}

function filterMenu(cat, btn, isFeatured = false) {
  const tabs = btn.parentElement.querySelectorAll('.tab');
  tabs.forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('menuGrid');
  if(!grid) return;
  grid.style.opacity='0'; grid.style.transform='translateY(16px)';
  setTimeout(()=>{ buildMenu(cat, isFeatured); grid.style.transition='all 0.4s'; grid.style.opacity='1'; grid.style.transform='translateY(0)'; },200);
}

document.addEventListener('DOMContentLoaded', () => {
  const isFullMenu = window.location.pathname.includes('full-menu.html');
  if (isFullMenu) {
    buildMenu('all', false);
  } else {
    buildMenu('tea', true);
  }
});

// ── GALLERY ──
const galleryImgs = menuItems.map(item => item.img);
const track = document.getElementById('galleryTrack');
if (track) {
  const all = [...galleryImgs,...galleryImgs];
  track.innerHTML = all.map(img=>`<div class="gallery-card" style="background-image: url('${img}'); background-size: cover; background-position: center;"></div>`).join('');
}

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
  const currentTheme = html.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
}

// ── 3D CARD TILT (initial setup, also re-attached in buildMenu) ──
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

// ── CART (MY PLATE) SYSTEM ──
let cart = JSON.parse(localStorage.getItem('rfc_cart')) || [];

function saveCart() {
  localStorage.setItem('rfc_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToPlate(name, price, img, event) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price: Number(price), img, quantity: 1 });
  }
  saveCart();
  
  if(event && event.target) {
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Added! ✓';
    btn.style.background = 'var(--btn-primary-hover)';
    btn.style.color = 'var(--btn-primary-text)';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
  }
}

function updateCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-badge-count').forEach(badge => {
    badge.innerText = count;
    if (count > 0) {
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  });
}

// Call on load
document.addEventListener('DOMContentLoaded', updateCartBadge);

