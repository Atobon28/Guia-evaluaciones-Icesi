import { Fragment } from 'react';
import { ButtonLink, Hero, InteractiveCard, Notice } from '../components/Ui';
import AppIcon from '../components/AppIcon';

const tools = [
  {
    title: 'Semáforo IA',
    description: 'Identifica si la IA potencia, exige revisión o sustituye el aprendizaje.',
    icon: 'solar:traffic-linear',
    path: '/herramientas/semaforo-ia',
    tag: 'Decidir',
  },
  {
    title: 'Selector AIAS',
    description: 'Define el nivel de integración de IA permitido en tu evaluación.',
    icon: 'solar:settings-minimalistic-linear',
    path: '/herramientas/selector-aias',
    tag: 'Regular',
  },
  {
    title: 'Plantillas',
    description: 'Formatos listos para diagnosticar, rediseñar, evaluar y retroalimentar.',
    icon: 'solar:document-text-linear',
    path: '/herramientas/plantillas',
    tag: 'Aplicar',
  },
  {
    title: 'Checklist final',
    description: 'Verifica si tu evaluación está lista antes de publicarla.',
    icon: 'solar:checklist-minimalistic-linear',
    path: '/herramientas/checklist-final',
    tag: 'Revisar',
  },
];

const quickLinks = [
  {
    title: 'Diagnóstico inicial',
    path: '/herramientas/diagnostico',
    icon: 'solar:magnifer-linear',
  },
  {
    title: 'Ruta cognitiva',
    path: '/herramientas/ruta-cognitiva',
    icon: 'solar:brain-linear',
  },
  {
    title: 'Rediseño de tarea',
    path: '/herramientas/rediseno-tarea',
    icon: 'solar:pen-new-square-linear',
  },
];

export default function Toolbox() {
  return (
    <>
      <Hero
        eyebrow="Recursos listos para usar"
        icon="solar:case-round-linear"
        title="Caja de herramientas"
        subtitle="Recursos prácticos para decidir, rediseñar y evaluar en contextos de IA."
        body="Después de recorrer los principios, las claves pedagógicas y la ruta de rediseño, usa estas herramientas para tomar decisiones concretas sobre tus actividades evaluativas."
      />

      <section className="toolbox-layout">
        <div className="toolbox-main-grid">
          {tools.map((tool) => (
            <InteractiveCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              to={tool.path}
              tag={tool.tag}
            >
              <p>{tool.description}</p>
              <strong>Abrir herramienta</strong>
            </InteractiveCard>
          ))}
        </div>

        <aside className="toolbox-side-panel">
          <span className="toolbox-side-icon">
            <AppIcon name="solar:map-arrow-right-linear" size={34} />
          </span>

          <h2>¿Por dónde empezar?</h2>

          <p>
            Si tienes una evaluación concreta, empieza por el diagnóstico. Si ya tienes claro el problema, usa el semáforo IA o el selector AIAS.
          </p>

          <Notice type="success" title="Recomendación">
            No uses todas las herramientas al mismo tiempo. Elige una según la decisión que necesitas tomar.
          </Notice>

          <div className="toolbox-fast-list">
            {quickLinks.map((link) => (
              <Fragment key={link.title}>
                <ButtonLink to={link.path} variant="ghost">
                  <span className="btn-icon">
                    <AppIcon name={link.icon} size={18} />
                  </span>
                  {link.title}
                </ButtonLink>
              </Fragment>
            ))}
          </div>
        </aside>
      </section>

      <div className="page-actions">
        <ButtonLink to="/ruta-redisenio/paso-6" variant="ghost">Anterior</ButtonLink>
        <ButtonLink to="/herramientas/semaforo-ia">Abrir semáforo IA</ButtonLink>
      </div>
    </>
  );
}