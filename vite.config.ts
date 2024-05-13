import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist', // Directorio de salida
    assetsDir: '', // Directorio para los archivos de activos generados
    assetsInlineLimit: 0, // Establece el límite de tamaño de los archivos en línea a 0 para forzar la generación de archivos físicos
    rollupOptions: {
      input: 'src/main.ts', // Ruta de tu archivo de entrada principal      
      output: {
        entryFileNames: 'index.js', // Nombre del archivo de salida JS
        assetFileNames: 'index.css' // Nombre del archivo de salida CSS
      }
    },
  }
})
