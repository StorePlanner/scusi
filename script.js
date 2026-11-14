
const database = [
    { aisle: "ORTOFRUTTA", desc: "Frutta e verdura", keywords: ["frutta", "verdura", "ortaggi", "ortofrutta", "insalata", "mele", "banane", "pomodori", "patate", "cipolle", "zucchine", "carote", "arance", "limoni"], color: "#2E7D32" },
    { aisle: "GASTRONOMIA", desc: "Piatti pronti e rosticceria", keywords: ["gastronomia", "piatti pronti", "rosticceria", "pollo allo spiedo", "fritto", "lasagne", "parmigiana", "insalata russa"], color: "#F57C00" },
    { aisle: "PANETTERIA E PASTICCERIA", desc: "Pane fresco e dolci", keywords: ["pane fresco", "panetteria", "pasticceria", "dolci freschi", "torte", "pizze", "focacce", "brioches", "cornetti"], color: "#FBC02D" },
    { aisle: "MACELLERIA", desc: "Carne fresca", keywords: ["carne", "macelleria", "fettine", "hamburger", "salsicce", "pollo", "maiale", "manzo", "bistecca", "macinato", "arrosto"], color: "#D32F2F" },
    { aisle: "PESCHERIA", desc: "Pesce fresco", keywords: ["pesce", "pescheria", "frutti di mare", "salmone", "gamberi", "branzino", "orata", "cozze", "vongole", "calamari"], color: "#0288D1" },
    { aisle: "CORSIA 1", desc: "Sale, zucchero, zafferano, senza glutine e formati XXL", keywords: ["sale", "sale fino", "sale grosso", "zucchero", "zucchero di canna", "zucchero a velo", "zafferano", "senza glutine", "celiaci", "formati xxl", "grandi formati", "dolcificante"], color: "#FFB300" },
    { aisle: "CORSIA 2", desc: "Surgelati", keywords: ["surgelati", "gelati", "piselli", "pesce surgelato", "pizze surgelate", "patatine surgelate", "minestrone", "sofficini", "bastoncini", "spinaci"], color: "#0288D1" },
    { aisle: "CORSIA 3", desc: "Pane e sostitutivi del pane, riso, legumi, sott'olio e sott'aceto", keywords: ["pane", "pane confezionato", "sostitutivi del pane", "cracker", "grissini", "piadine", "pan bauletto", "riso", "legumi", "ceci", "fagioli", "lenticchie", "sott'olio", "sott'aceto", "conserve", "olive", "carciofini"], color: "#FFB300" },
    { aisle: "CORSIA 4", desc: "Etnico, spezie, olio, aceto, cous cous, carne e pesce in scatola", keywords: ["etnico", "salsa di soia", "spezie", "pepe", "origano", "rosmarino", "olio", "olio d'oliva", "olio extravergine", "olio di semi", "aceto", "aceto balsamico", "cous cous", "carne in scatola", "pesce in scatola", "tonno", "tonno in scatola", "sgombro", "simmenthal"], color: "#FFB300" },
    { aisle: "CORSIA 5", desc: "Pasta, sughi e dado", keywords: ["pasta", "spaghetti", "penne", "maccheroni", "fusilli", "sughi", "pesto", "passata di pomodoro", "pomodori pelati", "concentrato di pomodoro", "dado", "brodo", "ragù"], color: "#FFB300" },
    { aisle: "CORSIA 6", desc: "Creme spalmabili, marmellate, fette biscottate, biscotti e cereali", keywords: ["creme spalmabili", "nutella", "marmellate", "confetture", "fette biscottate", "biscotti", "cereali", "corn flakes", "colazione", "miele"], color: "#FFB300" },
    { aisle: "CORSIA 7", desc: "Caffè e orzo, infusi, merendine", keywords: ["caffè", "cialde", "capsule", "orzo", "infusi", "tè", "tisane", "camomilla", "merendine", "plumcake", "croissant"], color: "#FFB300" },
    { aisle: "CORSIA 8", desc: "Caramelle, cioccolata, tortine e biscotti pasticceria", keywords: ["caramelle", "cioccolata", "cioccolato", "tavolette", "praline", "tortine", "biscotti pasticceria", "pasticceria confezionata", "gomme da masticare", "cioccolatini"], color: "#FFB300" },
    { aisle: "CORSIA 9", desc: "Farina e polenta, patatine, preparati per dolci e frutta sciroppata", keywords: ["farina", "polenta", "patatine", "snack salati", "salatini", "pop corn", "preparati per dolci", "lievito per dolci", "frutta sciroppata", "pesche sciroppate", "ananas sciroppato", "vanillina", "cacao"], color: "#FFB300" },
    { aisle: "CORSIA 10", desc: "Parafarmacia, pannolini, babyfood e babycare", keywords: ["parafarmacia", "pannolini", "pampers", "babyfood", "omogeneizzati", "latte in polvere", "babycare", "salviettine", "crema neonato", "ciucci", "biberon"], color: "#00BCD4" },
    { aisle: "CORSIA 11", desc: "Rasoi e saponi", keywords: ["rasoi", "schiuma da barba", "dopobarba", "saponi", "saponette", "sapone liquido", "bagnoschiuma", "docciaschiuma", "lamette"], color: "#00BCD4" },
    { aisle: "CORSIA 12", desc: "Medicazioni, assorbenti, detergenti intimi e cura piedi", keywords: ["medicazioni", "cerotti", "garze", "disinfettante", "assorbenti", "salvaslip", "detergenti intimi", "cura piedi", "crema piedi", "cotone", "cotton fioc"], color: "#00BCD4" },
    { aisle: "CORSIA 13", desc: "Igiene orale e fazzoletti", keywords: ["igiene orale", "dentifricio", "spazzolino", "collutorio", "fazzoletti", "fazzoletti di carta", "filo interdentale"], color: "#00BCD4" },
    { aisle: "CORSIA 14", desc: "Crema viso e corpo, cura capelli, depilazione, deodoranti", keywords: ["crema viso", "crema corpo", "crema mani", "cura capelli", "shampoo", "balsamo", "tinte per capelli", "lacca", "gel capelli", "depilazione", "ceretta", "deodoranti"], color: "#00BCD4" },
    { aisle: "CORSIA 15", desc: "Ammorbidente, detersivo bucato, carta igienica e accessori da stiro", keywords: ["ammorbidente", "detersivo bucato", "detersivo lavatrice", "lavatrice", "carta igienica", "accessori da stiro", "acqua distillata", "smacchiatore", "candeggina delicata"], color: "#009688" },
    { aisle: "CORSIA 16", desc: "Detersivi bagno, piatti e superfici; deodorante ambienti, insetticidi e solette scarpe", keywords: ["detersivi bagno", "detersivo piatti", "lavastoviglie", "brillantante", "detersivo superfici", "pavimenti", "candeggina", "ammoniaca", "deodorante ambienti", "insetticidi", "antizanzare", "solette scarpe", "spugne", "guanti"], color: "#009688" },
    { aisle: "CORSIA 17", desc: "Vino, prosecco e spumante", keywords: ["vino", "vino rosso", "vino bianco", "prosecco", "spumante", "champagne"], color: "#880E4F" },
    { aisle: "CORSIA 18", desc: "Vino, liquori e aperitivi", keywords: ["vino", "liquori", "amari", "vodka", "gin", "rum", "grappa", "whisky", "aperitivi", "campari", "aperol", "limoncello"], color: "#880E4F" },
    { aisle: "CORSIA 19", desc: "Pasta fresca, salumi, formaggio grattugiato, burro, tramezzini e lievito", keywords: ["pasta fresca", "tortellini", "ravioli", "gnocchi", "sfoglia", "pasta sfoglia", "salumi", "affettati", "prosciutto", "salame", "mortadella", "formaggio grattugiato", "parmigiano", "grana", "burro", "tramezzini", "lievito", "lievito di birra", "wurstel", "pancetta"], color: "#3F51B5" },
    { aisle: "CORSIA 20", desc: "Yogurt magro, formaggi, dessert e senza lattosio", keywords: ["yogurt magro", "formaggi", "mozzarella", "stracchino", "ricotta", "gorgonzola", "dessert", "budini", "senza lattosio", "alta digeribilità", "sottilette", "philadelphia"], color: "#3F51B5" },
    { aisle: "CORSIA 21", desc: "Yogurt frutta e greco, uova, latte, bevande vegetali, panna", keywords: ["yogurt", "yogurt alla frutta", "yogurt greco", "uova", "latte", "latte fresco", "latte uht", "bevande vegetali", "latte di soia", "latte di mandorla", "panna", "panna da cucina", "panna montata"], color: "#3F51B5" },
    { aisle: "CORSIA 22", desc: "Bevande energetiche, birre, bibite, sciroppi e Brioschi", keywords: ["acqua", "bevande energetiche", "red bull", "monster", "birre", "birra", "bibite", "coca cola", "aranciata", "sciroppi", "brioschi", "effervescente", "digestivo", "sprite", "tè freddo", "estathe", "succhi di frutta"], color: "#3F51B5" },
    { aisle: "CORSIA 23", desc: "Utensili cucina, moka, padelle e stampi", keywords: ["utensili cucina", "mestoli", "moka", "caffettiera", "padelle", "pentole", "stampi per dolci", "teglie", "posate", "coltelli"], color: "#9C27B0" },
    { aisle: "CORSIA 24", desc: "Piatti e bicchieri, contenitori, tovaglie", keywords: ["piatti", "bicchieri", "calici", "contenitori", "tupperware", "tovaglie", "tazze", "tazzine"], color: "#9C27B0" },
    { aisle: "CORSIA 25", desc: "Piatti e bicchieri monouso, tovaglioli, stuzzicadenti, sacchetti gelo e pellicole", keywords: ["piatti plastica", "piatti monouso", "piatti carta", "bicchieri plastica", "tovaglioli", "tovaglioli di carta", "stuzzicadenti", "sacchetti gelo", "sacchetti freezer", "pellicola", "carta forno", "alluminio", "carta stagnola", "scottex", "carta casa"], color: "#9C27B0" },
    { aisle: "CORSIA 26", desc: "Tappeti bagno, candele, cornici, stendini, bacinelle, sacchi spazzatura", keywords: ["tappeti bagno", "candele", "cornici", "stendini", "mollette", "bacinelle", "sacchi spazzatura", "sacchetti immondizia", "secchi", "scope", "mocio"], color: "#9C27B0" },
    { aisle: "CORSIA 27", desc: "Biancheria bagno, accessori letto, brandine, guanciali e materassi", keywords: ["biancheria bagno", "asciugamani", "accappatoi", "accessori letto", "lenzuola", "coperte", "brandine", "guanciali", "cuscini", "materassi", "trapunte"], color: "#9C27B0" },
    { aisle: "CORSIA 28", desc: "Intimo e pigiami donna", keywords: ["intimo donna", "mutande donna", "reggiseni", "calze donna", "collant", "pigiami donna", "camicie da notte"], color: "#E91E63" },
    { aisle: "CORSIA 29", desc: "Abbigliamento uomo", keywords: ["abbigliamento uomo", "magliette", "pantaloni", "camicie uomo", "t-shirt", "felpe"], color: "#303F9F" },
    { aisle: "CORSIA 30", desc: "Intimo e pigiami uomo", keywords: ["intimo uomo", "mutande uomo", "boxer", "slip", "calze uomo", "pigiami uomo", "calzini"], color: "#303F9F" },
    { aisle: "CORSIA 31", desc: "Petfood", keywords: ["petfood", "animali", "cani", "gatti", "crocchette", "croccantini", "scatolette", "cibo per cani", "cibo per gatti", "lettiere", "sabbia gatti", "ossicini", "biscotti cani"], color: "#795548" },
    { aisle: "CORSIA 32", desc: "Carbonella, vasi, terriccio, concimi, idraulica e attrezzi", keywords: ["carbonella", "barbecue", "griglia", "diavolina", "vasi", "terriccio", "terra", "concimi", "fertilizzanti", "idraulica", "attrezzi", "martello", "cacciavite", "fai da te", "chiodi", "colla"], color: "#4CAF50" },
    { aisle: "CORSIA 33", desc: "Cassettiere, armadi e custodie salvagiache, sedie pieghevoli", keywords: ["cassettiere", "armadi", "custodie", "salvagiache", "grucce", "appendiabiti", "sedie pieghevoli", "sgabelli", "scatole", "organizer"], color: "#4CAF50" },
    { aisle: "CORSIA 34", desc: "Materiale elettrico, pile e lampadine, idraulica bagno, carta regalo a parete", keywords: ["materiale elettrico", "ciabatte", "prolunghe", "pile", "batterie", "lampadine", "idraulica bagno", "doccia", "carta regalo", "nastri", "fiocchi", "prese", "adattatori"], color: "#4CAF50" },
    { aisle: "CORSIA 35", desc: "Prodotti auto e valigie a parete", keywords: ["prodotti auto", "olio motore", "tergicristalli", "lavavetri", "tappetini auto", "valigie", "trolley", "zaini", "deodorante auto", "arbre magique"], color: "#4CAF50" },
    { aisle: "CORSIA 36", desc: "Cancelleria", keywords: ["cancelleria", "quaderni", "penne", "matite", "colori", "pennarelli", "scuola", "ufficio", "fogli", "raccoglitori", "gomme", "righelli", "scotch", "forbici"], color: "#FF5252" },
    { aisle: "CORSIA 37", desc: "Bici, palloni, accessori sportivi e per piscina", keywords: ["bici", "biciclette", "palloni", "calcio", "accessori sportivi", "pesi", "piscina", "braccioli", "salvagenti", "materassini", "pompe", "caschi"], color: "#FF5252" },
    { aisle: "CORSIA 38", desc: "Giochi", keywords: ["giochi", "giocattoli", "bambini", "bambole", "macchinine", "lego", "giochi in scatola", "peluche", "puzzle"], color: "#FF5252" },
    { aisle: "BLUKIDS", desc: "Abbigliamento bambino (Blukids)", keywords: ["blukids", "abbigliamento bambino", "vestiti bambini", "neonati", "body"], color: "#03A9F4" },
    { aisle: "CARRERA", desc: "Abbigliamento (Carrera)", keywords: ["carrera", "jeans", "abbigliamento", "pantaloni"], color: "#607D8B" },
    { aisle: "ZONA PROMO", desc: "Zona Promozionale", keywords: ["promo", "promozioni", "offerte", "volantino", "sconti", "bancali"], color: "#F44336" }
];

