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
const likedDebateList = document.getElementById("likedDebateList");
const likedDebateStorageKey = "kompass_liked_debate_messages";
let likedDebateMessages = [];
try {
  const storedLikedMessages = JSON.parse(localStorage.getItem(likedDebateStorageKey) || "[]");
  if (Array.isArray(storedLikedMessages)) {
    likedDebateMessages = storedLikedMessages.filter((message) =>
      message && typeof message.id === "string"
      && typeof message.partyName === "string"
      && typeof message.text === "string",
    );
  }
} catch (error) {
  likedDebateMessages = [];
}
const mapCanvas = document.querySelector(".map-canvas");
const mapScene = document.getElementById("mapScene");
const mapSceneFrame = document.getElementById("mapSceneFrame");
const mapZoomInButton = document.getElementById("mapZoomIn");
const mapZoomOutButton = document.getElementById("mapZoomOut");
const mapZoomLabel = document.getElementById("mapZoomLabel");

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

const llmConfig = {
  apiKey: window.KOMPASS_LLM_CONFIG?.apiKey
    || localStorage.getItem("kompass_llm_api_key")
    || "",
  endpoint: window.KOMPASS_LLM_CONFIG?.endpoint
    || localStorage.getItem("kompass_llm_endpoint")
    || "https://api.openai.com/v1/chat/completions",
  model: window.KOMPASS_LLM_CONFIG?.model
    || localStorage.getItem("kompass_llm_model")
    || "gpt-4o-mini",
};

const llmSettingsButton = document.getElementById("llmSettingsButton");
const llmSettingsPanel = document.getElementById("llmSettingsPanel");
const llmApiKeyInput = document.getElementById("llmApiKeyInput");
const llmEndpointInput = document.getElementById("llmEndpointInput");
const llmModelInput = document.getElementById("llmModelInput");
const closeLlmSettings = document.getElementById("closeLlmSettings");
const saveLlmSettings = document.getElementById("saveLlmSettings");
const clearLlmSettings = document.getElementById("clearLlmSettings");
const categoryBadges = document.getElementById("categoryBadges");
const categoryList = document.getElementById("categoryList");
const subcategoryList = document.getElementById("subcategoryList");

const categoryDefinitions = [
  {
    id: "ekonomi",
    title: "Ekonomi & skatter",
    shortTitle: "Ekonomi",
    subcategories: ["Skatter", "Statsbudget", "Företagande"],
    description: "Hur skatter, statsbudget och företagsklimat påverkar människors vardag och samhällsutvecklingen.",
    source: "Ekonomi & skatter",
    meta: "Skatter • Statsbudget • Företagande",
    history: "Det här området fokuserar på hur staten finansierar verksamhet, vilka skatter som tas ut och hur företagarna påverkas.",
    facts: [
      "Skattesystemet och statsbudgeten avgör hur mycket som kan användas till välfärd, infrastruktur och investeringar.",
      "Företagande påverkas av skatter, regleringar och hur offentliga investeringar prioriteras.",
    ],
    sources: [
      { title: "Riksdagen · Budget och skatter", url: "https://www.riksdagen.se/sv/" },
      { title: "Skatteverket", url: "https://www.skatteverket.se/" },
    ],
  },
  {
    id: "valfard",
    title: "Välfärd",
    shortTitle: "Välfärd",
    subcategories: ["Sjukvård", "Skola", "Äldreomsorg"],
    description: "Välfärd handlar om hur samhället organiserar sjukvård, skola och stöd till äldre och utsatta grupper.",
    source: "Välfärd",
    meta: "Sjukvård • Skola • Äldreomsorg",
    history: "Det här området jämför hur olika politiska förslag påverkar tillgänglighet, kvalitet och kostnader inom välfärden.",
    facts: [
      "Hälso- och sjukvård, skola och äldreomsorg är centrala för social trygghet och lika möjligheter.",
      "Tillgänglighet och resurser avgör hur väl välfärden fungerar i praktiken.",
    ],
    sources: [
      { title: "Socialstyrelsen", url: "https://www.socialstyrelsen.se/" },
      { title: "Skolverket", url: "https://www.skolverket.se/" },
    ],
  },
  {
    id: "lag",
    title: "Lag & rätt",
    shortTitle: "Lag & rätt",
    subcategories: ["Polis", "Domstolar", "Kriminalpolitik"],
    description: "Omfattar rättssäkerhet, polisens arbete, domstolar och hur brott och straff ska hanteras i samhället.",
    source: "Lag & rätt",
    meta: "Polis • Domstolar • Kriminalpolitik",
    history: "Detta politikområde behandlar trygghet, rättssäkerhet, rättsväsendets resurser och hur brottslighet ska förebyggas.",
    facts: [
      "Rättssystemet bygger på legalitet, rättssäkerhet och lika behandling inför lagen.",
      "Polis, domstolar och kriminalpolitik är centrala för trygghet och förtroende i samhället.",
    ],
    sources: [
      { title: "Brottsförebyggande rådet", url: "https://bra.se/" },
      { title: "Riksdagen · Rättsväsen", url: "https://www.riksdagen.se/sv/" },
    ],
  },
  {
    id: "migration",
    title: "Migration & integration",
    shortTitle: "Migration",
    subcategories: ["Asyl", "Integration", "Medborgarskap"],
    description: "Här ingår hur asyl, migration och integration ska organiseras samt hur medborgarskap och inkludering formas.",
    source: "Migration & integration",
    meta: "Asyl • Integration • Medborgarskap",
    history: "Detta område handlar om ansvar, rättigheter, integration och hur ett land förhåller sig till invandring och inkludering.",
    facts: [
      "Integration kräver både individuella stödinsatser och ett fungerande samhälls- och arbetsmarknadsperspektiv.",
      "Medborgarskap, asylregler och integration är nära kopplade till demokrati och rättigheter.",
    ],
    sources: [
      { title: "Migrationsverket", url: "https://www.migrationsverket.se/" },
      { title: "Integrationsverket", url: "https://www.integrationsverket.se/" },
    ],
  },
  {
    id: "miljo",
    title: "Miljö & energi",
    shortTitle: "Miljö",
    subcategories: ["Klimatpolitik", "Elförsörjning", "Naturvård"],
    description: "Rör klimatpolitik, energiförsörjning och naturvårdsfrågor i syfte att skapa ett hållbart samhälle.",
    source: "Miljö & energi",
    meta: "Klimatpolitik • Elförsörjning • Naturvård",
    history: "Det här området fokuserar på hur samhällsekonomin, energisystemet och klimatmålen samspelar i omställningen.",
    facts: [
      "Energi- och klimatpolitiken påverkar både ekonomi och livskvalitet i vardagen.",
      "Naturvård och klimatarbete hänger nära ihop med hur Sverige gör hållbara investeringar.",
    ],
    sources: [
      { title: "Naturvårdsverket", url: "https://www.naturvardsverket.se/" },
      { title: "Energimyndigheten", url: "https://www.energimyndigheten.se/" },
    ],
  },
  {
    id: "arbetsmarknad",
    title: "Arbetsmarknad & socialpolitik",
    shortTitle: "Arbetsmarknad",
    subcategories: ["Sysselsättning", "A-kassa", "Socialförsäkringar"],
    description: "Detta området handlar om jobb, arbetsvillkor, social trygghet och hur samhället stödjer arbetande människor.",
    source: "Arbetsmarknad & socialpolitik",
    meta: "Sysselsättning • A-kassa • Socialförsäkringar",
    history: "Här jämförs hur olika politiska reformer påverkar tillväxt, trygghet och möjligheten att få arbete och försörjning.",
    facts: [
      "Sysselsättning och social trygghet hänger ihop med både ekonomisk tillväxt och livssituationer för familjer.",
      "A-kassa och socialförsäkringar hjälper människor vid arbetslöshet, sjukdom och ekonomisk utsatthet.",
    ],
    sources: [
      { title: "Arbetsförmedlingen", url: "https://www.arbetsformedlingen.se/" },
      { title: "Försäkringskassan", url: "https://www.forsakringskassan.se/" },
    ],
  },
  {
    id: "forsvar",
    title: "Försvar & utrikespolitik",
    shortTitle: "Försvar",
    subcategories: ["Försvar", "EU", "Internationella relationer"],
    description: "Handlar om säkerhetspolitik, Sveriges försvar, EU-samarbete och relationer med andra länder.",
    source: "Försvar & utrikespolitik",
    meta: "Försvar • EU • Internationella relationer",
    history: "Det här området omfattar säkerhet, utrikespolitik, internationellt samarbete och Sveriges roll i Europa och världen.",
    facts: [
      "Försvar och utrikespolitik påverkar både säkerhet, handel och Sveriges ställning i världen.",
      "EU-samarbetet påverkar lagstiftning, ekonomi och samverkan i frågor som säkerhet och utrikespolitik.",
    ],
    sources: [
      { title: "Utrikesdepartementet", url: "https://www.government.se/" },
      { title: "EU-kommissionen", url: "https://ec.europa.eu/" },
    ],
  },
];

