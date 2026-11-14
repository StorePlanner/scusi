# Scusi? - App Assistenza Corsie (Versione Beta 0.9.1)

Un'applicazione web progressiva (PWA) progettata per aiutare gli addetti ai reparti a trovare istantaneamente la corsia corretta di qualsiasi prodotto all'interno di un ipermercato.

*Progettata da Massimo Maggipinto per Marco Campedelli (2026).*

## 🌟 Funzionalità Principali
- **Ricerca Rapida e Tollerante agli Errori**: Il motore di ricerca interno (basato su distanza Damerau-Levenshtein) perdona gli errori di battitura, ignora le doppie, gli accenti e riconosce i prefissi in tempo reale.
- **Card "Forse cercavi..."**: Suggerimenti intelligenti se il prodotto non viene trovato in modo esatto.
- **Color Coding**: Lo sfondo dell'app si colora in automatico in base al colore del reparto/corsia, aiutando la memoria visiva dell'addetto.
- **Interfaccia Distraction-Free**: Creata per essere usata con una mano sola in movimento.
- **Modalità Offline-ready (PWA)**: Installabile direttamente sulla Home Screen di Android e iOS tramite browser.

## 🛠 Istruzioni per la Pubblicazione su GitHub Pages
1. Estrai il contenuto di questo pacchetto `.zip`.
2. Crea una nuova repository pubblica su GitHub (es. `scusi-app`).
3. Carica **tutti i file** all'interno della cartella principale della repository:
   - `index.html`
   - `style.css`
   - `script.js`
   - `manifest.json`
   - `icon.svg`
   - `icon-192.png`
   - `icon-512.png`
   - `README.md`
4. Vai in **Settings** > **Pages** della tua repository.
5. Sotto la sezione *Build and deployment*, scegli la Source **Deploy from a branch**.
6. Seleziona il branch `main` e la cartella `/ (root)`. Clicca su **Save**.
7. Entro 1-2 minuti, la tua app sarà online all'indirizzo pubblico fornito da GitHub (es. `https://tuo-username.github.io/scusi-app`).

## 📱 Come Installarla su Smartphone

### Su Android (Chrome)
1. Apri il link GitHub Pages generato su Google Chrome.
2. Tocca i tre puntini verticali (`⋮`) in alto a destra.
3. Seleziona **Aggiungi a schermata Home** o **Installa app**.

### Su iOS (Safari)
1. Apri il link GitHub Pages generato *esclusivamente* su **Safari**.
2. Tocca l'icona di Condivisione (il quadrato con la freccia).
3. Scorri e tocca **Aggiungi alla schermata Home**.

## ⚖️ Disclaimer
*Questa è una versione Beta, sviluppata a scopo amatoriale e non costituisce un prodotto professionale o ufficiale. L'uso avviene a rischio esclusivo dell'utente.*
