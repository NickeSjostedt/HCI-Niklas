const partyData = {
  socialdemokraterna: {
    name: 'Socialdemokraterna',
    shortName: 'S',
    logo: 'https://www.socialdemokraterna.se/images/18.61366e091900c5b27297279/1720011611054/S%20logga%20-%20Liggande%20Negativ.svg',
    intro: 'Här är en egen demochatt för Socialdemokraterna, där du kan utforska frågor om välfärd, skola, ekonomi och trygghet i ett mer partifokuserat samtal.',
    focus: 'Gå in i samtalet med partiet i fokus och ställ frågor som hjälper dig att förstå vilka ämnen som står i centrum i den här demo-versionen.',
    prompts: ['Vad vill partiet lyfta när det gäller välfärd och vård?', 'Hur vill partiet beskriva skolan och utbildningen?', 'Vilka frågor vill partiet lyfta kring ekonomi och jobb?'],
    colors: { primary: '#d42338', strong: '#b5132e', accent: '#f3c76d', soft: '#fbe7eb', panel: '#f5e6ea', border: '#ebced5', highlight: '#f3c76d', text: '#572a35' }
  },
  moderaterna: {
    name: 'Moderaterna',
    shortName: 'M',
    logo: 'https://moderaterna.se/app/uploads/2021/12/M_logo_bla%CC%8A_2021-150x150.png',
    intro: 'Den här sidan låter Moderaterna vara i fokus och fungerar som en neutral utgångspunkt för att ställa frågor om partiets profil, prioriteringar och samtalsämnen.',
    focus: 'Använd chatten för att testa frågor om ekonomi, trygghet, skola och det offentliga samtalet kring andra centrala valfrågor.',
    prompts: ['Hur beskriver partiet sin utgångspunkt i ekonomiska frågor?', 'Vilka samhällsfrågor vill partiet lyfta fram i samtalet?', 'Vad vill partiet framhäva om trygghet och lokalsamhället?'],
    colors: { primary: '#1a315d', strong: '#102648', accent: '#e4b250', soft: '#e9eefc', panel: '#edf2fb', border: '#d4def4', highlight: '#e4b250', text: '#2b3d60' }
  },
  sd: {
    name: 'Sverigedemokraterna',
    shortName: 'SD',
    logo: 'https://www.sd.se/wp-content/themes/sd_theme/dist/images/sverigedemokraterna-logotype-bumblebee.webp',
    intro: 'Sverigedemokraterna får här en egen samtalsyta där du kan testa frågor om partiets profil och valfrågor i en tydligt partifokuserad demo.',
    focus: 'Chatten är tänkt som ett neutralt sätt att utforska vad partiet väljer att framhäva vid samtal om trygghet, skola, ekonomi och samhällsordning.',
    prompts: ['Vilka frågor vill partiet lyfta om trygghet och samhällsordning?', 'Hur beskriver partiet sitt fokus på skola och utbildning?', 'Vad vill partiet framhäva i ekonomiska frågor?'],
    colors: { primary: '#f3b100', strong: '#d99b00', accent: '#142b36', soft: '#fff3d3', panel: '#fff5db', border: '#f1d486', highlight: '#f3b100', text: '#41342c' }
  },
  vansterpartiet: {
    name: 'Vänsterpartiet',
    shortName: 'V',
    logo: 'https://www.vansterpartiet.se/wp-content/uploads/2025/03/logo.svg',
    intro: 'På denna sida sätts Vänsterpartiet i fokus, så att du kan prova frågor om deras sätt att formulera ekonomiska, sociala och politiska samtalsämnen.',
    focus: 'Här kan du ställa neutrala frågor om jämställdhet, välfärd, skola och hur partiet väljer att sätta ord på samhällsfrågor.',
    prompts: ['Hur beskriver partiet välfärd och socialpolitik?', 'Vilka frågor vill partiet lyfta om skola och utbildning?', 'Vad vill partiet framhäva i ekonomiska och sociala frågor?'],
    colors: { primary: '#d2313e', strong: '#b92231', accent: '#f1b65c', soft: '#fde9ec', panel: '#fbecef', border: '#f0c1c7', highlight: '#f1b65c', text: '#5a2a2d' }
  },
  centerpartiet: {
    name: 'Centerpartiet',
    shortName: 'C',
    logo: 'https://www.centerpartiet.se/images/200.3f55a43d19b2bd455d08fece/1768603346831/Centerpartiet_partisymbol_klover_bordered.png',
    intro: 'Centerpartiet får här en egen samtalsplats där du kan utforska partiets profil, mål och de frågor som står i centrum i denna demoversion.',
    focus: 'Testa frågor om landsbygd, klimat, skola och ekonomi för att förstå hur partiet väljer att prägla samtalet i detta läge.',
    prompts: ['Hur beskriver partiet sin politik inom landsbygd och regional utveckling?', 'Vilka frågor vill partiet lyfta om klimat och miljö?', 'Vad vill partiet framhäva kring skola och ekonomi?'],
    colors: { primary: '#1d8f6d', strong: '#157056', accent: '#e1bf59', soft: '#eafaf4', panel: '#ebfaf6', border: '#cfe7df', highlight: '#e1bf59', text: '#234b40' }
  },
  kristdemokraterna: {
    name: 'Kristdemokraterna',
    shortName: 'KD',
    logo: 'https://kristdemokraterna.se/images/18.72d9f8c817e8ce3de0254710/1643616846958/KD-logo-blue.svg',
    intro: 'Kristdemokraterna blir här en egen demo-sida där du kan ställa frågor om partiets profil, värdegrund och centrala samtalsämnen.',
    focus: 'Lägg in frågor om familj, skola, trygghet och samhällsordning för att få en enkel partifokuserad chatt i prototypen.',
    prompts: ['Vilka frågor vill partiet lyfta om familj och välfärd?', 'Hur beskriver partiet skola och utbildning?', 'Vad vill partiet framhäva kring trygghet och samhälle?'],
    colors: { primary: '#1b4e9a', strong: '#123d7a', accent: '#f0bf4c', soft: '#edf4ff', panel: '#edf5ff', border: '#d4e2fb', highlight: '#f0bf4c', text: '#233f68' }
  },
  miljopartiet: {
    name: 'Miljöpartiet',
    shortName: 'MP',
    logo: 'https://www.mp.se/wp-content/themes/mp/assets/images/logo.svg',
    intro: 'Miljöpartiet har här en egen chatt där du kan prova frågor om klimat, miljö, rättvisa och hur partiet vill formulera sina huvudfrågor.',
    focus: 'Chatten är tänkt som en neutral startpunkt för frågor om klimat, energi, skola och samhällsfrågor som partiet ofta kopplar ihop.',
    prompts: ['Hur beskriver partiet klimat och miljö i samtalet?', 'Vilka frågor vill partiet lyfta om energi och hållbarhet?', 'Vad vill partiet framhäva kring social rättvisa och skola?'],
    colors: { primary: '#2c8b57', strong: '#1f7144', accent: '#d5c15d', soft: '#eaf9ef', panel: '#edf9f1', border: '#cfead8', highlight: '#d5c15d', text: '#224d3d' }
  },
  liberalerna: {
    name: 'Liberalerna',
    shortName: 'L',
    logo: 'https://www.liberalerna.se/wp-content/themes/liberalerna/assets/images/logo-round.svg',
    intro: 'Liberalerna får här en egen del av prototypen där du kan testa frågor om frihet, ansvar, skola, ekonomi och samhällsfrågor.',
    focus: 'Använd chattens exempel för att undersöka hur partiet väljer att sätta ord på politik som rör individ, samhälle och offentliga val.',
    prompts: ['Hur beskriver partiet frihet och ansvar?', 'Vilka frågor vill partiet lyfta kring ekonomi och skola?', 'Vad vill partiet framhäva om individens roll i samhället?'],
    colors: { primary: '#0d5cb3', strong: '#0b4b94', accent: '#f0b04d', soft: '#edf5ff', panel: '#eef7ff', border: '#d9e8ff', highlight: '#f0b04d', text: '#234268' }
  }
};

