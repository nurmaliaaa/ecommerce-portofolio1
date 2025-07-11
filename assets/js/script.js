'use strict'; // Mode ketat JavaScript untuk menghindari bug dan error tidak terdeteksi

/* ==================== MODAL ==================== */
// Menutup modal jika overlay atau tombol close diklik
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

const modalCloseFunc = () => {
  if (modal) modal.classList.add('closed'); // Tambah class 'closed' untuk menyembunyikan modal
};

if (modalCloseOverlay) modalCloseOverlay.addEventListener('click', modalCloseFunc);
if (modalCloseBtn) modalCloseBtn.addEventListener('click', modalCloseFunc);

/* ==================== NOTIFICATION TOAST ==================== */
// Menutup notifikasi toast saat tombol close diklik
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

if (toastCloseBtn && notificationToast) {
  toastCloseBtn.addEventListener('click', () => {
    notificationToast.classList.add('closed');
  });
}

/* ==================== MOBILE MENU ==================== */
// Logika buka/tutup mobile menu dengan overlay
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
// Toggle buka/tutup submenu (accordion)
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
// Navigasi berdasarkan data-folder dan data-kategori di item dropdown
document.querySelectorAll('.dropdown-item a').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault(); // Cegah aksi default <a>

    const folder = this.dataset.folder;
    const kategori = this.dataset.kategori;

    if (folder && kategori) {
      window.location.href = `${folder}/${kategori}.html`; // Redirect ke folder/kategori
    } else {
      console.warn('Folder atau kategori belum lengkap!');
    }
  });
});

/* ==================== SIDEBAR TOGGLE (Jaket, Hoodie, dll) ==================== */
// Toggle visibilitas subkategori (sidebar)
document.querySelectorAll('.dropdown-header').forEach(header => {
  header.addEventListener('click', () => {
    const target = header.dataset.toggle;
    const content = document.querySelector(`.subcategory[data-content="${target}"]`);

    if (content) {
      content.classList.toggle('hidden');

      const span = header.querySelector('span');
      if (span) {
        const text = span.textContent.slice(2); 
        span.textContent = (content.classList.contains('hidden') ? '► ' : '▼ ') + text;
      }
    }
  });
});

/* ==================== PRODUK CARD REDIRECT ==================== */
// Klik pada produk akan redirect ke halaman yang ditentukan di data-href
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  card.style.cursor = 'pointer'; // Ganti cursor jadi tangan
  card.addEventListener('click', function () {
    const target = card.getAttribute('data-href');
    console.log("Menuju:", target); // Debug log
    if (target) {
      window.location.href = target;
    }
  });
});

/* ==================== GANTI GAMBAR UTAMA PRODUK ==================== */
// Ganti gambar utama berdasarkan thumbnail yang diklik
function changeImage(imgElement) {
  const main = document.getElementById("mainImage");
  if (main) {
    main.src = imgElement.src;

    document.querySelectorAll('.thumbnail-list img').forEach(img => {
      img.classList.remove('active');
    });
    imgElement.classList.add('active');
  }
}

/* ==================== PILIHAN WARNA ==================== */
// Klik lingkaran warna untuk memilih warna produk
document.querySelectorAll('.color-circle').forEach(circle => {
  circle.addEventListener('click', () => {
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('selected'));
    circle.classList.add('selected');
  });
});

/* ==================== PILIHAN UKURAN ==================== */
// Klik tombol ukuran untuk memilih size produk
document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

/* ==================== KUANTITAS PRODUK ==================== */
// Tombol + dan - untuk menambah/mengurangi jumlah produk yang dibeli
const minusBtn = document.querySelector('.qty-btn:first-of-type');
const plusBtn = document.querySelector('.qty-btn:last-of-type');
const qtyDisplay = document.querySelector('.qty-number');
let qty = 1;

if (minusBtn && plusBtn && qtyDisplay) {
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
}

/* ==================== LIHAT SEMUA PRODUK JAKET ==================== */
// Fungsi redirect ke halaman produk jaket
function lihatSemuajaket() {
  console.log("Menuju ke produk-jaket.html");
  window.location.href = "produk/produk-jaket.html";
}