const nodeContent = {
  start: {
    title: "Din politiska karta",
    description: "Skapa din prioritering av viktiga politikområden från topp till botten.",
    source: "Ekonomi & skatter",
    meta: "Övergripande prioritering · 7 kategorier",
    history: "Använd listan för att rangordna de frågor som är viktigast för dig just nu.",
    facts: [
      "Det här diagrammet låter dig sätta din egen prioritering bland de viktigaste samhällsområdena.",
      "Du kan flytta de olika kategorierna upp eller ner med hjälp av listan i högerkolumnen.",
    ],
    sources: categoryDefinitions.flatMap((category) => category.sources),
  },
  ...Object.fromEntries(categoryDefinitions.map((category) => [category.id, {
    title: category.title,
    description: category.description,
    source: category.source,
    meta: category.meta,
    history: category.history,
    facts: category.facts,
    sources: category.sources,
  }])),
};

const subcategoryParents = {};
categoryDefinitions.forEach((category) => {
  category.subcategories.forEach((subcategory, index) => {
    const nodeId = `${category.id}-sub-${index + 1}`;
    subcategoryParents[nodeId] = category.id;
    nodeContent[nodeId] = {
      title: subcategory,
      description: `${subcategory} är en del av ${category.title}. ${category.description}`,
      source: category.title,
      meta: `Underkategori · ${category.title}`,
      history: category.history,
      facts: category.facts,
      sources: category.sources,
    };
  });
});

