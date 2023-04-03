<template>
    <n-button @click="showModal = true">
        Start Me up
    </n-button>
    <n-modal v-model:show="showModal">
        <n-card style="width: 600px" title="Modal" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>
                Oops!
            </template>
            Content
            <template #footer>
                Footer
            </template>
        </n-card>
    </n-modal>
</template>
  

<script setup>
import { ref } from "vue"

const showModal = ref(false)

// eslint-disable-next-line no-unused-vars
export function show() {
    showModal.value = true
}

</script>
