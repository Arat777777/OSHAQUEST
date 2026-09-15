// ==========================================
// Base de Datos Centralizada de Productos
// ==========================================
const productsDB = {
  // --- ELITE TRAINER BOXES ---
  "etb-pitch-black": {
    nombre: "Elite Trainer Box Pitch Black (INGLES)",
    precio: "$1400 MXN",
    imagen: "ETB_PITCHBLACK.jpg",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["Elite Trainer Box"],
    incluye: [
      "9 sobres de mejora de la expansión Pitch Black",
      "1 carta de promoción de ilustración completa foil",
      "65 fundas para cartas con diseño exclusivo",
      "45 cartas de Energía del TCG Pokémon",
      "Guía para jugadores de la expansión",
      "Dados para contar daño y marcadores de condición",
      "Caja de coleccionista con 4 divisores"
    ]
  },
  "etb-30-aniversario": {
    nombre: "Elite Trainer Box 30th Aniversario (INGLES)",
    precio: "$2000 MXN",
    imagen: "ETB_30.jpg",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["30.º Aniversario", "Elite Trainer Box"],
    incluye: [
      "10 sobres de mejora de la expansión Aniversario",
      "1 carta promo especial con sello conmemorativo",
      "65 fundas exclusivas de 30 Aniversario",
      "Accesorios para juego de torneo"
    ]
  },
  "etb-perfect-order": {
    nombre: "Elite Trainer Box Perfect Order (INGLES)",
    precio: "$1200 MXN",
    imagen: "ETB_PERFECT.jpg",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["Elite Trainer Box"],
    incluye: [
      "9 sobres de mejora de Perfect Order",
      "1 carta de promoción foil",
      "65 fundas para cartas",
      "45 cartas de Energía"
    ]
  },
  "etb-ascended-heroes": {
    nombre: "Elite Trainer Box Ascended Heroes (INGLES)",
    precio: "$1400 MXN",
    imagen: "ETB_ASCENDED.jpg",
    disponible: false,
    idioma: "INGLÉS",
    categorias: ["Elite Trainer Box"],
    incluye: [
      "9 sobres de mejora de Ascended Heroes",
      "Accesorios de coleccionista"
    ]
  },

  // --- COLECCIONES ESPECIALES Y PRODUCTOS 30TH ---
  "tru-charizard-upc": {
    nombre: "Pokémon Mega Charizard X EX Ultra Premium Collection (Español)",
    precio: "$2289 MXN",
    imagen: "CHARIZARD_UPC.png",
    disponible: true,
    idioma: "ESPAÑOL",
    categorias: ["Colecciones Especiales"],
    incluye: [
      "16 sobres de mejora de Pokémon TCG",
      "1 carta de promoción de ilustración especial de Mega Charizard X EX",
      "1 tapete de juego exclusivo",
      "1 caja para mazo y accesorios metálicos de juego",
      "1 tarjeta con código para Pokémon TCG Live"
    ]
  },
  "tru-lugia-collection": {
    nombre: "Pokémon Lugia EX Special Collection (Español)",
    precio: "$579 MXN",
    imagen: "LUGIA_CE.png",
    disponible: true,
    idioma: "ESPAÑOL",
    categorias: ["Colecciones Especiales"],
    incluye: [
      "4 sobres de mejora de Pokémon TCG",
      "1 carta de promoción foil de Lugia EX",
      "1 carta de tamaño gigante oversize de Lugia EX",
      "1 tarjeta con código para Pokémon TCG Live"
    ]
  },
  "Ditto-Coleccion": {
    nombre: "Pokémon TCG: 30TH Celebration - Ditto Premium Collection",
    precio: "$1000 MXN",
    imagen: "especial_ditto.png",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["30.º Aniversario"],
    incluye: [
      "La Colección Prémium Ditto de la celebración del 30.º aniversario de JCC Pokémon incluye:",
      "1 carta de promoción de Ditto",
      "1 expositor de cartas de acrílico",
      "8 paquetes de mejora de la celebración del 30.º aniversario de JCC Pokémon",
      "1 carta con código para JCC Pokémon Live"
    ]
  },
  "Binder-30": {
    nombre: "Pokémon TCG: 30TH Celebration - Binder Collection",
    precio: "$1000 MXN",
    imagen: "Binder_30.png",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["30.º Aniversario"],
    incluye: [
      "La colección de álbumes Pokémon TCG: 30th Celebration incluye:",
      "Un álbum temático con bolsillos para 9 cartas",
      "5 paquetes de mejora de Pokémon TCG: 30th Celebration"
    ]
  },
  "Mewtwo-Coleccion": {
    nombre: "Pokémon TCG: 30TH Celebration Figure Collection—Mewtwo",
    precio: "$1000 MXN",
    imagen: "mewtwo_especial.png",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["30.º Aniversario"],
    incluye: [
      "Each Pokémon TCG: 30th Celebration Figure Collection includes",
      "1 foil promo card featuring Mewtwo",
      "1 oversize foil card featuring Mewtwo",
      "1 figure featuring Mewtwo",
      "5 Pokémon TCG: 30th Celebration booster packs"
    ]
  },

  // --- LATAS Y BLISTERS ---
  "tru-mega-moonlit-tin": {
    nombre: "Pokémon Mega Moonlit Tin Chaos Rising TCG (Español)",
    precio: "$499 MXN",
    imagen: "CLEFA.png",
    disponible: true,
    idioma: "ESPAÑOL",
    categorias: ["Latas y Blisters"],
    incluye: [
      "4 sobres de mejora de la expansión Chaos Rising",
      "1 carta de promoción foil especial",
      "1 lata de colección resistente para guardar cartas"
    ]
  },
  "tru-charizard-deck-tin": {
    nombre: "Pokémon Lata Mega-Charizard TCG Mega Battle Deck (Español)",
    precio: "$419 MXN",
    imagen: "LATA_CHARI.png",
    disponible: true,
    idioma: "ESPAÑOL",
    categorias: ["Latas y Blisters"],
    incluye: [
      "1 mazo de batalla listo para jugar",
      "1 lata metálica con diseño de Mega-Charizard",
      "Accesorios y contadores de daño"
    ]
  },
  "tru-pokeball-tin": {
    nombre: "Pokémon TCG: Poké Ball Tin Fall",
    precio: "$289 MXN",
    imagen: "3PACK.png",
    disponible: true,
    idioma: "ESPAÑOL",
    categorias: ["Latas y Blisters"],
    incluye: [
      "3 sobres de mejora de Pokémon TCG",
      "2 hojas de calcomanías/stickers de Pokémon",
      "1 lata de colección en forma de Poké Ball"
    ]
  },
  "tru-3pack-pitch-black": {
    nombre: "Pokémon TCG: 3-Pack Blister Pitch Black",
    precio: "$259 MXN",
    imagen: "PB_BLISTER_ESP.png",
    disponible: true,
    idioma: "ESPAÑOL",
    categorias: ["Latas y Blisters"],
    incluye: [
      "3 sobres de mejora de la expansión Pitch Black",
      "1 carta de promoción foil de regalo",
      "1 moneda metálica coleccionable"
    ]
  },

  // --- BOOSTER BUNDLES ---
  "bundle-pitch-black": {
    nombre: "Pokémon TCG: Mega Evolution Pitch Black Booster Bundle",
    precio: "$629 MXN",
    imagen: "BB_PITCH.jpg",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["Booster Bundles"],
    incluye: [
      "6 sobres de mejora de la expansión Mega Evolution: Pitch Black",
      "10 cartas por sobre con 1 carta de Energía básica o marcador",
      "1 código para Pokémon TCG Live"
    ]
  },
  "bundle-chaos-rising": {
    nombre: "Pokémon TCG: Mega Evolution Chaos Rising Booster Bundle",
    precio: "$710 MXN",
    imagen: "BB_CHAOS.png",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["Booster Bundles"],
    incluye: [
      "6 sobres de mejora de la expansión Mega Evolution: Chaos Rising",
      "1 código para Pokémon TCG Live"
    ]
  },
  "bundle-perfect-order": {
    nombre: "Pokémon TCG: Mega Evolution Perfect Order Booster Bundle",
    precio: "$589 MXN",
    imagen: "BB_PP.png",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["Booster Bundles"],
    incluye: [
      "6 sobres de mejora de la expansión Mega Evolution: Perfect Order",
      "1 código para Pokémon TCG Live"
    ]
  },
  "bundle-30": {
    nombre: "Pokémon 30TH Celebration Booster Bundle",
    precio: "$1000 MXN",
    imagen: "BUNDLE_30.png",
    disponible: true,
    idioma: "INGLÉS",
    categorias: ["30.º Aniversario", "Booster Bundles"],
    incluye: [
      "Amplía tu colección con este lote de sobres que contiene seis paquetes de mejora de Pokémon TCG:", 
      "¡Celebración del 30.º Aniversario!"
    ]
  },
  "bundle-ascended-heroes": {
    nombre: "Pokémon TCG: Mega Evolution Ascended Heroes Booster Bundle",
    precio: "$1789 MXN",
    imagen: "BB_AH.png",
    disponible: false,
    idioma: "INGLÉS",
    categorias: ["Booster Bundles"],
    incluye: [
      "6 sobres de mejora de la expansión Mega Evolution: Ascended Heroes",
      "1 código para Pokémon TCG Live"
    ]
  }
};

