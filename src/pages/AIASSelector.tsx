import { useState } from 'react';
import { ButtonLink, Hero, Notice } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const levels = [
  {
    number: 1,
    title: 'Sin uso de IA',
    description:
      'La actividad debe realizarse sin apoyo de herramientas de IA porque busca evidenciar aprendizajes esenciales que requieren desarrollo autónomo.',
    useWhen:
      'Necesitas observar comprensión básica, desempeño individual, memoria funcional, habilidades iniciales o procesos que aún no deben ser asistidos.',
    instruction:
      'Para esta actividad no está permitido el uso de herramientas de IA.',
    icon: 'solar:forbidden-circle-linear',
  },
  {
    number: 2,
    title: 'Uso limitado',
    description:
      'La IA puede usarse solo en momentos específicos y bajo condiciones definidas por el profesor.',
    useWhen:
      'Quieres permitir apoyo puntual, pero necesitas proteger procesos centrales de pensamiento.',
    instruction:
      'Puedes usar IA únicamente para los aspectos indicados por el profesor. Debes declarar cómo la usaste.',
    icon: 'solar:shield-minimalistic-linear',
  },
  {
    number: 3,
    title: 'Uso asistido',
    description:
      'La IA puede apoyar partes del proceso, pero el análisis, las decisiones y la respuesta final son responsabilidad del estudiante.',
    useWhen:
      'La IA puede ayudar a explorar ideas, organizar información, revisar claridad o generar preguntas de mejora.',
    instruction:
      'Puedes usar IA como apoyo, pero debes explicar qué decisiones tomaste tú y cómo verificaste la información.',
    icon: 'solar:hand-heart-linear',
  },
  {
    number: 4,
    title: 'Uso integrado',
    description:
      'La IA hace parte del proceso de trabajo y debe usarse de forma explícita, justificada y reflexiva.',
    useWhen:
      'La actividad busca que el estudiante aprenda a trabajar críticamente con IA dentro de una situación académica o profesional.',
    instruction:
      'Debes documentar cómo usaste IA, qué prompts empleaste, qué resultados aceptaste o descartaste y por qué.',
    icon: 'solar:cpu-bolt-linear',
  },
  {
    number: 5,
    title: 'Uso amplio y crítico',
    description:
      'La IA puede utilizarse de manera amplia, siempre que el estudiante demuestre criterio, validación, reflexión ética y responsabilidad sobre el producto final.',
    useWhen:
      'El objetivo es evaluar pensamiento crítico, diseño de estrategias, criterio profesional, análisis comparativo o producción compleja apoyada en IA.',
    instruction:
      'Puedes usar IA ampliamente, pero debes justificar tus decisiones, validar la información y reflexionar sobre los límites de la herramienta.',
    icon: 'solar:stars-linear',
  },
];

export default function AIASSelector() {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const selected = levels.find((level) => level.number === selectedLevel) ?? levels[0];

  return (
    <>
      <Hero
        eyebrow="Herramienta de decisión"
        icon="solar:settings-minimalistic-linear"
        title="Selector AIAS"
        subtitle="Define el nivel de uso de IA permitido en tu evaluación."
        body="No todas las evaluaciones requieren el mismo nivel de integración de IA. Usa esta escala para comunicar con claridad qué está permitido, qué no y qué debe declarar el estudiante."
      />

      <section className="aias-selector-layout">
        <div className="aias-level-list">
          {levels.map((level) => (
            <button
              key={level.number}
              className={`aias-level-option ${selectedLevel === level.number ? 'is-active' : ''}`}
              onClick={() => setSelectedLevel(level.number)}
            >
              <span>{level.number}</span>

              <div>
                <strong>Nivel {level.number}</strong>
                <p>{level.title}</p>
              </div>

              <small>
                <AppIcon name={level.icon} size={22} />
              </small>
            </button>
          ))}
        </div>

        <article className="aias-detail-panel">
          <div className="aias-detail-header">
            <span>
              <AppIcon name={selected.icon} size={32} />
            </span>

            <div>
              <small>Nivel {selected.number}</small>
              <h2>{selected.title}</h2>
            </div>
          </div>

          <p className="aias-description">{selected.description}</p>

          <Notice type="info" title="Úsalo cuando">
            {selected.useWhen}
          </Notice>

          <Notice type="success" title="Instrucción para estudiantes">
            {selected.instruction}
          </Notice>

          <div className="aias-transparency-box">
            <strong>Principio transversal</strong>
            <p>
              En todos los niveles, el estudiante debe saber qué está permitido, qué debe declarar y cuál es su responsabilidad sobre el trabajo final.
            </p>
          </div>
        </article>
      </section>

      <div className="page-actions">
        <ButtonLink to="/herramientas/semaforo-ia" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/herramientas/plantillas">Ver plantillas</ButtonLink>
      </div>
    </>
  );
}