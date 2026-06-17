import { useState } from 'react';

const templates = [
  {
    id: '01',
    title: 'Diagnóstico',
    subtitle: 'Diagnóstico de evaluación actual',
    intro: 'Antes de rediseñar, revisa qué está evaluando realmente tu actividad.',
    items: ['Actividad evaluativa actual', 'Aprendizaje que busca evidenciar', 'Parte que podría resolver la IA', 'Proceso del estudiante que queda invisible', 'Evidencia adicional posible', 'Resultado del diagnóstico'],
    detail: 'Permite decidir si la evaluación puede mantenerse, requiere ajustes o debe rediseñarse.',
  },
  {
    id: '02',
    title: 'Ruta cognitiva',
    subtitle: 'Ruta cognitiva del estudiante',
    intro: 'Haz visible qué debe pensar el estudiante para lograr la tarea.',
    items: ['Inicio: comprender', 'Desarrollo: analizar', 'Decisión: argumentar', 'Cierre: revisar'],
    detail: 'Ayuda a identificar procesos mentales y evidencias posibles: mapa inicial, análisis, justificación, sustentación, autoevaluación o bitácora.',
  },
  {
    id: '03',
    title: 'Rediseño de tarea',
    subtitle: 'Rediseño de tarea evaluativa',
    intro: 'Convierte una actividad tradicional en una situación de aprendizaje con sentido.',
    items: ['Actividad original', 'Aprendizaje esperado', 'Contexto', 'Rol del estudiante', 'Propósito', 'Uso permitido de IA', 'Evidencias del proceso', 'Criterios de evaluación'],
    detail: 'Transforma una tarea centrada en producto en una evaluación con contexto, rol, propósito, proceso y criterios claros.',
  },
  {
    id: '04',
    title: 'Rúbrica con IA',
    subtitle: 'Rúbrica para evaluación con IA',
    intro: 'Define criterios claros para valorar el proceso de aprendizaje y el uso responsable de IA.',
    items: ['Comprensión', 'Proceso de pensamiento', 'Argumentación y criterio propio', 'Uso de IA', 'Evidencias del proceso', 'Producto final'],
    detail: 'Permite valorar decisiones, argumentación, calidad del uso de IA, revisión y resultado final.',
  },
  {
    id: '05',
    title: 'Retroalimentación',
    subtitle: 'Plan de retroalimentación',
    intro: 'Diseña una retroalimentación que realmente ayude a mejorar.',
    items: ['Momento', 'Quién retroalimenta', 'Aspectos a retroalimentar', 'Uso por parte del estudiante', 'Verificación del uso'],
    detail: 'Planea cuándo ocurre, quién la da, qué aborda y cómo se verifica que fue usada para mejorar.',
  },
];

export default function TemplatesMiniSelector() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = templates[selectedIndex];

  return (
    <div className="templates-mini-selector">
      <p className="templates-mini-intro">Plantillas prácticas para revisar, transformar y fortalecer tus actividades evaluativas en contextos de IA.</p>

      <div className="templates-mini-tabs">
        {templates.map((template, index) => (
          <button key={template.id} type="button" className={selectedIndex === index ? 'is-active' : ''} onClick={() => setSelectedIndex(index)}>
            <strong>{template.title}</strong>
            <span>{template.subtitle}</span>
          </button>
        ))}
      </div>

      <article className="templates-mini-detail">
        <div className="templates-mini-head">
          <small>{selected.id}</small>
          <h3>{selected.subtitle}</h3>
          <p>{selected.intro}</p>
        </div>

        <p className="templates-mini-body">{selected.detail}</p>

        <div className="templates-mini-grid">
          {selected.items.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </article>
    </div>
  );
}
