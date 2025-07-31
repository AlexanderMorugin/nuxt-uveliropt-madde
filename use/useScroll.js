import { ref, onMounted, onUnmounted } from 'vue'

const isScroll = ref(false)

export function useScroll() {
  const handleScroll = () => {
    if (window.pageYOffset > 160) {
      isScroll.value = true
      return
    }

    isScroll.value = false
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScroll,
  }
}
