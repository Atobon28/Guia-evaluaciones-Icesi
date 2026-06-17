import { useLocation } from 'react-router-dom';
import { ButtonLink } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const toolboxSections = [
  {
    id: '01',
    title: 'Semáforo IA',
    subtitle: 'Evalúa el riesgo pedagógico de una actividad frente al uso de IA.',
    icon: 'solar:traffic-linear',
    tone: 'traffic',
    items: [
      {
        label: 'Potencia',
        text: 'La IA apoya el proceso, pero la tarea exige criterio propio, contexto, justificación y evidencias del proceso.',
      },
      {
        label: 'Revisar',
        text: 'La IA puede resolver partes de la actividad. Conviene ajustar límites, proceso, retroalimentación o evidencias.',
      },
      {
        label: 'Sustituye',
        text: 'La IA puede resolver la tarea completa. La evaluación debe rediseñarse antes de aplicarla.',
      },
    ],
  },
  {
    id: '02',
    title: 'Selector AIAS',
    subtitle: 'Define con claridad qué nivel de uso de IA está permitido.',
    icon: 'solar:settings-minimalistic-linear',
    tone: 'aias',
    items: [
      { label: 'Nivel 1', text: 'Sin uso de IA.' },
      { label: 'Nivel 2', text: 'Ideación o planificación asistida.' },
      { label: 'Nivel 3', text: 'Colaboración con IA y revisión crítica.' },
      { label: 'Nivel 4', text: 'Uso amplio, estratégico y declarado.' },
      { label: 'Nivel 5', text: 'Exploración e innovación con IA.' },
    ],
  },
  {
    id: '03',
    title: 'Plantillas',
    subtitle: 'Formatos para acompañar el rediseño de la evaluación.',
    icon: 'solar:document-text-linear',
    tone: 'templates',
    items: [
      { label: 'Diagnóstico', text: 'Revisa qué evidencia realmente tu evaluación actual.' },
      { label: 'Ruta cognitiva', text: 'Identifica qué debe pensar el estudiante.' },
      { label: 'Rediseño', text: 'Convierte la tarea en una situación con contexto, rol y propósito.' },
      { label: 'Rúbrica', text: 'Define criterios de proceso, producto, argumentación y uso de IA.' },
      { label: 'Retroalimentación', text: 'Planea momentos de mejora antes de la entrega final.' },
      { label: 'Checklist', text: 'Verifica si la evaluación está lista para aplicarse.' },
    ],
  },
  {
    id: '04',
    title: 'Checklist final',
    subtitle: 'Una revisión rápida antes de publicar la actividad.',
    icon: 'solar:checklist-minimalistic-linear',
    tone: 'checklist',
    items: [
      { label: 'Aprendizaje', text: 'El objetivo está claro y exige pensamiento.' },
      { label: 'Diseño', text: 'La tarea tiene contexto, rol y propósito.' },
      { label: 'IA', text: 'El uso permitido está definido y se declara.' },
      { label: 'Proceso', text: 'Hay borradores, bitácoras, sustentación o justificación.' },
      { label: 'Retroalimentación', text: 'Existe mejora antes del producto final.' },
    ],
  },
];

export default function Toolbox() {
  const location = useLocation();
  const showIntro = location.search !== '?view=explorar';

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
      <section className="toolbox-screen toolbox-overview-screen">
        <header className="toolbox-header compact">
          <div>
            <span className="eyebrow">Caja de herramientas</span>
            <h1>Herramientas para tomar decisiones</h1>
            <p>Todo queda visible en una sola pantalla para consultar, comparar y aplicar sin abrir páginas adicionales.</p>
          </div>

          <span className="toolbox-header-icon">
            <AppIcon name="solar:case-round-linear" size={32} />
          </span>
        </header>

        <div className="toolbox-overview-grid">
          {toolboxSections.map((section) => (
            <article key={section.id} className={`toolbox-overview-card is-${section.tone}`}>
              <div className="toolbox-overview-head">
                <span className="toolbox-number">{section.id}</span>
                <span className="toolbox-card-icon">
                  <AppIcon name={section.icon} size={22} />
                </span>

                <div>
                  <h2>{section.title}</h2>
                  <p>{section.subtitle}</p>
                </div>
              </div>

              <div className="toolbox-overview-list">
                {section.items.map((item) => (
                  <div key={item.label}>
                    <strong>{item.label}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="page-actions">
        <ButtonLink to="/herramientas" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/cierre">Finalizar</ButtonLink>
      </div>
    </>
  );
}
