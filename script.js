
const database = [
    { aisle: "ORTOFRUTTA", desc: "Frutta e verdura", keywords: ["frutta", "verdura", "ortaggi", "ortofrutta", "insalata", "mele", "banane", "pomodori", "patate", "cipolle", "zucchine", "carote", "arance", "limoni"], colorLight: "#167A34", colorDark: "#0F4D22" },
    { aisle: "GASTRONOMIA", desc: "Piatti pronti e rosticceria", keywords: ["gastronomia", "piatti pronti", "rosticceria", "pollo allo spiedo", "fritto", "lasagne", "parmigiana", "insalata russa"], colorLight: "#F06C00", colorDark: "#9E3E00" },
    { aisle: "PANETTERIA e PASTICCERIA", desc: "Pane fresco e dolci", keywords: ["pane", "pane fresco", "panetteria", "pasticceria", "dolci freschi", "torte", "pizze", "focacce", "brioches", "cornetti"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "MACELLERIA", desc: "Carne fresca", keywords: ["carne", "macelleria", "fettine", "hamburger", "salsicce", "pollo", "maiale", "manzo", "bistecca", "macinato", "arrosto"], colorLight: "#D90B17", colorDark: "#8A0810" },
    { aisle: "PESCHERIA", desc: "Pesce fresco", keywords: ["pesce", "pescheria", "frutti di mare", "salmone", "gamberi", "branzino", "orata", "cozze", "vongole", "calamari"], colorLight: "#006BB8", colorDark: "#0A4270" },
    { aisle: "CORSIA 1", desc: "Sale, zucchero, zafferano, senza glutine e formati XXL", keywords: ["sale", "sale fino", "sale grosso", "zucchero", "zucchero di canna", "zucchero a velo", "zafferano", "senza glutine", "celiaci", "formati xxl", "grandi formati", "dolcificante"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "CORSIA 2", desc: "Surgelati", keywords: ["surgelati", "gelati", "piselli", "pesce surgelato", "pizze surgelate", "patatine surgelate", "minestrone", "sofficini", "bastoncini", "spinaci"], colorLight: "#38BDF8", colorDark: "#0E4F78" },
    { aisle: "CORSIA 3", desc: "Pane e sostitutivi del pane, riso, legumi, sott'olio e sott'aceto", keywords: ["pane confezionato", "sostitutivi del pane", "cracker", "grissini", "piadine", "pan bauletto", "riso", "legumi", "ceci", "fagioli", "lenticchie", "sott'olio", "sott'aceto", "conserve", "olive", "carciofini"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "CORSIA 4", desc: "Etnico, spezie, olio, aceto, cous cous, carne e pesce in scatola", keywords: ["etnico", "salsa di soia", "spezie", "pepe", "origano", "rosmarino", "olio", "olio d'oliva", "olio extravergine", "olio di semi", "aceto", "aceto balsamico", "cous cous", "carne in scatola", "pesce in scatola", "tonno", "tonno in scatola", "sgombro", "simmenthal"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "CORSIA 5", desc: "Pasta, sughi e dado", keywords: ["pasta", "spaghetti", "penne", "maccheroni", "fusilli", "sughi", "pesto", "passata di pomodoro", "pomodori pelati", "concentrato di pomodoro", "dado", "brodo", "ragù"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "CORSIA 6", desc: "Creme spalmabili, marmellate, fette biscottate, biscotti e cereali", keywords: ["creme spalmabili", "nutella", "marmellate", "confetture", "fette biscottate", "biscotti", "cereali", "corn flakes", "colazione", "miele"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "CORSIA 7", desc: "Caffè e orzo, infusi, merendine", keywords: ["caffè", "cialde", "capsule", "orzo", "infusi", "tè", "tisane", "camomilla", "merendine", "plumcake", "croissant"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "CORSIA 8", desc: "Caramelle, cioccolata, tortine e biscotti pasticceria", keywords: ["caramelle", "cioccolata", "cioccolato", "tavolette", "praline", "tortine", "biscotti pasticceria", "pasticceria confezionata", "gomme da masticare", "cioccolatini"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "CORSIA 9", desc: "Farina e polenta, patatine, preparati per dolci e frutta sciroppata", keywords: ["farina", "polenta", "patatine", "snack salati", "salatini", "pop corn", "preparati per dolci", "lievito per dolci", "frutta sciroppata", "pesche sciroppate", "ananas sciroppato", "vanillina", "cacao"], colorLight: "#FED404", colorDark: "#7A5800" },
    { aisle: "CORSIA 10", desc: "Parafarmacia, pannolini, babyfood e babycare", keywords: ["parafarmacia", "pannolini", "pampers", "babyfood", "omogeneizzati", "latte in polvere", "babycare", "salviettine", "crema neonato", "ciucci", "biberon"], colorLight: "#00ACC1", colorDark: "#005A66" },
    { aisle: "CORSIA 11", desc: "Rasoi e saponi", keywords: ["rasoi", "schiuma da barba", "dopobarba", "saponi", "saponette", "sapone liquido", "bagnoschiuma", "docciaschiuma", "lamette"], colorLight: "#00ACC1", colorDark: "#005A66" },
    { aisle: "CORSIA 12", desc: "Medicazioni, assorbenti, detergenti intimi e cura piedi", keywords: ["medicazioni", "cerotti", "garze", "disinfettante", "assorbenti", "salvaslip", "detergenti intimi", "cura piedi", "crema piedi", "cotone", "cotton fioc"], colorLight: "#00ACC1", colorDark: "#005A66" },
    { aisle: "CORSIA 13", desc: "Igiene orale e fazzoletti", keywords: ["igiene orale", "dentifricio", "spazzolino", "collutorio", "fazzoletti", "fazzoletti di carta", "filo interdentale"], colorLight: "#00ACC1", colorDark: "#005A66" },
    { aisle: "CORSIA 14", desc: "Crema viso e corpo, cura capelli, depilazione, deodoranti", keywords: ["crema viso", "crema corpo", "crema mani", "cura capelli", "shampoo", "balsamo", "tinte per capelli", "lacca", "gel capelli", "depilazione", "ceretta", "deodoranti"], colorLight: "#00ACC1", colorDark: "#005A66" },
    { aisle: "CORSIA 15", desc: "Ammorbidente, detersivo bucato, carta igienica e accessori da stiro", keywords: ["ammorbidente", "detersivo bucato", "detersivo lavatrice", "lavatrice", "carta igienica", "accessori da stiro", "acqua distillata", "smacchiatore", "candeggina delicata"], colorLight: "#00796B", colorDark: "#004D43" },
    { aisle: "CORSIA 16", desc: "Detersivi bagno, piatti e superfici; deodorante ambienti, insetticidi e solette scarpe", keywords: ["detersivi bagno", "detersivo piatti", "lavastoviglie", "brillantante", "detersivo superfici", "pavimenti", "candeggina", "ammoniaca", "deodorante ambienti", "insetticidi", "antizanzare", "solette scarpe", "spugne", "guanti"], colorLight: "#00796B", colorDark: "#004D43" },
    { aisle: "CORSIA 17", desc: "Vino, prosecco e spumante", keywords: ["vino", "vino rosso", "vino bianco", "prosecco", "spumante", "champagne"], colorLight: "#7B1FA2", colorDark: "#4A1263" },
    { aisle: "CORSIA 18", desc: "Vino, liquori e aperitivi", keywords: ["vino", "liquori", "amari", "vodka", "gin", "rum", "grappa", "whisky", "aperitivi", "campari", "aperol", "limoncello"], colorLight: "#7B1FA2", colorDark: "#4A1263" },
    { aisle: "CORSIA 19", desc: "Pasta fresca, salumi, formaggio grattugiato, burro, tramezzini e lievito", keywords: ["pasta fresca", "tortellini", "ravioli", "gnocchi", "sfoglia", "pasta sfoglia", "salumi", "affettati", "prosciutto", "salame", "mortadella", "formaggio grattugiato", "parmigiano", "grana", "burro", "tramezzini", "lievito", "lievito di birra", "wurstel", "pancetta"], colorLight: "#1558C0", colorDark: "#0E377A" },
    { aisle: "CORSIA 20", desc: "Yogurt magro, formaggi, dessert e senza lattosio", keywords: ["yogurt magro", "formaggi", "mozzarella", "stracchino", "ricotta", "gorgonzola", "dessert", "budini", "senza lattosio", "alta digeribilità", "sottilette", "philadelphia"], colorLight: "#1558C0", colorDark: "#0E377A" },
    { aisle: "CORSIA 21", desc: "Yogurt frutta e greco, uova, latte, bevande vegetali, panna", keywords: ["yogurt", "yogurt alla frutta", "yogurt greco", "uova", "latte", "latte fresco", "latte uht", "bevande vegetali", "latte di soia", "latte di mandorla", "panna", "panna da cucina", "panna montata"], colorLight: "#1558C0", colorDark: "#0E377A" },
    { aisle: "CORSIA 22", desc: "Bevande energetiche, birre, bibite, sciroppi e Brioschi", keywords: ["acqua", "bevande energetiche", "red bull", "monster", "birre", "birra", "bibite", "coca cola", "aranciata", "sciroppi", "brioschi", "effervescente", "digestivo", "sprite", "tè freddo", "estathe", "succhi di frutta"], colorLight: "#1558C0", colorDark: "#0E377A" },
    { aisle: "CORSIA 23", desc: "Utensili cucina, moka, padelle e stampi", keywords: ["utensili cucina", "mestoli", "moka", "caffettiera", "padelle", "pentole", "stampi per dolci", "teglie", "posate", "coltelli"], colorLight: "#4E2A9E", colorDark: "#311A66" },
    { aisle: "CORSIA 24", desc: "Piatti e bicchieri, contenitori, tovaglie", keywords: ["piatti", "bicchieri", "calici", "contenitori", "tupperware", "tovaglie", "tazze", "tazzine"], colorLight: "#4E2A9E", colorDark: "#311A66" },
    { aisle: "CORSIA 25", desc: "Piatti monouso, tovaglioli, sacchetti gelo, pellicole", keywords: ["piatti plastica", "piatti monouso", "piatti carta", "bicchieri plastica", "tovaglioli", "tovaglioli di carta", "stuzzicadenti", "sacchetti gelo", "sacchetti freezer", "pellicola", "carta forno", "alluminio", "carta stagnola", "scottex", "carta casa"], colorLight: "#4E2A9E", colorDark: "#311A66" },
    { aisle: "CORSIA 26", desc: "Tappeti bagno, candele, cornici, stendini, bacinelle, sacchi spazzatura", keywords: ["tappeti bagno", "candele", "cornici", "stendini", "mollette", "bacinelle", "sacchi spazzatura", "sacchetti immondizia", "secchi", "scope", "mocio"], colorLight: "#4E2A9E", colorDark: "#311A66" },
    { aisle: "CORSIA 27", desc: "Biancheria bagno, accessori letto, brandine, guanciali e materassi", keywords: ["biancheria bagno", "asciugamani", "accappatoi", "accessori letto", "lenzuola", "coperte", "brandine", "guanciali", "cuscini", "materassi", "trapunte"], colorLight: "#4E2A9E", colorDark: "#311A66" },
    { aisle: "CORSIA 28", desc: "Intimo e pigiami donna", keywords: ["intimo donna", "mutande donna", "reggiseni", "calze donna", "collant", "pigiami donna", "camicie da notte"], colorLight: "#C2185B", colorDark: "#7A0E39" },
    { aisle: "CORSIA 29", desc: "Abbigliamento uomo", keywords: ["abbigliamento uomo", "magliette", "pantaloni", "camicie uomo", "t-shirt", "felpe"], colorLight: "#283593", colorDark: "#192261" },
    { aisle: "CORSIA 30", desc: "Intimo e pigiami uomo", keywords: ["intimo uomo", "mutande uomo", "boxer", "slip", "calze uomo", "pigiami uomo", "calzini"], colorLight: "#283593", colorDark: "#192261" },
    { aisle: "CORSIA 31", desc: "Petfood", keywords: ["petfood", "animali", "cani", "gatti", "crocchette", "croccantini", "scatolette", "cibo per cani", "cibo per gatti", "lettiere", "sabbia gatti", "ossicini", "biscotti cani"], colorLight: "#6D3208", colorDark: "#451F04" },
    { aisle: "CORSIA 32", desc: "Carbonella, vasi, terriccio, concimi, idraulica e attrezzi", keywords: ["carbonella", "barbecue", "griglia", "diavolina", "vasi", "terriccio", "terra", "concimi", "fertilizzanti", "idraulica", "attrezzi", "martello", "cacciavite", "fai da te", "chiodi", "colla"], colorLight: "#236B28", colorDark: "#144218" },
    { aisle: "CORSIA 33", desc: "Cassettiere, armadi e custodie salvagiache, sedie pieghevoli", keywords: ["cassettiere", "armadi", "custodie", "salvagiache", "grucce", "appendiabiti", "sedie pieghevoli", "sgabelli", "scatole", "organizer"], colorLight: "#236B28", colorDark: "#144218" },
    { aisle: "CORSIA 34", desc: "Materiale elettrico, pile e lampadine, idraulica bagno, carta regalo a parete", keywords: ["materiale elettrico", "ciabatte", "prolunghe", "pile", "batterie", "lampadine", "idraulica bagno", "doccia", "carta regalo", "nastri", "fiocchi", "prese", "adattatori"], colorLight: "#236B28", colorDark: "#144218" },
    { aisle: "CORSIA 35", desc: "Prodotti auto e valigie a parete", keywords: ["prodotti auto", "olio motore", "tergicristalli", "lavavetri", "tappetini auto", "valigie", "trolley", "zaini", "deodorante auto", "arbre magique"], colorLight: "#236B28", colorDark: "#144218" },
    { aisle: "CORSIA 36", desc: "Cancelleria", keywords: ["cancelleria", "quaderni", "penne", "matite", "colori", "pennarelli", "scuola", "ufficio", "fogli", "raccoglitori", "gomme", "righelli", "scotch", "forbici"], colorLight: "#D90B17", colorDark: "#8A0810" },
    { aisle: "CORSIA 37", desc: "Bici, palloni, accessori sportivi e per piscina", keywords: ["bici", "biciclette", "palloni", "calcio", "accessori sportivi", "pesi", "piscina", "braccioli", "salvagenti", "materassini", "pompe", "caschi"], colorLight: "#D90B17", colorDark: "#8A0810" },
    { aisle: "CORSIA 38", desc: "Giochi", keywords: ["giochi", "giocattoli", "bambini", "bambole", "macchinine", "lego", "giochi in scatola", "peluche", "puzzle"], colorLight: "#D90B17", colorDark: "#8A0810" },
    { aisle: "BLUKIDS", desc: "Abbigliamento bambino (Blukids)", keywords: ["blukids", "abbigliamento bambino", "vestiti bambini", "neonati", "body"], colorLight: "#0277BD", colorDark: "#014975" },
    { aisle: "CARRERA", desc: "Abbigliamento (Carrera)", keywords: ["carrera", "jeans", "abbigliamento", "pantaloni"], colorLight: "#455A64", colorDark: "#263238" },
    { aisle: "ZONA PROMO", desc: "Zona Promozionale", keywords: ["promo", "promozioni", "offerte", "volantino", "sconti", "bancali"], colorLight: "#D90B17", colorDark: "#8A0810" }
];

const searchBoxWrapper = document.getElementById('search-box-wrapper');
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');
const welcomeCard = document.getElementById('welcome-card');
const clearBtn = document.getElementById('clear-btn');
const searchView = document.getElementById('search-view');
const resultView = document.getElementById('result-view');
const resultMatchedProduct = document.getElementById('result-matched-product');
const aisleContainer = document.getElementById('aisle-container');
const resultAisle = document.getElementById('result-aisle');
const resultDesc = document.getElementById('result-desc');
const backBtn = document.getElementById('back-btn');
const dynamicBg = document.getElementById('dynamic-bg');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

const infoTrigger = document.getElementById('info-trigger');
const infoModal = document.getElementById('info-modal');
const modalScroll = document.getElementById('modal-scroll');
const closeModalBtn = document.getElementById('close-modal-btn');

let currentActiveItem = null;
let currentDisplayedResults = [];

// Gestione Night Mode / Dark Mode 100% automatica in base alle impostazioni del dispositivo
function isDarkMode() {
    return document.documentElement.classList.contains('dark-theme');
}

function syncSystemTheme(dark) {
    if (dark) {
        document.documentElement.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
    }

    if (resultView.classList.contains('active') && currentActiveItem) {
        showResult(currentActiveItem);
    } else {
        const homeSolid = dark ? '#140D09' : '#FFF8F0';
        const homeGrad = dark
            ? 'linear-gradient(155deg, #140D09 0%, #1E130E 55%, #291811 100%)'
            : 'linear-gradient(155deg, #FFFBF5 0%, #FFF2E2 55%, #FFE6CC 100%)';
        dynamicBg.style.background = homeGrad;
        resultView.style.backgroundColor = '';
        document.documentElement.style.backgroundColor = homeSolid;
        document.body.style.backgroundColor = homeSolid;
        if (themeColorMeta) themeColorMeta.setAttribute('content', homeSolid);
        if (searchInput.value.trim()) {
            searchInput.dispatchEvent(new Event('input'));
        }
    }
}

syncSystemTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        syncSystemTheme(e.matches);
    });
}

// Modale Info / QR Condivisione / Note Legali cliccando sul logo "Scusi?"
if (infoTrigger) {
    infoTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        searchInput.blur();
        if (navigator.vibrate) navigator.vibrate(15);
        if (modalScroll) modalScroll.scrollTop = 0;
        infoModal.classList.add('show');
    });
}
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(12);
        infoModal.classList.remove('show');
    });
}
if (infoModal) {
    infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) infoModal.classList.remove('show');
    });
}

