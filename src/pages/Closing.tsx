import { ButtonLink, Notice } from '../components/Ui';
import AppIcon from '../components/AppIcon';

export default function Closing() {
  return (
    <>
      <section className="closing-screen">
        <article className="closing-main-card">
          <span className="closing-badge">
            <AppIcon name="solar:flag-linear" size={18} />
            Cierre
          </span>

          <h1>Rediseñar la evaluación es rediseñar la experiencia de aprendizaje</h1>

          <h2>
            La IA no elimina la evaluación. Nos obliga a hacerla más consciente,
            más formativa y más centrada en el pensamiento.
          </h2>

          <p>
            Una buena evaluación en tiempos de IA no se limita a controlar el uso
            de herramientas. Diseña mejores preguntas, mejores situaciones,
            mejores evidencias y mejores oportunidades para que el estudiante
            aprenda, piense, revise y mejore.
          </p>

          <Notice type="info">
            No se trata de evaluar más. Se trata de evaluar mejor.
          </Notice>
        </article>

        <aside className="closing-actions-panel">
          <h2>¿Qué sigue?</h2>

          <div className="closing-action-card">
            <span>
              <AppIcon name="solar:map-arrow-right-linear" size={24} />
            </span>
            <div>
              <strong>Explora más recursos</strong>
              <p>Encuentra ejemplos, casos y recomendaciones para fortalecer tus evaluaciones.</p>
            </div>
          </div>

          <div className="closing-action-card">
            <span>
              <AppIcon name="solar:users-group-rounded-linear" size={24} />
            </span>
            <div>
              <strong>Comparte con tu equipo</strong>
              <p>Construyan criterios comunes y protejan el aprendizaje de sus estudiantes.</p>
            </div>
          </div>

          <div className="closing-action-card">
            <span>
              <AppIcon name="solar:chat-round-like-linear" size={24} />
            </span>
            <div>
              <strong>Cuéntanos tu experiencia</strong>
              <p>Tu retroalimentación ayuda a mejorar esta guía para toda la comunidad.</p>
            </div>
          </div>

          <div className="closing-thanks-card">
            <span>
              <AppIcon name="solar:check-circle-linear" size={24} />
            </span>
            <div>
              <strong>Gracias por ser parte del cambio</strong>
              <p>Evaluar con sentido es formar con propósito.</p>
            </div>
          </div>
        </aside>
      </section>

      <div className="page-actions">
        <ButtonLink to="/" variant="ghost">Volver al inicio</ButtonLink>
        <ButtonLink to="/herramientas">Ir a herramientas</ButtonLink>
      </div>
    </>
  );
}