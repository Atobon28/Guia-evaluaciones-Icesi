import { Link } from 'react-router-dom';
import { ButtonLink, Hero, Notice } from '../components/Ui';
import { routeSteps } from '../data/content';
import AppIcon from '../components/AppIcon';

const stepDetails = [
  {
    title: 'Define el aprendizaje',
    text: 'Aclara qué quieres que el estudiante sea capaz de pensar, comprender o hacer.',
    icon: 'solar:target-linear',
  },
  {
    title: 'Reconstruye la ruta cognitiva',
    text: 'Identifica qué procesos de pensamiento debe recorrer el estudiante.',
    icon: 'solar:brain-linear',
  },
  {
    title: 'Decide el papel de la IA',
    text: 'Distingue qué debe hacer el estudiante y qué puede enriquecer la IA.',
    icon: 'solar:cpu-bolt-linear',
  },
  {
    title: 'Contextualiza la evaluación',
    text: 'Diseña una situación con contexto, rol y propósito formativo.',
    icon: 'solar:map-point-wave-linear',
  },
  {
    title: 'Evidencia el proceso',
    text: 'Incluye registros, bitácoras, borradores o decisiones justificadas.',
    icon: 'solar:document-add-linear',
  },
  {
    title: 'Integra retroalimentación',
    text: 'Define cuándo, quién y cómo se usará la retroalimentación para mejorar.',
    icon: 'solar:chat-round-check-linear',
  },
];

export default function RedesignRoute() {
  return (
    <>
      <Hero
        eyebrow="Ruta metodológica"
        icon="solar:route-linear"
        title="Ruta de rediseño"
        subtitle="Seis pasos para transformar una evaluación en tiempos de IA."
        body="Esta ruta ayuda a pasar de la reflexión pedagógica a decisiones concretas de diseño. El objetivo no es hacer más actividades, sino diseñar mejores evaluaciones: más claras, más auténticas, más formativas y más centradas en el proceso de aprendizaje."
      />

      <section className="route-map-layout">
        <div className="route-map">
          {routeSteps.map((step, index) => (
            <Link
              key={step.id}
              to={step.path}
              className="route-map-step"
            >
              <span>
                <AppIcon name={stepDetails[index].icon} size={26} />
              </span>

              <div>
                <small>{step.label}</small>
                <strong>{stepDetails[index].title}</strong>
                <p>{stepDetails[index].text}</p>
              </div>

              <b>
                <AppIcon name="solar:arrow-right-linear" size={24} />
              </b>
            </Link>
          ))}
        </div>

        <aside className="route-summary-panel">
          <span className="route-summary-icon">
            <AppIcon name="solar:map-arrow-right-linear" size={34} />
          </span>

          <h2>¿Cómo usar esta ruta?</h2>

          <p>
            Recorre los pasos en orden. Cada uno te ayuda a tomar una decisión concreta sobre el diseño de tu evaluación.
          </p>

          <Notice type="success" title="Recomendación">
            No intentes rediseñar todo el curso de una vez. Empieza con una evaluación clave y mejórala paso a paso.
          </Notice>

          <Notice type="info" title="Resultado esperado">
            Al final tendrás una evaluación con aprendizaje definido, rol de IA claro, evidencias de proceso y retroalimentación integrada.
          </Notice>
        </aside>
      </section>

      <div className="page-actions">
        <ButtonLink to="/claves-pedagogicas" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/ruta-redisenio/paso-1">Empezar paso 1</ButtonLink>
      </div>
    </>
  );
}