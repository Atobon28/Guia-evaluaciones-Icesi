import { useEffect } from 'react';
import AppIcon from './AppIcon';

export default function MobileMenuInjector() {
  useEffect(() => {
    const shell = document.querySelector('.app-shell');
    const sidebar = document.querySelector('.sidebar');
    const mainArea = document.querySelector('.main-area');

    if (!shell || !sidebar || !mainArea || document.querySelector('.mobile-topbar')) return;

    const topbar = document.createElement('div');
    topbar.className = 'mobile-topbar';
    topbar.innerHTML = `
      <button class="brand mobile-brand" type="button" aria-label="Ir al inicio">
        <span class="brand-symbol"></span>
        <span class="brand-text"><small>Universidad</small><strong>icesi</strong></span>
      </button>
      <button class="mobile-menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">
        <span class="mobile-menu-lines"><i></i><i></i><i></i></span>
      </button>
    `;

    const backdrop = document.createElement('button');
    backdrop.type = 'button';
    backdrop.className = 'mobile-menu-backdrop';
    backdrop.setAttribute('aria-label', 'Cerrar menú');

    mainArea.prepend(topbar);
    shell.prepend(backdrop);

    const toggle = topbar.querySelector('.mobile-menu-toggle');
    const brand = topbar.querySelector('.mobile-brand');

    const closeMenu = () => {
      sidebar.classList.remove('is-open');
      backdrop.classList.remove('is-visible');
      toggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('mobile-menu-lock');
    };

    const openMenu = () => {
      sidebar.classList.add('is-open');
      backdrop.classList.add('is-visible');
      toggle?.setAttribute('aria-expanded', 'true');
      document.body.classList.add('mobile-menu-lock');
    };

    toggle?.addEventListener('click', () => {
      if (sidebar.classList.contains('is-open')) closeMenu();
      else openMenu();
    });

    backdrop.addEventListener('click', closeMenu);
    brand?.addEventListener('click', () => {
      closeMenu();
      window.location.href = '/';
    });

    sidebar.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', closeMenu);
    });
  }, []);

  return null;
}
