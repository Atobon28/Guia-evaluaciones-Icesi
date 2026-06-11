
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import GenericIntro from './pages/GenericIntro';
import Principles from './pages/Principles';
import PedagogicalKeys from './pages/PedagogicalKeys';
import RedesignRoute from './pages/RedesignRoute';
import StepPage from './pages/StepPage';
import Toolbox from './pages/Toolbox';
import TrafficLightAI from './pages/TrafficLightAI';
import AIASSelector from './pages/AIASSelector';
import Templates from './pages/Templates';
import Closing from './pages/Closing';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GenericIntro />} />
        <Route path="/por-que-redisenar" element={<GenericIntro />} />
        <Route path="/organizacion" element={<GenericIntro />} />
        <Route path="/principios" element={<Principles />} />
        <Route path="/claves-pedagogicas" element={<PedagogicalKeys />} />
        <Route path="/ruta-redisenio" element={<RedesignRoute />} />
        <Route path="/ruta-redisenio/paso-1" element={<StepPage />} />
        <Route path="/ruta-redisenio/paso-2" element={<StepPage />} />
        <Route path="/ruta-redisenio/paso-3" element={<StepPage />} />
        <Route path="/ruta-redisenio/paso-4" element={<StepPage />} />
        <Route path="/ruta-redisenio/paso-5" element={<StepPage />} />
        <Route path="/ruta-redisenio/paso-6" element={<StepPage />} />
        <Route path="/herramientas" element={<Toolbox />} />
        <Route path="/herramientas/semaforo-ia" element={<TrafficLightAI />} />
        <Route path="/herramientas/selector-aias" element={<AIASSelector />} />
        <Route path="/herramientas/plantillas" element={<Templates />} />
        <Route path="/herramientas/diagnostico" element={<Templates />} />
        <Route path="/herramientas/ruta-cognitiva" element={<Templates />} />
        <Route path="/herramientas/rediseno-tarea" element={<Templates />} />
        <Route path="/herramientas/rubrica" element={<Templates />} />
        <Route path="/herramientas/retroalimentacion" element={<Templates />} />
        <Route path="/herramientas/checklist-final" element={<Templates />} />
        <Route path="/cierre" element={<Closing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
