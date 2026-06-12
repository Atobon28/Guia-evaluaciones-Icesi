import { ButtonLink } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const routeFlow = [
  'Definir aprendizaje',
  'Reconstruir ruta cognitiva',
  'Decidir uso de IA',
  'Diseñar situación de evaluación',
  'Evaluar proceso',
  'Retroalimentar',
];

export default function RedesignRoute() {
  return (
    <>
      <section className="route-intro-card">
        <div className="route-intro-copy">
          <span className="eyebrow">Ruta de rediseño</span>

          <div className="route-intro-title">
            <span>
              <AppIcon name="solar:route-linear" size={34} />
            </span>

            <div>
              <h1>Ruta de rediseño</h1>
              <h2>Seis pasos para transformar una evaluación en tiempos de IA.</h2>
            </div>
          </div>

          <span className="green-line" />

          <p>
            Esta ruta ayuda a pasar de la reflexión pedagógica a decisiones concretas de diseño. El objetivo es diseñar mejores evaluaciones: más claras, más auténticas, más formativas y más centradas en el proceso de aprendizaje.
          </p>

          <div className="route-flow-strip" aria-label="Ruta de rediseño">
            {routeFlow.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="page-actions">
        <ButtonLink to="/claves-pedagogicas?view=conocer" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/ruta-redisenio/paso-1">Empezar paso 1</ButtonLink>
      </div>
    </>
  );
}
