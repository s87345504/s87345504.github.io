import { computed, ref } from 'vue'
import { defineStore } from 'pinia'




export const useThemeStore = defineStore('themeStrore', () => {
  const _darkMedia = window.matchMedia('(prefers-color-scheme: dark)')
  const _isDark = localStorage.getItem('theme') === 'dark' || _darkMedia.matches
  
  const theme = ref(_isDark ? 'dark' : 'light')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', theme.value)
    window.$vc.setOption('theme', theme.value)
  }

  _darkMedia.addEventListener('change', (e) => {
    theme.value = e.matches ? 'dark' : 'light'
  })
  return { theme, toggleTheme }

})
