export type NavSection = {
  id: number;
  label: string;
  path: string;
  icon: string;
};

export const navSections: NavSection[] = [
  { id: 1, label: 'Bienvenida', path: '/', icon: 'solar:home-2-linear' },
  { id: 2, label: 'Principios institucionales', path: '/principios', icon: 'solar:book-2-linear' },
  { id: 3, label: 'Claves pedagógicas', path: '/claves-pedagogicas', icon: 'solar:lightbulb-bolt-linear' },
  { id: 4, label: 'Ruta de rediseño', path: '/ruta-redisenio', icon: 'solar:route-linear' },
  { id: 5, label: 'Caja de herramientas', path: '/herramientas', icon: 'solar:case-round-linear' },
];

export const guidePages = [
  {
    path: '/',
    title: 'Evaluación + IA',
    subtitle: 'Guía para rediseñar evaluaciones',
    body: 'Explora una ruta práctica para rediseñar tus evaluaciones, definir el papel de la IA y construir experiencias que hagan visible cómo aprenden y piensan tus estudiantes.',
    notice: 'La IA no reemplaza el criterio pedagógico: lo vuelve más necesario.',
    cta: 'Iniciar ruta',
    next: '/por-que-redisenar',
  },
  {
    path: '/por-que-redisenar',
    title: '¿Por qué rediseñar la evaluación?',
    subtitle: '¿Por qué necesitamos repensar la evaluación?',
    body: 'La IA cambió las condiciones del aprendizaje y también las evidencias que usamos para evaluarlo.\n\nLas herramientas de inteligencia artificial generativa pueden producir respuestas completas, textos elaborados, síntesis, análisis y otros productos académicos en muy poco tiempo. Por eso, muchas evaluaciones tradicionales dejan de mostrar con claridad qué comprendió, pensó o construyó el estudiante.\n\nEl reto no es vigilar más. El reto es diseñar mejor.\n\nUna evaluación pertinente en tiempos de IA debe permitir ver no solo qué entrega el estudiante, sino cómo piensa, cómo decide, cómo argumenta, cómo usa la retroalimentación y cómo construye su aprendizaje.',
    cta: 'Continuar',
    prev: '/',
    next: '/organizacion',
  },
  {
    path: '/organizacion',
    title: 'Organización de la guía',
    subtitle: 'Tres niveles para pasar de la comprensión a la acción',
    body: 'Esta guía se organiza en tres niveles que ayudan a comprender, a pensar pedagógicamente y a rediseñar la evaluación.',
    cta: 'Ver principios',
    prev: '/por-que-redisenar',
    next: '/principios',
  },
];

export const modules = [
  {
    title: 'Principios institucionales',
    question: '¿Cómo entiende hoy la Universidad Icesi la evaluación?',
    text: 'Presentan el sentido de la evaluación en la Universidad Icesi y orientan su diseño desde una mirada formativa, continua, contextualizada y centrada en el aprendizaje.',
    to: '/principios',
    icon: 'solar:book-2-linear',
  },
  {
    title: 'Claves pedagógicas',
    question: '¿Qué implica pensar pedagógicamente la evaluación hoy?',
    text: 'Ayudan a tomar decisiones evaluativas centradas en el aprendizaje, el pensamiento, la experiencia del estudiante y el uso pedagógico de la retroalimentación y la IA.',
    to: '/claves-pedagogicas',
    icon: 'solar:lightbulb-bolt-linear',
  },
  {
    title: 'Ruta de rediseño',
    question: '¿Cómo transformar la evaluación en mi curso?',
    text: 'Propone una ruta para transformar una evaluación: definir aprendizajes, reconstruir la ruta cognitiva del estudiante, decidir el papel de la IA, diseñar situaciones auténticas, evidenciar el proceso del estudiante y retroalimentar.',
    to: '/ruta-redisenio',
    icon: 'solar:route-linear',
  },
];

