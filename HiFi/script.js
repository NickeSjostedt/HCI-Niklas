const body = document.body;
const menuButton = document.getElementById("menuButton");
const siteMenu = document.getElementById("siteMenu");
const siteShell = document.getElementById("siteShell");
const sidebarScrim = document.getElementById("sidebarScrim");
const homeView = document.getElementById("homeView");
const mindmapPage = document.getElementById("mindmapPage");
const partyView = document.getElementById("partyView");
const debateView = document.getElementById("debateView");
const homeLink = document.getElementById("homeLink");
const mobileNavigation = window.matchMedia("(max-width: 760px)");
const themeToggle = document.getElementById("themeToggle");
const questionForm = document.getElementById("questionForm");
const questionInput = document.getElementById("questionInput");
const questionMessage = document.getElementById("questionMessage");
const partyRows = document.querySelectorAll(".party-row");
const compareButton = document.getElementById("compareButton");
const aboutDialog = document.getElementById("aboutDialog");
const aboutButtons = [
  document.getElementById("aboutButton"),
  document.getElementById("aboutButtonSecondary"),
];
const closeDialog = document.getElementById("closeDialog");
const mindmapButton = document.getElementById("mindmapButton");
const partyViewButton = document.getElementById("partyViewButton");
const debateViewButton = document.getElementById("debateViewButton");
const connectionForm = document.getElementById("connectionForm");
const connectionInput = document.getElementById("connectionInput");
const connectionMessage = document.getElementById("connectionMessage");
const conversation = document.getElementById("conversation");
const askSection = document.getElementById("ask");
const newConversationButton = document.getElementById("newConversationButton");
const sourcesButton = document.getElementById("sourcesButton");
const sourcesPanel = document.getElementById("sourcesPanel");
const closeSources = document.getElementById("closeSources");
const sourceList = document.getElementById("sourceList");
const openNodeSources = document.getElementById("openNodeSources");
const nodeTitle = document.getElementById("nodeTitle");
const nodeDescription = document.getElementById("nodeDescription");
const nodeSource = document.getElementById("nodeSource");
const nodeSourceMeta = document.getElementById("nodeSourceMeta");
const nodeHistory = document.getElementById("nodeHistory");
const nodeFacts = document.getElementById("nodeFacts");
const nodeEvidence = document.getElementById("nodeEvidence");
const railToggle = document.getElementById("railToggle");
const partyRail = document.getElementById("compare");
const viewButtons = document.querySelectorAll(".view-switcher [data-view]");
const partyPicker = document.getElementById("partyPicker");
const partyOptions = document.querySelectorAll(".party-option");
const partyChat = document.getElementById("partyChat");
const partyBack = document.getElementById("partyBack");
const partyChatLogo = document.getElementById("partyChatLogo");
const partyChatTitle = document.getElementById("partyChatTitle");
const partyChatLog = document.getElementById("partyChatLog");
const partyChatForm = document.getElementById("partyChatForm");
const partyChatInput = document.getElementById("partyChatInput");
const debateForm = document.getElementById("debateForm");
const debateInput = document.getElementById("debateInput");
const debateLog = document.getElementById("debateLog");
const debateFeedback = document.getElementById("debateFeedback");
const debatePartyCount = document.getElementById("debatePartyCount");
const debatePartyOptions = document.querySelectorAll(".debate-party-option input");

const partyProfiles = {
  Socialdemokraterna: { logo: "assets/parties/socialdemokraterna.png", url: "https://www.socialdemokraterna.se/", tint: "#f5d6d1" },
  Moderaterna: { logo: "assets/parties/moderaterna.png", url: "https://moderaterna.se/", tint: "#d9e6f2" },
  Sverigedemokraterna: { logo: "assets/parties/sverigedemokraterna.png", url: "https://sd.se/", tint: "#f5e7af" },
  Centerpartiet: { logo: "assets/parties/centerpartiet.png", url: "https://www.centerpartiet.se/", tint: "#dcebd7" },
  Vänsterpartiet: { logo: "assets/parties/vänsterpartiet.png", url: "https://www.vansterpartiet.se/", tint: "#f5d6d1" },
  Kristdemokraterna: { logo: "assets/parties/kristdemokraterna.png", url: "https://kristdemokraterna.se/", tint: "#d9e6f2" },
  Liberalerna: { logo: "assets/parties/Liberalerna.png", url: "https://www.liberalerna.se/", tint: "#d9e6f2" },
  Miljöpartiet: { logo: "assets/parties/miljöpartiet.png", url: "https://www.mp.se/", tint: "#dcebd7" },
};
let selectedParty = "";

