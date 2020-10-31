<template>
  <div>
    <pre>{{ currentItem }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['foodData']),
    currentItem() {
      let result

      for (let i = 0; i < this.foodData.length; i++) {
        for (let j = 0; j < this.foodData[i].menu.length; j++) {
          if (this.foodData[i].menu[j].id === this.id) {
            result = this.foodData[i].menu[j]
            break
          }
        }
      }

      return result
    },
  },
}
</script>

<style lang="scss" scoped></style>
