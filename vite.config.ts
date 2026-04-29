import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import { imagetools } from 'vite-imagetools'
import rehypeSlug from 'rehype-slug'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
		mdx({ rehypePlugins: [ rehypeSlug ]}),
	  react(),
	  tailwindcss(),
	  imagetools()
  ],
})
