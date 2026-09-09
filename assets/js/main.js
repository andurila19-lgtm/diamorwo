/**
 * Galipat Wedding Organizer — Boyolali
 * Production JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initPortfolioFilter();
  initLightbox();
  initFaqAccordion();
  initConsultationForm();
  initTestimonialSlider();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   HEADER & SCROLL SPY
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-drawer .btn');

  if (!toggle || !drawer || !backdrop) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    toggle.classList.toggle('open', isOpen);
    drawer.classList.toggle('open', isOpen);
    backdrop.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', isOpen);
  }

  toggle.addEventListener('click', () => toggleMenu());
  backdrop.addEventListener('click', () => toggleMenu(false));

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close with Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* --------------------------------------------------------------------------
   PORTFOLIO FILTER
   -------------------------------------------------------------------------- */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (!filterBtns.length || !portfolioItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(10px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   LIGHTBOX MODAL
   -------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('portfolio-lightbox');
  const closeBtn = document.querySelector('.lightbox-close-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (!modal) return;

  const modalImg = modal.querySelector('.lightbox-img');
  const modalTitle = modal.querySelector('.lightbox-title');
  const modalCategory = modal.querySelector('.lightbox-category');
  const modalVenue = modal.querySelector('.lightbox-venue');
  const modalDesc = modal.querySelector('.lightbox-desc');
  const modalCta = modal.querySelector('.lightbox-cta');

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.portfolio-img');
      const title = item.querySelector('.portfolio-couple-name')?.textContent || 'Dokumentasi Perayaan';
      const category = item.querySelector('.portfolio-category-tag')?.textContent || 'Galipat Wedding';
      const venue = item.querySelector('.portfolio-venue-info')?.textContent || 'Boyolali & Solo Raya';
      const desc = item.getAttribute('data-desc') || 'Orkestrasi pernikahan paripurna dengan kepatuhan tata krama adat dan koordinasi vendor yang harmonis.';
      
      modalImg.src = img.src;
      modalImg.alt = img.alt || title;
      modalTitle.textContent = title;
      modalCategory.textContent = category;
      modalVenue.textContent = venue;
      modalDesc.textContent = desc;

      if (modalCta) {
        modalCta.href = `https://wa.me/6288902968424?text=${encodeURIComponent('Halo Galipat WO, saya tertarik dengan konsep pernikahan ' + title + ' (' + category + ')')}`;
      }

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherHeader = otherItem.querySelector('.faq-header');
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   CONSULTATION FORM (WHATSAPP INTEGRATION)
   -------------------------------------------------------------------------- */
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  const alertBox = document.getElementById('form-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="client_name"]')?.value.trim();
    const phone = form.querySelector('[name="client_phone"]')?.value.trim();
    const weddingDate = form.querySelector('[name="wedding_date"]')?.value.trim() || 'Belum ditentukan';
    const guestCount = form.querySelector('[name="guest_count"]')?.value || 'Belum pasti';
    const notes = form.querySelector('[name="notes"]')?.value.trim() || '-';

    // Get selected concepts
    const concepts = [];
    form.querySelectorAll('[name="concepts"]:checked').forEach(cb => {
      concepts.push(cb.value);
    });
    const conceptText = concepts.length > 0 ? concepts.join(', ') : 'Belum memilih konsep spesifik';

    if (!name || !phone) {
      alert('Mohon lengkapi nama dan nomor WhatsApp Anda.');
      return;
    }

    // Prepare WhatsApp Message
    const waText = 
`*PERMOHONAN KONSULTASI — GALIPAT WEDDING ORGANIZER BOYOLALI*

*Nama Mempelai / Perwakilan:* ${name}
*Nomor WhatsApp:* ${phone}
*Rencana Tanggal / Bulan:* ${weddingDate}
*Estimasi Jumlah Tamu:* ${guestCount}
*Konsep yang Diminati:* ${conceptText}
*Catatan Tambahan:* ${notes}

_Dikirim melalui formulir resmi website Galipat Wedding Organizer._`;

    const waUrl = `https://wa.me/6288902968424?text=${encodeURIComponent(waText)}`;

    // Show Confirmation Alert
    if (alertBox) {
      alertBox.classList.add('visible');
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    // Reset Form after slight delay
    setTimeout(() => {
      form.reset();
    }, 1500);
  });
}

/* --------------------------------------------------------------------------
   TESTIMONIAL SLIDER
   -------------------------------------------------------------------------- */
function initTestimonialSlider() {
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const cards = document.querySelectorAll('.testimonial-card');

  if (!cards.length || !prevBtn || !nextBtn) return;

  // For mobile/tablet where track isn't a 3-col grid, provide smooth interactive focus
  let currentIndex = 0;

  function highlightCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.borderColor = 'var(--color-primary-gold)';
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        card.style.borderColor = 'var(--color-border)';
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    highlightCard(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    highlightCard(currentIndex);
  });
}

/* --------------------------------------------------------------------------
   SMOOTH SCROLL FOR ANCHORS
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
