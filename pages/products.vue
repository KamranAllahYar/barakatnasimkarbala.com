<template>
  <div class="containerr">
    <div class="relative w-full pb-24 bg-[url('/dark-bg.jpg')]">
      <div class="relative w-full h-[700px] overflow-hidden">
        <img class="w-full h-full object-cover" src="/our-product-bg.jpg" alt=""/>
        <div class="absolute inset-0 flex items-center justify-end p-4 bg-black bg-opacity-50 text-white">
          <div class="flex-col">
            <div class="text-3xl font-bold text-yellow-400 flex justify-end text-right">
              Trust Barakat Nasim Karbala
            </div>
            <p class="flex justify-end text-lg text-right">for consistently </p>

            <p class="flex justify-end text-6xl mt-1 truncate-overflow text-right">Superior Quality</p>
            <p class="flex justify-end text-6xl mt-1 truncate-overflow text-right">Reliability</p>
            <p class="text-lg mt-2 flex justify-end text-right"> and the assurance of a product that exceeds your
              expectations.</p>

          </div>


        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-yellow-400 w-11/12 sm:w-6/12 mt-14 text-center text-4xl mx-auto">
          <!-- Added mx-auto for centering -->
          <em>Our Products<img src="/Texture-1.svg" alt="texture"/></em>
        </div>
        <div class="text-gray-200 w-11/12 sm:w-6/12  mt-14 text-center mx-auto"> <!-- Added mx-auto for centering -->
          Indulge in the exceptional taste and nutritional value of B.N.K Frozen Halal Meat. Our premium selection
          includes succulent buffalo meat, alongside a variety of frozen fish and chicken options, all meticulously
          sourced and processed to the highest standards.
        </div>
        <div class="text-gray-200 w-11/12 sm:w-6/12  mt-10 text-center mx-auto"> <!-- Added mx-auto for centering -->
          B.N.K Buffalo Frozen Halal Meat: Experience the rich, robust flavor of our buffalo meat, a natural powerhouse
          of essential nutrients. Packed with protein, iron, and zinc, it supports overall health, muscle development,
          and a strong immune system. Our commitment to preserving the natural integrity of the meat ensures a truly
          satisfying and wholesome culinary experience.
        </div>
      </div>

      <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 gap-10 justify-center">
        <div v-for="(item, index) in products" :key="index" class="relative flex flex-col p-2 items-center">
          <img src="/products/gold-brush-stroke.png" alt="topside"
               class="absolute bottom-1 mt-5 overflow-visible object-contain w-[370px]"/>
          <div
              class="relative w-52 h-52 bg-center flex justify-center transition-transform duration-300 ease-in-out hover:scale-150">
            <img :src="item.img" alt="topside" @click="showModal(item)" style="cursor: pointer"
                 class="object-cover w-full h-full mt-[-20px]"/>
          </div>

          <div class="text-white flex justify-center mt-5 text-lg font-bold tracking-widest">{{ item.title }}</div>
        </div>
      </div>

    </div>

    <UModal v-model="isOpen">
      <UCard>
        <template #header>
          <div class="flex justify-between">
            <div class="h-8"> {{ itemSelected.title }} (Packing)</div>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                     @click="isOpen = false"/>

          </div>
        </template>
        <img :src="itemSelected.packing_img" class="w-full"/>
      </UCard>
    </UModal>

  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

useHead({
  title() {
    return "Products | Barkat Naseem Karbala";
  },
})
definePageMeta({
  title: "Products | Barkat Naseem Karbala",
})
const isOpen = ref(false);
const itemSelected: any = ref({});
const products = [
  {
    img: '/products/forequarter-chunks.png',
    packing_img: '/packing/forequater_roll.jpeg',
    title: 'Forequarter Roll'
  },
  {
    img: '/products/rib-meat.png',
    packing_img: '/packing/rib_meat.jpeg',
    title: 'Rib Meat'
  },
  {
    img: '/products/whole-leg.png',
    packing_img: '/packing/whole_leg.jpeg',
    title: 'Whole Leg'
  },
  {
    img: '/products/striploin.png',
    packing_img: '/packing/striploin.jpg',
    title: 'Striploin'
  },
  {
    img: '/products/tenderloin.png',
    packing_img: '/packing/tenderloin.jpeg',
    title: 'Tenderloin'
  },
  {
    img: '/products/shinkshank.png',
    packing_img: '/packing/shin_shank.jpg',
    title: 'Shink Shank'
  },
  {
    img: '/products/shoulder.png',
    packing_img: '/packing/shoulder.jpg',
    title: 'Shoulder'
  },
  {
    img: '/products/rumpsteak.png',
    packing_img: '/packing/rumpsteak.jpg',
    title: 'Rump Steak'
  },
  {
    img: '/products/slice.png',
    packing_img: '/packing/slice.jpg',
    title: 'Slice'
  },
  {
    img: '/products/silverside.png',
    packing_img: '/packing/silverside.jpg',
    title: 'Silver Side'
  },
  {
    img: '/products/topside.png',
    packing_img: '/packing/topside.jpg',
    title: 'Top Side'
  },
  {
    img: '/products/kunckle.png',
    packing_img: '/packing/kunckle.jpg',
    title: 'Knuckle'
  },
  {
    img: '/products/trimmings.png',
    packing_img: '/packing/trimming_packing.jpeg',
    title: 'Trimming'
  }
]

function showModal(item: any) {
  isOpen.value = true;
  itemSelected.value = item;
}
</script>
<style scoped>
.containerr:after {
  content: "";
  background: url('/Texture-1.svg');
  width: 100%;
  display: block;
  height: 23px;
  position: relative;
  top: -23px
}
</style>