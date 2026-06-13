import AppIcon from './AppIcon';
import { gptEvaUrl } from '../data/eva';

export default function EvaLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? 'eva-strip-link' : 'eva-support-link'}
      href={gptEvaUrl}
      target="_blank"
      rel="noreferrer"
    >
      <AppIcon name="solar:chat-round-like-linear" size={20} />
      GPT EVA: apoyo a docentes en diseño curricular y evaluación
      {compact && <span>→</span>}
    </a>
  );
}
