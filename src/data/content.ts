export type NavSection = {
  id: number;
  label: string;
  path: string;
  icon: string;
};

export const navSections: NavSection[] = [
  { id: 1, label: 'Bienvenida', path: '/', icon: 'solar:home-2-linear' },
  { id: 2, label: 'Principios', path: '/principios', icon: 'solar:book-2-linear' },
  { id: 3, label: 'Claves pedagógicas', path: '/claves-pedagogicas', icon: 'solar:lightbulb-bolt-linear' },
  { id: 4, label: 'Ruta de rediseño', path: '/ruta-redisenio', icon: 'solar:route-linear' },
  { id: 5, label: 'Caja de herramientas', path: '/herramientas', icon: 'solar:case-round-linear' },
];

export const guidePages = [
  { path: '/', title: 'Evaluación + IA', subtitle: 'Guía para rediseñar evaluaciones', body: 'Explora una ruta práctica para repensar tus actividades evaluativas, definir el papel de la IA y construir experiencias que hagan visible el aprendizaje, el pensamiento y el proceso de tus estudiantes.', cta: 'Iniciar ruta', next: '/por-que-redisenar', notice: 'La IA no reemplaza el criterio pedagógico: lo vuelve más necesario.' },
  { path: '/por-que-redisenar', title: '¿Por qué rediseñar la evaluación?', subtitle: 'La IA cambió las condiciones del aprendizaje y también las evidencias que usamos para evaluarlo.', body: 'Las herramientas de inteligencia artificial generativa pueden producir respuestas completas, textos elaborados, síntesis, análisis aparentes y productos académicos en muy poco tiempo. Por eso, muchas evaluaciones tradicionales dejan de mostrar con claridad qué comprendió, pensó o construyó realmente el estudiante.', cta: 'Continuar', next: '/organizacion', prev: '/', notice: 'El reto no es vigilar más. El reto es diseñar mejor.' },
  { path: '/organizacion', title: '¿Cómo está organizada esta guía?', subtitle: 'Tres niveles para pasar de la comprensión a la acción', body: 'Esta guía se organiza en tres niveles que ayudan a comprender, pensar y rediseñar la evaluación.', cta: 'Ver principios', next: '/principios', prev: '/por-que-redisenar' },
];

export const modules = [
 { title:'Principios institucionales', question:'¿Qué entendemos por evaluación?', text:'Presentan el sentido de la evaluación en la Universidad Icesi y orientan su diseño desde una mirada formativa, continua, contextualizada y centrada en el aprendizaje.', to:'/principios', icon:'▥' },
 { title:'Claves pedagógicas', question:'¿Qué implica enseñar, aprender y evaluar hoy?', text:'Ayudan a poner el aprendizaje, el pensamiento, la experiencia, las competencias y la retroalimentación en el centro de las decisiones evaluativas.', to:'/claves-pedagogicas', icon:'⚿' },
 { title:'Ruta de rediseño', question:'¿Cómo lo hago en la práctica?', text:'Propone un paso a paso para transformar una evaluación: definir aprendizajes, reconstruir la ruta cognitiva, decidir el papel de la IA, diseñar situaciones auténticas, evidenciar proceso y retroalimentar.', to:'/ruta-redisenio', icon:'⚑' },
];

