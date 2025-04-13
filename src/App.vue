<script setup lang="ts">
import { Toaster } from './components/ui/sonner'
</script>

<template>
  <RouterView />
  <Toaster position="top-center" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
