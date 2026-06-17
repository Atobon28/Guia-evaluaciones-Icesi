import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink } from '../components/Ui';
import AppIcon from '../components/AppIcon';
import AIASMiniSelector from '../components/AIASMiniSelector';
import TemplatesMiniSelector from '../components/TemplatesMiniSelector';

const trafficLevels = [
  {
    status: 'Potencia',
    title: 'La IA apoya el aprendizaje',
    intro: 'La actividad sigue exigiendo pensamiento propio, toma de decisiones, análisis, argumentación o reflexión. La IA puede ayudar, pero no resuelve lo esencial.',
    color: 'green',
    icon: 'solar:check-circle-linear',
    points: [
      'El estudiante debe justificar sus decisiones.',
      'La tarea tiene contexto específico.',
      'Hay evidencias del proceso.',
      'El uso de IA se declara y se analiza.',
      'La respuesta requiere criterio propio.',
    ],
    recommendation: 'Puedes permitir IA con orientaciones claras.',
  },
  {
    status: 'Revisar',
    title: 'La IA puede afectar la evidencia de aprendizaje',
    intro: 'La actividad tiene valor pedagógico, pero algunas partes pueden ser resueltas fácilmente por IA. Se necesita ajustar el diseño o pedir evidencias adicionales.',
    color: 'yellow',
    icon: 'solar:danger-circle-linear',
    points: [
      'La tarea es parcialmente genérica.',
      'El producto final pesa demasiado.',
      'No hay suficientes evidencias del proceso.',
      'El papel de la IA no está claro.',
      'La retroalimentación aparece solo al final.',
    ],
    recommendation: 'Rediseña la actividad antes de aplicarla.',
  },
  {
    status: 'Sustituye',
    title: 'La IA puede resolver la tarea completa',
    intro: 'La actividad puede ser realizada por IA sin que el estudiante demuestre comprensión, pensamiento, criterio o aprendizaje propio.',
    color: 'red',
    icon: 'solar:danger-triangle-linear',
    points: [
      'La tarea pide solo resumir, definir o describir.',
      'No hay contexto específico.',
      'No se exige argumentación propia.',
      'No se pide proceso.',
      'No hay reflexión sobre el uso de IA.',
    ],
    recommendation: 'No apliques la actividad así. Rediseña la situación y las evidencias, teniendo en cuenta qué tipos de pensamiento quieres movilizar en el estudiante.',
  },
];

const toolboxSections = [
  {
    id: '01',
    tabLabel: 'Semáforo IA',
    title: 'Semáforo IA',
    subtitle: 'Evalúa el riesgo pedagógico de una actividad frente al uso de IA.',
    icon: 'solar:traffic-linear',
    tone: 'traffic',
    question: '¿La IA potencia, exige revisión o sustituye el aprendizaje?',
    action: 'Haz clic en cada luz del semáforo para revisar la información completa de cada nivel.',
    items: trafficLevels.map((level) => ({ label: level.status, text: level.intro })),
  },
  {
    id: '02',
    tabLabel: 'Selector AIAS',
    title: 'Selector AIAS',
    subtitle: 'Define el nivel de uso de IA permitido en tu evaluación.',
    icon: 'solar:settings-minimalistic-linear',
    tone: 'aias',
    question: 'No todas las evaluaciones requieren el mismo nivel de integración de IA.',
    action: 'Usa esta escala para comunicar con claridad qué está permitido, qué no y qué debe declarar el estudiante.',
    items: [],
  },
  {
    id: '03',
    tabLabel: 'Enlaces de interés',
    title: 'Enlaces de interés',
    subtitle: 'Recursos de apoyo para profundizar y acompañar el rediseño.',
    icon: 'solar:link-round-angle-linear',
    tone: 'links',
    question: 'Aquí ubicaremos los enlaces o recursos externos que quieras compartir.',
    action: 'Esta sección queda reservada para la información que me vas a pasar después.',
    items: [
      { label: 'Pendiente', text: 'Espacio reservado para enlaces, documentos, recursos institucionales o material de apoyo.' },
    ],
  },
  {
    id: '04',
    tabLabel: 'Plantillas',
    title: 'Plantillas',
    subtitle: 'Plantillas para rediseñar evaluaciones.',
    icon: 'solar:document-text-linear',
    tone: 'plantillas',
    question: 'Plantillas prácticas para revisar, transformar y fortalecer tus evaluaciones.',
    action: 'Selecciona una plantilla para ver su estructura y aplicarla en el rediseño.',
    items: [],
  },
  {
    id: '05',
    tabLabel: 'Checklist final',
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
  const [selectedTrafficIndex, setSelectedTrafficIndex] = useState(0);
  const selected = toolboxSections[selectedIndex];
  const selectedTraffic = trafficLevels[selectedTrafficIndex];

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

        <nav className="toolbox-step-tabs named" aria-label="Herramientas">
          {toolboxSections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={selectedIndex === index ? 'is-active' : ''}
              onClick={() => setSelectedIndex(index)}
            >
              <span>{section.tabLabel}</span>
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

            {selected.tone === 'traffic' ? (
              <div className="toolbox-traffic-layout">
                <div className="toolbox-traffic-light" aria-label="Semáforo IA">
                  {trafficLevels.map((level, index) => (
                    <button
                      key={level.status}
                      type="button"
                      className={`traffic-bulb ${level.color} ${selectedTrafficIndex === index ? 'is-active' : ''}`}
                      onClick={() => setSelectedTrafficIndex(index)}
                    >
                      <span />
                      <strong>{level.status}</strong>
                    </button>
                  ))}
                </div>

                <div className={`traffic-full-info is-${selectedTraffic.color}`}>
                  <div className="traffic-full-header">
                    <p>{selectedTraffic.intro}</p>
                  </div>

                  <div className="traffic-signals-full">
                    <strong>Señales:</strong>
                    {selectedTraffic.points.map((point) => (
                      <p key={point}>
                        <span>
                          <AppIcon name={selectedTraffic.icon} size={14} />
                        </span>
                        {point}
                      </p>
                    ))}
                  </div>

                  <div className="traffic-recommendation-full">
                    <strong>Recomendación:</strong>
                    <p>{selectedTraffic.recommendation}</p>
                  </div>
                </div>
              </div>
            ) : selected.tone === 'aias' ? (
              <AIASMiniSelector />
            ) : selected.tone === 'plantillas' ? (
              <TemplatesMiniSelector />
            ) : (
              <>
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
              </>
            )}
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
