<template>
    <div class="relative flex flex-col bg-white border border-gray-200 rounded-lg shadow">        
        <div v-if="$slots.header" class="px-4 py-4 border-b border-gray-200 rounded-tl-lg rounded-tr-lg bg-gray-50 sm:px-6">
            <slot name="header"/>
        </div>

        <div v-if="!$slots.content" class="flex-grow px-4 py-5 sm:px-6">
            <h3 v-if="$slots.title" class="text-lg font-bold leading-6 text-gray-900">
                <slot name="title"></slot>
            </h3>
            <slot></slot>
        </div>
        
        <slot name="content"></slot>
        
        <div v-if="$slots.footer" class="px-4 py-3 rounded-b-lg sm:px-6 bg-gray-50">
            <div class="flex justify-start space-x-3 sm:justify-end">
                <slot name="footer"></slot>
            </div>
        </div>
        <div v-if="$slots.transparentFooter" class="px-4 pb-4 rounded-b-lg sm:px-6">
            <slot name="transparentFooter"></slot>
        </div>
    </div>
</template>