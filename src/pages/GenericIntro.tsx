import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink, Hero } from '../components/Ui';
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

const welcomeSteps = [
  { label: 'Bienvenida', path: '/' },
  { label: 'Por qué rediseñar', path: '/por-que-redisenar' },
  { label: 'Organización', path: '/organizacion' },
];

function getPage(pathname: string): IntroPage {
  return (guidePages.find((page) => page.path === pathname) ?? guidePages[0]) as IntroPage;
}

function WelcomeProgress({ currentPath }: { currentPath: string }) {
  const activeIndex = Math.max(welcomeSteps.findIndex((step) => step.path === currentPath), 0);

  return (
    <div className="welcome-progress-line" aria-label="Progreso de bienvenida">
      {welcomeSteps.map((step, index) => (
        <div
          key={step.path}
          className={`${index === activeIndex ? 'is-active' : ''} ${index < activeIndex ? 'is-done' : ''}`}
        >
          <span>{index + 1}</span>
          <p>{step.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function GenericIntro() {
  const location = useLocation();
  const page = getPage(location.pathname);
  const [selectedModule, setSelectedModule] = useState(0);

  const paragraphs = page.body.split('\n\n');
  const selected = modules[selectedModule];
  const isWhyPage = page.path === '/por-que-redisenar';
  const isWelcomeStage = ['/', '/por-que-redisenar', '/organizacion'].includes(page.path);
  const isFirstPage = page.path === '/';

  return (
    <>
      {isWelcomeStage && <WelcomeProgress currentPath={page.path} />}

      {isFirstPage ? (
        <section className="welcome-intro-card">
          <div className="welcome-intro-copy">
            <span className="eyebrow">Bienvenida</span>

            <div className="welcome-intro-title">
              <span>
                <AppIcon name="solar:cpu-bolt-linear" size={34} />
              </span>

              <div>
                <h1>{page.title}</h1>
                <h2>{page.subtitle}</h2>
              </div>
            </div>

            <span className="green-line" />

            <p>{page.body}</p>

            {page.notice && (
              <p className="hero-note">{page.notice}</p>
            )}
          </div>
        </section>
      ) : isWhyPage ? (
        <section className="why-page-card">
          <div className="why-page-copy">
            <span className="eyebrow">{page.title}</span>
            <div className="why-title-row">
              <span>
                <AppIcon name="solar:danger-triangle-linear" size={30} />
              </span>
              <div>
                <h1>{page.title}</h1>
                <h2>{page.subtitle}</h2>
              </div>
            </div>
            <span className="green-line" />

            <div className="why-paragraph-grid">
              {paragraphs.map((paragraph) => (
                paragraph === 'El reto no es vigilar más. El reto es diseñar mejor.' ? (
                  <article key={paragraph} className="why-focus-card">
                    <p>{paragraph}</p>
                  </article>
                ) : (
                  <article key={paragraph} className="why-text-card">
                    <p>{paragraph}</p>
                  </article>
                )
              ))}
            </div>
          </div>
        </section>
      ) : (
        <Hero
          eyebrow={page.title}
          icon="solar:widget-5-linear"
          title={page.title}
          subtitle={page.subtitle}
        />
      )}

      {page.path === '/organizacion' && (
        <section className="intro-moments-layout compact">
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

          <article className="intro-moment-detail wide no-secondary-rosette">
            <style>{'.no-secondary-rosette::after{content:none!important}'}</style>
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
          </article>
        </section>
      )}

      <div className={`page-actions ${isFirstPage ? 'only-next' : ''}`}>
        {!isFirstPage && page.prev && (
          <ButtonLink to={page.prev} variant="ghost">Anterior</ButtonLink>
        )}

        <ButtonLink to={page.next}>{page.cta}</ButtonLink>
      </div>
    </>
  );
}
