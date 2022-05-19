<template>
    <div class="relative flex flex-col bg-white shadow rounded-lg border border-gray-200">        
        <div v-if="$slots.header" class="rounded-tl-lg rounded-tr-lg bg-gray-50 border-b border-gray-200 px-4 py-4 sm:px-6">
            <slot name="header"/>
        </div>

        <div v-if="!$slots.content" class="flex-grow px-4 py-5 sm:px-6">
            <h3 v-if="$slots.title" class="text-lg leading-6 font-bold text-gray-900">
                <slot name="title"></slot>
            </h3>
            <slot></slot>
        </div>
        
        <slot name="content"></slot>
        
        <div v-if="$slots.footer" class="px-4 py-3 sm:px-6 bg-gray-50 rounded-b-lg">
            <div class="flex justify-start sm:justify-end space-x-3">
                <slot name="footer"></slot>
            </div>
        </div>
        <div v-if="$slots.transparentFooter" class="px-4 pb-4 sm:px-6 rounded-b-lg">
            <slot name="transparentFooter"></slot>
        </div>
    </div>
</template>