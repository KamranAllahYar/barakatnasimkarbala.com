<template>
  <div class="containerr">
    <div class="w-full flex justify-center items-center flex-col">
      <div
          class="homeHeroContainerSlider w-full flex justify-center items-center flex-col">
        <UCarousel
            ref="carouselRef"
            v-slot="{ item, index }" :items="items" :ui="{ item: 'basis-full' }"
            class="overflow-hidden h-[850px] w-full"
            indicators>
          <div
              :style="`background-image: url(${item.image}); background-size: cover; background-position: center; height: 850px; width: 100%;`"
              class="relative text-white"
          >
            <div class="absolute inset-0 bg-black bg-opacity-40"></div> <!-- Semi-transparent overlay -->
            <div :class="textPlacementClass(index)" class="relative text-start mx-6 sm:mx-24">
              <h2 class="text-3xl font-bold mb-4 text-yellow-400">{{ item.title }}</h2>
              <p class="text-6xl mt-1 max-w-[400px] truncate-overflow">{{ item.description2 }}</p>
              <p class="text-lg mt-5">{{ item.description }}</p>
              <router-link to="/products">
                <UButton
                    class="bg-transparent border-[1px] border-yellow-400 mt-5 text-yellow-400 w-36 flex justify-center hover:text-white hover:bg-yellow-400">
                  View All Products
                </UButton>
              </router-link>
            </div>
          </div>
        </UCarousel>
      </div>

      <div class=" relative w-full p-4 sm:p-28 mx-auto bg-[url('/dark-bg.jpg')] text-white">
        <div class="w-12/12 sm:w-8/12 flex justify-center items-center flex-col mx-auto text-lg text-center">
          Welcome to Barakat Nasim Karbala, we are proud to be leaders in the export/import industry, specializing in
          high-quality frozen goods. Our expertise in Marine Trading, with a particular focus on frozen buffalo meat,
          fish, and chicken, ensures that we deliver only the best to our global partners. With a strong commitment to
          quality and excellence, we invite you to explore our range of products and discover why Barakat Nasim Karbala
          is the trusted choice for businesses around the world. Let’s build a lasting partnership together.
        </div>
        <div class="w-full flex flex-col sm:flex-row justify-center">
          <div
              class="w-12/12 sm:w-8/12 flex justify-center flex-col p-10 rounded-2xl border-0 border-gray-400 shadow-2xl">
            <div class="w-full text-6xl mb-4 text-yellow-400"><em>Vision<img src="/Texture-1.svg" alt="texture"/></em>
            </div>
            <div class="text-lg">
              To be the foremost provider of high-quality frozen goods globally, recognized for our unwavering
              commitment to excellence and our ability to meet the diverse needs of our customers. We envision a future
              where B.N.K sets the standard for quality in the marine trading industry, expanding our reach and impact
              across international markets.
            </div>

            <!--            <router-link to="/about-us">-->
            <!--              <UButton class="bg-transparent border-[1px] border-yellow-400 mt-5 text-yellow-400 w-36 flex justify-center hover:text-white hover:bg-yellow-400"> Learn more </UButton>-->
            <!--            </router-link>-->
          </div>
          <img src="/meat.png"
               class="w-[300px] h-[300px] items-center transition-transform duration-300 ease-in-out hover:scale-110"
               alt="Moving Image"/>
        </div>
        <div class="w-full flex flex-col-reverse sm:flex-row justify-center mt-20">
          <img src="/beat-12.avif"
               class="w-[300px] h-[300px] items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
               alt="Moving Image"/>

          <div
              class="w-12/12 sm:w-8/12 flex justify-end flex-col p-10 rounded-2xl border-0 border-gray-400 shadow-2xl ">
            <div class="w-full flex justify-end text-right items-end text-6xl mb-4 text-yellow-400"><em>Mission<img
                src="/Texture-1.svg" alt="texture"/></em></div>
            <div class="text-lg flex justify-end items-end text-right">
              Our mission is to deliver superior quality frozen products to our clients worldwide, ensuring safety,
              freshness, and customer satisfaction at every step. We strive to build lasting relationships based on
              trust, reliability, and consistent excellence in service. Through continuous improvement and innovation,
              B.N.K aims to lead the frozen goods market, contributing to the global food supply chain with integrity
              and professionalism.
            </div>

            <!--            <router-link to="/about-us" class="w-full flex justify-end">-->
            <!--              <UButton class="bg-transparent border-[1px] border-yellow-400 mt-5 text-yellow-400 w-36 flex justify-center hover:text-white hover:bg-yellow-400"> Learn more </UButton>-->
            <!--            </router-link>-->
          </div>
        </div>
        <div class="w-full flex flex-col justify-center">
          <div class="flex justify-center text-6xl text-yellow-400 mt-10 mb-4">Our Brands</div>
          <div
              class="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 brand-icons border border-yellow-400 rounded-2xl mt-10">
            <div class="w-full flex justify-center items-center">
              <img src="/brand1.png"
                   class="w-[230px] h-[255px] items-center transition-transform duration-300 ease-in-out hover:scale-110"
                   alt="Moving Image"/>
            </div>
            <div class="w-full flex justify-center items-center">
              <img src="/rustam_logo.jpg"
                   class="w-[280px] h-[220px] object-cover rounded-2xl items-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110"
                   alt="Moving Image"/>
            </div>
            <div class="w-full flex justify-center items-center">
              <img src="/brand2.png"
                   class="w-[220px] h-[270px] items-center mt-5 transition-transform duration-300 ease-in-out hover:scale-110"
                   alt="Moving Image"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
useHead({
  title() {
    return "Home | Barkat Naseem Karbala";
  },
})
definePageMeta({
  title: "Home | Barkat Naseem Karbala",
})

const items = [
  {
    image: '/cover-bg1.jpg',
    title: 'Welcome to Barakat Naseem Karbala',
    description: 'Explore our products and services',
    description2: 'Your Health Our Mission',
  },
  {
    image: '/cover-bg2.jpg',
    title: 'Quality Products',
    description: 'We offer only the best quality',
    description2: 'Wellness for Everyone Everywhere',
  },
]
const textPlacementClass = (index: number) => {
  switch (index) {
    case 0:
      return 'flex flex-col items-start justify-center text-center h-full'; // Centered text
    case 1:
      return 'flex flex-col items-end justify-center text-end h-full'; // Bottom-right corner
      // case 2:
      //   return 'flex items-start justify-start text-left h-full p-8'; // Top-left corner
    default:
      return 'flex items-center justify-center text-center h-full'; // Default to centered text
  }
}
const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>
<style scoped>
.container {
  position: relative;
  height: 400px; /* Adjust height as needed */
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.moving-image {
  position: absolute;
  width: 150px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  animation: moveUpDown 20s infinite ease-in-out;
}

.containerr:after {
  content: "";
  background: url('/Texture-1.svg');
  width: 100%;
  display: block;
  height: 23px;
  position: relative;
  top: -23px
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(350px); /* Adjust based on the height you want the image to move */
  }
  100% {
    transform: translateY(0);
  }
}

.brand-icons {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
}

.brand-icon img {
  height: 200px; /* Adjust size as needed */
  width: auto;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.how__it__work__content__card {
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.how__it__work__content__card:hover .how__it__work__content__card__img {
  animation: rotateAnimation 400ms linear;
}

@keyframes rotateAnimation {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

</style>
