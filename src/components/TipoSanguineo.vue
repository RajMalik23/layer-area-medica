<template>
  <v-container>
    <v-row>
      <v-icon style="margin-right: 22px">mdi-water-outline</v-icon>
      <v-select :items="items" label="Tipo Sanguíneo"></v-select>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TipoSanguineo',

  data: () => ({
    items: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'H/H', 'desconhecido'],
  }),
}
</script>

<style>
</style>

