<script setup>
import { RouterView } from 'vue-router'

import layout from '@/components/LayoutDefault.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <layout>
    <template #header>
      <Header />
    </template>

    <router-view />

    <template #footer>
      <Footer />
    </template>
  </layout>
</template>