const nodeContent = {
  start: {
    title: "Din politiska karta",
    description: "Här samlas teman från dina frågor och tidigare samtal. Bygg vidare när du lär dig något nytt.",
    source: "Din första fråga om klimatet",
    meta: "För 2 dagar sedan · 4 min läsning",
    history: "Exempel från tidigare samtal: du frågade hur partiernas klimatförslag påverkar vardagen.",
    facts: ["Sveriges klimatmål och uppföljning beskrivs i klimatpolitiska ramverket."],
    sources: [
      { title: "Naturvårdsverket · Klimatomställningen", url: "https://www.naturvardsverket.se/amnesomraden/klimatomstallningen/" },
      { title: "Riksdagen · Dokument och lagar", url: "https://www.riksdagen.se/sv/dokument-och-lagar/" },
    ],
  },
  climate: {
    title: "Miljö",
    description: "Du har utforskat utsläpp, energi och hur olika partier vill ställa om samhället.",
    source: "Hur vill partierna lösa klimatkrisen?",
    meta: "Senast öppnad idag · 3 källor",
    history: "Exempel från tidigare samtal: du jämförde klimatmål, energiförsörjning och hur omställningen kan finansieras.",
    facts: ["Sveriges klimatmål och klimatpolitiska ramverk följs upp av Naturvårdsverket."],
    sources: [
      { title: "Naturvårdsverket · Klimatomställningen", url: "https://www.naturvardsverket.se/amnesomraden/klimatomstallningen/" },
      { title: "Riksdagen · Dokument och lagar", url: "https://www.riksdagen.se/sv/dokument-och-lagar/" },
    ],
  },
  economy: {
    title: "Ekonomi",
    description: "Knyt ihop skatter, hushållens ekonomi och finansiering av den gröna omställningen.",
    source: "Hur påverkar politiken min ekonomi?",
    meta: "För 5 dagar sedan · 5 min läsning",
    history: "Exempel från tidigare samtal: du ville förstå hur politiska beslut kan påverka hushållens ekonomi.",
    facts: ["SCB publicerar statistik om hushållens inkomster, utgifter och ekonomiska villkor."],
    sources: [
      { title: "SCB · Hitta statistik", url: "https://www.scb.se/hitta-statistik/" },
      { title: "Riksdagen · Dokument och lagar", url: "https://www.riksdagen.se/sv/dokument-och-lagar/" },
    ],
  },
  welfare: {
    title: "Samhälle",
    description: "Tidigare samtal om vård, skola och hur resurser kan fördelas mellan människor.",
    source: "Vad skiljer partiernas syn på vården?",
    meta: "För 1 vecka sedan · 2 källor",
    history: "Exempel från tidigare samtal: du frågade hur vården organiseras och vilka förslag partierna lyfter.",
    facts: ["Socialstyrelsen publicerar statistik och kunskapsstöd inom vård och socialtjänst."],
    sources: [
      { title: "Socialstyrelsen · Statistik", url: "https://www.socialstyrelsen.se/statistik-och-data/" },
      { title: "Riksdagen · Dokument och lagar", url: "https://www.riksdagen.se/sv/dokument-och-lagar/" },
    ],
  },
  democracy: {
    title: "Demokrati",
    description: "En ny nod att fylla med perspektiv på deltagande, representation och fria medier.",
    source: "Lägg till din första koppling",
    meta: "Ny kunskap · inte sparad ännu",
    history: "Ingen tidigare dialog har kopplats hit ännu. Lägg till en koppling när ett samtal väcker en ny fråga.",
    facts: ["Valmyndigheten ansvarar för information om genomförandet av val i Sverige."],
    sources: [
      { title: "Valmyndigheten · Val och demokrati", url: "https://www.val.se/" },
      { title: "Riksdagen · Så fungerar riksdagen", url: "https://www.riksdagen.se/sv/sa-fungerar-riksdagen/" },
    ],
  },
};

