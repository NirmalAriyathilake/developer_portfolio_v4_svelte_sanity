/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Poppins', 'font-sans'],
				display: ['Laceration', 'font-sans']
			},
			colors: {
				primary: {
					// bg: "#FFEBD6",
					DEFAULT: '#FF7F2A'
					// card: "#F6F2EE",
				}
			}
		}
	},
	// darkMode: 'class',
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#FF7F2A',
					'primary-content': '#131616',
					'base-200': '#F6F2EE',
					'base-300': '#FFF3EB',
					'base-content': '#131616'
				},
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#FF7F2A',
					'base-100': '#0f172a',
					'base-200': '#1e293b',
					'base-300': '#0b111e'
				}
			}
		]
	}
};
