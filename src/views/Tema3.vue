<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Trazabilidad
    
    .row.justify-content-center.mb-5
      .col-lg-12.px-md-5.fondo-color
        .row.align-items-center.justify-content-center.mb-5
          .col-10.col-lg-5.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/img1.svg", alt="alt", style='width: 500px').m-auto
          .col-lg-7
            .bg--white.neg--left.mb-4.mt-4
              p.mb-0 Es uno de los temas trascendentales en el proceso de desarrollo de software ya que permite hacer un seguimiento riguroso al proyecto desde la idea básica hasta los entregable, Los modelos de trazabilidad facilitan que los desarrolladores realicen una correcta evaluación del costo e impacto de las posibles modificaciones en los modelos y código del software, ayudando a enlazar o relacionar los requisitos con otros elementos del ciclo de vida, principalmente, casos de prueba y código.
              
            p.mb-4 En la opinión de (Hernandez y otros, 2015): hay que tener en cuenta que el código que se implementa debe ser consecuente con los requisitos, se puede estimar con precisión   el esfuerzo que lleva implementar una petición de cambio sobre un requisito, hay que tener en cuenta que la trazabilidad debe ser bidireccional, de requisitos a código y código a requisitos. Para este fin se utiliza una matriz de trazabilidad de requerimientos lo cual asegura un total cumplimiento del proyecto.
              
            .cajon.color-acento-contenido.p-4
              p.mb-0 Para elaborar esta matriz hay que tener como insumo fundamental los requisitos de software, entre ellos encontramos:


    .row.justify-content-center.fondo3.mb-5
      .col-lg-12.px-md-5
        .row.align-items-center.justify-content-center.mb-5.pt-5
          .col-lg-7
            LineaTiempoD.color-primario
              p.mb-0(numero="1" titulo="Requisitos del negocio") Están asociados a objetivos de negocio y del proyecto.
              p.mb-0(numero="2" titulo="Requisitos de los interesados “stakeholders”")  Pueden ser puntuales, impactando sobre otras áreas de la organización. 
              p.mb-0(numero="3" titulo="Requisitos de soluciones") Pueden ser funcionales o no funcionales, tecnológicos, de cumplimiento de estándares, de apoyo y capacitación, de calidad o de presentación de informes. 
              p.mb-0(numero="4" titulo="Requisitos de transición") Representan la transferencia del producto a la parte operativa, es decir, se trata de informar y proveer del material necesario al personal que tenga que trabajar el producto final.
        
          .col-10.col-lg-5
            figure
              img(src="@/assets/curso/tema3/img2.svg", alt="imagen ambiental", style='width: 490px').m-auto
          
        .row.justify-content-center.mb-5.pt-4
          .col-auto
            .px-4.py-3(style='background: linear-gradient(to right, #039BE5,  #027FBC);')
              h4.mb-0.text-white ¿Cuál es la finalidad de elaborar una matriz de trazabilidad?
            
        .row.justify-content-center.mb-5
          .col-lg-9
            .row.justify-content-center
              .col-10.col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3/icon1.svg' alt='AvatarTop')
                  .tarjeta.bg-lineBottom(style='width: 100%; background-color: #fff; ')
                    .p-4
                      p.mb-4.mb-lg-0.text-center Ayuda a determinar las mejoras que se puede hacer en los procesos estimados basándose en las mejores prácticas CMMI.
                        
              .col-10.col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3/icon2.svg' alt='AvatarTop')
                  .tarjeta.bg-lineBottom(style='width: 100%; background-color: #fff; ')
                    .p-4
                      p.mb-4.mb-lg-0.text-center Para informar a las partes interesadas “stakeholders” de cómo van los procesos.
                        
              .col-10.col-md-6.col-lg.mb-5.mb-lg-0
                .tarjeta-avatar
                  img(src='@/assets/curso/tema3/icon3.svg' alt='AvatarTop')
                  .tarjeta.bg-lineBottom(style='width: 100%; background-color: #fff; ')
                    .p-4
                      p.mb-4.mb-lg-0.text-center Para cumplir con los requisitos contractuales.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/tema3/img3.jpg' alt='AvatarTop', style='width: 453px;').m-auto
      .col-lg-7
        .row.justify-content-start.mb-4
          .col-auto
            .px-4.py-3(style='background: linear-gradient(to right, #039BE5,  #027FBC);')
              h4.mb-0.text-white ¿Cómo elaboramos una matriz de trazabilidad? 
            
        p.mb-4 Tradicionalmente se puede hacer manualmente con lápiz y papel o en una hoja de cálculo, aquí se relacionan los requisitos y los objetivos que se plantearon, adicionalmente se acompaña de unos campos que aportan información y dan coherencia a esta relación.
        p.mb-4 Hoy en día existen programas de herramientas de gestión que ayudan a este fin como Redmine, Trac o similar, aunque hay un gran abanico y de uso libre en el mercado.
            
        .row.justify-content-start
          .col-auto
            .px-4.py-3(style='background: linear-gradient(to right, #039BE5,  #027FBC);')
              h4.mb-0.text-white Ejemplo de matriz de trazabilidad
          


    .row.justify-content-center.mb-5
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-4
          span Matriz de trazabilidad
          
          
        .tabla-a.color-secundario.mb-5
          table
            thead
              tr.text-white(style='background-color: #4DD0E1')
                th(style='width: 63px')
                  h4.mb-0 ID
                th(style='width: 27%')
                  h4.mb-0 Requisitos
                th 
                  h4.mb-0 tipo
                th 
                  h4.mb-0 Prioridad
                th 
                  h4.mb-0 Estado
                th(style='width: 12%') 
                  h4.mb-0 Objetivo
                th 
                  h4.mb-0 Funcionalidad
                th 
                  h4.mb-0 Entrega
            tbody
              tr.tr-bgcolor2
                td.text-center
                  h3.mb-0 1
                td
                  p El sistema recoge los siguientes datos:
                  ol.lista-ol
                    li 
                      span Nombre
                    li 
                      span Apellido
                    li 
                      span Cedula
                    li 
                      span correo
                    li 
                      span Dirección
                    li 
                      span teléfono
                    
                td Venta
                td Alta
                td Activo
                td Obtener datos del usuario
                td Registrar Modificar Eliminar
                td Entregado
              tr.tr-bgcolor2
                td.text-center
                  h3.mb-0 2
                td Los datos ser&aacute;n registrados por un usuario registrado en el sistema
                td Venta
                td Media
                td Activo
                td Garantizar la seguridad de la informaci&oacute;n
                td Registrar Modificar Eliminar
                td Pendiente
              tr.tr-bgcolor2
                td.text-center
                  h3.mb-0 3
                td
                  | El sistema recoger&aacute; los datos que el cliente va a adquirir con su c&oacute;digo de barras
                td Venta
                td Alta
                td Activo
                td mejorar el control de existencias de productos
                td Registrar Modificar Eliminar
                td Entregado
              tr.tr-bgcolor2
                td.text-center
                  h3.mb-0 4
                td El sistema validar&aacute; que los datos sean correctamente ingresados
                td Venta
                td Baja
                td Activo
                td validaciones
                td Registrar Modificar Eliminar
                td Pendiente
              tr.tr-bgcolor2
                td.text-center
                  h3.mb-0 5
                td
                  | El sistema ser&aacute; capaz de generar la factura con los datos ingresado haciendo la b&uacute;squeda en la base de datos
                td Facturaci&oacute;n
                td Alta
                td Activo
                td Agilizar el sistema de facturaci&oacute;n
                td Registrar Modificar Eliminar
                td Pendiente
              tr.tr-bgcolor2
                td.text-center
                  h3.mb-0 6
                td El sistema ser&aacute; capaz de atender un n&uacute;mero limitado de consultas o peticiones
                td Venta
                td Alta
                td Activo
                td control de sentencias SQL
                td Registrar Modificar Eliminar
                td Pendiente


    p.mb-4 En el siguiente mapa conceptual se resumen los conceptos vistos en este componente formativo:

    figure
      img(src="@/assets/curso/tema3/img4.svg", alt="alt", style='').m-auto








</template>

<script>
export default {
  name: 'Tema3',
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
