<template>
  <v-container>
    <v-row>
      <v-icon style="margin-right: 22px">{{this.icon}}</v-icon>
      <v-text-field v-bind:label="this.label"></v-text-field>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ItemMedico',
  props: ['label', 'icon'],
  data: () => ({
    //
  }),
}
</script>

<style>
</style>