const sources = [];
const conversationMessages = [];
let activeNodeKey = "start";
function setMenu(open) {
  siteShell.classList.toggle("nav-open", open);
  sidebarScrim.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Stäng navigation" : "Öppna navigation");
}

function setView(view, updateHistory = true) {
  const showMindmap = view === "mindmap";
  const showPartyView = view === "party";
  const showDebateView = view === "debate";
  siteShell.classList.toggle("party-mode", showPartyView);
  const hideHome = showMindmap || showPartyView || showDebateView;
  const viewChanged = homeView.hidden !== hideHome
    || mindmapPage.hidden !== !showMindmap
    || partyView.hidden !== !showPartyView
    || debateView.hidden !== !showDebateView;
  homeView.hidden = hideHome;
  mindmapPage.hidden = !showMindmap;
  partyView.hidden = !showPartyView;
  debateView.hidden = !showDebateView;
  body.classList.toggle("chat-active", !hideHome && conversationMessages.length > 0);
  document.querySelectorAll(".sidebar-link[data-view]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.view === view);
  });
  setMenu(false);
  if (updateHistory) {
    const hash = showMindmap ? "#mindmap" : showPartyView ? "#party-stugor" : showDebateView ? "#debatt" : "#top";
    if (window.location.hash !== hash) window.history.pushState({ view }, "", hash);
  }
  if (viewChanged) window.scrollTo(0, 0);
}

function renderSourceList(sourceItems) {
  sourceList.replaceChildren();
  if (sourceItems.length === 0) {
    const empty = document.createElement("div");
    empty.className = "source-empty";
    empty.textContent = "Ställ en fråga för att bygga din källista.";
    sourceList.appendChild(empty);
    return;
  }

  sourceItems.forEach((source) => {
    const entry = document.createElement("article");
    entry.className = "source-entry";
    const title = document.createElement("a");
    title.href = source.url;
    title.target = "_blank";
    title.rel = "noopener noreferrer";
    title.textContent = source.title;
    const detail = document.createElement("span");
    detail.textContent = source.detail;
    entry.append(title, detail);
    sourceList.appendChild(entry);
  });
}

function selectMindmapNode(nodeKey) {
  const content = nodeContent[nodeKey];
  if (!content) return;
  activeNodeKey = nodeKey;
  nodeTitle.textContent = content.title;
  nodeDescription.textContent = content.description;
  nodeSource.textContent = content.source;
  nodeSourceMeta.textContent = content.meta;
  nodeHistory.textContent = content.history;
  nodeFacts.replaceChildren();
  content.facts.forEach((fact) => {
    const item = document.createElement("li");
    item.textContent = fact;
    nodeFacts.appendChild(item);
  });
  nodeEvidence.replaceChildren();
  content.sources.forEach((source) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.title;
    item.appendChild(link);
    nodeEvidence.appendChild(item);
  });
  connectionMessage.textContent = "";
  document.querySelectorAll(".map-node").forEach((node) => {
    const selected = node.dataset.node === nodeKey;
    node.classList.toggle("is-selected", selected);
    node.setAttribute("aria-pressed", String(selected));
  });
}

function setSources(open) {
  sourcesPanel.hidden = !open;
  if (open) {
    setMenu(false);
    closeSources.focus();
  } else {
    body.classList.remove("modal-open");
  }

}

menuButton.addEventListener("click", () => {
  setMenu(!siteShell.classList.contains("nav-open"));
});

sidebarScrim.addEventListener("click", () => setMenu(false));

partyRows.forEach((row) => row.setAttribute("aria-pressed", "false"));
document.querySelectorAll(".map-node").forEach((node) => node.setAttribute("aria-pressed", "false"));
selectMindmapNode("start");

siteMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    setMenu(false);
    if (link.dataset.view === "home") {
      event.preventDefault();
      setView("home");
      window.scrollTo(0, 0);
    } else if (homeView.hidden) {
      event.preventDefault();
      const target = document.querySelector(link.hash);
      setView("home");
      window.setTimeout(() => target?.scrollIntoView({ behavior: "smooth" }), 0);
    }
  });
});