// Chiudi automaticamente la tastiera dello smartphone toccando qualsiasi area vuota dell'app
document.addEventListener('pointerdown', (e) => {
    if (document.activeElement === searchInput) {
        if (!searchBoxWrapper.contains(e.target)) {
            searchInput.blur();
        }
    }
});

// Chiudi la tastiera anche quando si scorre con il dito la lista dei risultati
if (suggestionsList) {
    suggestionsList.addEventListener('touchmove', () => {
        if (document.activeElement === searchInput) {
            searchInput.blur();
        }
    }, { passive: true });
}

// Cliccando ovunque nel box di ricerca (anche sull'icona lente) attiva subito l'input
if (searchBoxWrapper) {
    searchBoxWrapper.addEventListener('click', (e) => {
        if (e.target !== clearBtn && !clearBtn.contains(e.target)) {
            searchInput.focus();
        }
    });
}

// Auto-focus su desktop all'apertura per scrivere subito da tastiera
if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('load', () => {
        searchInput.focus();
    });
}

// Supporto tastiera completo su Desktop (Invio apre il primo risultato, Esc chiude/torna indietro)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (infoModal.classList.contains('show')) {
            infoModal.classList.remove('show');
        } else if (resultView.classList.contains('active')) {
            resetSearch();
        } else if (searchInput.value.length > 0) {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            suggestionsList.innerHTML = '';
            currentDisplayedResults = [];
            document.body.classList.remove('is-searching');
            welcomeCard.classList.remove('hidden');
            searchInput.focus();
        }
    } else if (e.key === 'Enter' && searchView.classList.contains('active') && !infoModal.classList.contains('show')) {
        if (currentDisplayedResults.length > 0) {
            e.preventDefault();
            showResult(currentDisplayedResults[0]);
        }
    }
});

