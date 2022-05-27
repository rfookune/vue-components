import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import Input from "./components/Input.vue";
import Textarea from "./components/Textarea.vue";

import 'tailwindcss/tailwind.css'

export default {
	install: (app, options) => {
		app.component("Button", Button);
		app.component("Card", Card);
		app.component("Input", Input);
		app.component("Textarea", Textarea);
	},
}

export {
	Button, 
	Card, 
	Input, 
	Textarea
};