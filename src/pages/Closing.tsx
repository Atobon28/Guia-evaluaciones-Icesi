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
            La IA nos obliga a hacer la evaluación más consciente, más formativa y más centrada en los procesos de pensamiento del estudiante.
          </h2>

          <p>
            Una buena evaluación en tiempos de IA diseña mejores preguntas, mejores situaciones,
            mejores evidencias y mejores oportunidades para que el estudiante aprenda, piense,
            revise y mejore. No se debe reducir a controlar el uso de herramientas.
          </p>

          <Notice type="info">
            No se trata de evaluar más. Se trata de evaluar mejor.
          </Notice>
        </article>
      </section>

      <div className="page-actions">
        <ButtonLink to="/" variant="ghost">Volver al inicio</ButtonLink>
        <ButtonLink to="/herramientas">Ir a herramientas</ButtonLink>
      </div>
    </>
  );
}
