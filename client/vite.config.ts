import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Add "base: './'" here
export default defineConfig({
  plugins: [react()],
  base: './'
})