export const principles = [
 {id:'01',title:'La evaluación también es aprendizaje',description:'La evaluación no debe aparecer solo al final del proceso. También es una experiencia que permite aprender, reconocer avances, identificar dificultades y mejorar.',question:'¿Mi evaluación ayuda al estudiante a aprender o solo mide un resultado?',action:'Integra momentos evaluativos durante el proceso, no únicamente al cierre.'},
 {id:'02',title:'El proceso de pensamiento debe hacerse visible',description:'Evaluar no es revisar únicamente lo que el estudiante entrega. También implica comprender cómo analiza, interpreta, argumenta, decide y construye conocimiento.',question:'¿Mi evaluación permite ver cómo pensó el estudiante?',action:'Incluye evidencias del proceso: borradores, decisiones justificadas, reflexiones, bitácoras o explicaciones del razonamiento.'},
 {id:'03',title:'La evaluación es continua y retroalimentada',description:'El aprendizaje se construye en distintos momentos. Por eso, la evaluación debe acompañar el proceso y ofrecer retroalimentación útil, oportuna y comprensible.',question:'¿El estudiante puede usar la retroalimentación para mejorar?',action:'Define momentos de revisión antes de la entrega final.'},
 {id:'04',title:'La calificación orienta, no define el aprendizaje',description:'La nota es un referente del estado del aprendizaje, pero no debe convertirse en el propósito central de la evaluación.',question:'¿La nota está acompañada de información que ayude a mejorar?',action:'Acompaña la calificación con criterios claros, comentarios útiles y oportunidades de ajuste.'},
 {id:'05',title:'La evaluación evidencia competencias',description:'Desde el enfoque de formación por competencias, evaluar implica observar cómo el estudiante moviliza conocimientos, habilidades, pensamiento y actuación en situaciones significativas.',question:'¿Mi evaluación permite ver cómo el estudiante usa lo que sabe en una situación concreta?',action:'Diseña tareas que integren saber, hacer, pensar y decidir.'},
 {id:'06',title:'La evaluación debe ser contextualizada y flexible',description:'No todas las evaluaciones sirven para todos los cursos, grupos o propósitos. Cada evaluación debe responder al contexto, a los estudiantes y a los aprendizajes esperados.',question:'¿Esta evaluación responde realmente a mi curso y a mis estudiantes?',action:'Ajusta la evaluación según el propósito formativo, las condiciones del curso y el perfil del grupo.'},
 {id:'07',title:'La IA debe tener sentido pedagógico',description:'La IA no debe usarse solo porque está disponible. Su incorporación debe responder a una decisión pedagógica clara: para qué se usa, cómo aporta al aprendizaje y qué proceso no debe reemplazar.',question:'¿La IA potencia el aprendizaje o sustituye el pensamiento del estudiante?',action:'Define explícitamente cuándo se permite, cuándo se limita y cómo debe justificarse su uso.'},
];

export const keys = [
 {id:'01',title:'Poner el aprendizaje y el pensamiento en el centro',description:'La pregunta principal no es qué tema se va a cubrir, sino qué debe comprender, analizar, interpretar, argumentar o producir el estudiante.',question:'¿Qué quiero que mis estudiantes sean capaces de pensar, más allá de lo que deben entregar?',action:'Reformula la actividad desde los procesos de pensamiento que quieres movilizar.'},
 {id:'02',title:'Diseñar situaciones que activen el aprendizaje',description:'Una buena evaluación no se limita a pedir una entrega. Propone una situación que exige pensar, decidir, actuar y construir sentido.',question:'¿La actividad exige pensamiento o solo cumplimiento de instrucciones?',action:'Convierte la tarea en una situación con decisiones, análisis o interpretación.'},
 {id:'03',title:'Hacer visible la ruta cognitiva',description:'El estudiante no llega al resultado de manera automática. Para evaluar mejor, es necesario identificar qué procesos mentales debe recorrer.',question:'¿Mi evaluación permite ver cómo llegó al resultado o solo qué entregó?',action:'Identifica los pasos cognitivos de la tarea: comprender, analizar, decidir, argumentar, crear o revisar.'},
 {id:'04',title:'Definir los saberes esenciales frente a la IA',description:'No todo debe hacerse con IA ni todo debe prohibirse. El profesor debe decidir qué debe desarrollar el estudiante de manera autónoma y qué puede enriquecerse con apoyo de IA.',question:'¿La IA está resolviendo la parte que el estudiante debía aprender?',action:'Separa los procesos autónomos, los procesos asistidos y los procesos que requieren reflexión sobre el uso de IA.'},
 {id:'05',title:'Conectar con experiencias auténticas',description:'Las evaluaciones tienen más sentido cuando se relacionan con situaciones reales, verosímiles o profesionales donde el estudiante debe aplicar criterios y tomar decisiones.',question:'¿Esta evaluación se parece a una situación que el estudiante podría enfrentar fuera del aula?',action:'Incluye contexto, rol, propósito y una situación significativa.'},
 {id:'06',title:'Integrar la retroalimentación al aprendizaje',description:'La retroalimentación no debe ser un comentario final. Debe ayudar al estudiante a comprender su desempeño, ajustar su proceso y mejorar.',question:'¿El estudiante tiene oportunidad real de usar la retroalimentación?',action:'Diseña momentos de revisión, ajuste y mejora antes de la entrega final.'},
];

