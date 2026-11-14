import {createRoot} from 'react-dom/client';
import Landing from './components/landing/Landing';
import './app/fonts.css';
import './app/globals.css';
if (!location.hash && !matchMedia('(prefers-reduced-motion: reduce)').matches && !(navigator as Navigator & {connection?:{saveData?:boolean}}).connection?.saveData) {
  document.documentElement.classList.add('intro-pending');
  document.documentElement.dataset.introDeadline = String(performance.now() + 1200);
  setTimeout(() => document.documentElement.classList.remove('intro-pending'), 1200);
}
createRoot(document.getElementById('root')!).render(<Landing/>);

import './app/cinematic.css';

import './app/conversion.css';

import "./app/fidelity.css";
