import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	react(), 
	basicSsl(),
	VitePWA({
		registerType: 'autoUpdate',
		workbox: {
			globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
		},
		manifest: {
			name: 'Sommerlabyrinten',
			short_name: 'Sommerlabyrinten',
			description: 'Sommerlabyrinten er et interaktivt spill hvor du bruker mobilen til å lete etter letetråder over hele byen.',
			theme_color: '#08b2e3',
			background_color: '#08b2e3',
			icons: [
				{
					src: './icons/sl-icon-16x16.png',
					sizes: '16x16',
					type: 'image/png'
				},
				{
					src: './icons/sl-icon-128x128.png',
					sizes: '128x128',
					type: 'image/png'
				},
				{
					src: './icons/sl-icon-192x192.png',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					src: './icons/sl-icon-256x256.png',
					sizes: '256x256',
					type: 'image/png'
				},
				{
					src: './icons/sl-icon-384x384.png',
					sizes: '384x384',
					type: 'image/png'
				},
				{
					src: './icons/sl-icon-512x512.png',
					sizes: '512x512',
					type: 'image/png'
				},
			]
		}
	})
],
})
