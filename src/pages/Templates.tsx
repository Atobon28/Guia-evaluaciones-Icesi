import { useLocation } from 'react-router-dom';
import { ButtonLink, FieldCard, Hero, InteractiveCard, Notice } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const templates = {
  '/herramientas/plantillas': {
    type: 'menu',
    icon: 'solar:document-text-linear',
    title: 'Plantillas',
    subtitle: 'Formatos listos para acompañar el rediseño.',
    body: '',
  },
  '/herramientas/diagnostico': {
    type: 'form',
    icon: 'solar:magnifer-linear',
    title: 'Diagnóstico de evaluación actual',
    subtitle: 'Antes de rediseñar, revisa qué está evaluando realmente tu actividad.',
    body: 'Usa esta plantilla para identificar si tu evaluación actual permite evidenciar aprendizaje, pensamiento, proceso y uso pedagógico de IA.',
    fields: [
      ['1', '¿Cuál es la actividad evaluativa actual?', 'Describe brevemente la tarea, producto o entrega que solicitas.'],
      ['2', '¿Qué aprendizaje busca evidenciar?', 'Especifica qué debe comprender, analizar, interpretar, argumentar, decidir o producir el estudiante.'],
      ['3', '¿Qué parte podría resolver la IA fácilmente?', 'Identifica los elementos que podrían ser generados automáticamente sin mucho pensamiento del estudiante.'],
      ['4', '¿Qué proceso del estudiante queda invisible?', 'Señala si no puedes ver cómo pensó, decidió, investigó, contrastó, corrigió o justificó su respuesta.'],
      ['5', '¿Qué evidencia adicional podrías pedir?', 'Borrador, bitácora, justificación, registro de IA, reflexión, sustentación, revisión por pares o reentrega.'],
    ],
    results: ['La evaluación puede mantenerse.', 'La evaluación requiere ajustes.', 'La evaluación debe rediseñarse.'],
  },
  '/herramientas/ruta-cognitiva': {
    type: 'cognitive',
    icon: 'solar:brain-linear',
    title: 'Ruta cognitiva del estudiante',
    subtitle: 'Haz visible qué debe pensar el estudiante para lograr la tarea.',
    body: 'Esta plantilla te ayuda a identificar los procesos mentales que la evaluación exige y las evidencias que podrían mostrar cada proceso.',
  },
  '/herramientas/rediseno-tarea': {
    type: 'formLarge',
    icon: 'solar:pen-new-square-linear',
    title: 'Rediseño de tarea evaluativa',
    subtitle: 'Convierte una actividad tradicional en una situación de aprendizaje con sentido.',
    body: 'Usa esta plantilla para transformar una tarea centrada en producto en una evaluación que tenga contexto, rol, propósito, proceso y criterios claros.',
    fields: [
      ['1', 'Actividad original', 'Describe la tarea tal como está actualmente.'],
      ['2', 'Aprendizaje esperado', '¿Qué debe pensar, comprender, hacer o demostrar el estudiante?'],
      ['3', 'Contexto', '¿En qué situación académica, profesional, social o disciplinar se enmarca la tarea?'],
      ['4', 'Rol del estudiante', '¿Desde qué lugar actúa el estudiante? Analista, diseñador, investigador, consultor, evaluador, etc.'],
      ['5', 'Propósito', '¿Qué problema debe resolver, qué decisión debe tomar o qué producto debe construir?'],
      ['6', 'Uso permitido de IA', '¿Qué puede hacer con IA? ¿Qué no puede hacer? ¿Cómo debe declarar su uso?'],
      ['7', 'Evidencias del proceso', '¿Qué deberá entregar además del producto final?'],
      ['8', 'Criterios de evaluación', '¿Qué aspectos serán valorados? Proceso, argumentación, uso de IA, producto final, etc.'],
    ],
  },
  '/herramientas/rubrica': {
    type: 'rubric',
    icon: 'solar:clipboard-list-linear',
    title: 'Rúbrica para evaluación con IA',
    subtitle: 'Define criterios claros para valorar el proceso de aprendizaje y el uso responsable de IA.',
    body: 'Una rúbrica en contexto de IA debe considerar el proceso, las decisiones, la argumentación, la calidad del uso de IA y la capacidad de revisión.',
  },
  '/herramientas/retroalimentacion': {
    type: 'form',
    icon: 'solar:chat-round-check-linear',
    title: 'Plan de retroalimentación',
    subtitle: 'Diseña una retroalimentación que realmente ayude a mejorar.',
    body: 'La retroalimentación debe ser parte del proceso. Planea cuándo ocurrirá, quién la dará, qué aspectos abordará y cómo la usará el estudiante para ajustar su trabajo.',
    fields: [
      ['1', '¿En qué momento se dará la retroalimentación?', 'Antes del producto final, después de un borrador, durante una sustentación, etc.'],
      ['2', '¿Quién dará la retroalimentación?', 'El profesor o los pares. Evalúa si la IA puede utilizarse como apoyo o mediación durante este proceso.'],
      ['3', '¿Sobre qué aspectos se dará retroalimentación?', 'Comprensión, análisis, argumentación, proceso, uso de IA, claridad, criterios de calidad, etc.'],
      ['4', '¿Cómo usará el estudiante esa retroalimentación?', 'Reentrega, ajuste del producto, reflexión, mejora de argumento, etc.'],
      ['5', '¿Cómo se verificará que la retroalimentación fue usada?', 'Comparación entre versiones, bitácora de cambios, reflexión final o sustentación.'],
    ],
  },
  '/herramientas/checklist-final': {
    type: 'checklist',
    icon: 'solar:checklist-minimalistic-linear',
    title: 'Checklist final de evaluación',
    subtitle: 'Antes de publicar tu actividad, revisa si está lista.',
    body: 'Este checklist te ayuda a verificar si tu evaluación está alineada con el aprendizaje esperado, los tipos de pensamiento que se quieren movilizar, el proceso, la retroalimentación y el uso pedagógico de IA.',
  },
};

