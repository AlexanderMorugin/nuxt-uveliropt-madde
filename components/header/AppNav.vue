<template>
  <ul class="headerNav">
    <li v-for="item in linksData" :key="item.id">
      <NuxtLink
        @click="$emit('toggleMobileMenu')"
        :to="{
          path:
            location === 'collections'
              ? `${item.route}/${route}/`
              : `${item.route}`,
          hash: `#${item.target}`,
        }"
        class="headerNav__link headerNav__link_line"
        :class="
          isScroll ? 'headerNav__link_scroll headerNav__link_line_scroll' : ''
        "
        >{{ item.title }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup>
const { linksData, isScroll, location, route } = defineProps([
  'linksData',
  'isScroll',
  'location',
  'route',
]);
const emit = defineEmits(['toggleMobileMenu']);
</script>

<style scoped>
.headerNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 750px;
  gap: 16px;
}
.headerNav__link {
  position: relative;
  display: inline-block;
  font-family: 'Montserrat-Regular';
  font-size: 16px;
  color: var(--white-primary);
  text-transform: uppercase;
  cursor: pointer;
}
.headerNav__link:after {
  content: '';
  display: block;
  position: absolute;
}
.headerNav__link:before {
  content: '';
  display: block;
  position: absolute;
}
.headerNav__link_line:after {
  transform-origin: right;
  transform: scaleX(0);
  bottom: -5px;
  height: 2px;
  width: 100%;
  background-color: var(--background-primary);
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.headerNav__link_line:hover:after {
  transform: scaleX(1);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}
.headerNav__link_scroll {
  color: var(--black-primary);
}
.headerNav__link_line_scroll:after {
  background-color: var(--grey-dark-primary);
}

@media (max-width: 1023px) {
  .headerNav {
    max-width: 570px;
    gap: 12px;
  }
  .headerNav__link {
    font-size: 13px;
  }
}

@media (max-width: 767px) {
  .headerNav {
    flex-direction: column;
  }
  .headerNav__link {
    font-family: 'CormorantGaramond-Medium';
    font-size: 24px;
  }
}
</style>
