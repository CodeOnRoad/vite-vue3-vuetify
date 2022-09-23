import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ id: 0, name: '' }),
  getters: {
    getId: state => state.id,
    getName: state => state.name,
  },
  actions: {
    setName(newName: any) {
      this.name = newName
    },
  },
})
