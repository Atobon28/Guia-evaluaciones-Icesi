import { useState } from 'react';
import { ButtonLink, Hero, Notice } from '../components/Ui';
import { keys } from '../data/content';

export default function PedagogicalKeys() {
  const [selectedId, setSelectedId] = useState('01');
  const selected = keys.find((key) => key.id === selectedId) ?? keys[0];

  return (
    <>
      <Hero
        eyebrow="Claves pedagógicas"
        icon="solar:lightbulb-bolt-linear"
        title="Claves pedagógicas"
        subtitle="Seis claves para pensar la evaluación antes de rediseñarla."
        body="Antes de cambiar una actividad evaluativa, es necesario revisar qué aprendizaje se quiere promover, qué procesos de pensamiento se buscan activar y qué papel puede tener la IA sin reemplazar el trabajo intelectual del estudiante."
      />

      <section className="keys-interactive-layout">
        <div className="keys-tabs-panel">
          {keys.map((key) => (
            <button
              key={key.id}
              className={`key-tab-card ${selectedId === key.id ? 'is-active' : ''}`}
              onClick={() => setSelectedId(key.id)}
            >
              <span>{key.id}</span>
              <strong>{key.title}</strong>
            </button>
          ))}
        </div>

        <article className="key-detail-card">
          <div className="key-detail-top">
            <span>{selected.id}</span>
            <div>
              <small>Clave pedagógica</small>
              <h2>{selected.title}</h2>
            </div>
          </div>

          <p>{selected.description}</p>

          <div className="key-detail-grid">
            <Notice type="info">
              {selected.question}
            </Notice>

            <Notice type="success">
              {selected.action}
            </Notice>
          </div>
        </article>
      </section>

      <div className="page-actions">
        <ButtonLink to="/principios" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/ruta-redisenio">Siguiente: ruta de rediseño</ButtonLink>
      </div>
    </>
  );
}
