import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink, RouteStepper } from '../components/Ui';
import { redesignSteps, type RedesignStepContent } from '../data/redesignSteps';

type StepMoment = {
  label: string;
  title: string;
  kind: 'understand' | 'decide' | 'apply' | 'decide-apply';
};

function getStepFromPath(pathname: string) {
  const match = pathname.match(/paso-(\d)/);
  const number = match ? Number(match[1]) : 1;
  return redesignSteps.find((step) => step.number === number) ?? redesignSteps[0];
}

function getMoments(step: RedesignStepContent): StepMoment[] {
  if (step.number === 1) {
    return [
      { label: 'Comprender', title: 'Pregunta y sentido', kind: 'understand' },
      { label: 'Diseñar y aplicar', title: 'Decisión y ejemplo', kind: 'decide-apply' },
    ];
  }

  if (step.number === 3) {
    return [
      { label: 'Comprender', title: 'Aprendizaje autónomo', kind: 'understand' },
      { label: 'Decidir', title: 'Uso pedagógico de IA', kind: 'decide' },
    ];
  }

  return [
    { label: 'Comprender', title: 'Pregunta y sentido', kind: 'understand' },
    { label: 'Diseñar', title: step.number === 6 ? 'Retroalimentación' : 'Decisión de diseño', kind: 'decide' },
    { label: 'Aplicar', title: step.visualTitle, kind: 'apply' },
  ];
}

export default function StepPage() {
  const location = useLocation();
  const step = getStepFromPath(location.pathname);
  const [momentIndex, setMomentIndex] = useState(0);

  useEffect(() => {
    setMomentIndex(0);
  }, [location.pathname]);

  const previousPath = step.number === 1 ? '/ruta-redisenio' : `/ruta-redisenio/paso-${step.number - 1}`;
  const nextPath = step.number === 6 ? '/herramientas' : `/ruta-redisenio/paso-${step.number + 1}`;
  const nextLabel = step.number === 6 ? 'Ir a herramientas' : 'Siguiente paso';
  const moments = useMemo(() => getMoments(step), [step]);
  const activeMoment = moments[momentIndex] ?? moments[0];
  const paragraphs = step.text.split('\n\n');

  return (
    <>
      <RouteStepper active={step.number} />

      <section className="learning-step-screen compact-moments">
        <article className="step-focus-card moment-card">
          <div className="step-label-row">
            <span>Paso {step.number}</span>
          </div>

          <h1>{step.title}</h1>

          <nav className="step-moment-tabs" aria-label="Momentos del paso">
            {moments.map((moment, index) => (
              <button
                key={moment.label}
                className={index === momentIndex ? 'is-active' : ''}
                onClick={() => setMomentIndex(index)}
              >
                <span>{index + 1}</span>
                {moment.label}
              </button>
            ))}
          </nav>

          {activeMoment.kind === 'understand' && (
            <div className="step-moment-panel">
              <div className="step-question-box">
                <span>Pregunta clave</span>
                <h2>{step.question}</h2>
              </div>

              {(step.number === 3 ? [paragraphs[0]] : paragraphs).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          {activeMoment.kind === 'decide' && (
            <div className="step-moment-panel">
              <h2>{activeMoment.title}</h2>
              {step.number === 3 && paragraphs[1] && <p>{paragraphs[1]}</p>}
              {step.action && <NeutralNote>{step.action}</NeutralNote>}
              {step.number !== 3 && step.list && <StepCards items={step.list} />}
              {step.alert && <NeutralNote soft>{step.alert}</NeutralNote>}
            </div>
          )}

          {activeMoment.kind === 'decide-apply' && (
            <div className="step-moment-panel">
              <h2>{activeMoment.title}</h2>
              {step.action && <NeutralNote>{step.action}</NeutralNote>}
              <VisualContent step={step} />
              {step.alert && <NeutralNote soft>{step.alert}</NeutralNote>}
            </div>
          )}

          {activeMoment.kind === 'apply' && (
            <div className="step-moment-panel">
              <h2>{activeMoment.title}</h2>
              <VisualContent step={step} />
            </div>
          )}
        </article>
      </section>

      <div className="page-actions">
        <ButtonLink to={previousPath} variant="ghost">Anterior</ButtonLink>
        <ButtonLink to={nextPath}>{nextLabel}</ButtonLink>
      </div>
    </>
  );
}

function NeutralNote({ children, soft = false }: { children: string; soft?: boolean }) {
  return (
    <div className={`step-neutral-note ${soft ? 'soft' : ''}`}>
      {children.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

function StepCards({ items }: { items: string[] }) {
  return (
    <div className="step-mini-cards compact">
      {items.map((item) => (
        <div key={item}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function VisualContent({ step }: { step: RedesignStepContent }) {
  if (step.visualType === 'compare') {
    return (
      <div className="example-comparison compact">
        <article className="example-before neutral-card">
          <small>En lugar de pedir</small>
          <p>{step.before}</p>
        </article>

        <article className="example-after neutral-card">
          <small>Pide</small>
          <p>{step.after}</p>
        </article>
      </div>
    );
  }

  if (step.visualType === 'list') {
    return (
      <ol className="step-visual-list compact neutral-list">
        {step.list?.map((item) => <li key={item}>{item}</li>)}
      </ol>
    );
  }

  if (step.visualType === 'cards') {
    return <StepCards items={step.list ?? []} />;
  }

  return (
    <NeutralNote>
      Define con claridad qué debe aprender el estudiante por sí mismo y qué apoyos resultan pertinentes para favorecer ese aprendizaje.
    </NeutralNote>
  );
}
