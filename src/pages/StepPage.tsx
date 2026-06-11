import { useLocation } from 'react-router-dom';
import { ButtonLink, Notice, RouteStepper } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const steps = [
  {
    number: 1,
    label: 'Paso 1',
    title: 'Define el aprendizaje que quieres que tus estudiantes logren',
    question: '¿Qué quiero que el estudiante sea capaz de pensar, comprender o hacer?',
    text: 'Antes de diseñar la actividad, define con claridad qué aprendizaje quieres observar. Evita formular la evaluación únicamente desde contenidos o temas. En su lugar, piensa en los procesos de pensamiento y en las capacidades que el estudiante debe desarrollar: analizar, interpretar, argumentar, tomar decisiones, resolver problemas, entre otros.',
    action: 'Reformula el resultado de aprendizaje en función de procesos de pensamiento y capacidades observables.',
    alert: 'Si la IA puede resolver completamente la tarea, no estás evaluando el aprendizaje.',
    visualTitle: 'En lugar de pedir:',
    visualSubtitle: 'Pide:',
    visualType: 'compare',
    icon: 'solar:target-linear',
    before: '“Haz un resumen del texto.”',
    after: '“Analiza la postura del autor, contrástala con un caso del curso y justifica tu interpretación con criterios propios.”',
  },
  {
    number: 2,
    label: 'Paso 2',
    title: 'Reconstruye la ruta cognitiva del estudiante',
    question: '¿Qué tiene que pensar el estudiante para lograr la tarea?',
    text: 'Toda evaluación implica una ruta cognitiva. El estudiante debe comprender información, identificar relaciones, tomar decisiones, justificar criterios, producir una respuesta y revisar lo que hizo. Si esa ruta no está clara, la evaluación puede terminar valorando solo el producto final.',
    action: 'Identifica los procesos de pensamiento que la tarea exige: comprender, analizar, interpretar, decidir, argumentar, producir, revisar, entre otros.',
    visualTitle: 'Para una tarea de análisis de caso, la ruta podría ser:',
    visualSubtitle: 'Ruta cognitiva',
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
  },
  {
    number: 3,
    label: 'Paso 3',
    title: 'Define qué aprendizajes deben desarrollarse autónomamente y cuáles pueden enriquecerse con apoyo de IA.',
    question: '¿Qué es esencial que el estudiante aprenda por sí mismo?',
    text: 'Distingue los aprendizajes y capacidades que requieren apropiación autónoma por parte del estudiante de aquellos en los que la IA puede funcionar como apoyo, mediación o herramienta para ampliar el aprendizaje. Para ello, define qué procesos, desempeños o capacidades debe evidenciar el estudiante.\n\nSi el objetivo es que el estudiante construya y argumente una postura propia frente a un problema, puedes decidir que todo el proceso se realice sin apoyo de IA. En cambio, si el propósito es que compare perspectivas o explore alternativas, podrías permitir su uso en momentos específicos. Lo importante es definir con claridad qué debe aprender el estudiante por sí mismo y qué apoyos resultan pertinentes para favorecer ese aprendizaje.',
    visualTitle: 'Decisión pedagógica',
    visualSubtitle: 'Define con claridad',
    visualType: 'text',
    icon: 'solar:cpu-bolt-linear',
  },
  {
    number: 4,
    label: 'Paso 4',
    title: 'Diseña una situación de evaluación con sentido formativo',
    question: '¿La evaluación propone una situación con contexto, rol y propósito que movilice el pensamiento del estudiante?',
    text: 'Una evaluación adquiere mayor sentido cuando ubica al estudiante en una situación significativa. Esto le permite comprender para qué realiza la actividad, desde qué rol actúa y qué decisión o problema debe abordar.',
    action: 'Diseña la evaluación a partir de tres elementos: contexto, rol del estudiante y propósito.',
    visualTitle: 'Tres elementos',
    visualSubtitle: 'Contexto, rol y propósito',
    visualType: 'cards',
    icon: 'solar:map-point-wave-linear',
    list: [
      'Contexto: ¿En qué situación se enmarca la tarea? Puede ser un contexto disciplinar, académico, cotidiano, profesional o social.',
      'Rol: ¿Desde qué lugar actúa el estudiante? Puede actuar como analista, investigador, diseñador, consultor, intérprete, evaluador, mediador o profesional de su campo.',
      'Propósito: ¿Para qué realiza esta actividad? La tarea debe responder a una decisión, problema, necesidad, caso o situación concreta.',
    ],
    before: '“Escribe un ensayo sobre sostenibilidad.”',
    after: '“Como consultor de una organización local, analiza un problema de sostenibilidad, compara dos alternativas y recomienda una decisión justificada.”',
  },
  {
    number: 5,
    label: 'Paso 5',
    title: 'Asegúrate de evaluar el proceso y no solamente el producto',
    question: '¿Cómo voy a hacer visible el proceso de aprendizaje del estudiante?',
    text: 'Para que la evaluación permita comprender cómo aprende el estudiante, es necesario diseñar evidencias que permitan reconocer sus procesos de pensamiento, las decisiones que toma y la manera en que desarrolla su trabajo, y no solo el resultado final.',
    action: 'Incluye elementos como borradores, decisiones justificadas, bitácoras, registros del proceso o explicaciones sobre el uso de IA, entre otros.',
    alert: 'Prioriza la profundidad del aprendizaje sobre la cantidad de actividades: diseña menos tareas, pero con mayor seguimiento y acompañamiento del proceso.',
    visualTitle: 'Evidencias del proceso',
    visualSubtitle: 'Opciones posibles',
    visualType: 'cards',
    icon: 'solar:document-add-linear',
    list: [
      'Borradores: Permiten ver la evolución del trabajo y los cambios realizados.',
      'Bitácora de proceso: Ayuda a registrar decisiones, dificultades, avances y aprendizajes.',
      'Justificación de decisiones: Permite comprender por qué el estudiante eligió una ruta, una fuente, una estrategia o una respuesta.',
      'Registro de uso de IA: Hace visible cuándo, cómo y para qué se utilizó la IA durante la actividad.',
    ],
  },
  {
    number: 6,
    label: 'Paso 6',
    title: 'Integra la retroalimentación al proceso de aprendizaje',
    question: '¿Cómo va a usar el estudiante la retroalimentación para mejorar?',
    text: 'La retroalimentación debe aparecer durante el proceso, no solo al final. Su propósito es ayudar al estudiante a comprender su desempeño, identificar oportunidades de mejora y tomar decisiones para avanzar.',
    action: 'Define cuándo se dará la retroalimentación, quién la ofrecerá y cómo podrá usarla el estudiante.',
    alert: 'La IA puede apoyar la retroalimentación, pero no debe reemplazar el criterio pedagógico del docente.\n\nLa retroalimentación cumple su propósito cuando el estudiante comprende qué logró, qué debe mejorar y cómo puede avanzar.',
    visualTitle: 'Dimensiones de la retroalimentación',
    visualSubtitle: 'Momento, fuente, uso y claridad',
    visualType: 'cards',
    icon: 'solar:chat-round-check-linear',
    list: [
      'Momento: ¿La retroalimentación ocurre antes de la entrega final?',
      'Fuente: ¿La ofrece el profesor o los pares? ¿De qué manera la IA puede utilizarse como apoyo o mediación durante este proceso?',
      'Uso: ¿El estudiante tiene oportunidad de ajustar, revisar o reentregar?',
      'Claridad: ¿La retroalimentación es específica, comprensible y útil?',
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
  const paragraphs = step.text.split('\n\n');

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

          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

          {step.action && (
            <Notice type="success">
              {step.action}
            </Notice>
          )}

          {step.alert && (
            <Notice type="danger">
              {step.alert}
            </Notice>
          )}
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
                <small>En lugar de pedir</small>
                <p>{step.before}</p>
              </div>

              <div className="example-arrow">
                <AppIcon name="solar:arrow-down-linear" size={22} />
              </div>

              <div className="example-after">
                <small>Pide</small>
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

          {step.number === 4 && (
            <div className="example-comparison">
              <div className="example-before">
                <small>En lugar de pedir</small>
                <p>{step.before}</p>
              </div>

              <div className="example-after">
                <small>Pide</small>
                <p>{step.after}</p>
              </div>
            </div>
          )}
        </aside>
      </section>

      <div className="page-actions">
        <ButtonLink to={previousPath} variant="ghost">Anterior</ButtonLink>
        <ButtonLink to={nextPath}>{nextLabel}</ButtonLink>
      </div>
    </>
  );
}
