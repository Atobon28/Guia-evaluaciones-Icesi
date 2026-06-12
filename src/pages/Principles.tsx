import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink, Notice } from '../components/Ui';
import { principles } from '../data/content';
import AppIcon from '../components/AppIcon';

export default function Principles() {
  const location = useLocation();
  const isIntro = location.pathname === '/principios';
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = principles[selectedIndex];

  const goPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? principles.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setSelectedIndex((current) =>
      current === principles.length - 1 ? 0 : current + 1,
    );
  };

  if (isIntro) {
    return (
      <>
        <section className="principles-intro-card">
          <div className="principles-intro-copy">
            <span className="eyebrow">Principios institucionales</span>

            <div className="principles-intro-title">
              <span>
                <AppIcon name="solar:book-2-linear" size={34} />
              </span>

              <div>
                <h1>Principios institucionales</h1>
                <h2>Siete principios para orientar una evaluación que forma, acompaña y transforma.</h2>
              </div>
            </div>

            <span className="green-line" />

            <p>
              En la Universidad Icesi, la evaluación se entiende como un proceso central para acompañar, comprender y potenciar el aprendizaje. Estos principios ayudan a diseñar prácticas evaluativas coherentes con el aprendizaje, las competencias, la retroalimentación y el uso pedagógico de la IA.
            </p>
          </div>
        </section>

        <div className="page-actions only-next">
          <ButtonLink to="/principios/conocer">Ir a conocer los principios</ButtonLink>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="principles-screen">
        <header className="principles-header compact">
          <div>
            <span className="eyebrow">Principios institucionales</span>
            <h1>Principios institucionales</h1>
          </div>

          <span className="principles-header-icon">
            <AppIcon name="solar:book-2-linear" size={34} />
          </span>
        </header>

        <nav className="principles-tabs" aria-label="Principios institucionales">
          {principles.map((principle, index) => (
            <button
              key={principle.id}
              className={selectedIndex === index ? 'is-active' : ''}
              onClick={() => setSelectedIndex(index)}
            >
              <span>{principle.id}</span>
              <small>{principle.title}</small>
            </button>
          ))}
        </nav>

        <main className="principle-stage">
          <button
            className="principle-stage-arrow"
            onClick={goPrevious}
            aria-label="Principio anterior"
          >
            <AppIcon name="solar:arrow-left-linear" size={24} />
          </button>

          <article className="principle-feature-card">
            <div className="principle-feature-top">
              <span>
                <AppIcon name="solar:book-bookmark-linear" size={32} />
              </span>

              <div>
                <small>Principios institucionales</small>
                <h2>{selected.id}. {selected.title}</h2>
              </div>
            </div>

            <p className="principle-description">{selected.description}</p>

            <div className="principle-info-grid">
              <Notice type="info">
                {selected.question}
              </Notice>

              <Notice type="success">
                {selected.action}
              </Notice>
            </div>
          </article>

          <button
            className="principle-stage-arrow"
            onClick={goNext}
            aria-label="Siguiente principio"
          >
            <AppIcon name="solar:arrow-right-linear" size={24} />
          </button>
        </main>
      </section>

      <div className="page-actions">
        <ButtonLink to="/principios" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/claves-pedagogicas">Siguiente: claves pedagógicas</ButtonLink>
      </div>
    </>
  );
}
