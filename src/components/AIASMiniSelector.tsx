import { useState } from 'react';
import AppIcon from './AppIcon';

const aiasLevels = [
  {
    number: 1,
    title: 'Sin uso de IA',
    description: 'La producción académica se realiza íntegramente sin asistencia de IA. Se busca valorar las competencias propias del estudiante: pensamiento crítico, análisis, argumentación, escritura o creatividad, sin ningún tipo de mediación tecnológica que automatice estos procesos.',
    icon: 'solar:forbidden-circle-linear',
  },
  {
    number: 2,
    title: 'Planificación e ideación asistida por IAG',
    description: 'Aquí se permite el uso de IA solo en etapas iniciales del proceso: generación de ideas, lluvias de ideas, estructura o títulos. El contenido generado por IA no se incluye directamente en el producto final. Este nivel ayuda a los estudiantes a organizar mejor su pensamiento, manteniendo su autoría.',
    icon: 'solar:shield-minimalistic-linear',
  },
  {
    number: 3,
    title: 'Colaboración con IAG',
    description: 'En este nivel, el estudiante puede emplear IA para escribir borradores, corregir estilo, resumir o editar textos ya escritos. Se enfatiza la reflexión crítica: el estudiante debe revisar, evaluar y decidir cómo incorporar o descartar lo generado por la IA, manteniendo la coherencia con su voz y su razonamiento.',
    icon: 'solar:hand-heart-linear',
  },
  {
    number: 4,
    title: 'Uso pleno y estratégico con IAG',
    description: 'Se autoriza el uso amplio de IA para resolver problemas, producir textos o materiales complejos, programar o diseñar, siempre que el estudiante mantenga control, criterio y responsabilidad sobre el proceso. Aquí, el objetivo pedagógico incluye aprender a seleccionar tecnologías de IAG, integrarlas de forma crítica y reflexionar sobre su aporte.',
    icon: 'solar:cpu-bolt-linear',
  },
  {
    number: 5,
    title: 'Exploración e innovación con IAG',
    description: 'El nivel más abierto: se fomenta que docentes y estudiantes co-creen soluciones, proyectos o formatos innovadores con IA, incluso explorando usos no convencionales o experimentales. Este nivel promueve creatividad avanzada, pensamiento crítico y diseño de nuevas prácticas pedagógicas o productos.',
    icon: 'solar:stars-linear',
  },
];

export default function AIASMiniSelector() {
  const [selectedLevel, setSelectedLevel] = useState(1);
  const selected = aiasLevels.find((level) => level.number === selectedLevel) ?? aiasLevels[0];

  return (
    <div className="aias-mini-selector">
      <p className="aias-mini-intro">
        No todas las evaluaciones requieren el mismo nivel de integración de IA. Usa esta escala para comunicar con claridad qué está permitido, qué no y qué debe declarar el estudiante.
      </p>

      <div className="aias-mini-tabs">
        {aiasLevels.map((level) => (
          <button
            key={level.number}
            type="button"
            className={selectedLevel === level.number ? 'is-active' : ''}
            onClick={() => setSelectedLevel(level.number)}
          >
            <strong>Nivel {level.number}</strong>
            <span>{level.title}</span>
          </button>
        ))}
      </div>

      <article className="aias-mini-detail">
        <div className="aias-mini-detail-head">
          <span>
            <AppIcon name={selected.icon} size={28} />
          </span>

          <div>
            <small>Nivel {selected.number}</small>
            <h3>{selected.title}</h3>
          </div>
        </div>

        <p>{selected.description}</p>
      </article>
    </div>
  );
}
