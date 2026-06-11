import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ButtonLink, Hero, Notice } from '../components/Ui';
import { guidePages, modules } from '../data/content';
import AppIcon from '../components/AppIcon';

type IntroPage = {
  path: string;
  title: string;
  subtitle: string;
  body: string;
  cta: string;
  next: string;
  prev?: string;
  notice?: string;
};

function getPage(pathname: string): IntroPage {
  return (guidePages.find((page) => page.path === pathname) ?? guidePages[0]) as IntroPage;
}

export default function GenericIntro() {
  const location = useLocation();
  const page = getPage(location.pathname);
  const [selectedModule, setSelectedModule] = useState(0);

  const paragraphs = page.body.split('\n\n');
  const selected = modules[selectedModule];
  const isWhyPage = page.path === '/por-que-redisenar';

  return (
    <>
      <Hero
        eyebrow={page.path === '/' ? 'Bienvenida' : isWhyPage ? 'Comprender el reto' : page.title}
        icon={page.path === '/' ? 'solar:cpu-bolt-linear' : isWhyPage ? 'solar:danger-triangle-linear' : 'solar:widget-5-linear'}
        title={isWhyPage ? 'La IA cambió las evidencias de aprendizaje' : page.title}
        subtitle={isWhyPage ? undefined : page.subtitle}
        body={page.path === '/' ? page.body : undefined}
      >
        {page.path === '/' && page.notice && (
          <p className="hero-note">{page.notice}</p>
        )}
      </Hero>

      {isWhyPage && (
        <section className="why-one-page">
          {paragraphs.map((paragraph) => (
            paragraph === 'El reto no es vigilar más. El reto es diseñar mejor.' ? (
              <article key={paragraph} className="why-focus-card">
                <span>
                  <AppIcon name="solar:lightbulb-bolt-linear" size={24} />
                </span>
                <h2>{paragraph}</h2>
              </article>
            ) : (
              <article key={paragraph} className="why-text-card">
                <p>{paragraph}</p>
              </article>
            )
          ))}
        </section>
      )}

      {page.path === '/organizacion' && (
        <section className="intro-moments-layout">
          <div className="intro-moments-tabs">
            {modules.map((module, index) => (
              <button
                key={module.title}
                className={`intro-moment-tab ${selectedModule === index ? 'is-active' : ''}`}
                onClick={() => setSelectedModule(index)}
              >
                <span>
                  <AppIcon name={module.icon} size={22} />
                </span>
                <div>
                  <strong>{String(index + 1).padStart(2, '0')}</strong>
                  <p>{module.title}</p>
                </div>
              </button>
            ))}
          </div>

          <article className="intro-moment-detail">
            <div className="intro-moment-header">
              <span>
                <AppIcon name={selected.icon} size={34} />
              </span>

              <div>
                <small>{selected.question}</small>
                <h2>{selected.title}</h2>
              </div>
            </div>

            <p>{selected.text}</p>

            <Link to={selected.to} className="btn btn-primary">
              Explorar sección <span>→</span>
            </Link>
          </article>

          <aside className="intro-side-preview">
            <h2>Tres niveles</h2>

            <div className="intro-progress-list">
              {modules.map((module, index) => (
                <div key={module.title} className={selectedModule === index ? 'is-active' : ''}>
                  <span>
                    <AppIcon name={module.icon} size={18} />
                  </span>
                  <p>{module.title}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      )}

      <div className="page-actions">
        {page.prev ? (
          <ButtonLink to={page.prev} variant="ghost">Anterior</ButtonLink>
        ) : (
          <ButtonLink to="/herramientas" variant="ghost">Ir a herramientas</ButtonLink>
        )}

        <ButtonLink to={page.next}>{page.cta}</ButtonLink>
      </div>
    </>
  );
}
