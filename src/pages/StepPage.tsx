import { useLocation } from 'react-router-dom';
import { ButtonLink, Notice, RouteStepper } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const steps = [
  {
    number: 1,
    label: 'Definir',
    title: 'Define el aprendizaje que quieres lograr',
    question: '¿Qué quiero que el estudiante sea capaz de pensar, comprender o hacer?',
    text: 'Antes de diseñar la actividad, define con claridad qué aprendizaje quieres observar. Evita formular la evaluación únicamente desde contenidos o temas. En su lugar, piensa en las capacidades que el estudiante debe desarrollar: analizar, interpretar, argumentar, tomar decisiones, resolver problemas o crear.',
    action: 'Reformula el resultado de aprendizaje en función de procesos de pensamiento y capacidades observables.',
    alert: 'Si la IA puede resolver completamente la tarea sin que el estudiante piense, probablemente no estás evaluando aprendizaje.',
    visualTitle: 'Ejemplo rápido',
    visualSubtitle: 'De tarea genérica a tarea con pensamiento',
    visualType: 'compare',
    icon: 'solar:target-linear',
    before: '“Haz un resumen del texto.”',
    after: '“Analiza la postura del autor, contrástala con un caso del curso y justifica tu interpretación con criterios propios.”',
    checks: [
      'El resultado de aprendizaje está centrado en el estudiante.',
      'El aprendizaje esperado exige pensamiento.',
      'La IA no puede resolver toda la tarea sin participación del estudiante.',
    ],
  },
  {
    number: 2,
    label: 'Pensar',
    title: 'Reconstruye la ruta cognitiva del estudiante',
    question: '¿Qué tiene que pensar el estudiante para lograr la tarea?',
    text: 'Toda evaluación implica una ruta mental. El estudiante debe comprender información, identificar relaciones, tomar decisiones, justificar criterios, producir una respuesta y revisar lo que hizo. Si esa ruta no está clara, la evaluación puede terminar valorando solo el producto final.',
    action: 'Identifica los procesos de pensamiento que la tarea exige: comprender, analizar, interpretar, decidir, argumentar, producir, revisar o crear.',
    alert: 'Si no sabes qué proceso cognitivo estás evaluando, será difícil saber si la IA está apoyando o reemplazando el aprendizaje.',
    visualTitle: 'Ejemplo: análisis de caso',
    visualSubtitle: 'Ruta mental posible',
    visualType: 'list',
    icon: 'solar:brain-linear',
    list: [
      'Comprender el caso.',
      'Identificar el problema central.',
      'Seleccionar criterios de análisis.',
      'Comparar alternativas.',
      'Tomar una decisión.',
      'Justificar la respuesta.',
    ],
    checks: [
      'La tarea tiene una ruta mental clara.',
      'Se identifican procesos de pensamiento.',
      'El producto final no es la única evidencia.',
    ],
  },
  {
    number: 3,
    label: 'Decidir IA',
    title: 'Decide el papel de la IA',
    question: '¿Qué debe aprender el estudiante por sí mismo y qué puede enriquecer con apoyo de IA?',
    text: 'La IA puede ser una herramienta útil si su uso está definido con claridad. El profesor debe decidir qué procesos deben ser autónomos, cuáles pueden ser asistidos y cuáles requieren que el estudiante explique cómo usó la IA.',
    action: 'Distingue entre aprendizajes esenciales, apoyos permitidos y usos que deben evitarse porque sustituyen el pensamiento del estudiante.',
    alert: 'No basta con decir “se permite IA” o “no se permite IA”. El estudiante necesita saber para qué puede usarla, en qué momento y cómo debe declarar su uso.',
    visualTitle: 'Decisiones clave',
    visualSubtitle: 'Define límites claros',
    visualType: 'decisions',
    icon: 'solar:cpu-bolt-linear',
    list: ['Permitir', 'Limitar', 'Prohibir', 'Declarar uso'],
    checks: [
      'Está definido qué puede hacer la IA.',
      'Está definido qué debe hacer el estudiante.',
      'El uso de IA debe declararse o justificarse.',
    ],
  },
  {
    number: 4,
    label: 'Contextualizar',
    title: 'Diseña una situación con sentido formativo',
    question: '¿La evaluación propone una situación con contexto, rol y propósito?',
    text: 'Una evaluación tiene más valor cuando ubica al estudiante en una situación significativa. Esto le permite comprender para qué realiza la actividad, desde qué rol actúa y qué decisión o problema debe abordar.',
    action: 'Diseña la evaluación a partir de tres elementos: contexto, rol y propósito.',
    alert: 'Mientras más genérica sea la tarea, más fácil será que la IA la resuelva sin aprendizaje real.',
    visualTitle: 'Tres elementos clave',
    visualSubtitle: 'Contexto, rol y propósito',
    visualType: 'cards',
    icon: 'solar:map-point-wave-linear',
    list: [
      'Contexto: ¿en qué situación se enmarca la tarea?',
      'Rol: ¿desde qué lugar actúa el estudiante?',
      'Propósito: ¿para qué realiza esta actividad?',
    ],
    checks: [
      'La tarea tiene contexto.',
      'El estudiante asume un rol claro.',
      'La actividad tiene un propósito significativo.',
    ],
  },
  {
    number: 5,
    label: 'Evidenciar',
    title: 'Evalúa el proceso, no solo el producto',
    question: '¿Cómo voy a hacer visible el proceso de aprendizaje del estudiante?',
    text: 'Si solo se evalúa el producto final, es difícil saber qué hizo el estudiante, qué comprendió, qué decidió o cómo usó la IA. Por eso, la evaluación debe incluir evidencias del proceso.',
    action: 'Define qué evidencias permitirán observar el pensamiento, las decisiones y los ajustes realizados durante la tarea.',
    alert: 'No pidas más evidencias solo por controlar. Pide evidencias que ayuden a comprender el aprendizaje.',
    visualTitle: 'Evidencias posibles',
    visualSubtitle: 'Menos tareas, más seguimiento',
    visualType: 'cards',
    icon: 'solar:document-add-linear',
    list: [
      'Borradores.',
      'Bitácora de proceso.',
      'Justificación de decisiones.',
      'Registro de uso de IA.',
    ],
    checks: [
      'La evaluación permite ver cómo pensó el estudiante.',
      'Hay evidencias del proceso.',
      'El seguimiento no depende solo del producto final.',
    ],
  },
  {
    number: 6,
    label: 'Retroalimentar',
    title: 'Integra la retroalimentación al proceso',
    question: '¿Cómo va a usar el estudiante la retroalimentación para mejorar?',
    text: 'La retroalimentación debe aparecer durante el proceso, no solo al final. Su propósito es ayudar al estudiante a comprender su desempeño, identificar oportunidades de mejora y tomar decisiones para avanzar.',
    action: 'Define cuándo se dará la retroalimentación, quién la ofrecerá y cómo podrá usarla el estudiante.',
    alert: 'La IA puede apoyar la retroalimentación, pero no debe reemplazar el criterio pedagógico del docente.',
    visualTitle: 'Ciclo de mejora',
    visualSubtitle: 'Retroalimentar, ajustar y mejorar',
    visualType: 'list',
    icon: 'solar:chat-round-check-linear',
    list: [
      'Retroalimentar.',
      'Ajustar.',
      'Mejorar.',
    ],
    checks: [
      'La retroalimentación ocurre antes de la entrega final.',
      'El estudiante puede usarla para mejorar.',
      'La retroalimentación es clara, específica y útil.',
    ],
  },
];

