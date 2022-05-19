<template>
    <button :class="styles" :disabled="loading" @click="onClick">
        <loading-icon v-if="loading" class="-ml-1 mr-2 h-5 w-5" />
        <slot/>
    </button>
</template>

<script>

import LoadingIcon from './icons/Loading.vue'

export default {
    props: {
        color: {
            type: String,
            default: 'gray',
        },
		outline: {
			type: Boolean,
            default: false
		},
        loading: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'medium',
        },
    },

    components: {
        LoadingIcon
    },

    computed: {
        styles() {
            let classes = "";

            classes = 'inline-flex items-center border font-medium rounded shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition ease-in-out';
			classes = classes + ` focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${ this.color }-500`;

            if (this.size === 'small') {
                classes = classes + ' px-2.5 py-1.5 text-xs';
            } else if (this.size === 'large') {
				classes = classes + ' px-4 py-2 text-base'
			} else  {
                classes = classes + ' px-4 py-2 text-sm';
            }
            
            if (this.outline) {
				if (this.color === 'white') {
					classes = classes + ' border-2 border-white text-white hover:bg-white hover:text-gray-700';
				} else {
					classes = classes + ` border-2 border-${ this.color }-600 text-${ this.color }-600 hover:bg-${ this.color }-600 hover:text-white`;
				}
			} else {
				if (this.color === 'white') {
					classes = classes + ' border-gray-200 text-gray-600 bg-white hover:bg-gray-50';
				} else {
					classes = classes + ` border-transparent text-white bg-${ this.color }-600 hover:bg-${ this.color }-700`;
				}
			}

			classes = classes + (this.loading ? ' cursor-not-allowed' : ' cursor-pointer');
            
            return classes;
        }
    },

	methods: {
		onClick() {
			this.$emit('click');
		}
	}
}
</script>
