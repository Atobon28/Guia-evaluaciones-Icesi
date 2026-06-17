import { useMemo, useState } from 'react';
import '../styles/pages/checklistMiniSelector.css';

type Answer = 'yes' | 'no';

type Item = {
  id: string;
  text: string;
  riskYes?: boolean;
};

const groups = [
  {
    title: 'Aprendizaje',
    items: [
      { id: 'apr-1', text: '¿El aprendizaje esperado está claramente definido?' },
      { id: 'apr-2', text: '¿La evaluación se centra en capacidades y no solo en contenidos?' },
      { id: 'apr-3', text: '¿La tarea exige comprender, analizar, interpretar, argumentar, decidir o crear?' },
    ],
  },
  {
    title: 'Diseño de la tarea',
    items: [
      { id: 'dis-1', text: '¿La actividad tiene contexto?' },
      { id: 'dis-2', text: '¿El estudiante asume un rol claro?' },
      { id: 'dis-3', text: '¿La tarea tiene un propósito significativo?' },
      { id: 'dis-4', text: '¿La situación se conecta con experiencias reales o verosímiles?' },
    ],
  },
  {
    title: 'IA',
    items: [
      { id: 'ia-1', text: '¿Está definido si la IA se permite, se limita o se prohíbe?' },
      { id: 'ia-2', text: '¿El estudiante sabe para qué puede usar IA?' },
      { id: 'ia-3', text: '¿La IA sustituye el aprendizaje esencial?', riskYes: true },
      { id: 'ia-4', text: '¿Se pide declarar o justificar el uso de IA?' },
    ],
  },
  {
    title: 'Proceso',
    items: [
      { id: 'pro-1', text: '¿La evaluación permite evidenciar la ruta cognitiva del estudiante?' },
      { id: 'pro-2', text: '¿Se incluyen evidencias del proceso?' },
      { id: 'pro-3', text: '¿Hay momentos de seguimiento antes de la entrega final?' },
      { id: 'pro-4', text: '¿La calificación depende únicamente del producto final?', riskYes: true },
    ],
  },
  {
    title: 'Retroalimentación',
    items: [
      { id: 'ret-1', text: '¿La retroalimentación es oportuna?' },
      { id: 'ret-2', text: '¿La retroalimentación es específica y comprensible?' },
      { id: 'ret-3', text: '¿El estudiante puede usarla para mejorar?' },
      { id: 'ret-4', text: '¿Hay posibilidad de ajuste, revisión o reentrega?' },
    ],
  },
] satisfies Array<{ title: string; items: Item[] }>;

const totalItems = groups.reduce((sum, group) => sum + group.items.length, 0);

export default function ChecklistMiniSelector() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});

  const result = useMemo(() => {
    const answered = Object.keys(answers).length;
    const missing: Array<{ group: string; text: string }> = [];

    groups.forEach((group) => {
      group.items.forEach((item) => {
        const answer = answers[item.id];
        const isMissing = item.riskYes ? answer === 'yes' : answer === 'no';
        if (isMissing) missing.push({ group: group.title, text: item.text });
      });
    });

    const pending = totalItems - answered;
    const riskIa = answers['ia-3'] === 'yes';

    let message = 'Completa el checklist para generar un reporte.';
    if (answered === totalItems) {
      if (riskIa) message = 'La IA puede resolver una parte esencial: la evaluación debe rediseñarse.';
      else if (missing.length === 0) message = 'Tu evaluación está bien orientada para un contexto con IA.';
      else message = 'Conviene revisar la actividad antes de aplicarla.';
    }

    return { answered, pending, missing, riskIa, message };
  }, [answers]);

  const updateAnswer = (id: string, value: Answer) => {
    setAnswers((current) => ({ ...current, [id]: value }));
  };

  return (
    <div className="checklist-mini">
      <p className="checklist-mini-intro">
        Antes de publicar tu actividad, revisa si está alineada con el aprendizaje esperado, el proceso, la retroalimentación y el uso pedagógico de IA.
      </p>

      <div className="checklist-mini-layout">
        <div className="checklist-mini-groups">
          {groups.map((group) => (
            <section key={group.title} className="checklist-mini-group">
              <h3>{group.title}</h3>

              {group.items.map((item) => {
                const answer = answers[item.id];
                return (
                  <div key={item.id} className="checklist-mini-item">
                    <p>{item.text}</p>
                    <div>
                      <button type="button" className={answer === 'yes' ? 'is-active' : ''} onClick={() => updateAnswer(item.id, 'yes')}>Sí</button>
                      <button type="button" className={answer === 'no' ? 'is-active' : ''} onClick={() => updateAnswer(item.id, 'no')}>No</button>
                    </div>
                  </div>
                );
              })}
            </section>
          ))}
        </div>

        <aside className="checklist-mini-report">
          <strong>Reporte</strong>
          <h3>{result.missing.length} puntos por revisar</h3>
          <p>{result.message}</p>

          <div className="checklist-mini-score">
            <span>{result.answered}/{totalItems} respondidos</span>
            <span>{result.pending} pendientes</span>
          </div>

          <div className="checklist-mini-missing">
            {result.missing.length === 0 ? (
              <p>No hay puntos marcados como faltantes.</p>
            ) : (
              result.missing.slice(0, 6).map((item) => (
                <p key={`${item.group}-${item.text}`}><b>{item.group}:</b> {item.text}</p>
              ))
            )}
          </div>

          <button type="button" onClick={() => setAnswers({})}>Reiniciar checklist</button>
        </aside>
      </div>
    </div>
  );
}
