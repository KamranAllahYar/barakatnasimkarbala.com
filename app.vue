<template>
  <NuxtLayout>
    <Navbar />
    <Sidebar :toggle="true"/>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>
<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import Sidebar from "~/components/Sidebar.vue";
</script>
<style>
body {
  font-family: Epilogue, sans-serif;
}
</style>