// Mapa para traducir parámetros URL a nombres exactos de categoría
const categoryMap = {
  "aniversario": "30.º Aniversario",
  "etb": "Elite Trainer Box",
  "boosters": "Booster Bundles",
  "colecciones": "Colecciones Especiales",
  "latas-blisters": "Latas y Blisters"
};

// Lista de IDs de las pestañas de navegación
const NAV_IDS = ['nav-aniversario', 'nav-etb', 'nav-boosters', 'nav-colecciones', 'nav-latas-blisters'];

// ==========================================
// 1. CARGA DETALLADA DE PRODUCTO (etb.html)
// ==========================================
function loadProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId || !productsDB[productId]) {
    window.location.href = "index.html";
    return;
  }

  const product = productsDB[productId];

  document.getElementById('page-title').innerText = `${product.nombre} - OshaQuest TCG`;
  document.getElementById('product-title').innerText = product.nombre;
  document.getElementById('product-price').innerText = product.precio;
  document.getElementById('product-image').src = product.imagen;
  document.getElementById('product-image').alt = product.nombre;
  document.getElementById('product-language').innerText = `IDIOMA: ${product.idioma}`;

  const statusEl = document.getElementById('product-status');
  if (product.disponible) {
    statusEl.innerText = "DISPONIBILIDAD: DISPONIBLE";
    statusEl.className = "text-xs font-extrabold px-3 py-1 rounded-full uppercase bg-emerald-100 text-emerald-700";
  } else {
    statusEl.innerText = "DISPONIBILIDAD: AGOTADO";
    statusEl.className = "text-xs font-extrabold px-3 py-1 rounded-full uppercase bg-rose-100 text-rose-700";
  }

  const mainCategory = product.categorias[0];
  let categoryKey = "aniversario";
  for (const [key, name] of Object.entries(categoryMap)) {
    if (name.toLowerCase() === mainCategory.toLowerCase()) {
      categoryKey = key;
      break;
    }
  }

  const breadcrumbCat = document.getElementById('breadcrumb-category');
  const breadcrumbTitle = document.getElementById('breadcrumb-title');

  if (breadcrumbCat) {
    breadcrumbCat.innerText = mainCategory;
    breadcrumbCat.href = `catalog.html?category=${categoryKey}`;
  }
  if (breadcrumbTitle) {
    breadcrumbTitle.innerText = product.nombre;
  }

  NAV_IDS.forEach(id => {
    const navItem = document.getElementById(id);
    if (navItem) navItem.className = "hover:text-oshawott-blue transition";
  });

  const activeNav = document.getElementById(`nav-${categoryKey}`);
  if (activeNav) {
    activeNav.className = "text-oshawott-blue font-extrabold hover:text-oshawott-darkBlue transition";
  }

  const includesList = document.getElementById('product-includes');
  includesList.innerHTML = "";
  if (product.incluye && product.incluye.length > 0) {
    product.incluye.forEach(item => {
      const li = document.createElement('li');
      li.innerText = item;
      includesList.appendChild(li);
    });
  }
}

