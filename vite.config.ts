 

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
//   server: {
//     open: true,
//   },
// });

// vite.config.js
import postcssImport from 'postcss-import';
import tailwindcss from '@tailwindcss/vite'

interface AtRule {
  name: string;
  remove: () => void;
}

export default {
  plugins: [tailwindcss()],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        {
          postcssPlugin: 'strip-charset',
          AtRule: {
            charset: (atRule: AtRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
};
