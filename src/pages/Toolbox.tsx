import { useState } from 'react';
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
    question: '¿La IA potencia, exige revisión o sustituye el aprendizaje?',
    action: 'Ubica tu actividad en una de estas tres zonas antes de aplicarla.',
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
    question: '¿Qué nivel de integración de IA tiene sentido para esta evaluación?',
    action: 'Comunica el nivel elegido en la consigna y aclara qué debe declarar el estudiante.',
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
    question: '¿Qué necesitas documentar para rediseñar la actividad?',
    action: 'Elige la plantilla que corresponda al momento de diseño en el que estás.',
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
    question: '¿La evaluación ya está lista para implementarse?',
    action: 'Verifica estos criterios antes de publicar la consigna o iniciar la actividad.',
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = toolboxSections[selectedIndex];

  const goToPrevious = () => {
    setSelectedIndex((current) => (current === 0 ? toolboxSections.length - 1 : current - 1));
  };

  const goToNext = () => {
    setSelectedIndex((current) => (current === toolboxSections.length - 1 ? 0 : current + 1));
  };

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
      <section className="toolbox-screen toolbox-step-screen">
        <header className="toolbox-header compact">
          <div>
            <span className="eyebrow">Caja de herramientas</span>
            <h1>Herramientas para tomar decisiones</h1>
          </div>

          <span className="toolbox-header-icon">
            <AppIcon name="solar:case-round-linear" size={32} />
          </span>
        </header>

        <nav className="toolbox-step-tabs" aria-label="Herramientas">
          {toolboxSections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={selectedIndex === index ? 'is-active' : ''}
              onClick={() => setSelectedIndex(index)}
              aria-label={section.title}
            >
              <span>{section.id}</span>
            </button>
          ))}
        </nav>

        <div className="toolbox-detail-wrap">
          <button type="button" className="toolbox-arrow left" onClick={goToPrevious} aria-label="Herramienta anterior">
            <AppIcon name="solar:arrow-left-linear" size={26} />
          </button>

          <article className={`toolbox-detail-card is-${selected.tone}`}>
            <div className="toolbox-detail-header">
              <span>
                <AppIcon name={selected.icon} size={30} />
              </span>

              <div>
                <small>{selected.title}</small>
                <h2>{selected.subtitle}</h2>
              </div>
            </div>

            <p className="toolbox-detail-intro">{selected.question}</p>

            <div className={`toolbox-detail-list count-${selected.items.length}`}>
              {selected.items.map((item) => (
                <div key={item.label}>
                  <strong>{item.label}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="toolbox-action-row">
              <div>
                <span>
                  <AppIcon name="solar:info-circle-linear" size={24} />
                </span>
                <p>{selected.question}</p>
              </div>

              <div className="is-green">
                <span>
                  <AppIcon name="solar:check-circle-linear" size={24} />
                </span>
                <p>{selected.action}</p>
              </div>
            </div>
          </article>

          <button type="button" className="toolbox-arrow right" onClick={goToNext} aria-label="Siguiente herramienta">
            <AppIcon name="solar:arrow-right-linear" size={26} />
          </button>
        </div>
      </section>

      <div className="page-actions">
        <ButtonLink to="/herramientas" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/cierre">Finalizar</ButtonLink>
      </div>
    </>
  );
}