// ==========================================
// 2. CARGA DEL CATÁLOGO UNIFICADO (catalog.html)
// ==========================================
function loadCatalogPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get('category') || "aniversario"; 
  const targetCategory = categoryMap[categoryKey] || "30.º Aniversario";

  const pageTitle = document.getElementById('page-title');
  const catalogTitle = document.getElementById('catalog-title');
  const breadcrumbCat = document.getElementById('breadcrumb-category');

  if (pageTitle) pageTitle.innerText = `${targetCategory} - OshaQuest TCG`;
  if (catalogTitle) catalogTitle.innerText = targetCategory;
  if (breadcrumbCat) breadcrumbCat.innerText = targetCategory;

  NAV_IDS.forEach(id => {
    const navItem = document.getElementById(id);
    if (navItem) navItem.className = "hover:text-oshawott-blue transition";
  });

  const activeNav = document.getElementById(`nav-${categoryKey}`);
  if (activeNav) {
    activeNav.className = "text-oshawott-blue font-extrabold hover:text-oshawott-darkBlue transition";
  }

  renderCategoryProducts(targetCategory);
}

// ==========================================
// 3. RENDERIZADO DEL GRID DE PRODUCTOS
// ==========================================
function renderCategoryProducts(categoryName) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const categoryProducts = Object.entries(productsDB).filter(
    ([id, prod]) => Array.isArray(prod.categorias) && prod.categorias.includes(categoryName)
  );

  if (categoryProducts.length === 0) {
    container.innerHTML = `<p class="col-span-full text-center text-slate-500 py-10 font-bold">No hay productos disponibles en esta categoría.</p>`;
    return;
  }

  container.innerHTML = categoryProducts.map(([id, prod]) => `
    <div class="product-card bg-white rounded-2xl border-2 ${prod.disponible ? 'border-oshawott-blue' : 'border-slate-300'} p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
         data-name="${prod.nombre.toLowerCase()}"
         data-language="${prod.idioma}">
      
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-extrabold px-2 py-0.5 rounded uppercase ${prod.disponible ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'}">
            ${prod.disponible ? 'Disponible' : 'Agotado'}
          </span>
          <span class="text-[10px] font-bold text-slate-400 uppercase">${prod.idioma}</span>
        </div>

        <div class="my-4 h-48 flex items-center justify-center p-2 bg-slate-50 rounded-xl ${!prod.disponible ? 'grayscale' : ''}">
          <img src="${prod.imagen}" alt="${prod.nombre}" class="max-h-full object-contain hover:scale-105 transition-transform" />
        </div>

        <h3 class="font-extrabold text-slate-800 text-center text-sm leading-tight mt-2 line-clamp-2">
          ${prod.nombre}
        </h3>
      </div>

      <div class="mt-6 text-center">
        <span class="text-2xl font-black ${prod.disponible ? 'text-oshawott-blue' : 'text-slate-400'} block mb-3">${prod.precio}</span>
        <a href="etb.html?id=${id}" class="block w-full ${prod.disponible ? 'bg-oshawott-blue hover:bg-oshawott-darkBlue text-white' : 'bg-slate-200 text-slate-500 cursor-not-allowed'} font-bold py-2 rounded-xl text-xs transition shadow-md">
          ${prod.disponible ? 'VER PRODUCTO' : 'SIN STOCK'}
        </a>
      </div>

    </div>
  `).join('');
}

