function isGoogleSearchPage() {
  return (
    location.hostname.includes("google.") && location.pathname === "/search"
  );
}

function extractPhoneFromDataAttribute() {
  const link = document.querySelector("[data-phone-number]");
  if (!link) return null;
  let phone = link.getAttribute("data-phone-number");
  if (phone && phone.startsWith("0")) phone = phone.slice(1);
  return phone;
}

function extractBusinessName() {
  const titleDiv = document.querySelector(".DoxwDb");
  const titleElem = titleDiv ? titleDiv.querySelector("div") : null;
  if (titleElem) return titleElem.innerText.trim();
  const otherTitleELem = document.querySelector(".SPZz6b");
  const otherTitle = otherTitleELem ? otherTitleELem.querySelector("span") : null;
  if (otherTitle) return otherTitle.innerText.trim();
  return null;
}

function extractDescription() {
  const descSpan = document.querySelector(".E5BaQ");
  if (descSpan) return descSpan.textContent.trim();
  const otherDescSpan = document.querySelector(".YhemCb");
  if (otherDescSpan) return otherDescSpan.textContent.trim();
  return null;
}

function createWhatsAppButton(phone) {
  const btn = document.createElement("button");
  btn.title = "Abrir no WhatsApp Web";
  btn.style.background = "#25D366";
  btn.style.border = "none";
  btn.style.borderRadius = "50%";
  btn.style.width = "32px";
  btn.style.height = "32px";
  btn.style.display = "inline-flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.style.cursor = "pointer";
  btn.style.marginLeft = "8px";
  btn.style.verticalAlign = "middle";
  btn.style.flexShrink = "0";
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" fill="white"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>`;
  btn.onclick = (e) => {
    e.stopPropagation();
    window.open(`https://web.whatsapp.com/send/?phone=${phone}`, "_blank");
  };
  return btn;
}

function createButtonSameGoogleStyle(phone) {
  const buttonGoogle = `<div jsname="UXbvIb" data-ved="2ahUKEwijsufPqLGTAxUZqpUCHQROCS8QiZkNegQIORAL" class="bkaPDb" onclick="" data-wa-phone="3132230951"><div>
  <span class="n1obkb mI8Pwc" role="button" aria-label="WhatsApp"><div class="aep93e pcFRYc ubSPH" style="background-color: #149644; border-color: #3c4043;" id="customBtnWpp"><div class="o7nARe K4LyVe" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" focusable="false" class="XbS9E U33Dk NMm5M" style="color: white;"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg></div>
  <span class="aSAiSd" style="color: white;">WhatsApp</span></div></span></div></div>`;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = buttonGoogle;
  const btn = tempDiv.firstChild;
  btn.onclick = (e) => {
    e.stopPropagation();
    window.open(`https://web.whatsapp.com/send/?phone=${phone}`, "_blank");
  };
  const style = document.createElement("style");
  style.textContent = `
    #customBtnWpp:hover {
      background-color: #085725 !important;
    }
  `;
  document.head.appendChild(style);
  return btn;
}

function insertWhatsAppButton() {
  const phoneElem = document.querySelector("[data-phone-number]");
  if (!phoneElem) return false;
  const phone = phoneElem.getAttribute("data-phone-number") || extractPhoneFromDataAttribute();
  if (!phone) return false;
  const container = phoneElem.parentNode;
  if (!container) return false;

  const existing = document.querySelector("[data-wa-injected]");
  if (existing) {
    const existingPhone = existing.getAttribute("data-wa-phone");
    if (existingPhone === phone) return false;
    existing.remove();
  }

  const btn = createButtonSameGoogleStyle(phone);
  btn.setAttribute("data-wa-phone", phone);
  btn.setAttribute("data-wa-injected", "true");
  btn.classList.add("wa-injected");
  container.insertAdjacentElement("afterend", btn);
  return true;
}

function removeWhatsAppButton() {
  const injected = document.querySelectorAll("[data-wa-injected]");
  injected.forEach((el) => el.remove());
}

function getKnowledgePanelInfo() {
  const phone = extractPhoneFromDataAttribute();
  if (!phone) return null;
  const name = extractBusinessName();
  const description = extractDescription();
  return {
    phone,
    name: name || "Empresa",
    description: description || "",
  };
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg === "getPhonesOnPage") {
    const info = getKnowledgePanelInfo();
    if (info) sendResponse([info]);
    else sendResponse([]);
  }
});

if (isGoogleSearchPage()) {
  function start() {
    // keep button state in sync with the knowledge panel
    insertWhatsAppButton();

    const debouncedUpdate = (() => {
      let t = null;
      return () => {
        if (t) clearTimeout(t);
        t = setTimeout(() => {
          const phoneElem = document.querySelector("[data-phone-number]");
          if (phoneElem) insertWhatsAppButton();
          else removeWhatsAppButton();
        }, 200);
      };
    })();

    const observer = new MutationObserver(debouncedUpdate);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });

    // also update on user interactions that may open/close the panel
    document.addEventListener("click", debouncedUpdate, true);
    document.addEventListener("focus", debouncedUpdate, true);
    window.addEventListener("visibilitychange", debouncedUpdate);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(start, 500));
  } else {
    setTimeout(start, 500);
  }
}
