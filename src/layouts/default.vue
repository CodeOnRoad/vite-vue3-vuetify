<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>VITE</v-app-bar-title>
      <div>
        <v-btn-group color="white" variant="flat">
          <v-btn to="/">
            Index
          </v-btn>
          <v-btn to="/about">
            About
          </v-btn>
          <v-btn to="/pinia">
            Pinia
          </v-btn>
        </v-btn-group>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
