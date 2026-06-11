
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { routeSteps } from '../data/content';
import AppIcon from './AppIcon';

export function Hero({ eyebrow='Guía interactiva', icon='✦', title, subtitle, body, children, illustration }: any) {
  return (
    <section className="hero-card">
      <div className="hero-content">
        <span className="eyebrow">{eyebrow}</span>
        <div className="hero-title-row">
          <span className="hero-icon">
  <AppIcon name={icon} size={30} />
</span>
          <div><h1>{title}</h1>{subtitle && <h2>{subtitle}</h2>}</div>
        </div>
        <span className="green-line" />
        {body && <p className="hero-body">{body}</p>}
        {children}
      </div>
      {illustration && <div className="hero-illustration">{illustration}</div>}
    </section>
  );
}

export function ButtonLink({ to, children, variant='primary' }: {to:string; children:ReactNode; variant?:'primary'|'ghost'}) {
  return <Link to={to} className={`btn ${variant === 'ghost' ? 'btn-ghost' : 'btn-primary'}`}>{children}<span>→</span></Link>;
}

export function InteractiveCard({ icon, title, children, to, tag }: any) {
  const content = <article className="interactive-card">{tag && <span className="card-tag">{tag}</span>}{icon && (
  <span className="card-icon">
    <AppIcon name={icon} size={28} />
  </span>
)}<h3>{title}</h3><div>{children}</div>{to && <span className="card-arrow">→</span>}</article>;
  return to ? <Link to={to} className="card-link">{content}</Link> : content;
}

export function RouteStepper({ active }: { active: number }) {
  return <div className="route-stepper">{routeSteps.map((step) => <Link key={step.id} to={step.path} className={`stepper-item ${step.id === active ? 'is-active' : ''} ${step.id < active ? 'is-done' : ''}`}><span>{step.id < active ? '✓' : step.id}</span><small>{step.label}</small></Link>)}</div>;
}

export function Notice({ type='info', title, children }: { type?: 'info'|'success'|'warning'|'danger'; title?: string; children: ReactNode }) {
  return <div className={`notice notice-${type}`}><span>
  <AppIcon
    name={
      type === 'danger'
        ? 'solar:danger-triangle-linear'
        : type === 'success'
          ? 'solar:check-circle-linear'
          : type === 'warning'
            ? 'solar:danger-circle-linear'
            : 'solar:info-circle-linear'
    }
    size={22}
  />
</span><div>{title && <strong>{title}</strong>}<p>{children}</p></div></div>;
}

export function FieldCard({ number, title, placeholder, tag }: any) {
  return <article className="field-card"><span className="field-number">{number}</span><div><h3>{title}</h3><p>{placeholder}</p></div>{tag && <small>{tag}</small>}<button>✎</button></article>;
}

export function BrandIllustration({ kind='ia' }: any) {
  return <div className={`brand-illustration ${kind}`}><div className="orb" /><div className="floating-card main"><span>{kind === 'toolbox' ? '▣' : kind === 'route' ? '⚑' : kind === 'checklist' ? '☑' : 'IA'}</span><i /><i /><i /></div><div className="floating-card small"><b>✓</b><i /><i /></div><span className="sparkle one">✦</span><span className="sparkle two">✧</span></div>;
}