export const principles = [
  { id: '01', title: 'La evaluación es una experiencia de aprendizaje en sí misma', description: 'La evaluación hace parte de las situaciones que permiten al estudiante avanzar en el desarrollo de sus aprendizajes. En consecuencia, la evaluación se integra a lo largo de la experiencia formativa y se articula con las actividades de enseñanza y aprendizaje, en lugar de aparecer únicamente como un cierre del proceso.', question: '¿Mi evaluación ayuda al estudiante a aprender o solo mide un resultado?', action: 'Integra momentos evaluativos durante el proceso, no únicamente al cierre.' },
  { id: '02', title: 'La evaluación reconoce y hace visible el proceso de pensamiento del estudiante', description: 'La evaluación busca hacer visible cómo el estudiante comprende, analiza, interpreta y construye sus respuestas, más allá de revisar lo que entrega.', question: '¿Mi evaluación permite ver cómo pensó el estudiante?', action: 'Incluye evidencias del proceso: borradores, decisiones justificadas, reflexiones, bitácoras o explicaciones del razonamiento.' },
  { id: '03', title: 'La evaluación es un proceso continuo, iterativo y retroalimentado.', description: 'El aprendizaje se construye de manera progresiva a través de diversas experiencias, dentro y fuera del aula. Por eso, la evaluación se concibe como un proceso iterativo que acompaña y ofrece retroalimentación útil, oportuna y comprensible.', question: '¿El estudiante puede usar la retroalimentación para mejorar?', action: 'Define momentos de revisión antes de la entrega final.' },
  { id: '04', title: 'La calificación orienta, no define el aprendizaje', description: 'La calificación es un referente dentro del proceso de aprendizaje, pero no constituye el propósito de la evaluación. Orienta tanto al estudiante como al docente sobre los avances alcanzados y los aspectos por fortalecer.', question: '¿La nota está acompañada de información que ayude a mejorar?', action: 'Acompaña la calificación con criterios claros, comentarios útiles y oportunidades de ajuste.' },
  { id: '05', title: 'La evaluación busca evidenciar cómo el estudiante moviliza integralmente sus competencias en situaciones significativas', description: 'Desde el enfoque de formación por competencias, evaluar supone reconocer cómo el estudiante moviliza conocimientos, habilidades y procesos de pensamiento para comprender, analizar, tomar decisiones y actuar en situaciones significativas y complejas.', question: '¿Mi evaluación permite ver cómo el estudiante usa lo que sabe en una situación concreta?', action: 'Diseña tareas que integren saber, hacer, pensar y decidir.' },
  { id: '06', title: 'La evaluación debe ser contextualizada y flexible', description: 'La evaluación depende de los propósitos formativos, de las características de los estudiantes y de las particularidades de cada experiencia de aprendizaje. No todas las evaluaciones sirven para todos los cursos, grupos o propósitos.', question: '¿Esta evaluación responde realmente al propósito de mi curso y a mis estudiantes?', action: 'Ajusta la evaluación según el propósito formativo, las condiciones del curso y el perfil del grupo.' },
  { id: '07', title: 'La evaluación prioriza el sentido pedagógico del uso de la IAG', description: 'La incorporación de la IAG debe responder a una decisión pedagógica clara: para qué se usa y cómo aporta al aprendizaje. No debe utilizarse solo porque está disponible.', question: '¿Qué papel cumple la IA en esta evaluación?', action: 'Define explícitamente cuándo se permite, cuándo se limita y cómo debe justificarse su uso.' },
];