// Calcolo esatto della luminanza relativa WCAG (0 = nero puro, 1 = bianco puro)
function getRelativeLuminance(hex) {
    hex = hex.replace('#', '');
    const rgb = [
        parseInt(hex.substr(0, 2), 16) / 255,
        parseInt(hex.substr(2, 2), 16) / 255,
        parseInt(hex.substr(4, 2), 16) / 255
    ];
    const lin = rgb.map(c => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function getBestContrastText(bgHex) {
    const lum = getRelativeLuminance(bgHex);
    const isLight = lum > 0.34;
    return {
        fg: isLight ? '#1E0F05' : '#FFFFFF',
        isLight: isLight
    };
}

function getDepartmentColor(item) {
    return isDarkMode() ? item.colorDark : item.colorLight;
}

// Congiunzioni e preposizioni italiane da mantenere rigorosamente in minuscolo
const LOWERCASE_WORDS = new Set([
    "e", "ed", "o", "od", "a", "ad", "da", "di", "in", "con", "su", "per", "tra", "fra",
    "del", "della", "dei", "degli", "delle", "al", "alla", "ai", "agli", "alle",
    "dal", "dalla", "nel", "nella", "sul", "sulla"
]);

function formatAisleTitle(str) {
    return str.split(" ").map((word, idx) => {
        const clean = word.toLowerCase();
        if (idx > 0 && LOWERCASE_WORDS.has(clean)) {
            return clean;
        }
        return word.toUpperCase();
    }).join(" ");
}

function formatProductLabel(str) {
    return str.split(" ").map((word, idx) => {
        const lower = word.toLowerCase();
        if (idx === 0) {
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
        if (LOWERCASE_WORDS.has(lower)) {
            return lower;
        }
        return lower;
    }).join(" ");
}

function fitAisleTitle() {
    const maxWidth = aisleContainer.clientWidth - 16;
    if (maxWidth <= 0) return;

    const text = resultAisle.textContent.trim();
    const wordCount = text.split(/\s+/).length;

    let fontSize = window.innerWidth <= 420 ? 68 : 88;
    const minFontSize = 26;

    if (wordCount <= 2) {
        resultAisle.style.whiteSpace = 'nowrap';
        resultAisle.style.fontSize = fontSize + 'px';
        while (resultAisle.scrollWidth > maxWidth && fontSize > minFontSize) {
            fontSize -= 2;
            resultAisle.style.fontSize = fontSize + 'px';
        }
    } else {
        resultAisle.style.whiteSpace = 'normal';
        resultAisle.style.fontSize = fontSize + 'px';
        while (resultAisle.scrollWidth > maxWidth && fontSize > minFontSize) {
            fontSize -= 2;
            resultAisle.style.fontSize = fontSize + 'px';
        }
    }
}

window.addEventListener('resize', () => {
    if (resultView.classList.contains('active')) {
        fitAisleTitle();
    }
});

// Fuzzy matching engine
function normalize(str) { return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/['’\-]/g, " ").replace(/\s+/g, " ").trim(); }
function collapseDoubles(str) { return str.replace(/([a-z])\1+/g, "$1"); }
function damerauLevenshtein(a, b) {
    const alen = a.length, blen = b.length;
    if (alen === 0) return blen; if (blen === 0) return alen;
    const dp = Array.from({ length: alen + 1 }, () => new Array(blen + 1).fill(0));
    for (let i = 0; i <= alen; i++) dp[i][0] = i; for (let j = 0; j <= blen; j++) dp[0][j] = j;
    for (let i = 1; i <= alen; i++) {
        for (let j = 1; j <= blen; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
            }
        }
    }
    return dp[alen][blen];
}
function smartFuzzyDistance(queryNorm, targetNorm) {
    const qNoSpace = queryNorm.replace(/\s+/g, ""), tNoSpace = targetNorm.replace(/\s+/g, "");
    const qCol = collapseDoubles(qNoSpace), tCol = collapseDoubles(tNoSpace);
    let bestDist = Math.min(damerauLevenshtein(qNoSpace, tNoSpace), damerauLevenshtein(qCol, tCol));
    if (tNoSpace.length > qNoSpace.length && qNoSpace.length >= 3) {
        bestDist = Math.min(bestDist, damerauLevenshtein(qNoSpace, tNoSpace.slice(0, qNoSpace.length)), damerauLevenshtein(qCol, tCol.slice(0, qCol.length)));
    }
    const targetWords = targetNorm.split(" ");
    if (targetWords.length > 1 && !queryNorm.includes(" ")) {
        for (const w of targetWords) {
            if (w.length < 3) continue;
            let wDist = Math.min(damerauLevenshtein(qNoSpace, w), damerauLevenshtein(qCol, collapseDoubles(w)));
            if (w.length > qNoSpace.length && qNoSpace.length >= 3) {
                wDist = Math.min(wDist, damerauLevenshtein(qNoSpace, w.slice(0, qNoSpace.length)), damerauLevenshtein(qCol, collapseDoubles(w).slice(0, qCol.length)));
            }
            bestDist = Math.min(bestDist, wDist);
        }
    }
    return bestDist;
}
function searchProducts(rawQuery) {
    const qNorm = normalize(rawQuery);
    if (!qNorm) return { direct: [], fuzzy: [] };
    const qNoSpace = qNorm.replace(/\s+/g, ""), qCollapsed = collapseDoubles(qNoSpace);
    let maxAllowedDist = qNoSpace.length >= 8 ? 3 : (qNoSpace.length >= 5 ? 2 : (qNoSpace.length >= 3 ? 1 : 0));
    const directResults = [], fuzzyResults = [];

    database.forEach(dept => {
        let bestDirectScore = 0, bestDirectLabel = "", bestFuzzyDist = Infinity, bestFuzzyLabel = "";
        dept.keywords.forEach(kw => {
            const kwNorm = normalize(kw), kwNoSpace = kwNorm.replace(/\s+/g, ""), kwCollapsed = collapseDoubles(kwNoSpace);
            if (kwNorm === qNorm || kwNoSpace === qNoSpace) { if (100 > bestDirectScore) { bestDirectScore = 100; bestDirectLabel = kw; } }
            else if (kwNorm.startsWith(qNorm) || kwNoSpace.startsWith(qNoSpace)) { if (80 > bestDirectScore) { bestDirectScore = 80; bestDirectLabel = kw; } }
            else if (kwNorm.includes(qNorm) || kwNoSpace.includes(qNoSpace)) { if (60 > bestDirectScore) { bestDirectScore = 60; bestDirectLabel = kw; } }
            else if (qCollapsed.length >= 3 && (kwCollapsed.startsWith(qCollapsed) || kwCollapsed.includes(qCollapsed))) {
                if (0.5 < bestFuzzyDist) { bestFuzzyDist = 0.5; bestFuzzyLabel = kw; }
            } else if (maxAllowedDist > 0) {
                const dist = smartFuzzyDistance(qNorm, kwNorm);
                if (dist <= maxAllowedDist && dist < bestFuzzyDist) { bestFuzzyDist = dist; bestFuzzyLabel = kw; }
            }
        });
        if (bestDirectScore === 0 && normalize(dept.desc).includes(qNorm)) { bestDirectScore = 40; bestDirectLabel = dept.desc.split(",")[0]; }
        
        if (bestDirectScore > 0) directResults.push({ ...dept, matchedLabel: bestDirectLabel, score: bestDirectScore, isFuzzy: false });
        else if (bestFuzzyDist <= maxAllowedDist) fuzzyResults.push({ ...dept, matchedLabel: bestFuzzyLabel, distance: bestFuzzyDist, isFuzzy: true });
    });
    directResults.sort((a, b) => b.score - a.score);
    fuzzyResults.sort((a, b) => a.distance - b.distance);
    return { direct: directResults, fuzzy: fuzzyResults.slice(0, 4) };
}

function createSuggestionElement(item) {
    const li = document.createElement('li');
    li.className = 'suggestion-item' + (item.isFuzzy ? ' fuzzy-match' : '');
    
    const leftDiv = document.createElement('div');
    leftDiv.className = 'item-left';
    if (item.isFuzzy) {
        const badge = document.createElement('span');
        badge.className = 'fuzzy-badge'; badge.textContent = '💡 Forse cercavi...';
        leftDiv.appendChild(badge);
    }
    const titleSpan = document.createElement('span');
    titleSpan.className = 'item-title';
    titleSpan.textContent = formatProductLabel(item.matchedLabel);
    leftDiv.appendChild(titleSpan);

    const subSpan = document.createElement('span');
    subSpan.className = 'item-sub';
    subSpan.textContent = item.desc;
    leftDiv.appendChild(subSpan);

    const deptColor = getDepartmentColor(item);
    const { fg } = getBestContrastText(deptColor);

    const aisleSpan = document.createElement('span');
    aisleSpan.className = 'li-aisle';
    aisleSpan.textContent = formatAisleTitle(item.aisle);
    aisleSpan.style.background = deptColor;
    aisleSpan.style.color = fg;

    li.appendChild(leftDiv);
    li.appendChild(aisleSpan);

    li.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(25);
        showResult(item);
    });
    return li;
}

function showResult(item) {
    currentActiveItem = item;
    searchView.classList.remove('active');
    
    resultView.classList.add('active');
    document.body.classList.add('result-active');

    const deptColor = getDepartmentColor(item);
    const { fg, isLight } = getBestContrastText(deptColor);

    resultMatchedProduct.textContent = formatProductLabel(item.matchedLabel);
    resultAisle.textContent = formatAisleTitle(item.aisle);
    resultDesc.textContent = item.desc;

    dynamicBg.style.background = deptColor;
    resultView.style.backgroundColor = deptColor;
    document.documentElement.style.backgroundColor = deptColor;
    document.body.style.backgroundColor = deptColor;
    if (themeColorMeta) themeColorMeta.setAttribute('content', deptColor);
    
    document.body.classList.remove('is-dark-bg', 'is-light-bg');
    document.body.classList.add(isLight ? 'is-light-bg' : 'is-dark-bg');
    document.body.style.color = fg;
    resultView.style.color = fg;

    searchInput.blur();
    requestAnimationFrame(() => fitAisleTitle());
}

function resetSearch() {
    currentActiveItem = null;
    currentDisplayedResults = [];
    resultView.classList.remove('active');
    searchView.classList.add('active');
    document.body.classList.remove('result-active', 'is-dark-bg', 'is-light-bg', 'is-searching');

    const dark = isDarkMode();
    const homeSolid = dark ? '#140D09' : '#FFF8F0';
    const homeGrad = dark
        ? 'linear-gradient(155deg, #140D09 0%, #1E130E 55%, #291811 100%)'
        : 'linear-gradient(155deg, #FFFBF5 0%, #FFF2E2 55%, #FFE6CC 100%)';

    dynamicBg.style.background = homeGrad;
    resultView.style.backgroundColor = '';
    document.documentElement.style.backgroundColor = homeSolid;
    document.body.style.backgroundColor = homeSolid;
    if (themeColorMeta) themeColorMeta.setAttribute('content', homeSolid);
    document.body.style.color = '';
    resultView.style.color = '';
    
    searchInput.value = '';
    clearBtn.style.display = 'none';
    suggestionsList.innerHTML = '';
    welcomeCard.classList.remove('hidden');
    setTimeout(() => searchInput.focus(), 200);
}

searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    clearBtn.style.display = val.length > 0 ? 'flex' : 'none';
    suggestionsList.innerHTML = '';
    currentDisplayedResults = [];
    
    if (!val.trim()) {
        document.body.classList.remove('is-searching');
        welcomeCard.classList.remove('hidden');
        return;
    }
    document.body.classList.add('is-searching');
    welcomeCard.classList.add('hidden');

    const { direct, fuzzy } = searchProducts(val);
    if (direct.length === 0 && fuzzy.length > 0) {
        const hint = document.createElement('li');
        hint.className = 'section-hint'; hint.textContent = '🤔 Forse cercavi:';
        suggestionsList.appendChild(hint);
        fuzzy.forEach(item => {
            currentDisplayedResults.push(item);
            suggestionsList.appendChild(createSuggestionElement(item));
        });
        return;
    }
    direct.forEach(item => {
        currentDisplayedResults.push(item);
        suggestionsList.appendChild(createSuggestionElement(item));
    });
    if (direct.length > 0 && direct.length <= 2 && fuzzy.length > 0) {
        const hint = document.createElement('li');
        hint.className = 'section-hint'; hint.textContent = '💡 Oppure:';
        suggestionsList.appendChild(hint);
        fuzzy.slice(0, 2).forEach(item => {
            currentDisplayedResults.push(item);
            suggestionsList.appendChild(createSuggestionElement(item));
        });
    }
    if (direct.length === 0 && fuzzy.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'section-hint';
        empty.style.textAlign = 'center';
        empty.style.marginTop = '36px';
        empty.textContent = 'Nessun prodotto trovato... prova con un sinonimo';
        suggestionsList.appendChild(empty);
    }
});