homeLink.addEventListener("click", (event) => {
  event.preventDefault();
  setView("home");
  window.scrollTo(0, 0);
});

mindmapButton.addEventListener("click", () => setView("mindmap"));
partyViewButton.addEventListener("click", () => {
  resetPartyPicker();
  setView("party");
});
debateViewButton.addEventListener("click", () => setView("debate"));

sourcesButton.addEventListener("click", () => {
  renderSourceList(sources);
  setSources(true);
});
closeSources.addEventListener("click", () => setSources(false));
sourcesPanel.addEventListener("click", (event) => {
  if (event.target === sourcesPanel) setSources(false);
});

document.querySelectorAll(".map-node").forEach((node) => {
  node.addEventListener("click", () => {
    selectMindmapNode(node.dataset.node);
  });
});

openNodeSources.addEventListener("click", () => {
  renderSourceList(nodeContent[activeNodeKey].sources.map((source) => ({
    ...source,
    detail: `Källa kopplad till ämnet ${nodeContent[activeNodeKey].title}.`,
  })));
  setSources(true);
});

function updateDebatePartyCount() {
  const selectedCount = [...debatePartyOptions].filter((option) => option.checked).length;
  debatePartyCount.textContent = `${selectedCount} av ${debatePartyOptions.length} partier valda`;
}

debatePartyOptions.forEach((option) => {
  option.addEventListener("change", updateDebatePartyCount);
});

debateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = debateInput.value.trim();
  const selectedParties = [...debatePartyOptions]
    .filter((option) => option.checked)
    .map((option) => option.value);

  if (selectedParties.length === 0) {
    debateFeedback.textContent = "Välj minst ett parti som ska delta.";
    debatePartyOptions[0].focus();
    return;
  }
  if (!question) {
    debateFeedback.textContent = "Skriv en fråga till debatten.";
    debateInput.focus();
    return;
  }

  debateLog.querySelector(".debate-empty")?.remove();
  appendDebateMessage(question, "debate-user-message");
  debateFeedback.textContent = "";
  debateInput.value = "";

  selectedParties.forEach((partyName, index) => {
    const profile = partyProfiles[partyName];
    window.setTimeout(() => {
      appendDebateMessage(
        `Det här är ett prototypsvar från ${partyName} om frågan: “${question}”. Läs mer om partiets politik via källan.`,
        "debate-party-message",
        partyName,
        profile,
      );
    }, 250 * (index + 1));
  });
});

function appendDebateMessage(text, className, partyName = "", profile = null) {
  const message = document.createElement("article");
  message.className = className;
  if (profile) {
    const logo = document.createElement("img");
    logo.src = profile.logo;
    logo.alt = "";
    message.append(logo);
  }

  const content = document.createElement("div");
  if (partyName) {
    const heading = document.createElement("strong");
    heading.textContent = partyName;
    content.append(heading);
  }
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  content.append(paragraph);
  if (profile) {
    const source = document.createElement("a");
    source.href = profile.url;
    source.target = "_blank";
    source.rel = "noreferrer";
    source.textContent = `Källa: ${partyName} ↗`;
    content.append(source);
  }
  message.append(content);
  debateLog.append(message);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

partyOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectedParty = option.dataset.party;
    const profile = partyProfiles[selectedParty];
    partyView.style.setProperty("--party-tint", profile.tint);
    partyOptions.forEach((partyOption) => {
      partyOption.setAttribute("aria-pressed", String(partyOption === option));
    });
    partyChatLogo.src = profile.logo;
    partyChatLogo.alt = `${selectedParty}s logotyp`;
    partyChatTitle.textContent = `${selectedParty} Valstuga`;
    partyChatLog.replaceChildren();
    appendPartyMessage(`Hej! Här kan du ställa frågor om ${selectedParty}. Vad undrar du?`, "assistant-message", profile.url, selectedParty);
    partyPicker.hidden = true;
    partyChat.hidden = false;
    partyChatInput.focus();
  });
});

