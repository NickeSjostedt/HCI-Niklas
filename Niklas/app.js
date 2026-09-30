const topicInputs = Array.from(document.querySelectorAll('input[name="topic"]'));
const topicCount = document.querySelector('#topic-count');
const priorityCopy = document.querySelector('#priority-copy');
const priorityList = document.querySelector('#priority-list');
const askTopicsButton = document.querySelector('#ask-topics');
const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');
const messages = document.querySelector('#messages');
const menuToggle = document.querySelector('.menu-toggle');
const rightMenuPanel = document.querySelector('.right-menu-panel');

if (menuToggle && rightMenuPanel) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    rightMenuPanel.classList.remove('is-open');
  };

  const openMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'true');
    rightMenuPanel.classList.add('is-open');
  };

  const setMenuState = (shouldOpen) => {
    if (shouldOpen) {
      openMenu();
      return;
    }
    closeMenu();
  };

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    setMenuState(!rightMenuPanel.classList.contains('is-open'));
  });

  rightMenuPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!rightMenuPanel.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });
}

const hasTopicControls = Boolean(topicCount && priorityCopy && priorityList && askTopicsButton);
const hasChatControls = Boolean(chatForm && chatInput && messages);

if (!hasTopicControls && !hasChatControls) {
  // No page-level controls for the chat layout on this page.
}

function selectedTopics() {
  return topicInputs.filter((input) => input.checked).map((input) => input.value);
}

function updatePriorities() {
  if (!hasTopicControls) return;

  const selected = selectedTopics();
  topicCount.textContent = `${selected.length} av 3 valda`;
  priorityCopy.textContent = selected.length
    ? 'Bra start. Du kan lägga till fler frågor eller börja utforska dem i chatten.'
    : 'Välj en fråga som ligger dig nära, så börjar vi där.';
  askTopicsButton.disabled = selected.length === 0;
  priorityList.replaceChildren();

  if (!selected.length) {
    const empty = document.createElement('li');
    empty.className = 'empty-priority';
    empty.textContent = 'Dina val syns här';
    priorityList.append(empty);
    return;
  }

  selected.forEach((topic) => {
    const item = document.createElement('li');
    item.textContent = topic;
    priorityList.append(item);
  });
}

if (hasTopicControls) {
  topicInputs.forEach((input) => {
    input.addEventListener('change', () => {
      const selected = selectedTopics();
      if (selected.length > 3) {
        input.checked = false;
        return;
      }
      updatePriorities();
    });
  });

  updatePriorities();
}

function addMessage(text, kind) {
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

function replyTo(text) {
  const topic = selectedTopics().find((item) => text.toLowerCase().includes(item.toLowerCase()));
  if (topic) {
    return `Du vill veta mer om ${topic.toLowerCase()}. Jag har ingen aktuell valdata att jämföra här, men du kan börja med att leta efter konkreta förslag, hur de ska finansieras och vilken källa som ligger bakom uppgiften.`;
  }
  if (/jämför|parti|partier|vallöfte|förslag/i.test(text)) {
    return 'Ett sakligt sätt att jämföra är att läsa förslagen i original, notera vad som faktiskt föreslås och kontrollera kostnader, tidsplan och källa. Jag kan inte verifiera aktuella partipositioner i den här demon.';
  }
  if (/hej|hallå/i.test(text)) {
    return 'Hej! Välj gärna en fråga ovan eller skriv vad du vill förstå bättre. Jag kan hjälpa dig att formulera nästa steg, men inte hämta aktuella valuppgifter.';
  }
  return 'Bra fråga att undersöka. Jag är en lokal demo utan uppkoppling till valdata, så jag vill inte gissa. Börja med en originalkälla och kontrollera vad som är fakta, förslag och åsikt.';
}

function sendMessage(text) {
  const cleanText = text.trim();
  if (!cleanText) return;
  addMessage(cleanText, 'user');
  chatInput.value = '';
  window.setTimeout(() => addMessage(replyTo(cleanText), 'bot'), 280);
}

if (hasChatControls) {
  chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessage(chatInput.value);
  });

  document.querySelectorAll('.suggestion').forEach((button) => {
    button.addEventListener('click', () => sendMessage(button.dataset.prompt || ''));
  });

  askTopicsButton.addEventListener('click', () => {
    const selected = selectedTopics();
    sendMessage(`Jag vill prata om ${selected.join(', ')}.`);
    document.querySelector('#chat').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
