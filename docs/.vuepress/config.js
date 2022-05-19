const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
	title: "UI Components",
	description: "Nextek's VueJS UI Component Library built with TailwindCSS",
	theme: defaultTheme({
		repo: "rfookune/vue-components",
		logo: '/images/nextek-logo-small.svg',
		logoDark: '/images/nextek-logo-small-light.svg',
		navbar: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide' },
			{ text: 'NPM Package', link: 'https://www.npmjs.com/package/nextek-ui--vue' }
		],
		sidebar: [
			// SidebarItem
			{
				text: 'Guide',
				link: '/guide/',
			  	children: [
					// SidebarItem
					{
						text: 'Getting Started',
						link: '/guide/getting-started.md',
					},
					{
						text: 'Installation',
						link: '/guide/installation.md',
					},
			 	 ],
			},
			{
				text: 'Components',
				link: '/components/',
			  	children: [
					// SidebarItem
					{
						text: 'Button',
						link: '/components/button.md',
					},
					{
						text: 'Card',
						link: '/components/card.md',
					},
			 	 ],
			},
		],
	}),
	plugins: [
		searchPlugin({
			locales: {
				'/': {
					placeholder: 'Search',
				},
			},
		}),
	],
}