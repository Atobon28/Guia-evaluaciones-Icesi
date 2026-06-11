import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink, Hero, InteractiveCard, Notice } from '../components/Ui';
import AppIcon from '../components/AppIcon';

type IntroMoment = {
  id: string;
  title: string;
  icon: string;
  heading: string;
  text: string;
  highlight: string;
  path?: string;
};

type IntroPage = {
  type: 'welcome' | 'why' | 'structure';
  eyebrow: string;
  icon: string;
  title: string;
  subtitle: string;
  body: string;
  next: string;
  nextLabel: string;
  moments: IntroMoment[];
};

const introPages: Record<string, IntroPage> = {
  '/': {
    type: 'welcome',
    eyebrow: 'Guía interactiva',
    icon: 'solar:cpu-bolt-linear',
    title: 'Evaluación + IA',
    subtitle: 'Guía para rediseñar evaluaciones',
    body:
      'Una experiencia práctica para repensar tus actividades evaluativas en contextos donde la inteligencia artificial ya hace parte del aprendizaje.',
    next: '/por-que-redisenar',
    nextLabel: 'Iniciar ruta',
    moments: [
      {
        id: '01',
        title: 'Bienvenida',
        icon: 'solar:home-2-linear',
        heading: 'Evaluación + IA',
        text:
          'Explora una ruta práctica para repensar tus actividades evaluativas, definir el papel de la IA y construir experiencias que hagan visible el aprendizaje, el pensamiento y el proceso de tus estudiantes.',
        highlight: 'La IA no reemplaza el criterio pedagógico: lo vuelve más necesario.',
      },
      {
        id: '02',
        title: 'Propósito',
        icon: 'solar:target-linear',
        heading: '¿Para qué sirve esta guía?',
        text:
          'Esta guía te acompaña para tomar mejores decisiones evaluativas. No busca que hagas más actividades, sino que diseñes mejores evidencias de aprendizaje.',
        highlight: 'El objetivo es evaluar mejor, no evaluar más.',
      },
      {
        id: '03',
        title: 'Resultado',
        icon: 'solar:checklist-minimalistic-linear',
        heading: '¿Qué vas a lograr?',
        text:
          'Al finalizar, tendrás criterios para revisar una evaluación, decidir el papel de la IA, hacer visible el proceso del estudiante y usar herramientas prácticas de rediseño.',
        highlight: 'Una evaluación más clara, formativa y conectada con el aprendizaje.',
      },
    ],
  },
  '/por-que-redisenar': {
    type: 'why',
    eyebrow: 'Comprender el reto',
    icon: 'solar:danger-triangle-linear',
    title: '¿Por qué rediseñar?',
    subtitle: 'La IA cambió las condiciones del aprendizaje.',
    body:
      'Antes de cambiar una actividad, es necesario entender qué cambió con la IA y qué evidencias siguen siendo significativas.',
    next: '/organizacion',
    nextLabel: 'Continuar',
    moments: [
      {
        id: '01',
        title: 'El reto',
        icon: 'solar:danger-triangle-linear',
        heading: '¿Por qué necesitamos repensar la evaluación?',
        text:
          'Las herramientas de inteligencia artificial generativa pueden producir respuestas completas, textos elaborados, síntesis, análisis aparentes y productos académicos en muy poco tiempo.',
        highlight: 'Muchas evaluaciones tradicionales ya no muestran con claridad qué comprendió, pensó o construyó realmente el estudiante.',
      },
      {
        id: '02',
        title: 'Lo que cambia',
        icon: 'solar:document-text-linear',
        heading: 'La IA cambia las evidencias',
        text:
          'Cuando la IA puede producir el producto final, la evaluación debe mirar más allá de la entrega. El foco se desplaza hacia el proceso, las decisiones, la argumentación y la reflexión.',
        highlight: 'El reto no es vigilar más. El reto es diseñar mejor.',
      },
      {
        id: '03',
        title: 'Lo importante',
        icon: 'solar:eye-linear',
        heading: '¿Qué debe mostrar una buena evaluación?',
        text:
          'Una evaluación pertinente en tiempos de IA debe permitir ver cómo piensa el estudiante, cómo decide, cómo argumenta, cómo usa la retroalimentación y cómo construye su aprendizaje.',
        highlight: 'No basta con saber qué entrega. Hay que poder ver cómo llegó ahí.',
      },
    ],
  },
  '/organizacion': {
    type: 'structure',
    eyebrow: 'Explora por módulos',
    icon: 'solar:widget-5-linear',
    title: 'Organización de la guía',
    subtitle: 'Tres niveles para pasar de la comprensión a la acción.',
    body:
      'La guía se organiza en niveles complementarios para comprender, pensar y rediseñar la evaluación.',
    next: '/principios',
    nextLabel: 'Ver principios',
    moments: [
      {
        id: '01',
        title: 'Vista general',
        icon: 'solar:widget-5-linear',
        heading: 'Tres niveles para avanzar',
        text:
          'La guía está pensada para que primero comprendas el enfoque, luego revises claves pedagógicas y finalmente uses herramientas concretas de rediseño.',
        highlight: 'Comprender → Pensar → Aplicar.',
      },
      {
        id: '02',
        title: 'Principios',
        icon: 'solar:book-2-linear',
        heading: 'Principios institucionales',
        text:
          'Presentan el sentido de la evaluación en la Universidad Icesi y orientan su diseño desde una mirada formativa, continua, contextualizada y centrada en el aprendizaje.',
        highlight: '¿Qué entendemos por evaluación?',
        path: '/principios',
      },
      {
        id: '03',
        title: 'Claves',
        icon: 'solar:lightbulb-bolt-linear',
        heading: 'Claves pedagógicas',
        text:
          'Ayudan a poner el aprendizaje, el pensamiento, la experiencia, las competencias y la retroalimentación en el centro de las decisiones evaluativas.',
        highlight: '¿Qué implica enseñar, aprender y evaluar hoy?',
        path: '/claves-pedagogicas',
      },
      {
        id: '04',
        title: 'Ruta',
        icon: 'solar:route-linear',
        heading: 'Ruta de rediseño',
        text:
          'Propone un paso a paso para transformar una evaluación: definir aprendizajes, reconstruir la ruta cognitiva, decidir el papel de la IA, evidenciar proceso y retroalimentar.',
        highlight: '¿Cómo lo hago en la práctica?',
        path: '/ruta-redisenio',
      },
    ],
  },
};

