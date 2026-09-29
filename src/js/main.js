// =============================================================
// main.js — comportamento do site
// =============================================================

document.addEventListener('DOMContentLoaded', () => {
  initCartButtons();
  initModals();
});

// -------------------------------------------------------------
// Carrinho — toast ao adicionar
// -------------------------------------------------------------
function initCartButtons() {
  document.querySelectorAll('[data-product-id]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Se o botão também abre modal, não mostra toast
      if (btn.dataset.modalOpen) return;

      e.preventDefault();
      const id = btn.dataset.productId;
      showToast(`Produto #${id} adicionado ao carrinho 🛒`, 'success');
    });
  });
}

// -------------------------------------------------------------
// Toast
// -------------------------------------------------------------
const TOAST_DURATION = 2500;

function getToastContainer() {
  let c = document.querySelector('.toast__container');
  if (!c) {
    c = document.createElement('div');
    c.className = 'toast__container';
    Object.assign(c.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      zIndex: '1080',
      pointerEvents: 'none'
    });
    document.body.appendChild(c);
  }
  return c;
}

function showToast(message, variant = 'default') {
  const container = getToastContainer();

  const toast = document.createElement('div');
  toast.className = `toast toast--${variant}`;
  toast.setAttribute('role', 'status');
  toast.textContent = message;

  const bg = variant === 'success' ? '#16a34a'
           : variant === 'danger'  ? '#dc2626'
           : variant === 'warning' ? '#f59e0b'
           : '#111827';

  Object.assign(toast.style, {
    background: bg,
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '8px',
    boxShadow: '0 12px 32px rgba(0,0,0,.15)',
    fontSize: '14px',
    fontWeight: '500',
    opacity: '0',
    transform: 'translateY(16px)',
    transition: 'opacity 250ms ease, transform 250ms ease',
    pointerEvents: 'auto'
  });

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(16px)';
    setTimeout(() => toast.remove(), 300);
  }, TOAST_DURATION);
}

// -------------------------------------------------------------
// Modal
// -------------------------------------------------------------
function initModals() {
  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    modal.classList.add('modal--open');
    document.body.classList.add('has-modal');

    const focusable = modal.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('modal--open');
    document.body.classList.remove('has-modal');
    document.body.style.removeProperty('--scrollbar-width');
  };

  document.querySelectorAll('[data-modal-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.modalOpen));
  });

  document.querySelectorAll('[data-modal-close]').forEach((el) => {
    el.addEventListener('click', () => closeModal(el.closest('.modal')));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeModal(document.querySelector('.modal--open'));
  });
}