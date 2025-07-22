<template>
  <button class="menuButton" @click="$emit('openMenuModal')">
    <svg
      class="menuButton__imageBox"
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 512 512"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        class="menuButton__image"
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M735 3826 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8 593 -10 1834 -8 l1797 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27 21 -1807 2 c-1487 2 -1812 0 -1837 -11z"
        ></path>
        <path
          d="M735 2706 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8 593 -10 1834 -8 l1797 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27 21 -1807 2 c-1487 2 -1812 0 -1837 -11z"
        ></path>
        <path
          d="M735 1586 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 26 -8 593 -10 1834 -8 l1797 3 27 21 c53 39 69 71 69 134 0 63 -16 95 -69 134 l-27 21 -1807 2 c-1487 2 -1812 0 -1837 -11z"
        ></path>
      </g>
    </svg>
  </button>
</template>

<script setup>
const emit = defineEmits(['openMenuModal']);
</script>

<style scoped>
.menuButton {
  width: 40px;
  height: 40px;
}
.menuButton__imageBox {
  width: 100%;
}
.menuButton__image {
  fill: var(--white-primary);
  transition: 0.3s ease all;
}
.menuButton:hover .menuButton__image {
  fill: var(--blue-primary);
}
</style>