function getIntroPage(pathname: string) {
  return introPages[pathname as keyof typeof introPages] ?? introPages['/'];
}

export default function GenericIntro() {
  const location = useLocation();
  const page = getIntroPage(location.pathname);
  const [selectedMoment, setSelectedMoment] = useState(page.moments[0].id);

  const selected = page.moments.find((moment) => moment.id === selectedMoment) ?? page.moments[0];

  return (
    <>
      <Hero
        eyebrow={page.eyebrow}
        icon={page.icon}
        title={page.title}
        subtitle={page.subtitle}
        body={page.body}
      />

      <section className="intro-moments-layout">
        <div className="intro-moments-tabs">
          {page.moments.map((moment) => (
            <button
              key={moment.id}
              className={`intro-moment-tab ${selectedMoment === moment.id ? 'is-active' : ''}`}
              onClick={() => setSelectedMoment(moment.id)}
            >
              <span>
                <AppIcon name={moment.icon} size={22} />
              </span>
              <div>
                <strong>{moment.id}</strong>
                <p>{moment.title}</p>
              </div>
            </button>
          ))}
        </div>

        <article className="intro-moment-detail">
          <div className="intro-moment-header">
            <span>
              <AppIcon name={selected.icon} size={34} />
            </span>

            <div>
              <small>Momento {selected.id}</small>
              <h2>{selected.heading}</h2>
            </div>
          </div>

          <p>{selected.text}</p>

          <Notice type="success" title="Idea clave">
            {selected.highlight}
          </Notice>

          {page.type === 'structure' && selected.path && (
            <ButtonLink to={selected.path}>Explorar sección</ButtonLink>
          )}
        </article>

        <aside className="intro-side-preview">
          <h2>Avance de la guía</h2>

          <div className="intro-progress-list">
            <div className={page.type === 'welcome' ? 'is-active' : ''}>
              <span>
                <AppIcon name="solar:home-2-linear" size={18} />
              </span>
              <p>Bienvenida</p>
            </div>

            <div className={page.type === 'why' ? 'is-active' : ''}>
              <span>
                <AppIcon name="solar:danger-triangle-linear" size={18} />
              </span>
              <p>Comprender el reto</p>
            </div>

            <div className={page.type === 'structure' ? 'is-active' : ''}>
              <span>
                <AppIcon name="solar:widget-5-linear" size={18} />
              </span>
              <p>Organización</p>
            </div>

            <div>
              <span>
                <AppIcon name="solar:book-2-linear" size={18} />
              </span>
              <p>Principios</p>
            </div>

            <div>
              <span>
                <AppIcon name="solar:route-linear" size={18} />
              </span>
              <p>Ruta de rediseño</p>
            </div>
          </div>
        </aside>
      </section>

      <div className="page-actions">
        <ButtonLink
          to={page.type === 'welcome' ? '/herramientas' : page.type === 'why' ? '/' : '/por-que-redisenar'}
          variant="ghost"
        >
          {page.type === 'welcome' ? 'Ir a herramientas' : 'Anterior'}
        </ButtonLink>

        <ButtonLink to={page.next}>{page.nextLabel}</ButtonLink>
      </div>
    </>
  );
}