import Button from "./components/Button.vue";
import Card from "./components/Card.vue";

export default {
	install: (app, options) => {
		app.component("Button", Card);
	},
}

export { Button, Card };