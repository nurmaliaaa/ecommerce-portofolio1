'use strict';

/* ==================== MODAL ==================== */
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

const modalCloseFunc = () => {
  if (modal) modal.classList.add('closed');
};

if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);

/* ==================== NOTIFICATION TOAST ==================== */
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

if (toastCloseBtn && notificationToast) {
  toastCloseBtn.addEventListener('click', () => {
    notificationToast.classList.add('closed');
  });
}

/* ==================== MOBILE MENU ==================== */
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  const mobileMenuCloseFunc = () => {
    if (mobileMenu[i]) mobileMenu[i].classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  };

  mobileMenuOpenBtn[i].addEventListener('click', () => {
    if (mobileMenu[i]) mobileMenu[i].classList.add('active');
    if (overlay) overlay.classList.add('active');
  });

  if (mobileMenuCloseBtn[i]) {
    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  }

  if (overlay) overlay.addEventListener('click', mobileMenuCloseFunc);
}

/* ==================== ACCORDION MENU ==================== */
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

accordionBtn.forEach((btn, index) => {
  btn.addEventListener('click', function () {
    const isOpen = this.nextElementSibling.classList.contains('active');

    if (!isOpen) {
      accordion.forEach((acc, i) => {
        acc.classList.remove('active');
        accordionBtn[i].classList.remove('active');
      });
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
});

/* ==================== DROPDOWN ITEM NAVIGATION ==================== */
document.querySelectorAll('.dropdown-item a').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const folder = this.dataset.folder;
    const kategori = this.dataset.kategori;

    if (folder && kategori) {
      window.location.href = `${folder}/${kategori}.html`;
    } else {
      console.warn('Folder atau kategori belum lengkap!');
    }
  });
});

/* ==================== SIDEBAR TOGGLE (e.g., Jaket & Hoodie) ==================== */
document.querySelectorAll('.dropdown-header').forEach(header => {
  header.addEventListener('click', () => {
    const target = header.dataset.toggle;
    const content = document.querySelector(`.subcategory[data-content="${target}"]`);

    if (content) {
      content.classList.toggle('hidden');

      const span = header.querySelector('span');
      if (span) {
        const text = span.textContent.slice(2); // Ambil teks tanpa panah
        span.textContent = (content.classList.contains('hidden') ? '► ' : '▼ ') + text;
      }
    }
  });
});

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetUrl = card.dataset.href;
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });

   function changeImage(imgElement) {
    const main = document.getElementById("mainImage");
    main.src = imgElement.src;

    document.querySelectorAll('.thumbnail-list img').forEach(img => {
      img.classList.remove('active');
    });
    imgElement.classList.add('active');
  }

  document.querySelectorAll('.color-circle').forEach(circle => {
    circle.addEventListener('click', () => {
      document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
      circle.classList.add('selected');
    });
  });

   document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  const minusBtn = document.querySelector('.qty-btn:first-of-type');
  const plusBtn = document.querySelector('.qty-btn:last-of-type');
  const qtyDisplay = document.querySelector('.qty-number');
  let qty = 1;

  minusBtn.addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      qtyDisplay.textContent = qty;
    }
  });

  plusBtn.addEventListener('click', () => {
    qty++;
    qtyDisplay.textContent = qty;
  });

 function lihatSemuadress() {
    window.location.href = "produk/produk-dress.html";
  }

  function lihatSemuajaket() {
    window.location.href = "produk/produk-jaket.html";
  }

  function lihatSemuakacamata() {
    window.location.href = "produk/produk-kacamata.html";
  }

  function lihatSemuajeans() {
    window.location.href = "produk/produk-jeans.html";
  }

  function lihatSemuatshirts() {
    window.location.href = "produk/produk-tshirts.html";
  }

  function lihatSemuatas() {
    window.location.href = "produk/produk-tas.html";
  }

  function lihatSemuajam() {
    window.location.href = "produk/produk-jam.html";
  }

  function lihatSemuatopi() {
    window.location.href = "produk/produk-topi.html";
  }

