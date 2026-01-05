function setupFAQ() {
  const items = document.querySelectorAll(".faq__item");

  items.forEach((item, index) => {
    const btn = item.querySelector(".faq__q");
    const answer = item.querySelector(".faq__a");
    const icon = item.querySelector(".faq__icon");

    const expanded = btn.getAttribute("aria-expanded") === "true";

    if (expanded) {
      answer.style.display = "block";
      icon.textContent = "−";
    } else {
      answer.style.display = "none";
      icon.textContent = "+";
    }

    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      items.forEach((other) => {
        const otherBtn = other.querySelector(".faq__q");
        const otherAnswer = other.querySelector(".faq__a");
        const otherIcon = other.querySelector(".faq__icon");

        otherBtn.setAttribute("aria-expanded", "false");
        otherAnswer.style.display = "none";
        otherIcon.textContent = "+";
      });

      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        answer.style.display = "block";
        icon.textContent = "−";
      }
    });

    if (index === 0) {
      btn.setAttribute("aria-expanded", "true");
      answer.style.display = "block";
      icon.textContent = "−";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupFAQ();
});


document.querySelectorAll('.scroller img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0, 0, 0, 0.85)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;
    overlay.style.cursor = 'zoom-out';

    const image = document.createElement('img');
    image.src = img.src;
    image.style.maxWidth = '90%';
    image.style.maxHeight = '90%';
    image.style.borderRadius = '8px';
    image.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';

    overlay.appendChild(image);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});


const whatsappNumero = "5547988421360";

document.querySelectorAll(".js-whatsapp").forEach((botao) => {
  botao.addEventListener("click", function (e) {
    e.preventDefault();

    const mensagem = this.dataset.whatsMsg;
    const url = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});


// LINK PADRÃO (usado agora)
const defaultCheckoutLink = "https://www.vivauau.com.br/uau-turbo/";

document.querySelectorAll(".js-buy").forEach((botao) => {
  botao.addEventListener("click", function (e) {
    e.preventDefault();

    // Se existir link específico no botão, usa ele
    const linkFinal = this.dataset.link || defaultCheckoutLink;

    window.location.href = linkFinal;
  });
});
