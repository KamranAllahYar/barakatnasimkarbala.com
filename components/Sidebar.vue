<template>
  <transition name="slide-left">
    <div
        v-if="isSideMenuOpen"
        class="fixed left-0 top-0 z-[100] flex h-screen w-full flex-col justify-between bg-black px-0 py-4 pb-10 shadow-[2px_0px_20px_-2px_rgba(0,_0,_0,_0.25)] sm:px-0 lg:w-7/12"
    >
      <div class="w-full">
        <div class="flex justify-end px-10 py-4">
          <div>
            <span class="cursor-pointer" @click="toggleSideMenu()">
              <CloseIcon class="h-4 w-4" />
            </span>
          </div>
        </div>
        <div class="mx-auto w-10/12 border border-black/30 lg:w-11/12" />
        <div class="relative flex bg-black flex-col justify-between px-6 py-10">
          <div class="flex w-full flex-col gap-2">
            <NuxtLink
                @click="toggleSideMenu()"
                :to="{ name: item.route }"
                :class="{
                'flex w-full cursor-pointer items-center gap-4 rounded-lg px-4 py-2 font-semibold': true,
                'bg-black text-white hover:bg-black':
                  $route.name === item.route,
                'hover:bg-black/20': $route.name !== item.route,
              }"
                v-for="(item, index) in navigationItems"
                :key="index"
            >
              <span>{{ item.name }}</span>
            </NuxtLink>
          </div>
        </div>
        <div class="bg-[url('/Texture-1.svg')] object-contain overflow-hidden w-full h-4"></div>
        <div class="flex justify-start items-center p-2 sm:p-4 text-sm mt-5" style="cursor: pointer" @click="downloadPDF">
          <UIcon name="i-heroicons-document" class="w-5 h-5 px-3" />
          <div class="mt-1 text-lg mx-2">Download Brochure</div>
        </div>
      </div>
      <div>
        <div class="flex w-full items-center justify-center">
<!--          <UButton-->
<!--              variant="dark"-->
<!--              icon="i-heroicons-arrow-left-start-on-rectangle-20-solid"-->
<!--              label="Logout"-->
<!--              @click="logout"-->
<!--              class="z-[100]"-->
<!--          />-->
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref} from 'vue'
import CloseIcon from "~/components/svgs/CloseIcon.vue";

const props = defineProps({
  toggle: {
    type: Boolean,
    default: false,
  },
});

const isSideMenuOpen = ref(false)
const navigationItems = [
  {
    name: "Home",
    route: "index",
  },
  {
    name: "About Us",
    route: "about-us",
  },
  {
    name: "Our Products",
    route: "products",
  },

];
watch(() => props.toggle, () => {
  isSideMenuOpen.value = true;
})
function toggleSideMenu() {
  isSideMenuOpen.value = !isSideMenuOpen.value;
  if (document) {
    document.body.classList.toggle("no-scroll");
  }
}
function downloadPDF() {
  const link = document.createElement('a');
  link.href = '/karbala_food.pdf'; // Relative path to the file in the public directory
  link.download = 'karbala_foods.pdf'; // The filename for the download
  link.click();
}
</script>
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: 0.3s ease;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: 0.3s ease-out;
}

.slide-left-enter-from {
  opacity: 1;
  transform: translate(-100%, 0);
}
.slide-left-leave-to {
  opacity: 1;
  transform: translate(-100%, 0);
}
.slide-right-enter-from {
  opacity: 1;
  transform: translate(-10%, 0);
}
.slide-right-leave-to {
  opacity: 1;
  transform: translate(-10%, -100%);
}
</style>
