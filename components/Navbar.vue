<template>
  <div
      class="fixed w-full px-6 md:px-0 z-10 top-0 h-auto bg-black/70 grid grid-cols-2 md:grid-cols-3 text-yellow-400 backdrop-blur justify-between">
    <div class="flex self-start p-2 sm:p-4">
      <img src="/logo.png" alt="logo" class="w-14 ml-0 md:ml-10 p-2 sm:p-0"/>
    </div>
    <div class="hidden gap-10 font-bold items-center justify-center md:flex">
      <div>
        <ul class="pointer flex cursor-pointer gap-6 font-large tracking-wider">
          <li
              v-for="(item, index) in links"
              :key="index"
              :class="[
          'group transition duration-300 w-max',
          route.fullPath === item?.link ? 'text-yellow-400' : 'hover:text-yellow-400'
        ]"
          >
            <router-link class="py-4" :to="item?.link || ''">
              {{ item?.label }}
            </router-link>
            <span
                :class="[
            'block h-1 max-w-0 rounded-2xl bg-yellow-400 transition-all duration-500',
            route.fullPath === item?.link ? 'max-w-full' : 'group-hover:max-w-full'
          ]"
            ></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="hidden md:flex justify-end items-center p-2 sm:p-4 text-sm" style="cursor: pointer" @click="downloadPDF">
      <UIcon name="i-heroicons-document" class="w-5 h-5 px-3" />
      <div class="mt-1">Download Brochure</div>
    </div>
    <div class="relative flex h-full justify-end md:hidden items-center ">
      <button class="w-10 h-10 justify-center items-center border rounded-2xl border-yellow-400 p-2 " @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" fill="currentColor"></path></svg>
      </button>
      <Sidebar :toggle="toggleM" />
    </div>
  </div>
</template>
<script lang="ts" setup>

import Sidebar from "~/components/Sidebar.vue";

const route = useRoute();
const toggleM = ref(false)
const links = [{
  'label': 'Home',
  'link': '/'
}, {
  'label': 'About Us',
  'link': '/about-us'
}, {
  'label': 'Our Products',
  'link': '/products'
}]

function toggleMenu(){

  toggleM.value = !toggleM.value;
  console.log(toggleM.value)
}

function downloadPDF() {
  const link = document.createElement('a');
  link.href = '/karbala_food.pdf'; // Relative path to the file in the public directory
  link.download = 'karbala_foods.pdf'; // The filename for the download
  link.click();
}
</script>