const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');
const clearBtn = document.getElementById('clear-btn');
const searchView = document.getElementById('search-view');
const resultView = document.getElementById('result-view');
const resultMatchedProduct = document.getElementById('result-matched-product');
const resultAisle = document.getElementById('result-aisle');
const resultDesc = document.getElementById('result-desc');
const backBtn = document.getElementById('back-btn');

const infoBtn = document.getElementById('info-btn');
const infoModal = document.getElementById('info-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

infoBtn.addEventListener('click', () => {
    infoModal.classList.add('show');
});
closeModalBtn.addEventListener('click', () => {
    infoModal.classList.remove('show');
});
infoModal.addEventListener('click', (e) => {
    if(e.target === infoModal) {
        infoModal.classList.remove('show');
    }
});

function normalize(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/['’\-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function collapseDoubles(str) {
    return str.replace(/([a-z])\1+/g, "$1");
}

function damerauLevenshtein(a, b) {
    const alen = a.length;
    const blen = b.length;
    if (alen === 0) return blen;
    if (blen === 0) return alen;

    const dp = Array.from({ length: alen + 1 }, () => new Array(blen + 1).fill(0));
    for (let i = 0; i <= alen; i++) dp[i][0] = i;
    for (let j = 0; j <= blen; j++) dp[0][j] = j;

    for (let i = 1; i <= alen; i++) {
        for (let j = 1; j <= blen; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,      // cancellazione
                dp[i][j - 1] + 1,      // inserimento
                dp[i - 1][j - 1] + cost // sostituzione
            );
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1); // trasposizione
            }
        }
    }
    return dp[alen][blen];
}