const categoryOrder = [...categoryDefinitions.map((category) => category.id)];
const subcategoryOrder = Object.keys(subcategoryParents);
const sources = [];
const conversationMessages = [];
let activeNodeKey = "ekonomi";
let mapZoom = 0.7;
const defaultMapNodePositions = {
  start: { left: 446, top: 436 },
  ekonomi: { left: 220, top: 372 },
  valfard: { left: 672, top: 358 },
  lag: { left: 469, top: 635 },
  migration: { left: 559, top: 242 },
  miljo: { left: 361, top: 245 },
  arbetsmarknad: { left: 287, top: 558 },
  forsvar: { left: 642, top: 570 },
  "ekonomi-sub-1": { left: 47, top: 471 },
  "ekonomi-sub-2": { left: 38, top: 362 },
  "ekonomi-sub-3": { left: 89, top: 229 },
  "valfard-sub-1": { left: 797, top: 264 },
  "valfard-sub-2": { left: 835, top: 381 },
  "valfard-sub-3": { left: 828, top: 494 },
  "lag-sub-1": { left: 640, top: 873 },
  "lag-sub-2": { left: 501, top: 863 },
  "lag-sub-3": { left: 370, top: 854 },
  "migration-sub-1": { left: 552, top: 54 },
  "migration-sub-2": { left: 775, top: 159 },
  "migration-sub-3": { left: 699, top: 78 },
  "miljo-sub-1": { left: 155, top: 150 },
  "miljo-sub-2": { left: 250, top: 86 },
  "miljo-sub-3": { left: 391, top: 90 },
  "arbetsmarknad-sub-1": { left: 197, top: 789 },
  "arbetsmarknad-sub-2": { left: 65, top: 708 },
  "arbetsmarknad-sub-3": { left: 38, top: 620 },
  "forsvar-sub-1": { left: 851, top: 614 },
  "forsvar-sub-2": { left: 840, top: 682 },
  "forsvar-sub-3": { left: 751, top: 747 },
};

const nodePalette = {
  start: { from: "#1f2937", to: "#4b5563", text: "#f8f9ff", subtext: "rgba(255,255,255,.78)" },
  ekonomi: { from: "#f9d7a5", to: "#f0a65b", text: "#4a2b10", subtext: "rgba(74,43,16,.7)" },
  valfard: { from: "#bfe7d9", to: "#7ac4ad", text: "#1b3d34", subtext: "rgba(27,61,52,.7)" },
  lag: { from: "#d8d0ff", to: "#8d82df", text: "#271f4a", subtext: "rgba(39,31,74,.7)" },
  migration: { from: "#f7c6d9", to: "#e689b0", text: "#4d1c2d", subtext: "rgba(77,28,45,.7)" },
  miljo: { from: "#d6f5c6", to: "#7ac77f", text: "#1f4024", subtext: "rgba(31,64,36,.7)" },
  arbetsmarknad: { from: "#ffd3be", to: "#f29a82", text: "#402217", subtext: "rgba(64,34,23,.7)" },
  forsvar: { from: "#cfe8ff", to: "#7fa9de", text: "#18314d", subtext: "rgba(24,49,77,.7)" },
};

function applyNodePalette() {
  document.querySelectorAll(".map-node").forEach((node) => {
    const palette = nodePalette[node.dataset.categoryId || node.dataset.node] || nodePalette.ekonomi;
    node.style.background = `linear-gradient(135deg, ${palette.from}, ${palette.to})`;
    node.style.borderColor = "rgba(255,255,255,.72)";
    node.style.color = palette.text;
    const label = node.querySelector("small");
    if (label) {
      label.style.color = palette.subtext;
    }
  });
}

function createSubcategoryNodes() {
  const svg = mapScene?.querySelector(".map-connections");
  if (!mapScene || !svg) return;

  categoryDefinitions.forEach((category) => {
    category.subcategories.forEach((subcategory, index) => {
      const nodeId = `${category.id}-sub-${index + 1}`;
      const node = document.createElement("button");
      node.type = "button";
      node.className = "map-node map-subcategory-node";
      node.dataset.node = nodeId;
      node.dataset.categoryId = category.id;
      node.setAttribute("aria-pressed", "false");
      node.setAttribute("aria-label", `${subcategory}, underkategori till ${category.title}`);

      const label = document.createElement("span");
      label.textContent = subcategory;
      node.appendChild(label);
      mapScene.appendChild(node);

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.dataset.from = category.id;
      line.dataset.connection = nodeId;
      svg.appendChild(line);
    });
  });
}

function renderCategoryBadges(category) {
  if (!categoryBadges) return;
  categoryBadges.replaceChildren();
  category.subcategories.forEach((item) => {
    const badge = document.createElement("span");
    badge.className = "category-badge";
    badge.textContent = item;
    categoryBadges.appendChild(badge);
  });
}
function renderCategoryCards() {
  if (!categoryList) return;
  categoryList.replaceChildren();

  categoryOrder.forEach((id, index) => {
    const category = categoryDefinitions.find((item) => item.id === id);
    if (!category) return;

    const card = document.createElement("article");
    const selectedCategory = subcategoryParents[activeNodeKey] || activeNodeKey;
    card.className = `category-card${selectedCategory === id ? " is-selected" : ""}`;
    card.draggable = true;
    card.dataset.categoryId = id;

    const header = document.createElement("div");
    header.className = "category-card-header";

    const title = document.createElement("p");
    title.className = "category-card-title";
    title.textContent = category.title;

    const rank = document.createElement("span");
    rank.className = "category-card-rank";
    rank.textContent = `#${index + 1}`;

    const badges = document.createElement("div");
    badges.className = "category-card-badges";
    category.subcategories.forEach((item) => {
      const badge = document.createElement("span");
      badge.className = "category-card-badge";
      badge.textContent = item;
      badges.appendChild(badge);
    });

    const actions = document.createElement("div");
    actions.className = "category-card-actions";

    const upButton = document.createElement("button");
    upButton.type = "button";
    upButton.className = "category-card-button";
    upButton.setAttribute("aria-label", `Flytta ${category.title} upp`);
    upButton.textContent = "↑";
    upButton.disabled = index === 0;
    upButton.addEventListener("click", (event) => {
      event.stopPropagation();
      moveCategory(id, -1);
    });

    const downButton = document.createElement("button");
    downButton.type = "button";
    downButton.className = "category-card-button";
    downButton.setAttribute("aria-label", `Flytta ${category.title} ner`);
    downButton.textContent = "↓";
    downButton.disabled = index === categoryOrder.length - 1;
    downButton.addEventListener("click", (event) => {
      event.stopPropagation();
      moveCategory(id, 1);
    });

    actions.append(upButton, downButton);
    header.append(title, rank);
    card.append(header, badges, actions);

    card.addEventListener("click", () => selectMindmapNode(id));
    card.addEventListener("dragstart", (event) => {
      card.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", id);
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
      document.querySelectorAll(".category-card").forEach((node) => node.classList.remove("drag-over"));
    });
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      card.classList.add("drag-over");
    });
    card.addEventListener("dragleave", () => card.classList.remove("drag-over"));
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("drag-over");
      const draggedId = event.dataTransfer.getData("text/plain");
      reorderCategory(draggedId, id);
    });

    categoryList.appendChild(card);
  });

  updateRankedNodeSizes();
}

