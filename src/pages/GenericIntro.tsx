import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ButtonLink, Hero, Notice } from '../components/Ui';
import { guidePages, modules } from '../data/content';
import AppIcon from '../components/AppIcon';

function getPage(pathname: string) {
  return guidePages.find((page) => page.path === pathname) ?? guidePages[0];
}

export default function GenericIntro() {
  const location = useLocation();
  const page = getPage(location.pathname);
  const [selectedModule, setSelectedModule] = useState(0);

  const paragraphs = page.body.split('\n\n');
  const selected = modules[selectedModule];

  return (
    <>
      <Hero
        eyebrow={page.path === '/' ? 'Bienvenida' : page.title}
        icon={page.path === '/' ? 'solar:cpu-bolt-linear' : page.path === '/por-que-redisenar' ? 'solar:danger-triangle-linear' : 'solar:widget-5-linear'}
        title={page.title}
        subtitle={page.subtitle}
        body={page.path === '/' ? page.body : undefined}
      />

      {page.path === '/' && (
        <section className="intro-moments-layout single">
          <article className="intro-moment-detail">
            <div className="intro-moment-header">
              <span>
                <AppIcon name="solar:home-2-linear" size={34} />
              </span>

              <div>
                <small>Bienvenida</small>
                <h2>{page.subtitle}</h2>
              </div>
            </div>

            <p>{page.body}</p>

            {'notice' in page && page.notice && (
              <Notice type="success">
                {page.notice}
              </Notice>
            )}
          </article>
        </section>
      )}

      {page.path === '/por-que-redisenar' && (
        <section className="intro-moments-layout single">
          <article className="intro-moment-detail">
            {paragraphs.map((paragraph) => (
              paragraph === 'El reto no es vigilar más. El reto es diseñar mejor.' ? (
                <Notice key={paragraph} type="success">
                  {paragraph}
                </Notice>
              ) : (
                <p key={paragraph}>{paragraph}</p>
              )
            ))}
          </article>
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