function smartFuzzyDistance(queryNorm, targetNorm) {
    const qNoSpace = queryNorm.replace(/\s+/g, "");
    const tNoSpace = targetNorm.replace(/\s+/g, "");

    const qCol = collapseDoubles(qNoSpace);
    const tCol = collapseDoubles(tNoSpace);

    let bestDist = Math.min(
        damerauLevenshtein(qNoSpace, tNoSpace),
        damerauLevenshtein(qCol, tCol)
    );

    if (tNoSpace.length > qNoSpace.length && qNoSpace.length >= 3) {
        const tPref = tNoSpace.slice(0, qNoSpace.length);
        const tPrefCol = tCol.slice(0, qCol.length);
        const prefDist = Math.min(
            damerauLevenshtein(qNoSpace, tPref),
            damerauLevenshtein(qCol, tPrefCol)
        );
        bestDist = Math.min(bestDist, prefDist);
    }

    const targetWords = targetNorm.split(" ");
    if (targetWords.length > 1 && !queryNorm.includes(" ")) {
        for (const w of targetWords) {
            if (w.length < 3) continue;
            const wCol = collapseDoubles(w);
            let wDist = Math.min(
                damerauLevenshtein(qNoSpace, w),
                damerauLevenshtein(qCol, wCol)
            );
            if (w.length > qNoSpace.length && qNoSpace.length >= 3) {
                wDist = Math.min(
                    wDist,
                    damerauLevenshtein(qNoSpace, w.slice(0, qNoSpace.length)),
                    damerauLevenshtein(qCol, wCol.slice(0, qCol.length))
                );
            }
            bestDist = Math.min(bestDist, wDist);
        }
    }

    return bestDist;
}