function renderSubcategoryCards() {
  if (!subcategoryList) return;
  subcategoryList.replaceChildren();

  subcategoryOrder.forEach((id, index) => {
    const content = nodeContent[id];
    const parentId = subcategoryParents[id];
    const parent = categoryDefinitions.find((category) => category.id === parentId);
    if (!content || !parent) return;

    const card = document.createElement("article");
    card.className = `category-card subcategory-card${activeNodeKey === id ? " is-selected" : ""}`;
    card.draggable = true;
    card.dataset.subcategoryId = id;

    const header = document.createElement("div");
    header.className = "category-card-header";

    const title = document.createElement("p");
    title.className = "category-card-title";
    title.textContent = content.title;

    const rank = document.createElement("select");
    rank.className = "subcategory-rank-select";
    rank.dataset.rankId = id;
    rank.setAttribute("aria-label", `Placering för ${content.title}`);
    subcategoryOrder.forEach((subcategoryId, rankIndex) => {
      const option = document.createElement("option");
      option.value = String(rankIndex + 1);
      option.textContent = `#${rankIndex + 1}`;
      option.selected = rankIndex === index;
      rank.appendChild(option);
    });
    rank.addEventListener("click", (event) => event.stopPropagation());
    rank.addEventListener("change", () => {
      const requestedRank = Number(rank.value);
      moveSubcategoryToRank(id, requestedRank - 1);
    });

    const parentLabel = document.createElement("small");
    parentLabel.className = "subcategory-parent";
    parentLabel.textContent = parent.title;

    const actions = document.createElement("div");
    actions.className = "category-card-actions";

    const upButton = document.createElement("button");
    upButton.type = "button";
    upButton.className = "category-card-button";
    upButton.setAttribute("aria-label", `Flytta ${content.title} upp`);
    upButton.textContent = "↑";
    upButton.disabled = index === 0;
    upButton.addEventListener("click", (event) => {
      event.stopPropagation();
      moveSubcategory(id, -1);
    });

    const downButton = document.createElement("button");
    downButton.type = "button";
    downButton.className = "category-card-button";
    downButton.setAttribute("aria-label", `Flytta ${content.title} ner`);
    downButton.textContent = "↓";
    downButton.disabled = index === subcategoryOrder.length - 1;
    downButton.addEventListener("click", (event) => {
      event.stopPropagation();
      moveSubcategory(id, 1);
    });

    actions.append(upButton, downButton);
    header.append(title, rank);
    card.append(header, parentLabel, actions);

    card.addEventListener("click", () => selectMindmapNode(id));
    card.addEventListener("dragstart", (event) => {
      card.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", id);
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
      document.querySelectorAll(".subcategory-card").forEach((node) => node.classList.remove("drag-over"));
    });
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      card.classList.add("drag-over");
    });
    card.addEventListener("dragleave", () => card.classList.remove("drag-over"));
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("drag-over");
      reorderSubcategory(event.dataTransfer.getData("text/plain"), id);
    });

    subcategoryList.appendChild(card);
  });

  updateRankedNodeSizes();
}

function moveCategory(id, direction) {
  const currentIndex = categoryOrder.indexOf(id);
  const nextIndex = currentIndex + direction;
  if (currentIndex < 0 || nextIndex < 0 || nextIndex >= categoryOrder.length) return;

  const [movedItem] = categoryOrder.splice(currentIndex, 1);
  categoryOrder.splice(nextIndex, 0, movedItem);
  renderCategoryCards();
}

function moveSubcategory(id, direction) {
  const currentIndex = subcategoryOrder.indexOf(id);
  const nextIndex = currentIndex + direction;
  if (currentIndex < 0 || nextIndex < 0 || nextIndex >= subcategoryOrder.length) return;

  const [movedItem] = subcategoryOrder.splice(currentIndex, 1);
  subcategoryOrder.splice(nextIndex, 0, movedItem);
  renderSubcategoryCards();
}

function moveSubcategoryToRank(id, targetIndex) {
  const currentIndex = subcategoryOrder.indexOf(id);
  if (currentIndex < 0 || targetIndex < 0 || targetIndex >= subcategoryOrder.length) return;

  const [movedItem] = subcategoryOrder.splice(currentIndex, 1);
  subcategoryOrder.splice(targetIndex, 0, movedItem);
  renderSubcategoryCards();
  subcategoryList.querySelector(`[data-rank-id="${id}"]`)?.focus();
}

function reorderCategory(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const from = categoryOrder.indexOf(sourceId);
  const to = categoryOrder.indexOf(targetId);
  if (from === -1 || to === -1) return;

  const [movedItem] = categoryOrder.splice(from, 1);
  categoryOrder.splice(to, 0, movedItem);
  renderCategoryCards();
}

function reorderSubcategory(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId) return;
  const from = subcategoryOrder.indexOf(sourceId);
  const to = subcategoryOrder.indexOf(targetId);
  if (from === -1 || to === -1) return;

  const [movedItem] = subcategoryOrder.splice(from, 1);
  subcategoryOrder.splice(to, 0, movedItem);
  renderSubcategoryCards();
}

