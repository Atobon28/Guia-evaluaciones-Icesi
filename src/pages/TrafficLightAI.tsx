import { ButtonLink, Hero } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const trafficItems = [
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

export default function TrafficLightAI() {
  return (
    <>
      <Hero
        eyebrow="Semáforo IA"
        icon="solar:traffic-linear"
        title="Semáforo IA"
        subtitle="Evalúa el riesgo pedagógico de tu actividad frente al uso de IA."
        body="Antes de aplicar una evaluación, revisa si la IA funciona como apoyo, si exige ajustes o si está sustituyendo el aprendizaje que quieres evidenciar."
      />

      <section className="traffic-interactive-layout">
        {trafficItems.map((item) => (
          <article key={item.status} className={`traffic-decision-card ${item.color}`}>
            <div className="traffic-card-header">
              <span className="traffic-light-icon">
                <i />
                <i />
                <i />
              </span>

              <div>
                <small>{item.status}</small>
                <h2>{item.title}</h2>
              </div>
            </div>

            <p className="traffic-intro">{item.intro}</p>

            <div className="traffic-signals">
              <strong>Señales:</strong>

              {item.points.map((point) => (
                <p key={point}>
                  <span>
                    <AppIcon name={item.icon} size={15} />
                  </span>
                  {point}
                </p>
              ))}
            </div>

            <div className="traffic-recommendation">
              <strong>Recomendación:</strong>
              <p>{item.recommendation}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="page-actions">
        <ButtonLink to="/herramientas" variant="ghost">Volver a herramientas</ButtonLink>
        <ButtonLink to="/herramientas/selector-aias">Ir al selector AIAS</ButtonLink>
      </div>
    </>
  );
}
