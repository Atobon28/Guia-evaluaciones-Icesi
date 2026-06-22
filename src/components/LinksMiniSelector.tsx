import AppIcon from './AppIcon';

const links = [
  {
    label: 'Guía completa',
    text: 'Descarga el documento PDF completo de la guía para consultarlo o compartirlo.',
    items: [
      { label: 'Descarga Guía Completa', href: '/guia-evaluacion-ia-v2.pdf' },
    ],
  },
  {
    label: 'Syllabus v5.0',
    text: 'Documento base para estructurar y actualizar el syllabus.',
    items: [
      { label: 'Abrir Syllabus v5.0', href: 'https://icesiedu-my.sharepoint.com/:w:/g/personal/31573444_icesi_edu_co/IQC5N9vLZ9Y9RqDWihV48gY8ASkhdmEQuxsNbj1yRIFkIFM?e=kzFN4x' },
    ],
  },
  {
    label: 'Asistentes de IA para la evaluación',
    text: 'EVA, Asistente pedagógico de evaluación en Salud y GPT AIAS.',
    items: [
      { label: 'EVA', href: 'https://chatgpt.com/g/g-18PRQ2wq6-eva' },
      { label: 'Asistente pedagógico en Salud', href: 'https://chatgpt.com/g/g-6a315f963ca8819196735268b19aa5de-asistente-pedagogico-en-evaluacion-en-salud' },
      { label: 'GPT AIAS', href: 'https://chatgpt.com/g/g-m39Sn0uZq-the-ai-assessment-scale-aias' },
    ],
  },
  {
    label: 'Recursos',
    text: 'Marco metodológico para evaluar en contextos de IAG e infografía.',
    items: [
      { label: 'Marco metodológico para evaluar en contextos de IAG', href: 'https://marcoevaluacioniag.vercel.app/' },
      { label: 'Infografía', href: 'https://view.genially.com/69e7c89f581a46a528d45129' },
    ],
  },
];

export default function LinksMiniSelector() {
  return (
    <>
      <p className="toolbox-detail-intro">Selecciona el recurso que quieres consultar.</p>

      <div className="toolbox-links-grid toolbox-links-grid-four">
        {links.map((group) => (
          <div className="toolbox-link-card" key={group.label}>
            <span>
              <AppIcon name="solar:link-round-angle-linear" size={24} />
            </span>

            <div>
              <strong>{group.label}</strong>
              <p>{group.text}</p>
            </div>

            <div className="toolbox-link-actions">
              {group.items.map((item) => (
                item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label} className="is-pending">
                    {item.label} · Pendiente
                  </span>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