export const keys = [
  { id: '01', title: 'Poner el aprendizaje y el pensamiento del estudiante en el centro del proceso formativo.', description: 'La enseñanza se organiza a partir de lo que se espera que el estudiante aprenda y, especialmente, de los procesos de pensamiento que debe desarrollar. Esto implica desplazar el foco de “qué temas voy a cubrir” hacia “qué quiero que el estudiante comprenda, analice, interprete o produzca”.', question: '¿Qué quiero que mis estudiantes sean capaces de pensar, más allá de lo que deben entregar?', action: 'Reformula la actividad desde los procesos de pensamiento que quieres movilizar.' },
  { id: '02', title: 'Diseñar situaciones que activen el aprendizaje', description: 'Una buena evaluación propone situaciones que le exigen al estudiante pensar, decidir, actuar y construir sentido. En este marco, las actividades adquieren valor en la medida en que movilizan el pensamiento y no por su ejecución en sí misma.', question: '¿Qué decisiones, interpretaciones y formas de razonamiento pone en juego el estudiante en esta actividad?', action: 'Convierte la tarea en una situación con decisiones, análisis y/o interpretación.' },
  { id: '03', title: 'Comprender y hacer visible la ruta cognitiva del estudiante a través de la evaluación', description: 'Para evaluar mejor, es necesario identificar qué procesos mentales debe recorrer el estudiante para lograr un desempeño. El estudiante no llega al resultado de manera automática.', question: '¿Tengo claridad sobre los procesos de pensamiento que debe poner en juego el estudiante para lograr el resultado que estoy evaluando?', action: 'Identifica los pasos cognitivos de la tarea: comprender, analizar, decidir, argumentar, crear o revisar.' },
  { id: '04', title: 'Definir los saberes esenciales para orientar el uso pedagógico de la IA', description: 'El profesor debe decidir qué debe desarrollar el estudiante de manera autónoma y qué puede enriquecerse con apoyo de IA. No todo debe hacerse con IA ni todo debe prohibirse.', question: '¿Qué aprendizajes son esenciales y deben ser desarrollados por el estudiante sin apoyo de IA?', action: 'Separa los procesos autónomos, los procesos asistidos y los procesos que requieren reflexión sobre el uso de IA.' },
  { id: '05', title: 'Articular la evaluación con experiencias auténticas y contextos profesionales', description: 'Las prácticas evaluativas adquieren mayor sentido cuando se conectan con situaciones reales o verosímiles en las que el estudiante pueda aplicar e integrar lo aprendido.', question: '¿El estudiante comprende qué sentido tiene lo que está haciendo y por qué resulta relevante?', action: 'Incluye contexto, rol, propósito y una situación significativa.' },
  { id: '06', title: 'Incorporar la retroalimentación como parte del proceso de aprendizaje', description: 'La retroalimentación le permite al estudiante comprender su desempeño, identificar oportunidades de mejora y tomar decisiones sobre su aprendizaje. Esto supone dar lugar a interacciones más específicas, oportunas y útiles, que conecten efectivamente la evaluación con el aprendizaje.', question: '¿El estudiante tiene la oportunidad de usar esa retroalimentación para mejorar su trabajo?', action: 'Diseña momentos de revisión, ajuste y mejora antes de la entrega final.' },
];

export const routeSteps = [
  { id: 1, label: 'Definir aprendizaje', path: '/ruta-redisenio/paso-1' },
  { id: 2, label: 'Reconstruir ruta cognitiva', path: '/ruta-redisenio/paso-2' },
  { id: 3, label: 'Decidir uso de IA', path: '/ruta-redisenio/paso-3' },
  { id: 4, label: 'Diseñar situación de evaluación', path: '/ruta-redisenio/paso-4' },
  { id: 5, label: 'Evaluar proceso', path: '/ruta-redisenio/paso-5' },
  { id: 6, label: 'Retroalimentar', path: '/ruta-redisenio/paso-6' },
];

