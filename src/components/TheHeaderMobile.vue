<template>
  <div class="">
    <header class="bg-[#1F2229] h-[2.5rem] flex items-center px-4">
      <div
        class="max-w-[1100px] w-full flex mx-auto justify-between items-center"
      >
        <img src="../assets/Logo.svg" alt="logo" />
        <div class="flex justify-between items-center gap-6">
          <notification-component></notification-component>
          <div class="block">
            <button
              class="flex items-center text-black border-black"
              :class="{ 'active': isNavOpen }"
              @click="toggleNav"
            >
              <template v-if="!isNavOpen">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 -4 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H17C17.5523 0.5 18 0.947715 18 1.5C18 2.05228 17.5523 2.5 17 2.5H1C0.447716 2.5 0 2.05228 0 1.5ZM0 7.5C0 6.94772 0.447715 6.5 1 6.5H17C17.5523 6.5 18 6.94772 18 7.5C18 8.05228 17.5523 8.5 17 8.5H1C0.447716 8.5 0 8.05228 0 7.5ZM1 12.5C0.447715 12.5 0 12.9477 0 13.5C0 14.0523 0.447716 14.5 1 14.5H17C17.5523 14.5 18 14.0523 18 13.5C18 12.9477 17.5523 12.5 17 12.5H1Z"
                    fill="white"
                  />
                </svg>
              </template>
              <template v-else>
                <svg
                  width="24"
                  height="24"
                  viewBox="2 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.7911 3.20937C20.5142 2.93249 20.0653 2.93249 19.7884 3.20937L12 10.9978L4.21156 3.20937C3.93468 2.93249 3.48578 2.93249 3.2089 3.20937C2.93202 3.48624 2.93202 3.93515 3.2089 4.21203L10.9973 12.0005L3.2089 19.7889C2.93202 20.0658 2.93202 20.5147 3.2089 20.7916C3.48578 21.0684 3.93468 21.0684 4.21156 20.7916L12 13.0031L19.7884 20.7916C20.0653 21.0684 20.5142 21.0684 20.7911 20.7916C21.068 20.5147 21.068 20.0658 20.7911 19.7889L13.0027 12.0005L20.7911 4.21203C21.068 3.93515 21.068 3.48624 20.7911 3.20937Z"
                    fill="white"
                  />
                </svg>
              </template>
            </button>
          </div>
        </div>
      </div>
    </header>
    <nav class="flex justify-between h-screen py-4 px-4">
      <div
        class="flex w-full flex-col justify-between"
        :class="{ 'hidden': !isNavOpen, 'flex': isNavOpen }"
      >
        <div class="text-[14px] leading-[18px] flex gap-4 flex-col md:flex-row">
          <a
            v-for="item in navItems"
            :key="item.label"
            href="#"
            class="block pt-2 pb-2 text-gray-500 hover:text-black active:text-black border-b"
          >
            {{ item.label }}
          </a>
        </div>
        <div class="flex items-center gap-3">
          <div>
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 0.0625C3.57444 0.100105 0.8125 2.885 0.8125 6.31455C0.8125 6.33228 0.8125 6.35054 0.8125 6.36827C0.8125 9.70059 6.35196 16.7504 6.58786 17.0485C6.68458 17.1716 6.83289 17.25 7 17.25C7.16711 17.25 7.31542 17.1716 7.41107 17.0496C7.64804 16.7504 13.1875 9.70059 13.1875 6.36559C13.1875 6.35054 13.1875 6.33282 13.1875 6.31455C13.1875 2.88446 10.425 0.100105 7.00322 0.0625H7ZM7 15.8398C5.25847 13.5486 1.87107 8.62402 1.87107 6.36559C1.87053 6.33873 1.86999 6.30649 1.86999 6.2748C1.86999 3.44209 4.16659 1.14605 7 1.14605C9.83341 1.14605 12.13 3.44209 12.13 6.2748C12.13 6.30649 12.1295 6.33873 12.1289 6.37042C12.1289 8.62294 8.74099 13.5465 6.99946 15.8387L7 15.8398ZM7 3.64515C6.98388 3.64462 6.96507 3.64462 6.94627 3.64462C5.37346 3.64462 4.09835 4.91942 4.09835 6.49183C4.09835 8.06424 5.37346 9.33904 6.94627 9.33904C8.51907 9.33904 9.79364 8.06478 9.79418 6.49237C9.79418 6.48485 9.79418 6.47571 9.79418 6.46658C9.79418 4.9178 8.54701 3.65966 7.00161 3.64247L7 3.64515ZM7 8.26033C6.99033 8.26033 6.97851 8.26086 6.96668 8.26086C5.98926 8.26086 5.19722 7.46902 5.19722 6.49183C5.19722 5.51465 5.98926 4.7228 6.96668 4.7228C7.94411 4.7228 8.73615 5.51465 8.73615 6.49183C8.73615 6.49237 8.73615 6.49237 8.73615 6.4929C8.73615 6.49613 8.73615 6.50043 8.73615 6.50419C8.73615 7.46633 7.96077 8.24797 7.00107 8.25818L7 8.26033Z"
                fill="#7C8792"
              />
            </svg>
          </div>
          <span class="text-[#7C8792]">Москва и область</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import NotificationComponent from './NotificationComponent.vue';

import { ref } from 'vue';

const isNavOpen = ref(false);

function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
}

const props = defineProps(['navItems']);
</script>

<style scoped>
.active .path1 {
  transform: rotate(-45deg) translate(-4px, 4px);
}
.active .path2 {
  opacity: 0;
}
.active .path3 {
  transform: rotate(45deg) translate(-2px, -2px);
}
</style>