function updateMapConnections() {
  const scene = mapScene;
  const svg = scene?.querySelector(".map-connections");
  if (!scene || !svg || scene.clientWidth === 0) return;

  svg.setAttribute("viewBox", `0 0 ${scene.clientWidth} ${scene.clientHeight}`);

  svg.querySelectorAll("[data-connection]").forEach((line) => {
    const source = scene.querySelector(`[data-node="${line.dataset.from || "start"}"]`);
    const target = scene.querySelector(`[data-node="${line.dataset.connection}"]`);
    if (!source || !target) return;
    line.setAttribute("x1", source.offsetLeft + source.offsetWidth / 2);
    line.setAttribute("y1", source.offsetTop + source.offsetHeight / 2);
    line.setAttribute("x2", target.offsetLeft + target.offsetWidth / 2);
    line.setAttribute("y2", target.offsetTop + target.offsetHeight / 2);
  });
}

function preventNodeOverlap(node, nextLeft, nextTop) {
  const scene = node.closest(".map-scene");
  if (!scene) return { left: nextLeft, top: nextTop };

  const canvasWidth = scene.clientWidth;
  const canvasHeight = scene.clientHeight;
  const nodeWidth = node.offsetWidth;
  const nodeHeight = node.offsetHeight;
  const edgePadding = 12;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const hasOverlap = (left, top) => {
    const rect = {
      left,
      top,
      right: left + nodeWidth,
      bottom: top + nodeHeight,
    };

    return [...document.querySelectorAll(".map-node")].some((other) => {
      if (other === node) return false;
      const otherRect = {
        left: other.offsetLeft,
        top: other.offsetTop,
        right: other.offsetLeft + other.offsetWidth,
        bottom: other.offsetTop + other.offsetHeight,
      };

      return rect.right > otherRect.left
        && rect.left < otherRect.right
        && rect.bottom > otherRect.top
        && rect.top < otherRect.bottom;
    });
  };

  const candidate = {
    left: clamp(nextLeft, edgePadding, canvasWidth - nodeWidth - edgePadding),
    top: clamp(nextTop, edgePadding, canvasHeight - nodeHeight - edgePadding),
  };

  if (!hasOverlap(candidate.left, candidate.top)) {
    return candidate;
  }

  for (let distance = 8; distance <= Math.max(canvasWidth, canvasHeight); distance += 8) {
    for (let dx = -distance; dx <= distance; dx += 8) {
      const dy = distance - Math.abs(dx);
      const verticalOffsets = dy === 0 ? [0] : [-dy, dy];
      for (const offsetY of verticalOffsets) {
        const testLeft = clamp(candidate.left + dx, edgePadding, canvasWidth - nodeWidth - edgePadding);
        const testTop = clamp(candidate.top + offsetY, edgePadding, canvasHeight - nodeHeight - edgePadding);
        if (!hasOverlap(testLeft, testTop)) {
          return { left: testLeft, top: testTop };
        }
      }
    }
  }

  return candidate;
}

function updateRankedNodeSizes() {
  const scene = mapScene;
  if (!scene || scene.clientWidth === 0) return;

  const scale = Math.min(1, Math.max(0.8, scene.clientWidth / 700));
  const nodes = [...scene.querySelectorAll(".map-node")];
  const centerNode = nodes.find((node) => node.dataset.node === "start");
  if (centerNode) {
    const centerSize = Math.round(108 * scale);
    centerNode.style.width = `${centerSize}px`;
    centerNode.style.height = `${centerSize}px`;
    if (!centerNode.dataset.userMoved) {
      centerNode.style.left = `${(scene.clientWidth - centerSize) / 2}px`;
      centerNode.style.top = `${(scene.clientHeight - centerSize) / 2}px`;
    }
  }

  categoryOrder.forEach((id, index) => {
    const node = nodes.find((item) => item.dataset.node === id);
    if (!node) return;
    const size = Math.round((136 - index * 9) * scale);
    node.style.width = `${size}px`;
    node.style.height = `${size}px`;
  });

  let applyingDefaultPositions = false;
  nodes.forEach((node) => {
    if (node.dataset.defaultPositioned) return;
    const position = defaultMapNodePositions[node.dataset.node];
    if (!position) return;
    node.style.left = `${position.left}px`;
    node.style.top = `${position.top}px`;
    node.dataset.defaultPositioned = "true";
    applyingDefaultPositions = true;
  });

  if (!applyingDefaultPositions) {
    nodes.filter((node) => !node.dataset.categoryId && node !== centerNode).forEach((node) => {
      const position = preventNodeOverlap(node, node.offsetLeft, node.offsetTop);
      node.style.left = `${position.left}px`;
      node.style.top = `${position.top}px`;
    });
  }

  const subcategoryNodes = nodes.filter((node) => node.dataset.categoryId);
  subcategoryNodes.forEach((node) => {
    const rank = subcategoryOrder.indexOf(node.dataset.node);
    const width = Math.max(86, 150 - Math.max(0, rank) * 3.2);
    const height = Math.max(46, 66 - Math.max(0, rank));
    node.style.width = `${Math.round(width * scale)}px`;
    node.style.height = `${Math.round(height * scale)}px`;
  });

  subcategoryNodes.forEach((node) => {
    if (node.style.left) return;
    const parent = nodes.find((item) => item.dataset.node === node.dataset.categoryId);
    if (!parent) return;
    const parentCenterX = parent.offsetLeft + parent.offsetWidth / 2;
    const parentCenterY = parent.offsetTop + parent.offsetHeight / 2;
    const centerX = centerNode.offsetLeft + centerNode.offsetWidth / 2;
    const centerY = centerNode.offsetTop + centerNode.offsetHeight / 2;
    let angle = Math.atan2(parentCenterY - centerY, parentCenterX - centerX);
    if (Math.hypot(parentCenterX - centerX, parentCenterY - centerY) < 1) {
      angle = categoryOrder.indexOf(node.dataset.categoryId) * (Math.PI * 2 / categoryOrder.length);
    }

    const subcategoryIndex = Number(node.dataset.node.split("-sub-")[1]) - 1;
    angle += (subcategoryIndex - 1) * 0.9;
    const radius = Math.round(155 * scale);
    node.style.left = `${parentCenterX + Math.cos(angle) * radius - node.offsetWidth / 2}px`;
    node.style.top = `${parentCenterY + Math.sin(angle) * radius - node.offsetHeight / 2}px`;
  });

  if (!applyingDefaultPositions) {
    subcategoryNodes.forEach((node) => {
      const position = preventNodeOverlap(node, node.offsetLeft, node.offsetTop);
      node.style.left = `${position.left}px`;
      node.style.top = `${position.top}px`;
    });
  }
  updateMapConnections();
}