function searchProducts(rawQuery) {
    const qNorm = normalize(rawQuery);
    if (!qNorm) return { direct: [], fuzzy: [] };

    const qNoSpace = qNorm.replace(/\s+/g, "");
    const qCollapsed = collapseDoubles(qNoSpace);

    let maxAllowedDist = 0;
    if (qNoSpace.length >= 3 && qNoSpace.length <= 4) maxAllowedDist = 1;
    else if (qNoSpace.length >= 5 && qNoSpace.length <= 7) maxAllowedDist = 2;
    else if (qNoSpace.length >= 8) maxAllowedDist = 3;

    const directResults = [];
    const fuzzyResults = [];

    database.forEach(dept => {
        let bestDirectScore = 0;
        let bestDirectLabel = "";
        let bestFuzzyDist = Infinity;
        let bestFuzzyLabel = "";

        dept.keywords.forEach(kw => {
            const kwNorm = normalize(kw);
            const kwNoSpace = kwNorm.replace(/\s+/g, "");
            const kwCollapsed = collapseDoubles(kwNoSpace);

            if (kwNorm === qNorm || kwNoSpace === qNoSpace) {
                if (100 > bestDirectScore) { bestDirectScore = 100; bestDirectLabel = kw; }
            } else if (kwNorm.startsWith(qNorm) || kwNoSpace.startsWith(qNoSpace)) {
                if (80 > bestDirectScore) { bestDirectScore = 80; bestDirectLabel = kw; }
            } else if (kwNorm.includes(qNorm) || kwNoSpace.includes(qNoSpace)) {
                if (60 > bestDirectScore) { bestDirectScore = 60; bestDirectLabel = kw; }
            } else if (qCollapsed.length >= 3 && (kwCollapsed.startsWith(qCollapsed) || kwCollapsed.includes(qCollapsed))) {
                if (0.5 < bestFuzzyDist) { bestFuzzyDist = 0.5; bestFuzzyLabel = kw; }
            } else if (maxAllowedDist > 0) {
                const dist = smartFuzzyDistance(qNorm, kwNorm);
                if (dist <= maxAllowedDist && dist < bestFuzzyDist) {
                    bestFuzzyDist = dist;
                    bestFuzzyLabel = kw;
                }
            }
        });

        const descNorm = normalize(dept.desc);
        if (bestDirectScore === 0 && descNorm.includes(qNorm)) {
            bestDirectScore = 40;
            bestDirectLabel = dept.desc.split(",")[0];
        }

        if (bestDirectScore > 0) {
            directResults.push({
                ...dept,
                matchedLabel: bestDirectLabel,
                score: bestDirectScore,
                isFuzzy: false
            });
        } else if (bestFuzzyDist <= maxAllowedDist) {
            fuzzyResults.push({
                ...dept,
                matchedLabel: bestFuzzyLabel,
                distance: bestFuzzyDist,
                isFuzzy: true
            });
        }
    });

    directResults.sort((a, b) => b.score - a.score);
    fuzzyResults.sort((a, b) => a.distance - b.distance);

    return {
        direct: directResults,
        fuzzy: fuzzyResults.slice(0, 4)
    };
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function createSuggestionElement(item) {
    const li = document.createElement('li');
    li.className = 'suggestion-item' + (item.isFuzzy ? ' fuzzy-match' : '');
    li.style.borderLeftColor = item.color;

    const leftDiv = document.createElement('div');
    leftDiv.className = 'item-left';

    if (item.isFuzzy) {
        const badge = document.createElement('span');
        badge.className = 'fuzzy-badge';
        badge.textContent = '💡 Forse cercavi...';
        leftDiv.appendChild(badge);
    }

    const titleSpan = document.createElement('span');
    titleSpan.className = 'item-title';
    titleSpan.textContent = capitalize(item.matchedLabel);
    leftDiv.appendChild(titleSpan);

    const subSpan = document.createElement('span');
    subSpan.className = 'item-sub';
    subSpan.textContent = item.desc;
    leftDiv.appendChild(subSpan);

    const aisleSpan = document.createElement('span');
    aisleSpan.className = 'li-aisle';
    aisleSpan.textContent = item.aisle;

    li.appendChild(leftDiv);
    li.appendChild(aisleSpan);

    li.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(25);
        showResult(item);
    });

    return li;
}

