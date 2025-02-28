import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { SupabaseProvider } from '@/lib/supabase/SupabaseProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SupabaseProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SupabaseProvider>
  </React.StrictMode>
);