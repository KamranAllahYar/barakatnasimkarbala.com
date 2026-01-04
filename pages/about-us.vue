<template>
  <div class="containerr">
    <div class="relative w-full pt-24 pb-24 bg-[url('/dark-bg.jpg')]">
      <div class="flex justify-center leading-relaxed"> <!-- Changed to flex for alignment -->
        <div class="w-full flex flex-col justify-center items-center">

          <!-- Added items-center for vertical alignment -->
          <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
                     class="rounded-lg overflow-hidden"
                     arrows>
            <img :src="item" class="w-full object-cover h-[700px]" draggable="false" alt="images">
          </UCarousel>
          <div class="text-yellow-400 w-11/12 sm:w-6/12  mt-20 text-center text-4xl mx-auto">
            <!-- Added mx-auto for centering -->
            <em>About Us<img src="/Texture-1.svg" alt="texture"/></em>
          </div>
          <div class="text-gray-200 w-11/12 sm:w-6/12  mt-20 text-center mx-auto"> <!-- Added mx-auto for centering -->
            Barakat Nasim Karbala is a leading export/import company specializing in Marine Trading, with a strong focus
            on frozen goods. Our primary product is premium frozen buffalo meat, complemented by a diverse range of
            other frozen items such as fish and chicken. With a deep commitment to quality, we ensure that every product
            meets the highest standards, providing our clients with reliable, top-tier products. Our expertise and
            dedication make us a trusted partner in the global trade of frozen goods.
          </div>

          <div class="text-gray-200 w-11/12 sm:w-6/12  mt-10 text-center mx-auto"> <!-- Added mx-auto for centering -->
            B.N.K also specialized in custom clearance for marine container goods in Iraq, alongside our core activities
            of exporting and importing. Our expertise ensures efficient and seamless handling of all customs processes,
            ensuring that your goods reach their destination promptly and in compliance with all regulations
          </div>

          <div class="text-yellow-400 w-11/12 sm:w-6/12  mt-20 text-center text-4xl mx-auto">
            <!-- Added mx-auto for centering -->
            <em>Partnership Commitment<img src="/Texture-1.svg" alt="texture"/></em>
          </div>

          <div class="text-gray-200 w-11/12 sm:w-6/12  mt-10 text-center mx-auto"> <!-- Added mx-auto for centering -->
            Barakat Nasim Karbala values strong, stable relationships as key to success. We are committed to maintaining
            mutual trust and transparency with our partners. By ensuring open communication and reliability, we strive
            to keep our collaborations firm and mutually beneficial over the long term. In return, we respectfully ask
            for the same level of commitment from our partners, ensuring a balanced and enduring partnership.
          </div>
          <div class="w-11/12 sm:w-10/12 grid grid-cols-1 sm:grid-cols-8  gap-4 mt-8">
            <img src="/aboutus1.jpg" alt="image"
                 class="col-span-6 p-0 px-0 py-0 object-cover w-full h-[210px] rounded-2xl"/>
            <img src="/aboutus3.png" alt="image"
                 class="col-span-2 p-0 px-0 py-0 bg-white object-contain w-full h-[210px] rounded-2xl"/>
            <img src="/aboutus4.png" alt="image"
                 class="col-span-2 p-0 px-0 py-0 bg-white object-contain w-full h-[210px] rounded-2xl"/>
            <img src="/logo.png" alt="image"
                 class="col-span-2 p-0 px-0 py-0 bg-white object-contain w-full h-[210px] rounded-2xl"/>
            <img src="/brand1.png" alt="image"
                 class="col-span-2 p-0 px-0 py-0 bg-white object-contain w-full h-[210px] rounded-2xl"/>
            <img src="/brand2.png" alt="image"
                 class="col-span-2 p-0 px-0 py-0 bg-white object-contain w-full h-[210px] rounded-2xl"/>
            <img src="/aboutus2.jpg" alt="image"
                 class="col-span-6 p-0 px-0 py-0 object-cover w-full h-[410px] rounded-2xl"/>
            <img src="/aboutus-6.jpeg" alt="image"
                 class="col-span-2 p-0 px-0 py-0 bg-white object-bottom w-full h-[410px] rounded-2xl"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title() {
    return "About Us | Barkat Naseem Karbala";
  },
})
definePageMeta({
  title: "About Us | Barkat Naseem Karbala",
})
const items = [
  '/aboutus-cover3.jpg',
  '/aboutus-cover4.jpg',
  '/aboutus-cover5.jpg',
]
const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 2000)
})
</script>
<style scoped>
.containerr:after {
  content: "";
  background: url('/Texture-1.svg');
  width: 100%;
  display: block;
  height: 23px;
  position: relative;
  top: -23px;
}

</style>
