<template>
  <v-container>
    <v-card max-width="550" class="mx-auto my-12">
      <v-card-title>{{this.user}}</v-card-title>
      <v-card-text class="body-text">14 de Dezembro de 1996 (22 anos de idade)</v-card-text>
      <v-divider></v-divider>
      <v-card-text class="body-text">
        <ItemMedico icon="mdi-clipboard-text-outline" label="Observações Médicas"></ItemMedico>
        <ItemMedico icon="mdi-cancel" label="Alergias"></ItemMedico>
        <TipoSanguineo></TipoSanguineo>
        <ItemMedico icon="mdi-home-outline" label="Endereço"></ItemMedico>
        <ItemMedico icon="mdi-account-outline" label="Nome do responsável"></ItemMedico>
        <ItemMedico icon="mdi-phone-outline" label="Telefone do responsável"></ItemMedico>

      </v-card-text>
      <!-- <v-card-actions>
        <v-btn text>Click</v-btn>
      </v-card-actions> -->
    </v-card>
  </v-container>
</template>

<script>
import ItemMedico from './ItemMedico';
import TipoSanguineo from './TipoSanguineo';

export default {
  name: 'FichaMedica',
  components: {
    ItemMedico,
    TipoSanguineo
  },
  props: ['user'],
  data: () => ({
    //
  }),
}
</script>

<style>
.body-text {
  text-align: start;
}

.record-item {
  margin: 8px;
  flex-direction: row;
  display: flex;
}
</style>