export const routeSteps = [
 {id:1,label:'Definir',path:'/ruta-redisenio/paso-1',title:'Define el aprendizaje que quieres lograr',question:'¿Qué quiero que el estudiante sea capaz de pensar, comprender o hacer?',body:'Antes de diseñar la actividad, define con claridad qué aprendizaje quieres observar. Evita formular la evaluación únicamente desde contenidos o temas. En su lugar, piensa en las capacidades que el estudiante debe desarrollar: analizar, interpretar, argumentar, tomar decisiones, resolver problemas o crear.',action:'Reformula el resultado de aprendizaje en función de procesos de pensamiento y capacidades observables.',alert:'Si la IA puede resolver completamente la tarea sin que el estudiante piense, probablemente no estás evaluando aprendizaje.',example:'En lugar de pedir: “Haz un resumen del texto.” Pide: “Analiza la postura del autor, contrástala con un caso del curso y justifica tu interpretación con criterios propios.”'},
 {id:2,label:'Pensar',path:'/ruta-redisenio/paso-2',title:'Reconstruye la ruta cognitiva del estudiante',question:'¿Qué tiene que pensar el estudiante para lograr la tarea?',body:'Toda evaluación implica una ruta mental. El estudiante debe comprender información, identificar relaciones, tomar decisiones, justificar criterios, producir una respuesta y revisar lo que hizo. Si esa ruta no está clara, la evaluación puede terminar valorando solo el producto final.',action:'Identifica los procesos de pensamiento que la tarea exige: comprender, analizar, interpretar, decidir, argumentar, producir, revisar o crear.',alert:'Si no sabes qué proceso cognitivo estás evaluando, será difícil saber si la IA está apoyando o reemplazando el aprendizaje.',example:'Para una tarea de análisis de caso: comprender el caso, identificar el problema central, seleccionar criterios, comparar alternativas, tomar una decisión y justificar la respuesta.'},
 {id:3,label:'Decidir IA',path:'/ruta-redisenio/paso-3',title:'Decide el papel de la IA',question:'¿Qué debe aprender el estudiante por sí mismo y qué puede enriquecer con apoyo de IA?',body:'La IA puede ser una herramienta útil si su uso está definido con claridad. El profesor debe decidir qué procesos deben ser autónomos, cuáles pueden ser asistidos y cuáles requieren que el estudiante explique cómo usó la IA.',action:'Distingue entre aprendizajes esenciales, apoyos permitidos y usos que deben evitarse porque sustituyen el pensamiento del estudiante.',alert:'No basta con decir “se permite IA” o “no se permite IA”. El estudiante necesita saber para qué puede usarla, en qué momento y cómo debe declarar su uso.',example:'La IA puede apoyar en explorar ideas, comparar enfoques, revisar claridad del texto y generar preguntas de mejora. El estudiante responde por interpretación, argumentación, decisiones, postura final y validación.'},
 {id:4,label:'Contextualizar',path:'/ruta-redisenio/paso-4',title:'Diseña una situación con sentido formativo',question:'¿La evaluación propone una situación con contexto, rol y propósito?',body:'Una evaluación tiene más valor cuando ubica al estudiante en una situación significativa. Esto le permite comprender para qué realiza la actividad, desde qué rol actúa y qué decisión o problema debe abordar.',action:'Diseña la evaluación a partir de tres elementos: contexto, rol y propósito.',alert:'Mientras más genérica sea la tarea, más fácil será que la IA la resuelva sin aprendizaje real.',example:'En lugar de pedir “Escribe un ensayo sobre sostenibilidad”, pide una situación con rol, problema, alternativas y recomendación justificada.'},
 {id:5,label:'Evidenciar',path:'/ruta-redisenio/paso-5',title:'Evalúa el proceso, no solo el producto',question:'¿Cómo voy a hacer visible el proceso de aprendizaje del estudiante?',body:'Si solo se evalúa el producto final, es difícil saber qué hizo el estudiante, qué comprendió, qué decidió o cómo usó la IA. Por eso, la evaluación debe incluir evidencias del proceso.',action:'Define qué evidencias permitirán observar el pensamiento, las decisiones y los ajustes realizados durante la tarea.',alert:'No pidas más evidencias solo por controlar. Pide evidencias que ayuden a comprender el aprendizaje.',example:'Evidencias posibles: borradores, bitácora de proceso, justificación de decisiones y registro de uso de IA.'},
 {id:6,label:'Retroalimentar',path:'/ruta-redisenio/paso-6',title:'Integra la retroalimentación al proceso',question:'¿Cómo va a usar el estudiante la retroalimentación para mejorar?',body:'La retroalimentación debe aparecer durante el proceso, no solo al final. Su propósito es ayudar al estudiante a comprender su desempeño, identificar oportunidades de mejora y tomar decisiones para avanzar.',action:'Define cuándo se dará la retroalimentación, quién la ofrecerá y cómo podrá usarla el estudiante.',alert:'La IA puede apoyar la retroalimentación, pero no debe reemplazar el criterio pedagógico del docente.',example:'Una evaluación formativa no termina cuando se entrega una nota. Termina cuando el estudiante comprende qué logró, qué debe mejorar y cómo puede avanzar.'},
];

