// plugins/aos.client.ts

import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  // eslint-disable-next-line new-cap
  nuxtApp.AOS = new AOS.init({})
})
