import { useState } from 'react';
import { ButtonLink, Notice } from '../components/Ui';
import { principles } from '../data/content';
import AppIcon from '../components/AppIcon';

export default function Principles() {
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

  return (
    <>
      <section className="principles-screen">
        <header className="principles-header">
          <div>
            <span className="eyebrow">Marco institucional</span>
            <h1>Principios institucionales</h1>
            <p>
              Siete principios para orientar una evaluación que forma, acompaña y transforma.
            </p>
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
                <small>Principio {selected.id} de 07</small>
                <h2>{selected.title}</h2>
              </div>
            </div>

            <p className="principle-description">{selected.description}</p>

            <div className="principle-info-grid">
              <Notice type="info" title="Pregunta guía">
                {selected.question}
              </Notice>

              <Notice type="success" title="Acción para el profesor">
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

        <section className="principles-helper-row">
          <div>
            <AppIcon name="solar:cursor-square-linear" size={20} />
            <span>Selecciona un principio</span>
          </div>

          <div>
            <AppIcon name="solar:question-circle-linear" size={20} />
            <span>Lee la pregunta guía</span>
          </div>

          <div>
            <AppIcon name="solar:check-circle-linear" size={20} />
            <span>Aplica la acción sugerida</span>
          </div>
        </section>
      </section>

      <div className="page-actions">
        <ButtonLink to="/organizacion" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/claves-pedagogicas">Siguiente: claves pedagógicas</ButtonLink>
      </div>
    </>
  );
}