function setMapZoom(nextZoom) {
  if (!mapScene || !mapSceneFrame || !mapCanvas) return;
  const focusX = (mapCanvas.scrollLeft + mapCanvas.clientWidth / 2) / mapZoom;
  const focusY = (mapCanvas.scrollTop + mapCanvas.clientHeight / 2) / mapZoom;
  mapZoom = Math.min(1.6, Math.max(0.7, Number(nextZoom.toFixed(2))));
  mapScene.style.transform = `scale(${mapZoom})`;
  mapSceneFrame.style.width = `${mapScene.offsetWidth * mapZoom}px`;
  mapSceneFrame.style.height = `${mapScene.offsetHeight * mapZoom}px`;
  mapZoomLabel.textContent = `${Math.round(mapZoom * 100)}%`;
  mapZoomInButton.disabled = mapZoom >= 1.6;
  mapZoomOutButton.disabled = mapZoom <= 0.7;
  mapCanvas.scrollLeft = Math.max(0, focusX * mapZoom - mapCanvas.clientWidth / 2);
  mapCanvas.scrollTop = Math.max(0, focusY * mapZoom - mapCanvas.clientHeight / 2);
  updateMapConnections();
}

mapZoomInButton.addEventListener("click", () => setMapZoom(mapZoom + 0.15));
mapZoomOutButton.addEventListener("click", () => setMapZoom(mapZoom - 0.15));

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
  if (showMindmap) {
    updateRankedNodeSizes();
    if (!mapCanvas.dataset.initialViewport) {
      mapCanvas.scrollLeft = Math.max(0, mapScene.offsetWidth * mapZoom / 2 - mapCanvas.clientWidth / 2);
      mapCanvas.scrollTop = Math.max(0, mapScene.offsetHeight * mapZoom / 2 - mapCanvas.clientHeight / 2);
      mapCanvas.dataset.initialViewport = "centered";
    }
    setMapZoom(mapZoom);
  }
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
  const categoryId = subcategoryParents[nodeKey] || nodeKey;
  const category = categoryDefinitions.find((item) => item.id === categoryId) || categoryDefinitions[0];

  nodeTitle.textContent = content.title;
  nodeDescription.textContent = content.description;
  nodeSource.textContent = content.source;
  nodeSourceMeta.textContent = content.meta;
  nodeHistory.textContent = content.history;
  renderCategoryBadges(category);
  renderCategoryCards();
  renderSubcategoryCards();

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

createSubcategoryNodes();
mapScene.style.transform = `scale(${mapZoom})`;
renderLikedDebateMessages();
partyRows.forEach((row) => row.setAttribute("aria-pressed", "false"));
document.querySelectorAll(".map-node").forEach((node) => node.setAttribute("aria-pressed", "false"));
applyNodePalette();
renderCategoryCards();
selectMindmapNode("ekonomi");

const mapNodes = document.querySelectorAll(".map-node");
let dragState = null;
let panState = null;

mapCanvas.addEventListener("pointerdown", (event) => {
  if (event.button !== 0 || event.target.closest(".map-node, .map-zoom-controls")) return;
  panState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    scrollLeft: mapCanvas.scrollLeft,
    scrollTop: mapCanvas.scrollTop,
  };
  mapCanvas.classList.add("is-panning");
  try {
    mapCanvas.setPointerCapture(event.pointerId);
  } catch (error) {
    // Pointer capture is optional when the map is panned with a mouse.
  }
});

mapNodes.forEach((node) => {
  node.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    const scene = node.closest(".map-scene");
    if (!scene) return;
    const nodeRect = node.getBoundingClientRect();
    dragState = {
      node,
      scene,
      offsetX: (event.clientX - nodeRect.left) / mapZoom,
      offsetY: (event.clientY - nodeRect.top) / mapZoom,
    };
    node.dataset.userMoved = "true";
    if (node.setPointerCapture && !node.hasPointerCapture?.(event.pointerId)) {
      try {
        node.setPointerCapture(event.pointerId);
      } catch (error) {
        // pointer capture is optional and not required for this prototype interaction.
      }
    }
    selectMindmapNode(node.dataset.node);
  });
});

window.addEventListener("pointermove", (event) => {
  if (panState && event.pointerId === panState.pointerId) {
    mapCanvas.scrollLeft = panState.scrollLeft - (event.clientX - panState.startX);
    mapCanvas.scrollTop = panState.scrollTop - (event.clientY - panState.startY);
    return;
  }
  if (!dragState) return;
  const { scene, node, offsetX, offsetY } = dragState;
  const sceneRect = scene.getBoundingClientRect();
  const nextLeft = (event.clientX - sceneRect.left) / mapZoom - offsetX;
  const nextTop = (event.clientY - sceneRect.top) / mapZoom - offsetY;
  const adjusted = preventNodeOverlap(node, nextLeft, nextTop);
  node.style.left = `${adjusted.left}px`;
  node.style.top = `${adjusted.top}px`;
  updateMapConnections();
});