function resetPartyPicker() {
  partyChat.hidden = true;
  partyPicker.hidden = false;
  selectedParty = "";
  partyChatInput.value = "";
  partyChatLog.replaceChildren();
  partyChatLogo.removeAttribute("src");
  partyChatLogo.alt = "";
  partyChatTitle.textContent = "";
  partyView.style.removeProperty("--party-tint");
  partyOptions.forEach((option) => option.setAttribute("aria-pressed", "false"));
}

partyBack.addEventListener("click", resetPartyPicker);

partyChatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = partyChatInput.value.trim();
  if (!selectedParty || !question) return;

  appendPartyMessage(question, "user-message");
  partyChatInput.value = "";
  window.setTimeout(() => {
    appendPartyMessage(`Tack för din fråga. Det här är en prototyp och svaret kommer inte från ${selectedParty}. Läs mer på partiets webbplats.`, "assistant-message", partyProfiles[selectedParty].url, selectedParty);
  }, 350);
});

function appendPartyMessage(text, className, sourceUrl = "", sourceName = "") {
  const message = document.createElement("div");
  message.className = `party-message ${className}`;

  if (className === "assistant-message") {
    const avatar = document.createElement("span");
    avatar.className = "party-message-avatar";
    avatar.textContent = "V";
    message.append(avatar);
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  if (className === "assistant-message") {
    const source = document.createElement("a");
    source.className = "party-source-bubble";
    source.href = sourceUrl;
    source.target = "_blank";
    source.rel = "noreferrer";
    source.textContent = `Källa: ${sourceName} ↗`;
    paragraph.append(source);
  }

  message.append(paragraph);
  partyChatLog.append(message);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

railToggle.addEventListener("click", () => {
  const isExpanded = railToggle.getAttribute("aria-expanded") === "true";
  setPartyRailCollapsed(isExpanded);
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    partyRail.dataset.view = button.dataset.view;
    viewButtons.forEach((viewButton) => {
      viewButton.setAttribute("aria-pressed", String(viewButton === button));
    });
  });
});

document.querySelectorAll(".party-row").forEach((row) => {
  row.style.setProperty("--match", `${row.dataset.match}%`);
});

connectionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const connection = connectionInput.value.trim();
  if (!connection) {
    connectionMessage.textContent = "Skriv något att koppla till kartan.";
    connectionInput.focus();
    return;
  }
  connectionMessage.textContent = `“${connection}” har lagts till i din karta.`;
  connectionInput.value = "";
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeToggle.setAttribute(
    "aria-label",
    body.classList.contains("dark-mode") ? "Byt till ljust tema" : "Byt till mörkt tema",
  );
});

function askQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) {
    questionMessage.textContent = "Skriv en fråga så börjar vi utforska.";
    questionInput.focus();
    return;
  }

  if (conversationMessages.length === 0) {
    askSection.classList.add("is-chat-active");
    body.classList.add("chat-active");
    newConversationButton.hidden = false;
    window.scrollTo(0, 0);
    questionInput.placeholder = "Ställ en följdfråga...";
    if (mobileNavigation.matches && !partyRail.classList.contains("is-collapsed")) {
      setPartyRailCollapsed(true);
    }
  }
  questionMessage.textContent = "";
  addChatMessage(cleanQuestion, "user");
  const answer = "Jag hjälper dig att jämföra perspektiv utan att välja åt dig. Vi kan börja med bakgrund, partiernas förslag och vad olika källor säger.";
  const answerSources = [
    { title: "Källa 01 · Riksdagen", url: "https://www.riksdagen.se/sv/dokument-och-lagar/" },
    { title: "Källa 02 · Valmyndigheten", url: "https://www.val.se/" },
  ];
  addChatMessage(answer, "assistant", answerSources);
  addSource({
    title: "Riksdagen · Dokument och lagar",
    detail: `Officiella dokument att börja med för frågan: ${cleanQuestion}`,
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/",
  });
  addSource({
    title: "Valmyndigheten",
    detail: "Officiell information om val och det svenska valsystemet.",
    url: "https://www.val.se/",
  });
  questionInput.value = "";
}

