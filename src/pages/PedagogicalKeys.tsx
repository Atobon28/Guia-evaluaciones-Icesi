import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink, Notice } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const pedagogicalKeys = [
  {
    id: '01',
    title: 'Poner el aprendizaje y el pensamiento del estudiante en el centro del proceso formativo.',
    description: 'La enseñanza se organiza a partir de lo que se espera que el estudiante aprenda y, especialmente, de los procesos de pensamiento que debe desarrollar. Esto implica desplazar el foco de “qué temas voy a cubrir” hacia “qué quiero que el estudiante comprenda, analice, interprete o produzca”.',
    question: '¿Qué quiero que mis estudiantes sean capaces de pensar, más allá de lo que deben entregar?',
    action: 'Reformula la actividad desde los procesos de pensamiento que quieres movilizar.',
  },
  {
    id: '02',
    title: 'Diseñar situaciones que activen el aprendizaje',
    description: 'Una buena evaluación propone situaciones que le exigen al estudiante pensar, decidir, actuar y construir sentido. En este marco, las actividades adquieren valor en la medida en que movilizan el pensamiento y no por su ejecución en sí misma.',
    question: '¿Qué decisiones, interpretaciones y formas de razonamiento pone en juego el estudiante en esta actividad?',
    action: 'Convierte la tarea en una situación con decisiones, análisis y/o interpretación.',
  },
  {
    id: '03',
    title: 'Comprender y hacer visible la ruta cognitiva del estudiante a través de la evaluación',
    description: 'Para evaluar mejor, es necesario identificar qué procesos mentales debe recorrer el estudiante para lograr un desempeño. El estudiante no llega al resultado de manera automática.',
    question: '¿Tengo claridad sobre los procesos de pensamiento que debe poner en juego el estudiante para lograr el resultado que estoy evaluando?',
    action: 'Identifica los pasos cognitivos de la tarea: comprender, analizar, decidir, argumentar, crear o revisar.',
  },
  {
    id: '04',
    title: 'Definir los saberes esenciales para orientar el uso pedagógico de la IA',
    description: 'El profesor debe decidir qué debe desarrollar el estudiante de manera autónoma y qué puede enriquecerse con apoyo de IA. No todo debe hacerse con IA ni todo debe prohibirse.',
    question: '¿Qué aprendizajes son esenciales y deben ser desarrollados por el estudiante sin apoyo de IA?',
    action: 'Separa los procesos autónomos, los procesos asistidos y los procesos que requieren reflexión sobre el uso de IA.',
  },
  {
    id: '05',
    title: 'Articular la evaluación con experiencias auténticas y contextos profesionales',
    description: 'Las prácticas evaluativas adquieren mayor sentido cuando se conectan con situaciones reales o verosímiles en las que el estudiante pueda aplicar e integrar lo aprendido.',
    question: '¿El estudiante comprende qué sentido tiene lo que está haciendo y por qué resulta relevante?',
    action: 'Incluye contexto, rol, propósito y una situación significativa.',
  },
  {
    id: '06',
    title: 'Incorporar la retroalimentación como parte del proceso de aprendizaje',
    description: 'La retroalimentación le permite al estudiante comprender su desempeño, identificar oportunidades de mejora y tomar decisiones sobre su aprendizaje. Esto supone dar lugar a interacciones más específicas, oportunas y útiles, que conecten efectivamente la evaluación con el aprendizaje.',
    question: '¿El estudiante tiene la oportunidad de usar esa retroalimentación para mejorar su trabajo?',
    action: 'Diseña momentos de revisión, ajuste y mejora antes de la entrega final.',
  },
];

export default function PedagogicalKeys() {
  const location = useLocation();
  const showIntro = location.search !== '?view=conocer';
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = pedagogicalKeys[selectedIndex];

  const goPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? pedagogicalKeys.length - 1 : current - 1,
    );
  };

  const goNext = () => {
    setSelectedIndex((current) =>
      current === pedagogicalKeys.length - 1 ? 0 : current + 1,
    );
  };

  if (showIntro) {
    return (
      <>
        <section className="pedagogical-intro-card">
          <div className="pedagogical-intro-copy">
            <span className="eyebrow">Claves pedagógicas</span>

            <div className="pedagogical-intro-title">
              <span>
                <AppIcon name="solar:lightbulb-bolt-linear" size={34} />
              </span>

              <div>
                <h1>Claves pedagógicas</h1>
                <h2>Seis claves para pensar la evaluación antes de rediseñarla.</h2>
              </div>
            </div>

            <span className="green-line" />

            <p>
              Antes de cambiar una actividad evaluativa, es necesario revisar qué aprendizaje se quiere promover, qué procesos de pensamiento se buscan activar y qué papel puede tener la IA sin reemplazar el trabajo intelectual del estudiante.
            </p>
          </div>
        </section>

        <div className="page-actions only-next">
          <ButtonLink to="/claves-pedagogicas?view=conocer">Ir a conocer las claves</ButtonLink>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="pedagogical-screen">
        <header className="pedagogical-header compact">
          <div>
            <span className="eyebrow">Claves pedagógicas</span>
            <h1>Claves pedagógicas</h1>
          </div>

          <span className="pedagogical-header-icon">
            <AppIcon name="solar:lightbulb-bolt-linear" size={34} />
          </span>
        </header>

        <nav className="pedagogical-tabs only-numbers" aria-label="Claves pedagógicas">
          {pedagogicalKeys.map((key, index) => (
            <button
              key={key.id}
              className={selectedIndex === index ? 'is-active' : ''}
              onClick={() => setSelectedIndex(index)}
            >
              <span>{key.id}</span>
            </button>
          ))}
        </nav>

        <main className="pedagogical-stage">
          <button
            className="pedagogical-stage-arrow"
            onClick={goPrevious}
            aria-label="Clave anterior"
          >
            <AppIcon name="solar:arrow-left-linear" size={24} />
          </button>

          <article className="pedagogical-feature-card">
            <div className="pedagogical-feature-top clean">
              <span>
                <AppIcon name="solar:clipboard-check-linear" size={32} />
              </span>

              <div>
                <h2>{selected.title}</h2>
              </div>
            </div>

            <p className="pedagogical-description">{selected.description}</p>

            <div className="pedagogical-info-grid centered">
              <Notice type="info">
                {selected.question}
              </Notice>

              <Notice type="success">
                {selected.action}
              </Notice>
            </div>
          </article>

          <button
            className="pedagogical-stage-arrow"
            onClick={goNext}
            aria-label="Siguiente clave"
          >
            <AppIcon name="solar:arrow-right-linear" size={24} />
          </button>
        </main>
      </section>

      <div className="page-actions">
        <ButtonLink to="/principios/conocer" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/ruta-redisenio">Siguiente: ruta de rediseño</ButtonLink>
      </div>
    </>
  );
}