function getStepFromPath(pathname: string) {
  const match = pathname.match(/paso-(\d)/);
  const number = match ? Number(match[1]) : 1;
  return steps.find((step) => step.number === number) ?? steps[0];
}

export default function StepPage() {
  const location = useLocation();
  const step = getStepFromPath(location.pathname);

  const previousPath =
    step.number === 1 ? '/ruta-redisenio' : `/ruta-redisenio/paso-${step.number - 1}`;

  const nextPath =
    step.number === 6 ? '/herramientas' : `/ruta-redisenio/paso-${step.number + 1}`;

  const nextLabel = step.number === 6 ? 'Ir a herramientas' : 'Siguiente paso';

  return (
    <>
      <RouteStepper active={step.number} />

      <section className="learning-step-screen">
        <article className="step-focus-card">
          <div className="step-label-row">
            <span>Paso {step.number}</span>
            <small>{step.label}</small>
          </div>

          <h1>{step.title}</h1>

          <div className="step-question-box">
            <span>Pregunta clave</span>
            <h2>{step.question}</h2>
          </div>

          <p>{step.text}</p>

          <Notice type="success" title="Acción metodológica">
            {step.action}
          </Notice>

          <Notice type="danger" title="Alerta IA">
            {step.alert}
          </Notice>
        </article>

        <aside className="step-example-card">
          <div className="example-header">
            <span>
              <AppIcon name={step.icon} size={20} />
              {step.visualTitle}
            </span>
            <strong>{step.visualSubtitle}</strong>
          </div>

          {step.visualType === 'compare' && (
            <div className="example-comparison">
              <div className="example-before">
                <small>Antes</small>
                <p>{step.before}</p>
              </div>

              <div className="example-arrow">
                <AppIcon name="solar:arrow-down-linear" size={22} />
              </div>

              <div className="example-after">
                <small>Después</small>
                <p>{step.after}</p>
              </div>
            </div>
          )}

          {step.visualType === 'list' && (
            <ol className="step-visual-list">
              {step.list?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          )}

          {step.visualType === 'decisions' && (
            <div className="decision-pills">
              {step.list?.map((item) => (
                <span key={item}>
                  <AppIcon name="solar:check-circle-linear" size={20} />
                  {item}
                </span>
              ))}
            </div>
          )}

          {step.visualType === 'cards' && (
            <div className="step-mini-cards">
              {step.list?.map((item) => (
                <div key={item}>
                  <AppIcon name="solar:checklist-minimalistic-linear" size={20} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mini-progress-card">
            <span>Resultado esperado</span>
            <p>
              Una evaluación más clara, formativa y alineada con el aprendizaje que quieres evidenciar.
            </p>
          </div>
        </aside>
      </section>

      <section className="step-bottom-checklist">
        <strong>Checklist del paso {step.number}</strong>

        {step.checks.map((check) => (
          <label key={check}>
            <input type="checkbox" />
            <span>{check}</span>
          </label>
        ))}
      </section>

      <div className="page-actions">
        <ButtonLink to={previousPath} variant="ghost">Anterior</ButtonLink>
        <ButtonLink to={nextPath}>{nextLabel}</ButtonLink>
      </div>
    </>
  );
}