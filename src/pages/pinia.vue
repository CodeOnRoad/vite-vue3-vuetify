<script lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/userStore'

const userData = storeToRefs(useUserStore())
const { setName } = useUserStore()

export default {
  data() {
    return {
      userData,
      userName: '',
    }
  },

  methods: {
    test1(userName: string) {
      if (userName)
        setName(userName)
    },
  },
}
</script>

<template>
  <v-card>
    <v-card-title>Pinia: {{ userData.getName }}</v-card-title>
    <v-card-text>
      <v-text-field v-model="userName" />
    </v-card-text>
    <v-card-actions>
      <v-btn variant="tonal" @click="test1(userName)">
        Set new Username
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
