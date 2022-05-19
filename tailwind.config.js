const safelist = require('./tailwind.safelist.js');

module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	safelist: safelist,
	theme: {
		extend: {},
	},
	plugins: [],
}