function renderConversation() {
  conversation.replaceChildren();
  if (conversationMessages.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "conversation-empty";
    emptyState.textContent = "Din dialog och källorna bakom svaren visas här.";
    conversation.appendChild(emptyState);
    return;
  }

  conversationMessages.forEach(({ role, content, sources: messageSources }) => {
    const element = document.createElement("article");
    element.className = `chat-message ${role}`;
    const speaker = document.createElement("span");
    speaker.className = "chat-message-speaker";
    speaker.textContent = role === "user" ? "Du" : "Kompass";
    element.appendChild(speaker);

    const messageText = document.createElement("p");
    messageText.className = "chat-message-text";
    messageText.textContent = content;
    element.appendChild(messageText);

    if (role === "assistant" && messageSources.length > 0) {
      const sourceRow = document.createElement("div");
      sourceRow.className = "chat-sources";
      const label = document.createElement("span");
      label.className = "chat-sources-label";
      label.textContent = "Källor";
      sourceRow.appendChild(label);
      messageSources.forEach((source) => {
        const link = document.createElement("a");
        link.className = "chat-source";
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = source.title;
        sourceRow.appendChild(link);
      });
      element.appendChild(sourceRow);
    }
    conversation.appendChild(element);
  });
  requestAnimationFrame(() => {
    conversation.scrollTop = conversation.scrollHeight;
  });
}

function addChatMessage(content, role, messageSources = []) {
  conversationMessages.push({ role, content, sources: messageSources });
  renderConversation();
}

function setPartyRailCollapsed(collapsed) {
  partyRail.classList.toggle("is-collapsed", collapsed);
  railToggle.setAttribute("aria-expanded", String(!collapsed));
  railToggle.querySelector(".rail-toggle-label").textContent = collapsed
    ? "Visa jämförelse"
    : "Dölj jämförelse";
}

function addSource(source) {
  sources.push(source);
  renderSourceList(sources);
}

function startNewConversation() {
  conversationMessages.length = 0;
  sources.length = 0;
  renderConversation();
  renderSourceList(sources);
  askSection.classList.remove("is-chat-active");
  body.classList.remove("chat-active");
  newConversationButton.hidden = true;
  questionInput.value = "";
  questionInput.placeholder = "Vad vill du veta mer om?";
  questionMessage.textContent = "";
  if (partyRail.classList.contains("is-collapsed")) {
    setPartyRailCollapsed(false);
  }
  window.scrollTo(0, 0);
  questionInput.focus();
}

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  askQuestion(questionInput.value);
});

newConversationButton.addEventListener("click", startNewConversation);

document.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => askQuestion(button.dataset.question));
});

partyRows.forEach((row) => {
  row.addEventListener("click", () => {
    partyRows.forEach((item) => item.classList.remove("is-selected"));
    row.classList.add("is-selected");
    const match = row.dataset.match;
    questionMessage.textContent = `${row.dataset.party} matchar ${match}% av dina markerade frågor.`;
    document.getElementById("ask").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

compareButton.addEventListener("click", () => {
  questionMessage.textContent = "Jämförelsen är redo att utforskas — välj ett parti i listan.";
  document.getElementById("compare").scrollIntoView({ behavior: "smooth", block: "center" });
});

function toggleDialog(open) {
  aboutDialog.hidden = !open;
}

aboutButtons.forEach((button) => button.addEventListener("click", () => toggleDialog(true)));
closeDialog.addEventListener("click", () => toggleDialog(false));
aboutDialog.addEventListener("click", (event) => {
  if (event.target === aboutDialog) toggleDialog(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
    toggleDialog(false);
    setSources(false);
  }
});

mobileNavigation.addEventListener("change", (event) => {
  setMenu(false);
});
window.addEventListener("popstate", () => {
  const hash = window.location.hash;
  setView(hash === "#mindmap" ? "mindmap" : hash === "#party-stugor" ? "party" : hash === "#debatt" ? "debate" : "home", false);
});
const initialHash = window.location.hash;
setView(initialHash === "#mindmap" ? "mindmap" : initialHash === "#party-stugor" ? "party" : initialHash === "#debatt" ? "debate" : "home", false);
