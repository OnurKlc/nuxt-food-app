import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  foodData: [],
  cart: [],
})

export const getters = {
  totalPrice: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0)
  },
  totalItem: (state) => {
    if (!state.cart.length) return 0
    return state.cart.reduce((ac, next) => ac + +next.count, 0)
  },
}

export const mutations = {
  updateFoodData: (state, payload) => {
    state.foodData = payload
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4()
    state.cart.push(formOutput)
  },
}

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.foodData.length) return
    try {
      await fetch(
        'https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants',
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.AWS_API_KEY,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          commit('updateFoodData', data)
        })
    } catch (err) {
      console.log(err)
    }
  },
}