function stopMapPointerInteraction(event) {
  if (panState && event.pointerId === panState.pointerId) {
    panState = null;
    mapCanvas.classList.remove("is-panning");
  }
  dragState = null;
}

window.addEventListener("pointerup", stopMapPointerInteraction);
window.addEventListener("pointercancel", stopMapPointerInteraction);

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
  if (className === "debate-party-message") {
    message.dataset.debateMessageId = window.crypto?.randomUUID?.()
      || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
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
  if (className === "debate-party-message") {
    const likeButton = document.createElement("button");
    likeButton.type = "button";
    likeButton.className = "debate-like-button";
    setDebateLikeButtonState(likeButton, partyName, false);
    likeButton.addEventListener("click", () => {
      const liked = likeButton.getAttribute("aria-pressed") !== "true";
      const savedMessage = {
        id: message.dataset.debateMessageId,
        partyName,
        text,
        sourceUrl: profile?.url || "",
      };
      setDebateMessageLiked(savedMessage, liked);
    });
    message.append(likeButton);
  }
  debateLog.append(message);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function setDebateLikeButtonState(button, partyName, liked) {
  button.textContent = liked ? "♥" : "♡";
  button.classList.toggle("is-liked", liked);
  button.setAttribute("aria-pressed", String(liked));
  const label = `${liked ? "Ta bort gilla-markering från" : "Gilla"} ${partyName}s svar`;
  button.setAttribute("aria-label", label);
  button.title = label;
}

function saveLikedDebateMessages() {
  try {
    localStorage.setItem(likedDebateStorageKey, JSON.stringify(likedDebateMessages));
  } catch (error) {
    debateFeedback.textContent = "Det gillade svaret kunde inte sparas i den här webbläsaren.";
  }
}

function setDebateMessageLiked(message, liked) {
  likedDebateMessages = likedDebateMessages.filter((item) => item.id !== message.id);
  if (liked) likedDebateMessages.unshift(message);
  saveLikedDebateMessages();

  const originalButton = debateLog.querySelector(`[data-debate-message-id="${message.id}"] .debate-like-button`);
  if (originalButton) setDebateLikeButtonState(originalButton, message.partyName, liked);
  renderLikedDebateMessages();
}

function renderLikedDebateMessages() {
  if (!likedDebateList) return;
  likedDebateList.replaceChildren();

  if (likedDebateMessages.length === 0) {
    const empty = document.createElement("p");
    empty.className = "mindmap-liked-empty";
    empty.textContent = "Gillade debattsvar visas här.";
    likedDebateList.appendChild(empty);
    return;
  }

  likedDebateMessages.forEach((savedMessage) => {
    const entry = document.createElement("article");
    entry.className = "mindmap-liked-entry";

    const header = document.createElement("header");
    header.className = "mindmap-liked-entry-header";
    const partyName = document.createElement("strong");
    partyName.textContent = savedMessage.partyName;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "mindmap-liked-remove";
    removeButton.textContent = "♥";
    removeButton.setAttribute("aria-label", `Ta bort gillning från ${savedMessage.partyName}s svar`);
    removeButton.title = "Ta bort gillning";
    removeButton.addEventListener("click", () => setDebateMessageLiked(savedMessage, false));
    header.append(partyName, removeButton);

    const text = document.createElement("p");
    text.textContent = savedMessage.text;
    entry.append(header, text);

    if (savedMessage.sourceUrl) {
      const source = document.createElement("a");
      source.href = savedMessage.sourceUrl;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = `Källa: ${savedMessage.partyName} ↗`;
      entry.appendChild(source);
    }

    likedDebateList.appendChild(entry);
  });
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

llmSettingsButton.addEventListener("click", () => {
  const isHidden = llmSettingsPanel.hidden;
  llmSettingsPanel.hidden = !isHidden;
  if (!llmSettingsPanel.hidden) {
    applyLlmInputs();
    llmApiKeyInput.focus();
  }
});

closeLlmSettings.addEventListener("click", () => {
  llmSettingsPanel.hidden = true;
});

saveLlmSettings.addEventListener("click", saveLlmSettingsToStorage);
clearLlmSettings.addEventListener("click", clearLlmSettingsFromStorage);

window.addEventListener("click", (event) => {
  if (!llmSettingsPanel.hidden && !llmSettingsPanel.contains(event.target) && event.target !== llmSettingsButton) {
    llmSettingsPanel.hidden = true;
  }
});

applyLlmInputs();

function applyLlmInputs() {
  llmApiKeyInput.value = llmConfig.apiKey || "";
  llmEndpointInput.value = llmConfig.endpoint || "https://api.openai.com/v1/chat/completions";
  llmModelInput.value = llmConfig.model || "gpt-4o-mini";
}

function saveLlmSettingsToStorage() {
  const apiKey = llmApiKeyInput.value.trim();
  const endpoint = llmEndpointInput.value.trim() || "https://api.openai.com/v1/chat/completions";
  const model = llmModelInput.value.trim() || "gpt-4o-mini";

  llmConfig.apiKey = apiKey;
  llmConfig.endpoint = endpoint;
  llmConfig.model = model;

  if (apiKey) {
    localStorage.setItem("kompass_llm_api_key", apiKey);
  } else {
    localStorage.removeItem("kompass_llm_api_key");
  }

  localStorage.setItem("kompass_llm_endpoint", endpoint);
  localStorage.setItem("kompass_llm_model", model);
  window.KOMPASS_LLM_CONFIG = {
    apiKey,
    endpoint,
    model,
  };

  llmSettingsPanel.hidden = true;
}

function clearLlmSettingsFromStorage() {
  llmConfig.apiKey = "";
  llmConfig.endpoint = "https://api.openai.com/v1/chat/completions";
  llmConfig.model = "gpt-4o-mini";

  localStorage.removeItem("kompass_llm_api_key");
  localStorage.removeItem("kompass_llm_endpoint");
  localStorage.removeItem("kompass_llm_model");
  window.KOMPASS_LLM_CONFIG = undefined;

  applyLlmInputs();
  llmSettingsPanel.hidden = true;
}

function buildDefaultSources(question) {
  const topic = question.toLowerCase();
  const sources = [
    {
      title: "Riksdagen · Dokument och lagar",
      detail: `Officiella dokument att börja med för frågan: ${question}`,
      url: "https://www.riksdagen.se/sv/dokument-och-lagar/",
    },
    {
      title: "Valmyndigheten",
      detail: "Officiell information om val och det svenska valsystemet.",
      url: "https://www.val.se/",
    },
  ];

  if (topic.includes("klimat") || topic.includes("miljö") || topic.includes("energi")) {
    sources.unshift({
      title: "Naturvårdsverket · Klimatomställningen",
      detail: "Källor om klimatpolitik, utsläpp och den gröna omställningen.",
      url: "https://www.naturvardsverket.se/amnesomraden/klimatomstallningen/",
    });
  }

  if (topic.includes("ekonomi") || topic.includes("skatt") || topic.includes("inkomst")) {
    sources.unshift({
      title: "SCB · Hitta statistik",
      detail: "Statistik om inkomst, utgifter, ekonomi och levnadsförhållanden.",
      url: "https://www.scb.se/hitta-statistik/",
    });
  }

  if (topic.includes("vård") || topic.includes("sjuk") || topic.includes("hälso")) {
    sources.unshift({
      title: "Socialstyrelsen · Statistik",
      detail: "Statistik och kunskapsstöd om vård, socialtjänst och folkhälsa.",
      url: "https://www.socialstyrelsen.se/statistik-och-data/",
    });
  }

  return sources;
}

function buildFallbackAnswer(question) {
  return `Jag hjälper dig att jämföra perspektiv utan att välja åt dig. För frågan “${question}” är det bästa sättet att börja med officiella dokument, statistik och partiernas egna utspel, så att du får både bakgrund och tydliga skillnader.`;
}

async function fetchLlmAnswer(question) {
  const trimmedQuestion = question.trim();
  const hasApiKey = Boolean(llmConfig.apiKey);

  if (!hasApiKey) {
    return {
      text: `${buildFallbackAnswer(trimmedQuestion)}\n\nDetta är ett fallback-svar eftersom ingen LLM-nyckel är konfigurerad ännu. Sätt den i konsolen via localStorage.setItem("kompass_llm_api_key", "DIN_NYCKEL") eller via window.KOMPASS_LLM_CONFIG innan du kör chatten.`,
      sources: buildDefaultSources(trimmedQuestion),
    };
  }

  try {
    const response = await fetch(llmConfig.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${llmConfig.apiKey}`,
      },
      body: JSON.stringify({
        model: llmConfig.model,
        temperature: 0.7,
        max_tokens: 300,
        messages: [
          {
            role: "system",
            content: "Du är en hjälpsam svensk politikassistent. Svara kort, tydligt och sakligt på svenska. Fokusera på fakta, jämförelser och politiska konsekvenser. Om du inte är säker, säg att du inte kan garantera ett svar utan att nämna osäkerhet. Var aldrig partisk och undvik att välja åt användaren.",
          },
          {
            role: "user",
            content: trimmedQuestion,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`LLM request failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const payload = await response.json();
    const content = payload.choices?.[0]?.message?.content?.trim();

    if (!content) {
      throw new Error("LLM returned an empty response.");
    }

    return {
      text: content,
      sources: buildDefaultSources(trimmedQuestion),
    };
  } catch (error) {
    console.error("LLM call failed:", error);
    return {
      text: `${buildFallbackAnswer(trimmedQuestion)}\n\nLLM-anropet misslyckades, så detta är ett säkert reservsvar. Kontrollera din API-nyckel, modell eller endpoint.`,
      sources: buildDefaultSources(trimmedQuestion),
    };
  }
}

async function askQuestion(question) {
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

  const thinkingMessage = { role: "assistant", content: "Jag tänker lite först…", sources: [] };
  conversationMessages.push(thinkingMessage);
  renderConversation();

  try {
    const { text, sources } = await fetchLlmAnswer(cleanQuestion);
    const createdMessage = conversationMessages[conversationMessages.length - 1];
    if (createdMessage && createdMessage === thinkingMessage) {
      createdMessage.content = text;
      createdMessage.sources = sources;
    } else {
      addChatMessage(text, "assistant", sources);
    }
    renderConversation();
    const fallbackSources = buildDefaultSources(cleanQuestion);
    fallbackSources.forEach((source) => addSource(source));
  } catch (error) {
    const createdMessage = conversationMessages[conversationMessages.length - 1];
    if (createdMessage && createdMessage === thinkingMessage) {
      createdMessage.content = "Jag kunde inte få ett svar från LLM:et just nu. Försök igen om en liten stund.";
      createdMessage.sources = [];
    }
    renderConversation();
  }

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
setView(initialHash === "#party-stugor" ? "party" : initialHash === "#debatt" ? "debate" : initialHash === "#top" ? "home" : "mindmap", false);