// ==========================================
// 4. FILTRADO EN TIEMPO REAL (Buscador e Idioma)
// ==========================================
function filterProducts() {
  const searchVal = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
  const langVal = document.getElementById('lang-filter')?.value || 'ALL';
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const cardName = card.getAttribute('data-name') || '';
    const cardLang = card.getAttribute('data-language') || '';

    const matchesSearch = cardName.includes(searchVal);
    const matchesLang = (langVal === 'ALL') || (cardLang === langVal);

    if (matchesSearch && matchesLang) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ==========================================
// 5. ACCIONES DE CANTIDAD (etb.html)
// ==========================================
function incrementQuantity() {
  const input = document.getElementById('product-qty');
  if (input) input.value = parseInt(input.value) + 1;
}

function decrementQuantity() {
  const input = document.getElementById('product-qty');
  if (input && parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

// ==========================================
// 6. PRODUCTOS DESTACADOS ALEATORIOS (index.html)
// ==========================================
function renderFeaturedProducts() {
  const container = document.getElementById("featured-products-grid");
  if (!container || typeof productsDB === "undefined") return;

  const allProducts = Object.entries(productsDB).map(([id, item]) => ({
    id,
    ...item
  }));

  for (let i = allProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
  }

  const featured = allProducts.slice(0, 4);

  container.innerHTML = featured.map(prod => `
    <div class="bg-white rounded-2xl border-2 ${prod.disponible ? 'border-slate-200 hover:border-oshawott-blue' : 'border-slate-200'} p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-black uppercase tracking-wider text-oshawott-blue bg-oshawott-sky px-2.5 py-1 rounded-md">
            ${prod.categorias[0]}
          </span>
          <span class="text-[10px] font-bold text-slate-400 uppercase">${prod.idioma}</span>
        </div>

        <div class="w-full h-48 bg-slate-50 rounded-xl my-3 flex items-center justify-center p-2 overflow-hidden ${!prod.disponible ? 'grayscale' : ''}">
          <img 
            src="${prod.imagen}" 
            alt="${prod.nombre}" 
            class="h-full object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </div>

        <h3 class="font-extrabold text-slate-800 text-sm mt-2 line-clamp-2 leading-snug">
          ${prod.nombre}
        </h3>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span class="text-base font-black text-slate-900">${prod.precio}</span>
        <a href="etb.html?id=${prod.id}" class="bg-slate-900 hover:bg-oshawott-blue text-white text-xs font-extrabold px-3 py-2 rounded-lg transition shadow-sm">
          ${prod.disponible ? 'Ver producto' : 'Sin stock'}
        </a>
      </div>
    </div>
  `).join('');
}