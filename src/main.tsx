import { createRoot } from 'react-dom/client'
import './index.css' // <-- REMOVA AS DUAS BARRAS
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)