import { ButtonLink, Hero, InteractiveCard } from '../components/Ui';
import { templates, tools } from '../data/content';

export default function Toolbox() {
  return (
    <>
      <Hero
        eyebrow="Caja de herramientas"
        icon="solar:case-round-linear"
        title="Caja de herramientas"
        subtitle="Recursos prácticos para decidir, rediseñar y evaluar en contextos de IA."
        body="Después de recorrer los principios, las claves pedagógicas y la ruta de rediseño, puedes usar estas herramientas para tomar decisiones concretas sobre tus actividades evaluativas."
      />

      <section className="toolbox-layout">
        <div className="toolbox-main-grid">
          {tools.map((tool) => (
            <InteractiveCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              to={tool.path}
            >
              <p>{tool.description}</p>
            </InteractiveCard>
          ))}
        </div>

        <aside className="toolbox-side-panel">
          <h2>Plantillas</h2>

          <div className="toolbox-fast-list">
            {templates.map((template) => (
              <ButtonLink key={template.title} to={template.path} variant="ghost">
                {template.title}
              </ButtonLink>
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