const templateMenu = [
  ['Diagnóstico de evaluación actual', 'Revisa si tu evaluación actual permite evidenciar aprendizaje, pensamiento, proceso y uso adecuado de IA.', 'solar:magnifer-linear', '/herramientas/diagnostico'],
  ['Ruta cognitiva', 'Identifica los procesos de pensamiento que el estudiante debe recorrer para lograr la tarea.', 'solar:brain-linear', '/herramientas/ruta-cognitiva'],
  ['Rediseño de tarea', 'Transforma una actividad tradicional en una situación evaluativa con contexto, rol, propósito y evidencias del proceso.', 'solar:pen-new-square-linear', '/herramientas/rediseno-tarea'],
  ['Rúbrica', 'Define criterios claros para valorar el aprendizaje,el proceso, la argumentación,el uso de IA y el desempeño final.', 'solar:clipboard-list-linear', '/herramientas/rubrica'],
  ['Retroalimentación', 'Planea momentos, devoluciones específicas y usos de la retroalimentación durante la actividad.', 'solar:chat-round-check-linear', '/herramientas/retroalimentacion'],
  ['Checklist final', 'Verifica si tu evaluación está lista.', 'solar:checklist-minimalistic-linear', '/herramientas/checklist-final'],
];

const rubricItems = [
  ['Comprensión del problema o situación', 'Evalúa si el estudiante comprende el contexto, el propósito y los elementos centrales de la tarea.', 'solar:map-point-wave-linear'],
  ['Proceso de pensamiento', 'Evalúa cómo analiza, interpreta, relaciona información, toma decisiones y construye su respuesta.', 'solar:brain-linear'],
  ['Argumentación y criterio propio', 'Evalúa si el estudiante justifica sus decisiones con claridad, coherencia y fundamentos pertinentes.', 'solar:chat-square-like-linear'],
  ['Uso de IA', 'Evalúa si el estudiante usa la IA de manera permitida, crítica, transparente y alineada con el propósito de aprendizaje.', 'solar:cpu-bolt-linear'],
  ['Evidencias del proceso', 'Evalúa la calidad de borradores, bitácoras, registros, reflexiones o justificaciones que muestran cómo se construyó el trabajo.', 'solar:document-add-linear'],
  ['Producto final', 'Evalúa la calidad, pertinencia, claridad y coherencia del resultado entregado.', 'solar:clipboard-check-linear'],
];

const checklistGroups = [
  {
    title: 'Aprendizaje',
    icon: 'solar:target-linear',
    items: [
      '¿El aprendizaje esperado está claramente definido?',
      '¿La evaluación se centra en capacidades y no solo en contenidos?',
      '¿La tarea exige comprender, analizar, interpretar, argumentar, decidir o crear?',
    ],
  },
  {
    title: 'Diseño de la tarea',
    icon: 'solar:pen-new-square-linear',
    items: [
      '¿La actividad tiene contexto?',
      '¿El estudiante asume un rol claro?',
      '¿La tarea tiene un propósito significativo?',
      '¿La situación se conecta con experiencias reales o verosímiles?',
    ],
  },
  {
    title: 'IA',
    icon: 'solar:cpu-bolt-linear',
    items: [
      '¿Está definido si la IA se permite, se limita o se prohíbe?',
      '¿El estudiante sabe para qué puede usar IA?',
      '¿La IA sustituye el aprendizaje esencial?',
      '¿Se pide declarar o justificar el uso de IA?',
    ],
  },
  {
    title: 'Proceso',
    icon: 'solar:document-add-linear',
    items: [
      '¿La evaluación permite evidenciar la ruta cognitiva del estudiante?',
      '¿Se incluyen evidencias del proceso?',
      '¿Hay momentos de seguimiento antes de la entrega final?',
      '¿La calificación depende únicamente del producto final?',
    ],
  },
  {
    title: 'Retroalimentación',
    icon: 'solar:chat-round-check-linear',
    items: [
      '¿La retroalimentación es oportuna?',
      '¿La retroalimentación es específica y comprensible?',
      '¿El estudiante puede usarla para mejorar?',
      '¿Hay posibilidad de ajuste, revisión o reentrega?',
    ],
  },
];

