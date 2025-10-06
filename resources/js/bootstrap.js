// resources/js/bootstrap.js
import axios from 'axios';
import { route as ziggyRoute } from 'ziggy-js';

const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';

// ✅ Crea una instancia de Axios con credenciales y CSRF
const http = axios.create({
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    ...(csrf ? { 'X-CSRF-TOKEN': csrf } : {}),
  },
});

// Si quieres que Axios también use la cookie XSRF-TOKEN automáticamente:
http.defaults.xsrfCookieName = 'XSRF-TOKEN';
http.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

// Exponer para que Inertia la use en vez de fetch
window.axios = http;

// Ziggy helper global
window.route = (name, params, absolute, config) =>
  ziggyRoute(name, params, absolute, config ?? window.Ziggy);
