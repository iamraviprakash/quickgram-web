import { defineConfig, loadEnv } from 'vite';
import { alias } from './alias';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: env.PORT || 3000,
    },
    resolve: {
      alias,
    },
    define: {
      // By default, Vite doesn't include shims for NodeJS/
      // necessary for segment analytics lib to work
      global: {},
    },
    plugins: [react()],
  };
});
