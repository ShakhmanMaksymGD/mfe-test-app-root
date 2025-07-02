<template>
    <v-navigation-drawer>
      <v-list-item title="Single SPA Vue"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="Overview" to="/"></v-list-item>
      <v-list-item link title="Monthly Planning" to="/monthly"></v-list-item>
      <v-list-item link title="Yearly Planning" to="/yearly"></v-list-item>
    </v-navigation-drawer>

      <v-container
        id="dashboard-container"
        fluid
      >
        <v-row>
          <slot />
        </v-row>
      </v-container>
</template>

<script setup>
</script>