export const tools = [
  { title: 'Semáforo IA', path: '/herramientas/semaforo-ia', icon: 'solar:traffic-linear', description: 'Identifica si la IA potencia, exige revisión o sustituye el aprendizaje.' },
  { title: 'Selector AIAS', path: '/herramientas/selector-aias', icon: 'solar:settings-minimalistic-linear', description: 'Define el nivel de integración de IA en tu evaluación.' },
  { title: 'Plantillas', path: '/herramientas/plantillas', icon: 'solar:document-text-linear', description: 'Formatos listos para acompañar el rediseño.' },
  { title: 'Checklist final', path: '/herramientas/checklist-final', icon: 'solar:checklist-minimalistic-linear', description: 'Verifica si tu evaluación está lista.' },
];

export const templates = [
  { title: 'Diagnóstico de evaluación actual', path: '/herramientas/diagnostico', body: 'Revisa si tu evaluación actual permite evidenciar aprendizaje, pensamiento, proceso y uso adecuado de IA.' },
  { title: 'Ruta cognitiva', path: '/herramientas/ruta-cognitiva', body: 'Identifica los procesos de pensamiento que el estudiante debe recorrer para lograr la tarea.' },
  { title: 'Rediseño de tarea', path: '/herramientas/rediseno-tarea', body: 'Transforma una actividad tradicional en una situación evaluativa con contexto, rol, propósito y evidencias del proceso.' },
  { title: 'Rúbrica', path: '/herramientas/rubrica', body: 'Define criterios claros para valorar el aprendizaje,el proceso, la argumentación,el uso de IA y el desempeño final.' },
  { title: 'Retroalimentación', path: '/herramientas/retroalimentacion', body: 'Planea momentos, devoluciones específicas y usos de la retroalimentación durante la actividad.' },
];

export const checklistGroups = [
  { title: 'Aprendizaje', items: ['¿El aprendizaje esperado está claramente definido?', '¿La evaluación se centra en capacidades y no solo en contenidos?', '¿La tarea exige comprender, analizar, interpretar, argumentar, decidir o crear?'] },
  { title: 'Diseño de la tarea', items: ['¿La actividad tiene contexto?', '¿El estudiante asume un rol claro?', '¿La tarea tiene un propósito significativo?', '¿La situación se conecta con experiencias reales o verosímiles?'] },
  { title: 'IA', items: ['¿Está definido si la IA se permite, se limita o se prohíbe?', '¿El estudiante sabe para qué puede usar IA?', '¿La IA sustituye el aprendizaje esencial?', '¿Se pide declarar o justificar el uso de IA?'] },
  { title: 'Proceso', items: ['¿La evaluación permite evidenciar la ruta cognitiva del estudiante?', '¿Se incluyen evidencias del proceso?', '¿Hay momentos de seguimiento antes de la entrega final?', '¿La calificación depende únicamente del producto final?'] },
  { title: 'Retroalimentación', items: ['¿La retroalimentación es oportuna?', '¿La retroalimentación es específica y comprensible?', '¿El estudiante puede usarla para mejorar?', '¿Hay posibilidad de ajuste, revisión o reentrega?'] },
];

export const iconNames = {
  home: 'solar:home-2-linear',
  principles: 'solar:book-2-linear',
  keys: 'solar:lightbulb-bolt-linear',
  route: 'solar:route-linear',
  toolbox: 'solar:case-round-linear',
  ai: 'solar:cpu-bolt-linear',
  checklist: 'solar:checklist-minimalistic-linear',
  traffic: 'solar:traffic-linear',
  selector: 'solar:settings-minimalistic-linear',
  templates: 'solar:document-text-linear',
  diagnostic: 'solar:magnifer-linear',
  cognitive: 'solar:brain-linear',
  redesign: 'solar:pen-new-square-linear',
  rubric: 'solar:clipboard-list-linear',
  feedback: 'solar:chat-round-check-linear',
  close: 'solar:flag-linear',
  next: 'solar:arrow-right-linear',
  back: 'solar:arrow-left-linear',
  warning: 'solar:danger-triangle-linear',
  success: 'solar:check-circle-linear',
  info: 'solar:info-circle-linear',
};
