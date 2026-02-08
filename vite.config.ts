import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        },
        { src: 'public/popup.html', dest: '.' },
        { src: 'public/icons', dest: '.' }
      ],
    }),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        popup: resolve(__dirname, 'src/popupEntry.tsx'),
        
      },
    output: {
      entryFileNames: '[name].js',  // generates main.js and popup.js
    },
    },
  },
});