clearBtn.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(15);
    searchInput.value = '';
    clearBtn.style.display = 'none';
    suggestionsList.innerHTML = '';
    currentDisplayedResults = [];
    document.body.classList.remove('is-searching');
    welcomeCard.classList.remove('hidden');
    searchInput.focus();
});

backBtn.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(15);
    resetSearch();
});

resultView.addEventListener('click', (e) => {
    if (e.target !== backBtn && e.target !== resultMatchedProduct && e.target !== resultAisle) {
        resetSearch();
    }
});

// ==========================================
// Registrazione Service Worker (Offline Corsia) + Installazione Rapida Home
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
}

const installBanner = document.getElementById('install-banner');
const installBannerText = document.getElementById('install-banner-text');
const installActionBtn = document.getElementById('install-action-btn');
const dismissInstallBtn = document.getElementById('dismiss-install-btn');
let deferredInstallPrompt = null;

const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
const isDismissed = sessionStorage.getItem('scusi_install_dismissed') === '1';

if (!isStandalone && !isDismissed && installBanner) {
    const isAppleTouch = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
        (/macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
    if (isAppleTouch) {
        installBannerText.innerHTML = `
            <div class="ios-visual-guide">
                <div class="guide-header">Salva Scusi? sulla schermata Home:</div>
                <div class="guide-steps">
                    <div class="guide-step">
                        <span class="step-num">1</span>
                        <span class="step-icon-box" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="17" height="17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"><line x1="4" y1="7" x2="20" y2="7"></line><line x1="4" y1="12" x2="17" y2="12"></line><line x1="4" y1="17" x2="13" y2="17"></line></svg>
                        </span>
                        <span class="step-label">Le 3 linee</span>
                    </div>
                    <span class="step-arrow">&rarr;</span>
                    <div class="guide-step">
                        <span class="step-num">2</span>
                        <span class="step-icon-box" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="17" height="17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M8 9H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1"></path><polyline points="15 5 12 2 9 5"></polyline><line x1="12" y1="2" x2="12" y2="14"></line></svg>
                        </span>
                        <span class="step-label">Condividi</span>
                    </div>
                    <span class="step-arrow">&rarr;</span>
                    <div class="guide-step">
                        <span class="step-num">3</span>
                        <span class="step-icon-box" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="17" height="17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="4" y="4" width="16" height="16" rx="4.5"></rect><line x1="12" y1="8.5" x2="12" y2="15.5"></line><line x1="8.5" y1="12" x2="15.5" y2="12"></line></svg>
                        </span>
                        <span class="step-label">Aggiungi a Home</span>
                    </div>
                </div>
            </div>
        `;
        installBanner.style.display = 'flex';
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (!isStandalone && !isDismissed && installBanner) {
        installBannerText.textContent = 'Aggiungi Scusi? alla schermata Home con un tocco:';
        installActionBtn.style.display = 'inline-block';
        installBanner.style.display = 'flex';
    }
});

if (installActionBtn) {
    installActionBtn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === 'accepted') {
            installBanner.style.display = 'none';
        }
        deferredInstallPrompt = null;
    });
}

