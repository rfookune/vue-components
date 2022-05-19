import Button from "./components/Button.vue";
import Card from "./components/Card.vue";

import 'tailwindcss/tailwind.css'

export default {
	install: (app, options) => {
		app.component("Button", Card);
	},
}

export { Button, Card };