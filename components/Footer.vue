<template>
  <div class="containerr w-full bg-[#deb841] bg-cover mt-[-23px] relative">
    <div class="w-full ">
      <section class="w-full flex-row grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-4 p-16 justify-center rounded-b-[60px]">
        <div class="flex flex-col gap-2">
          <a class="text-gray-700" :style="{fontWeight:'600', fontSize:'16px'}">Countries we deal in</a>
          <div class="flex-row grid grid-cols-3 sm:grid-cols-5 gap-1">
            <img src="/uae.png" class="w-[30px] h-[30px] items-center transition-transform duration-300 ease-in-out hover:scale-110" alt="Moving Image"/>
            <img src="/india.png" class="w-[30px] h-[30px] items-center transition-transform duration-300 ease-in-out hover:scale-110" alt="Moving Image"/>
            <img src="/iraq.png" class="w-[30px] h-[30px] items-center transition-transform duration-300 ease-in-out hover:scale-110" alt="Moving Image"/>
            <img src="/syria.png" class="w-[30px] h-[30px] items-center transition-transform duration-300 ease-in-out hover:scale-110" alt="Moving Image"/>
            <img src="/brazil.png" class="w-[30px] h-[30px] items-center transition-transform duration-300 ease-in-out hover:scale-110" alt="Moving Image"/>
          </div>
        </div>
        <div class="w-full flex flex-col">
          <div class="text-gray-700 text-xl font-bold">
            Contact Us
          </div>
          <div class="text-gray-600 hover:text-black">
            Iraq, Basra Algeria, 14 July Street <br/>
            Postal Code: 61004
          </div>
          <div class="text-gray-600 flex flex-row my-1 flex-gap2 hover:text-black" style="margin-left: -26px">
            <img src="/whatsapp.png" class="w-6" alt="Whatsapp"/>
            <a style="cursor: pointer" @click="openWhatsAppChat('+964 7707157956')">+964 7707157956</a>
          </div>
          <div class="text-gray-600 flex flex-row flex-gap2 hover:text-black" style="margin-left: -26px">
            <img src="/whatsapp.png" class="w-6" alt="Whatsapp"/>
            <a style="cursor: pointer" @click="openWhatsAppChat('+964 7862908135')">+964 7862908135</a>
          </div>
          <div class="text-gray-600 hover:text-black">
            <a href="mailto:barakatnasimkarbala8@gmail.com">barakatnasimkarbala8@gmail.com</a>
          </div>
        </div>
<!--        <div class="w-full flex flex-col">-->
<!--          <div class="text-yellow-400 text-xl font-bold flex flex-row">-->
<!--            <div>Our Partner</div>-->
<!--          </div>-->
<!--          <div class="text-gray-400 hover:text-yellow-400">-->
<!--            Almjwal Food Stuff Trading L.L.C-->
<!--          </div>-->
<!--          <div class="text-gray-400 hover:text-yellow-400">-->
<!--            <a href="mailto:Almjwalfoodstaff@gmail.com">Almjwalfoodstaff@gmail.com</a>-->
<!--          </div>-->
<!--          <div class="text-gray-400 hover:text-yellow-400">-->
<!--            F-68, Nooraniyah building, Hor Al Anz, Dubai-UAE-->
<!--          </div>-->
<!--        </div>-->
        <div class="flex flex-col">
          <div class="text-gray-700  text-xl font-bold">
            Founder
          </div>
          <a class="text-gray-600 hover:text-black">
            Mr. Abdul Rahim Al-Shammari
          </a>
          <a class="text-gray-600 hover:text-black" style="margin-left: -10px">
            +964 7827005966
          </a>
          <div class="text-gray-600 hover:text-black flex flex-row" @click="downloadBusinessCard()" style="cursor: pointer; margin-left: -26px">
            <UIcon name="i-heroicons-arrow-down-tray" class="w-5 h-5 px-3" />
            <div style="margin-left: 2px">Business Card</div>
          </div>
<!--          <div class="text-gray-600 hover:text-black flex flex-row" @click="downloadPacking()" style="cursor: pointer; margin-left: -26px">-->
<!--            <UIcon name="i-heroicons-arrow-down-tray" class="w-5 h-5 px-3" />-->
<!--            <div style="margin-left: 2px">View Premium Packing</div>-->
<!--          </div>-->
        </div>
      </section>

      <div class="w-full justify-center text-gray-600 flex p-3">
        <div>Copyright Ⓒ {{ new Date().getFullYear() || '2025' }} Barakat Naseem Karbala (Private) Limited. All Rights
          Reserved.
        </div>
      </div>
      <div class="absolute bottom-14 right-0 p-4">
        <img src="/layer_3.avif" class="w-28 h-28" alt="New Image"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">



function openWhatsAppChat(number: any) {
  const phoneNumber = number; // Replace with the actual phone number
  const message = 'Hello! I would like to know more about your services.'; // Optional message
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
}
function downloadBusinessCard(){
  const link = document.createElement('a');
  link.href = '/business_card.pdf'; // Relative path to the file in the public directory
  link.download = 'business_card.pdf'; // The filename for the download
  link.click();
}
function downloadPacking(){
  const link = document.createElement('a');
  link.href = '/packing.pdf'; // Relative path to the file in the public directory
  link.download = 'packing.pdf'; // The filename for the download
  link.click();
}
</script>
<style scoped>
.containerr:before {
  content: "";
  background: url('/Texture-1.svg');
  width: 100%;
  display: block;
  height: 23px;
  position: relative;

}
</style>