const cognitiveRows = [
  ['Inicio', 'Comprender.', 'Identificar el problema, propósito o situación de la tarea.', 'Mapa inicial, explicación breve o respuesta diagnóstica.'],
  ['Desarrollo', 'Analizar.', 'Relacionar información, comparar alternativas o identificar criterios.', 'Cuadro comparativo, notas de análisis o justificación parcial.'],
  ['Decisión', 'Argumentar.', 'Defender una postura o decisión con criterios claros.', 'Justificación escrita, sustentación oral o comentario reflexivo.'],
  ['Cierre', 'Revisar.', 'Evaluar la calidad de su respuesta y ajustar el producto final.', 'Autoevaluación, versión corregida o bitácora de cambios.'],
];

function getTemplate(pathname: string) {
  return templates[pathname as keyof typeof templates] ?? templates['/herramientas/plantillas'];
}

export default function Templates() {
  const location = useLocation();
  const page = getTemplate(location.pathname);

  return (
    <>
      <Hero
        eyebrow={page.title}
        icon={page.icon}
        title={page.title}
        subtitle={page.subtitle}
        body={page.body}
      />

      {page.type === 'menu' && (
        <section className="templates-menu-grid">
          {templateMenu.map((item) => (
            <InteractiveCard key={item[0]} icon={item[2]} title={item[0]} to={item[3]}>
              <p>{item[1]}</p>
            </InteractiveCard>
          ))}
        </section>
      )}

      {(page.type === 'form' || page.type === 'formLarge') && 'fields' in page && (
        <>
          <section className={`template-form-grid ${page.type === 'formLarge' ? 'large' : ''}`}>
            {(page as any).fields.map((field: string[]) => (
              <FieldCard
                key={field[0]}
                number={field[0]}
                title={field[1]}
                placeholder={field[2]}
              />
            ))}
          </section>

          {'results' in page && (
            <section className="checklist-results-row">
              {(page as any).results.map((result: string) => (
                <Notice key={result} type="info">{result}</Notice>
              ))}
            </section>
          )}
        </>
      )}

      {page.type === 'cognitive' && (
        <section className="cognitive-template-layout">
          <div className="cognitive-flow">
            {cognitiveRows.map((row) => (
              <div key={row[0]}>
                <span>
                  <AppIcon name="solar:brain-linear" size={24} />
                </span>
                <strong>{row[0]}</strong>
                <p>{row[1]}</p>
              </div>
            ))}
          </div>

          <div className="cognitive-table-mini">
            {cognitiveRows.map((row) => (
              <article key={row[0]} className="rubric-mini-card">
                <h3>{row[0]} · {row[1]}</h3>
                <p><strong>Qué debe hacer el estudiante:</strong> {row[2]}</p>
                <p><strong>Evidencia posible:</strong> {row[3]}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {page.type === 'rubric' && (
        <section className="rubric-compact-grid">
          {rubricItems.map((item) => (
            <article key={item[0]} className="rubric-mini-card">
              <span>
                <AppIcon name={item[2]} size={22} />
              </span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </article>
          ))}
        </section>
      )}

      {page.type === 'checklist' && (
        <>
          <section className="checklist-compact-grid">
            {checklistGroups.map((group) => (
              <article key={group.title} className="checklist-compact-card">
                <h2>
                  <AppIcon name={group.icon} size={20} />
                  {group.title}
                </h2>

                {group.items.map((item) => (
                  <label key={item}>
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                ))}
              </article>
            ))}
          </section>

          <section className="checklist-results-row">
            <Notice type="success">Si la mayoría está en “sí”, tu evaluación está bien orientada para un contexto con IA.</Notice>
            <Notice type="warning">Si hay varios “no”, conviene revisar la actividad antes de aplicarla.</Notice>
            <Notice type="danger">Si la IA puede resolver toda la tarea, la evaluación debe rediseñarse.</Notice>
          </section>
        </>
      )}

      <div className="page-actions">
        <ButtonLink to="/herramientas" variant="ghost">Volver a herramientas</ButtonLink>
        <ButtonLink to="/cierre">Finalizar</ButtonLink>
      </div>
    </>
  );
}
