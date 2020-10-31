<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/" exact><AppLogo /></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/restaurants" exact>Restaurants</nuxt-link>
      </li>
    </ul>
    <div v-if="totalItem && totalItem > 0" class="smallnum">
      {{ totalItem }}
    </div>
    <nuxt-link to="/cart" exact>Cart</nuxt-link>
  </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import { mapGetters } from 'vuex'

export default {
  components: {
    AppLogo,
  },
  computed: {
    ...mapGetters(['totalItem']),
  },
}
</script>

<style lang="scss" scoped></style>
