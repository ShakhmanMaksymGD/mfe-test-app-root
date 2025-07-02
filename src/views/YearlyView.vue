<script setup>
import { defineAsyncComponent } from 'vue'
const YView = defineAsyncComponent(() => import('yearly_app/YView'))
console.log("YView", YView)
</script>

<template>
  <YView :style="{ width: '70vw' }" customRef="root-domain" />
</template>
