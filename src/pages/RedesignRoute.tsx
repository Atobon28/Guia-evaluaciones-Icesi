import { Link } from 'react-router-dom';
import { ButtonLink, Hero } from '../components/Ui';
import { routeSteps } from '../data/content';
import AppIcon from '../components/AppIcon';

const stepIcons = [
  'solar:target-linear',
  'solar:brain-linear',
  'solar:cpu-bolt-linear',
  'solar:map-point-wave-linear',
  'solar:document-add-linear',
  'solar:chat-round-check-linear',
];

export default function RedesignRoute() {
  return (
    <>
      <Hero
        eyebrow="Ruta de rediseño"
        icon="solar:route-linear"
        title="Ruta de rediseño"
        subtitle="Seis pasos para transformar una evaluación en tiempos de IA."
        body="Esta ruta ayuda a pasar de la reflexión pedagógica a decisiones concretas de diseño. El objetivo es diseñar mejores evaluaciones: más claras, más auténticas, más formativas y más centradas en el proceso de aprendizaje."
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
                <AppIcon name={stepIcons[index]} size={26} />
              </span>

              <div>
                <small>Paso {step.id}</small>
                <strong>{step.label}</strong>
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

          <h2>Ruta de rediseño</h2>

          <p>
            Definir aprendizaje → Reconstruir ruta cognitiva → Decidir uso de IA → Diseñar situación de evaluación → Evaluar proceso → Retroalimentar
          </p>
        </aside>
      </section>

      <div className="page-actions">
        <ButtonLink to="/claves-pedagogicas" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/ruta-redisenio/paso-1">Empezar paso 1</ButtonLink>
      </div>
    </>
  );
}
