
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { navSections } from '../data/content';
import AppIcon from './AppIcon';

function activeSection(pathname: string) {
  if (pathname.startsWith('/herramientas') || pathname === '/cierre') return 5;
  if (pathname.startsWith('/ruta-redisenio')) return 4;
  if (pathname.startsWith('/claves-pedagogicas')) return 3;
  if (pathname.startsWith('/principios')) return 2;
  return 1;
}

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const active = activeSection(location.pathname);
  const progress = Math.min(active, 5);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <button className="brand" onClick={() => navigate('/')}>
          <span className="brand-symbol" />
          <span className="brand-text"><small>Universidad</small><strong>icesi</strong></span>
        </button>

        <nav className="side-nav">
          {navSections.map((item) => (
            <button key={item.id} className={`nav-item ${active === item.id ? 'is-active' : ''} ${active > item.id ? 'is-done' : ''}`} onClick={() => navigate(item.path)}>
              <span className="nav-number">{active > item.id ? '✓' : item.id}</span>
              <span className="nav-icon">
              <AppIcon name={item.icon} size={22} /></span>
              <span className="nav-label">{item.label}</span>
              {active === item.id && <span className="nav-dot" />}
            </button>
          ))}
        </nav>

        <section className="progress-card">
          <div className="progress-title"><span>Tu progreso</span><strong>{progress} de 5</strong></div>
          <div className="progress-track"><span style={{ width: `${(progress / 5) * 100}%` }} /></div>
          <p>{progress === 5 ? '¡Excelente! Has completado la guía.' : 'Estás avanzando muy bien.'}</p>
        </section>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button onClick={() => navigate('/')} className="top-title">Evaluación + IA</button>
          <div className="top-actions"><button>☰</button><span /><button>⌕</button></div>
        </header>
        <section className="page-wrap"><Outlet /></section>
      </main>
    </div>
  );
}