export const tools = [
 {title:'Semáforo IA',path:'/herramientas/semaforo-ia',icon:'●●●',description:'Identifica si la IA potencia, exige revisión o sustituye el aprendizaje.',cta:'Abrir herramienta'},
 {title:'Selector AIAS',path:'/herramientas/selector-aias',icon:'1–5',description:'Define el nivel de integración de IA en tu evaluación.',cta:'Abrir herramienta'},
 {title:'Plantillas',path:'/herramientas/plantillas',icon:'▤',description:'Formatos listos para acompañar el rediseño.',cta:'Ver plantillas'},
 {title:'Checklist final',path:'/herramientas/checklist-final',icon:'☑',description:'Verifica si tu evaluación está lista.',cta:'Abrir checklist'},
];

export const templates = [
 {title:'Diagnóstico de evaluación actual',path:'/herramientas/diagnostico',body:'Revisa si tu evaluación actual permite evidenciar aprendizaje, pensamiento, proceso y uso adecuado de IA.'},
 {title:'Ruta cognitiva',path:'/herramientas/ruta-cognitiva',body:'Identifica los procesos de pensamiento que el estudiante debe recorrer para lograr la tarea.'},
 {title:'Rediseño de tarea',path:'/herramientas/rediseno-tarea',body:'Transforma una actividad tradicional en una situación evaluativa con contexto, rol, propósito y evidencias de proceso.'},
 {title:'Rúbrica',path:'/herramientas/rubrica',body:'Define criterios claros para valorar aprendizaje, proceso, argumentación, uso de IA y desempeño final.'},
 {title:'Retroalimentación',path:'/herramientas/retroalimentacion',body:'Planea momentos, fuentes y usos de la retroalimentación durante la actividad.'},
];

export const checklistGroups = [
 {title:'Aprendizaje',items:['¿El aprendizaje esperado está claramente definido?','¿La evaluación se centra en capacidades y no solo en contenidos?','¿La tarea exige comprender, analizar, interpretar, argumentar, decidir o crear?']},
 {title:'Diseño de la tarea',items:['¿La actividad tiene contexto?','¿El estudiante asume un rol claro?','¿La tarea tiene un propósito significativo?','¿La situación se conecta con experiencias reales, profesionales o verosímiles?']},
 {title:'IA',items:['¿Está definido si la IA se permite, se limita o se prohíbe?','¿El estudiante sabe para qué puede usar IA?','¿La IA no sustituye el aprendizaje esencial?','¿Se pide declarar o justificar el uso de IA?']},
 {title:'Proceso',items:['¿La evaluación permite ver cómo pensó el estudiante?','¿Se incluyen evidencias del proceso?','¿Hay momentos de seguimiento antes de la entrega final?','¿La calificación no depende únicamente del producto final?']},
 {title:'Retroalimentación',items:['¿La retroalimentación es oportuna?','¿Es específica y comprensible?','¿El estudiante puede usarla para mejorar?','¿Hay posibilidad de ajuste, revisión o reentrega?']},
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