const params = new URLSearchParams(window.location.search);
const partyKey = params.get('party') || 'socialdemokraterna';
const party = partyData[partyKey] || partyData.socialdemokraterna;

const messages = document.querySelector('#messages');
const partyName = document.querySelector('#party-name');
const partyIntro = document.querySelector('#party-intro');
const partyNameInline = document.querySelector('#party-name-inline');
const partyShortName = document.querySelector('#party-short-name');
const partyFocus = document.querySelector('#party-focus');
const chatBotName = document.querySelector('#chat-bot-name');
const chatBotStatus = document.querySelector('#chat-bot-status');
const partyLogo = document.querySelector('#party-logo');
const chatForm = document.querySelector('#party-chat-form');
const chatInput = document.querySelector('#party-chat-input');
const suggestionButtons = document.querySelectorAll('.party-suggestion');

document.body.dataset.party = partyKey;

const theme = party.colors || { primary: '#174c3e', strong: '#10372f', accent: '#d76d58', soft: '#edf2ed', panel: '#e8ece5', border: '#dce4dc', highlight: '#f4cd70', text: '#334740' };
Object.entries(theme).forEach(([key, value]) => {
  document.documentElement.style.setProperty(`--party-${key}`, value);
});

if (partyName) partyName.textContent = party.name;
if (partyIntro) partyIntro.textContent = party.intro;
if (partyNameInline) partyNameInline.textContent = party.name;
if (partyShortName) partyShortName.textContent = party.shortName;
if (partyFocus) partyFocus.textContent = party.focus;
if (chatBotName) chatBotName.textContent = party.name;
if (chatBotStatus) chatBotStatus.textContent = 'Partiet i fokus';
if (partyLogo) {
  partyLogo.src = party.logo;
  partyLogo.alt = `${party.name} logotyp`;
}

