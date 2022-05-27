<template>
    <input type="text" class="block w-full h-10 text-sm bg-white border rounded disabled:bg-gray-200" :class="hasError ? 'text-red-900 border-red-300 placeholder-red-400 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'text-gray-700 border-gray-300 focus:ring-gray-400 focus:border-gray-400'" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>

<script>
    export default {
        props: ['modelValue', 'hasError'],

        emits: ['update:modelValue'],

        methods: {
            focus() {
                this.$refs.input.focus()
            }
        }
    }
</script>