if (dismissInstallBtn) {
    dismissInstallBtn.addEventListener('click', () => {
        installBanner.style.display = 'none';
        sessionStorage.setItem('scusi_install_dismissed', '1');
    });
}

window.addEventListener('appinstalled', () => {
    if (installBanner) installBanner.style.display = 'none';
});

searchInput.addEventListener('input', () => {
    if (!installBanner) return;
    if (searchInput.value.trim()) {
        installBanner.style.display = 'none';
    } else if (!isStandalone && sessionStorage.getItem('scusi_install_dismissed') !== '1' && installBannerText.innerHTML !== '') {
        installBanner.style.display = 'flex';
    }
});

// Pulsante "Copia Link" nel modale QR
const copyLinkBtn = document.getElementById('copy-link-btn');
const copyLinkText = document.getElementById('copy-link-text');
const APP_PUBLIC_URL = 'https://storeplanner.github.io/scusi/';

if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', async () => {
        if (navigator.vibrate) navigator.vibrate(20);
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(APP_PUBLIC_URL);
            } else {
                const tmp = document.createElement('input');
                tmp.value = APP_PUBLIC_URL;
                document.body.appendChild(tmp);
                tmp.select();
                document.execCommand('copy');
                document.body.removeChild(tmp);
            }
            copyLinkText.textContent = 'Link copiato!';
            setTimeout(() => { copyLinkText.textContent = 'Copia Link'; }, 2200);
        } catch (err) {
            copyLinkText.textContent = APP_PUBLIC_URL;
        }
    });
}
