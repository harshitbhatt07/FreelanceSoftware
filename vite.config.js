import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: process.env.VERCEL ? '/' : process.env.NODE_ENV === 'production' ? '/FreelanceSoftware/' : '/',
  plugins: [react()],
})
