import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/MyPersonalPage/",
  server: {
    port: 3000
  },
  plugins: [react()],
})
