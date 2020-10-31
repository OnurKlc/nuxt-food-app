<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :data-source="foodData" />
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppRestaurantInfo from '@/components/AppRestaurantInfo'
import { mapState } from 'vuex'

export default {
  components: {
    AppHeader,
    AppRestaurantInfo,
  },
  computed: {
    ...mapState(['foodData']),
  },
}
</script>

<style></style>