function showResult(item) {
    searchView.classList.remove('active');
    infoBtn.style.display = 'none'; 
    resultView.classList.add('active');

    resultMatchedProduct.textContent = capitalize(item.matchedLabel);
    resultAisle.textContent = item.aisle;
    resultDesc.textContent = item.desc;

    const lightColors = ['#FFD600', '#FBC02D', '#FFB300'];
    const isLight = lightColors.includes(item.color);

    resultView.style.color = isLight ? '#222' : '#fff';
    resultMatchedProduct.style.background = isLight ? 'rgba(0, 0, 0, 0.09)' : 'rgba(0, 0, 0, 0.2)';
    backBtn.style.borderColor = isLight ? '#222' : '#fff';
    backBtn.style.color = isLight ? '#222' : '#fff';

    document.body.style.backgroundColor = item.color;
    searchInput.blur();
}

function resetSearch() {
    resultView.classList.remove('active');
    searchView.classList.add('active');
    infoBtn.style.display = 'flex'; 
    document.body.style.backgroundColor = 'var(--bg-color)';
    searchInput.value = '';
    clearBtn.style.display = 'none';
    suggestionsList.innerHTML = '';
    setTimeout(() => searchInput.focus(), 250);
}

searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    clearBtn.style.display = val.length > 0 ? 'flex' : 'none';
    suggestionsList.innerHTML = '';

    if (!val.trim()) return;

    const { direct, fuzzy } = searchProducts(val);

    if (direct.length === 0 && fuzzy.length > 0) {
        const hint = document.createElement('li');
        hint.className = 'section-hint fuzzy-hint';
        hint.textContent = '🤔 Nessuna corrispondenza esatta — Forse cercavi:';
        suggestionsList.appendChild(hint);

        fuzzy.forEach(item => {
            suggestionsList.appendChild(createSuggestionElement(item));
        });
        return;
    }

    direct.forEach(item => {
        suggestionsList.appendChild(createSuggestionElement(item));
    });

    if (direct.length > 0 && direct.length <= 2 && fuzzy.length > 0) {
        const hint = document.createElement('li');
        hint.className = 'section-hint fuzzy-hint';
        hint.textContent = '💡 Oppure forse cercavi:';
        suggestionsList.appendChild(hint);

        fuzzy.slice(0, 2).forEach(item => {
            suggestionsList.appendChild(createSuggestionElement(item));
        });
    }

    if (direct.length === 0 && fuzzy.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'empty-state';
        empty.textContent = 'Nessun prodotto trovato... prova con un sinonimo';
        suggestionsList.appendChild(empty);
    }
});

clearBtn.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(15);
    searchInput.value = '';
    clearBtn.style.display = 'none';
    suggestionsList.innerHTML = '';
    searchInput.focus();
});

backBtn.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(15);
    resetSearch();
});

resultView.addEventListener('click', (e) => {
    if (e.target !== backBtn) {
        resetSearch();
    }
});
