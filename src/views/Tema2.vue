<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tema2
    
    #t_2_1.titulo-segundo
      .h2 2.1 subti
    
    #t_2_2.titulo-segundo
      .h2 2.2 subti

    #t_2_3.titulo-segundo
      .h2 2.3 subti

    #t_2_4.titulo-segundo
      .h2 2.4 subti

    #t_2_5.titulo-segundo
      .h2 2.5 subti

    #t_2_6.titulo-segundo
      .h2 2.6 subti

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
