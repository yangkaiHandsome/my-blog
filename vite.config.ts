import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/my-blog/',   // ⚠️ 这里一定要写你的仓库名
})