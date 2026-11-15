import {createRoot} from 'react-dom/client';
import Landing from './components/landing/Landing';
import './app/fonts.css';
import './app/globals.css';
if (!location.hash && !matchMedia('(prefers-reduced-motion: reduce)').matches && !(navigator as Navigator & {connection?:{saveData?:boolean}}).connection?.saveData) {
  document.documentElement.classList.add('intro-pending');
  const introTime = matchMedia('(max-width: 767px)').matches ? 700 : 1200;
  document.documentElement.dataset.introDeadline = String(performance.now() + introTime);
  setTimeout(() => document.documentElement.classList.remove('intro-pending'), introTime);
}
createRoot(document.getElementById('root')!).render(<Landing/>);

import './app/cinematic.css';

import './app/conversion.css';

import "./app/fidelity.css";
