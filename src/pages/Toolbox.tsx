import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const toolboxItems = [
  {
    id: '01',
    kind: 'traffic',
    title: 'Semáforo IA',
    subtitle: 'Identifica si la IA potencia, exige revisión o sustituye el aprendizaje.',
    icon: 'solar:traffic-linear',
    path: '/herramientas/semaforo-ia',
    items: [
      { label: 'Potencia', text: 'La IA apoya el proceso, amplía posibilidades, ayuda a explorar ideas o mejora la calidad del trabajo sin reemplazar el pensamiento del estudiante.' },
      { label: 'Revisar', text: 'La IA puede ser útil, pero se necesita ajustar la actividad, aclarar límites o pedir evidencias del proceso.' },
      { label: 'Sustituye', text: 'La IA puede resolver la tarea completa sin que el estudiante demuestre aprendizaje, pensamiento o criterio propio.' },
    ],
  },
  {
    id: '02',
    kind: 'scale',
    title: 'Selector AIAS',
    subtitle: 'Define el nivel de integración de IA en tu evaluación.',
    icon: 'solar:settings-minimalistic-linear',
    path: '/herramientas/selector-aias',
    intro: 'Usa esta herramienta para decidir si la IA estará prohibida, limitada, permitida como apoyo, integrada al proceso o usada de forma amplia con reflexión crítica.',
    items: [
      { label: 'Nivel 1', text: 'Sin uso de IA.' },
      { label: 'Nivel 2', text: 'Planificación e ideación asistida por IAG.' },
      { label: 'Nivel 3', text: 'Colaboración con IAG.' },
      { label: 'Nivel 4', text: 'Uso pleno y estratégico con IAG.' },
      { label: 'Nivel 5', text: 'Exploración e innovación con IAG.' },
    ],
  },
  {
    id: '03',
    kind: 'templates',
    title: 'Plantillas',
    subtitle: 'Formatos listos para acompañar el rediseño.',
    icon: 'solar:document-text-linear',
    path: '/herramientas/plantillas',
    items: [
      { label: 'Diagnóstico de evaluación actual', text: 'Revisa si tu evaluación actual permite evidenciar aprendizaje, pensamiento, proceso y uso adecuado de IA.' },
      { label: 'Ruta cognitiva', text: 'Identifica los procesos de pensamiento que el estudiante debe recorrer para lograr la tarea.' },
      { label: 'Rediseño de tarea', text: 'Transforma una actividad tradicional en una situación evaluativa con contexto, rol, propósito y evidencias del proceso.' },
      { label: 'Rúbrica', text: 'Define criterios claros para valorar el aprendizaje, el proceso, la argumentación, el uso de IA y el desempeño final.' },
      { label: 'Retroalimentación', text: 'Planea momentos, devoluciones específicas y usos de la retroalimentación durante la actividad.' },
    ],
  },
  {
    id: '04',
    kind: 'checklist',
    title: 'Checklist final',
    subtitle: 'Verifica si tu evaluación está lista.',
    icon: 'solar:checklist-minimalistic-linear',
    path: '/herramientas/checklist-final',
    items: [
      { label: 'Aprendizaje', text: 'El aprendizaje esperado está definido y la tarea exige pensamiento, no solo reproducción.' },
      { label: 'Diseño', text: 'La evaluación tiene contexto, rol y propósito.' },
      { label: 'IA', text: 'Está definido el papel de la IA y se distinguen procesos autónomos y asistidos.' },
      { label: 'Proceso', text: 'La actividad permite ver el proceso del estudiante e incluye evidencias como borradores, bitácoras o justificaciones.' },
      { label: 'Retroalimentación', text: 'La retroalimentación ocurre antes de la entrega final y los criterios son claros.' },
    ],
  },
];

type ToolboxItem = (typeof toolboxItems)[number];

export default function Toolbox() {
  const location = useLocation();
  const showIntro = location.search !== '?view=explorar';
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = toolboxItems[selectedIndex];

  if (showIntro) {
    return (
      <>
        <section className="toolbox-intro-card">
          <div className="toolbox-intro-copy">
            <span className="eyebrow">Caja de herramientas</span>

            <div className="toolbox-intro-title">
              <span>
                <AppIcon name="solar:case-round-linear" size={34} />
              </span>

              <div>
                <h1>Caja de herramientas</h1>
                <h2>Recursos prácticos para decidir, rediseñar y evaluar en contextos de IA.</h2>
              </div>
            </div>

            <span className="green-line" />

            <p>
              Después de recorrer los principios, las claves pedagógicas y la ruta de rediseño, puedes usar estas herramientas para tomar decisiones concretas sobre tus actividades evaluativas.
            </p>
          </div>
        </section>

        <div className="page-actions">
          <ButtonLink to="/ruta-redisenio/paso-6" variant="ghost">Anterior</ButtonLink>
          <ButtonLink to="/herramientas?view=explorar">Explorar herramientas</ButtonLink>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="toolbox-screen">
        <header className="toolbox-header compact">
          <div>
            <span className="eyebrow">Caja de herramientas</span>
            <h1>Herramientas para tomar decisiones</h1>
          </div>

          <span className="toolbox-header-icon">
            <AppIcon name="solar:case-round-linear" size={34} />
          </span>
        </header>

        <nav className="toolbox-tabs" aria-label="Herramientas">
          {toolboxItems.map((tool, index) => (
            <button
              key={tool.id}
              className={selectedIndex === index ? 'is-active' : ''}
              onClick={() => setSelectedIndex(index)}
            >
              <span>{tool.id}</span>
              <p>{tool.title}</p>
            </button>
          ))}
        </nav>

        <article className={`toolbox-feature-card is-${selected.kind}`}>
          <div className="toolbox-feature-top">
            <span>
              <AppIcon name={selected.icon} size={32} />
            </span>

            <div>
              <h2>{selected.title}</h2>
              <p>{selected.subtitle}</p>
            </div>
          </div>

          {selected.intro && <p className="toolbox-feature-intro">{selected.intro}</p>}

          <ToolVisual tool={selected} />
        </article>
      </section>

      <div className="page-actions">
        <ButtonLink to="/herramientas" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to={selected.path}>Abrir {selected.title}</ButtonLink>
      </div>
    </>
  );
}

function ToolVisual({ tool }: { tool: ToolboxItem }) {
  if (tool.kind === 'traffic') {
    return (
      <div className="traffic-tool">
        <div className="traffic-light" aria-hidden="true">
          <span className="light green" />
          <span className="light yellow" />
          <span className="light red" />
        </div>

        <div className="traffic-info-list">
          {tool.items.map((item, index) => (
            <div key={item.label} className={`traffic-info-card tone-${index}`}>
              <span>{item.label}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tool.kind === 'scale') {
    return (
      <div className="aias-scale">
        {tool.items.map((item, index) => (
          <div key={item.label}>
            <span>{index + 1}</span>
            <strong>{item.label}</strong>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (tool.kind === 'templates') {
    return (
      <div className="template-stack">
        {tool.items.map((item) => (
          <div key={item.label}>
            <span>
              <AppIcon name="solar:document-text-linear" size={20} />
            </span>
            <article>
              <strong>{item.label}</strong>
              <p>{item.text}</p>
            </article>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="checklist-preview">
      {tool.items.map((item) => (
        <label key={item.label}>
          <input type="checkbox" aria-label={item.label} />
          <span />
          <p>
            <strong>{item.label}</strong>
            {item.text}
          </p>
        </label>
      ))}
    </div>
  );
}
