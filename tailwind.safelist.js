let safelist = [
	{
	  pattern: /bg-(slate|gray|red|orange|yellow|green|teal|blue|indigo|purple)-(50|100|200|300|400|500|600|700|800|900)/,
	  variants: ['hover', 'focus'],
	},
	{
		pattern: /text-(slate|gray|red|orange|yellow|green|teal|blue|indigo|purple)-(50|100|200|300|400|500|600|700|800|900)/,
		variants: ['hover', 'focus'],
	},
	{
		pattern: /border-(slate|gray|red|orange|yellow|green|teal|blue|indigo|purple)-(50|100|200|300|400|500|600|700|800|900)/,
		variants: ['hover', 'focus'],
	},
	{
		pattern: /ring-(slate|gray|red|orange|yellow|green|teal|blue|indigo|purple)-(50|100|200|300|400|500|600|700|800|900)/,
		variants: ['focus'],
	},
];

// const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple'];
// const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

module.exports = safelist;