const pageTitle = document.title.replace('Parti i fokus', party.name);
document.title = pageTitle;

function addPartyMessage(text, kind) {
  const bubble = document.createElement('div');
  bubble.className = `message ${kind === 'user' ? 'user-message' : 'bot-message'}`;
  bubble.append(document.createTextNode(text));
  const time = document.createElement('span');
  time.className = 'message-time';
  time.textContent = 'Nu';
  bubble.append(time);
  messages.append(bubble);
  messages.scrollTop = messages.scrollHeight;
}

function partyReplyTo(text) {
  const lower = text.toLowerCase();

  if (/hej|hallå/i.test(lower)) {
    return `Hej! Detta är en demo-sida för ${party.name}. Du kan ställa frågor om partiets huvudämnen, och vi kan börja med välfärd, skola, ekonomi eller trygghet.`;
  }

  if (/välfärd|vård|social/i.test(lower)) {
    return `För ${party.name} är välfärd och vård ett tydligt samtalsområde. I den här demo-versionen kan du ställa frågor om hur partiet beskriver prioriteringar, ansvar och utmaningar inom området.`;
  }

  if (/skola|utbildning|barn/i.test(lower)) {
    return `Skola och utbildning är ett annat naturligt fokus för ${party.name}. En bra följdfråga är vad partiet vill förbättra, hur det finansieras och vilka grupper som anses prioriteras.`;
  }

  if (/ekonomi|jobb|skatt|budget/i.test(lower)) {
    return `Ekonomi och jobb är centrala frågor i en valdiskussion. Här kan du ställa följdfrågor om hur ${party.name} beskriver finansiering, prioriteringar och samhällsnytta.`;
  }

  if (/trygghet|säkerhet|samhälle/i.test(lower)) {
    return `Trygghet och samhällsfrågor är ofta en viktig del av politiska samtal. En saklig fråga här är att se vilka konkreta åtgärder eller mål som partiet beskriver i stället för bara allmänna formuleringar.`;
  }

  if (/klimat|miljö|energi/i.test(lower)) {
    return `Klimat, miljö och energi är ofta viktiga samtalsämnen. Om du vill gå vidare kan du jämföra vilka konkreta lösningar, tidsplaner eller prioriteringar som partiet lyfter.`;
  }

  if (/jämför|parti|partier|vallöfte|förslag/i.test(lower)) {
    return `Det är ett bra sätt att ställa en jämförelsefråga. I den här demo-versionen är fokus på ${party.name}, men du bör alltid kontrollera mot partiets officiella material och konsekventa källor.`;
  }

  return `Det är en bra fråga att undersöka vidare. I den här demon är ${party.name} i fokus, så du kan ställa följdfrågor om prioriteringar, finansiering och vad partiet vill lyfta fram i samtalet.`;
}

function sendPartyMessage(text) {
  const cleanText = text.trim();
  if (!cleanText) return;
  addPartyMessage(cleanText, 'user');
  chatInput.value = '';
  window.setTimeout(() => addPartyMessage(partyReplyTo(cleanText), 'bot'), 260);
}

if (messages) {
  addPartyMessage(`${party.name} är valt i den här demo-sidan. Här kan du testa frågor om partiets profil, samtalsämnen och prioriteringar. Försök att ställa konkreta frågor och kontrollera alltid mot partiets egna källor.`, 'bot');
}

if (suggestionButtons.length) {
  suggestionButtons.forEach((button, index) => {
    button.textContent = party.prompts[index] || button.textContent;
    button.dataset.prompt = party.prompts[index] || button.dataset.prompt || '';
    button.addEventListener('click', () => sendPartyMessage(button.dataset.prompt || ''));
  });
}

if (chatForm && chatInput) {
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    sendPartyMessage(chatInput.value);
  });
}
