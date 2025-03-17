import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Укажите нужный порт
    open: true, // Автоматически открывать в браузере
  },
  base: '/NFTmarket-Pages/',
});
