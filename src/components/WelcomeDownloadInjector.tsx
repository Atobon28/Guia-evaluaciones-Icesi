import { useEffect } from 'react';

export default function WelcomeDownloadInjector() {
  useEffect(() => {
    const actions = document.querySelector('.page-actions.only-next');
    if (!actions || document.querySelector('.download-guide-btn')) return;

    const link = document.createElement('a');
    link.className = 'btn btn-ghost download-guide-btn';
    link.href = '/guia-evaluacion-ia-v2.pdf';
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.innerHTML = '<span>↓</span>Descarga Guía Completa';

    actions.prepend(link);
  }, []);

  return null;
}
