<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Instrumentos de medición y verificación
    
    .row.justify-content-center.align-items-center.gx-0.mb-4
      .col-lg-6.order-2.order-lg-1
        .tarjeta.tarjeta--azulRey
          .px-5
                  
            figure.mb-4
              img.mt-0(src="@/assets/curso/tema1/comilla.svg", alt="imagen ambiental", style="width: 70px;")
                  
            p.text-white.text-center.mb-4 Plantea que los instrumentos de medición son herramientas necesarias para garantizar la calidad de los productos ya sea por medición, verificación o control; es importante identificar si los instrumentos de verificación cumplen con los parámetros establecidos. 
            .floatRight.pb-5.justify-content-center
              p.pe-3.mb-0.text-white Romero Alvarado (2018) 
              i.fas.fa-square.cac(style='color: #FFA726')
      .col-10.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(style='background-color: #f6f6f6')
        figure
          img.m-auto(src="@/assets/curso/tema2/img1.svg", alt="imagen ambiental", style="width: 457px")
    


    #base.row.justify-content-center.align-items-center.pb-lg-5.mb-5
      .col-9.col-lg-4.mb-4.mb-lg-0
        figure
          img.m-auto(src="@/assets/curso/tema2/img2.jpg", alt="imagen ambiental", style="width: 415px")
          
      .col-lg-8
        p.mb-4 Los instrumentos de verificación son formatos de control que se elaboran con el fin de registrar mediciones o el cumplimiento total o parcial de tareas, acciones, funciones o el desempeño de una actividad en particular, bien sea de un sistema, un funcionario, un proceso o procedimiento.
        p.mb-5 Existen varios instrumentos de verificación como son:
        .row.justify-content-evenly.mb-0
          .col-auto
            a.indicador__container(@click="goToElement('1')" @mouseover="mostrarIndicador = false")
              figure.mb-4.mb-lg-0(data-aos="zoom-in") 
                img(src='@/assets/curso/tema2/link1.svg', style='width:340px;')          
              .indicador--click(v-if="mostrarIndicador")
          .col-auto
            a.indicador__container(@click="goToElement('2')" @mouseover="mostrarIndicador = false")
              figure.mb-4.mb-lg-0(data-aos="zoom-in") 
                img(src='@/assets/curso/tema2/link2.svg', style='width:340px;') 
              .indicador--click(v-if="mostrarIndicador")

    .row.justify-content-center.mb-4
      .col-12.col-md-12
        #1.row.justify-content-between.mb-4
          .col.col-lg-3.align-self-center
            .p-3.pe-lg-5(style='background: linear-gradient(to right, #4DD0E1, #039BE5);')
              h3.mb-0.text-white Lista de chequeo
          .col-auto.align-self-center
            a(@click="goToElement('base')" @mouseover="mostrarIndicador = false")
              figure
                img.mx-auto(src='@/assets/curso/tema2/up.svg' alt='Imagen relacionada' style='width:65px')
              .indicador--click(v-if="mostrarIndicador")

    p.mb-4 En la siguiente video clase presentamos aspectos a tener en cuenta para la elaboración de una lista de chequeo:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

    h4.mb-5 Pasos para elaborar una lista de chequeo adecuada:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-primario--borde.p-4(titulo="Determinar el ámbito")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.order-lg-1
            h3 Determinar el ámbito y la información que se desea evaluar u obtener
            p.mb-0
              b Según (Bichachi, 2004). 
              b-none Se debe tener en cuenta el lugar, necesidades tecnológicas, tipo de organización en la cual se aplica el instrumento, se deben realizar un análisis de las características de los procesos y procedimientos, enfocándose en la parte específica que se necesita analizar, esto es importante cuando la compañía cuenta con varias sedes.
          .col-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/tema2/img3.svg' alt='Imagen relacionada' style='width: 282px')
              
      .tarjeta.color-primario--borde.p-4(titulo="Diseñar el formato")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.order-lg-1
            h3 Diseñar el formato de verificación
            p.mb-0 Seleccionar un nombre claro para identificar para qué sirve este instrumento. Ejemplo: Lista de chequeo 
              b “Verificación de actualización de equipos de cómputo”. 
              b-none También escribir las categorías o posibles variables en la información que se espera encontrar estableciendo la escala de incidencias.  Se debe diseñar una cuadrícula para asegurarse de que todas las partes del checklist estén claramente descritas. Esta herramienta busca quitar problemas y que se obtenga un formato claro y fácil de usar, entre más básico, mejor.
          .col-9.col-lg-4.order-1.order-lg-2
            figure
              img.mx-auto(src='@/assets/curso/tema2/img4.svg' alt='Imagen relacionada' style='width: 320px')
              
      .tarjeta.color-primario--borde.p-4(titulo="Diligenciar la información ")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.order-lg-1
            h3 Diligenciar la información en el formato de verificación
            p.mb-0 Es fundamental capacitar al encargado de recopilar los datos en cuanto a la información que se necesita y de cómo debe ser el trato con las personas que hacen parte de este proceso, se debe tomar el tiempo necesario para diligenciar los formatos ya que el recolectar esta información en ciertos casos requiere de mucho tiempo.
          .col-9.col-lg-4.order-1.order-lg-2
            figure
              img.mx-auto(src='@/assets/curso/tema2/img5.svg' alt='Imagen relacionada' style='width: 290px')
              
      .tarjeta.color-primario--borde.p-4(titulo="Registrar la información")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.order-lg-1
            h3 Registrar la información en una base de datos
            p.mb-0 Compilar la información en una hoja de cálculo es fundamental para el tratamiento de la información ya que así obtenemos resultados exactos y estadísticos.
          .col-9.col-lg-4.order-1.order-lg-2
            figure
              img.mx-auto(src='@/assets/curso/tema2/img6.svg' alt='Imagen relacionada' style='width: 270px')
              
          

    .row.justify-content-center.fondo-negativo.mb-5
      .col-lg-12
        .row.justify-content-center.mb-5(style='background: linear-gradient(to right, #4DD0E1, #039BE5);')
          .col-auto
            .p-4
              h3.text-white.mb-0 Que debemos tener en cuenta al momento de verificar este proceso:
              
        .row.justify-content-evenly.align-self-center.mb-5.px-lg-5
          .col-9.col-lg-3.mb-4.mb-lg-0
            figure
              img.mx-auto(src='@/assets/curso/tema2/img7.svg' alt='Imagen relacionada' style='width: 330px')
              
          .col-lg-6
            ul.lista-ul.mb-0
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 ¿Tenemos en una lista  toda la información que necesitamos?
                  
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 ¿Se han seguido los procesos?
                  
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 ¿Las métricas, rangos, tiempos, procesos, etc. se encuentran dentro de las tolerancias planeadas?
                  
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 ¿Se ha diligenciado el formato de manera correcta?
                  
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 ¿Hay observaciones que realizar?
                  
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 ¿Hubo acceso a toda la información que se necesitaba?
                  
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 ¿El o los productos cumplen con las especificaciones?
                  
              li 
                i.fas.fa-layer-group(style='color: #039BE5')
                p.mb-0 ¿El producto final es conforme?
                  

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5
          span #[strong Tabla 1.] Lista de chequeo
            
        .tabla-b.color-secundario.mb-5
          .tabla-b__header
            h5.mb-0 Lista de Chequeo Módulo de Registro de Usuarios
          table
            tr(style='background-color: #4DD0E1; color:#fff;')
              td(style='width: 8%;') 
              td(style='width: 40%; border-right: 2px solid #e8e8e8')  
                b Criterio o Actividad
              td(style='border-right: 2px solid #e8e8e8') 
                b Cumple
              td(style='border-right: 2px solid #e8e8e8') 
                b No cumple
              td 
                b No aplica
                
            tr
              td(style='background-color: #12263F; color: #fff;') 
                b 1
              td(style='border-right: 2px solid #e8e8e8')  ¿El tiempo de respuesta en los procesos es el esperado?
              td(style='border-right: 2px solid #e8e8e8') 
              td(style='border-right: 2px solid #e8e8e8')
              td 
                
            tr
              td(style='background-color: #12263F; color: #fff;') 
                b 2
              td(style='border-right: 2px solid #e8e8e8') ¿Se especifican los criterios de seguridad en el sistema?
              td(style='border-right: 2px solid #e8e8e8') 
              td(style='border-right: 2px solid #e8e8e8')
              td 
                
            tr
              td(style='background-color: #12263F; color: #fff;')
                b 3
              td(style='border-right: 2px solid #e8e8e8') ¿El proceso está cuantificado en cantidad de usuarios y ancho de banda?
              td(style='border-right: 2px solid #e8e8e8') 
              td(style='border-right: 2px solid #e8e8e8')
              td 
                
            tr
              td(style='background-color: #12263F; color: #fff;') 
                b 4
              td(style='border-right: 2px solid #e8e8e8') ¿Se especificaron posibles fallas en el sistema?
              td(style='border-right: 2px solid #e8e8e8') 
              td(style='border-right: 2px solid #e8e8e8')
              td 
                
            tr
              td(style='background-color: #12263F; color: #fff;') 
                b 5
              td(style='border-right: 2px solid #e8e8e8') ¿Se definieron contingencias a posibles fallas?
              td(style='border-right: 2px solid #e8e8e8') 
              td(style='border-right: 2px solid #e8e8e8')
              td 
                
            tr
              td(style='background-color: #12263F; color: #fff;') 
                b 6
              td(style='border-right: 2px solid #e8e8e8') ¿Hay estrategias de detección de errores en el sistema?
              td(style='border-right: 2px solid #e8e8e8') 
              td(style='border-right: 2px solid #e8e8e8')
              td 
                
            tr
              td(style='background-color: #12263F; color: #fff;') 
                b 7
              td(style='border-right: 2px solid #e8e8e8') ¿Se especifican requisitos mínimos de <em>hardware</em> para la implementación del sistema?
              td(style='border-right: 2px solid #e8e8e8') 
              td(style='border-right: 2px solid #e8e8e8')
              td 
                



    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          span #[strong Tabla 2.] Observaciones
            
        .tabla-b.color-secundario.mb-5
          table
            tr(style='background-color: #4DD0E1; color:#fff;')
              td(style='width: 22%; border-right: 1px solid #AFAFAF') 
                b Número de criterio
              td.text-center 
                b Observación
              
            tr
              td(style='border-right: 1px solid #AFAFAF') 
                b 3
              td
                b Este proceso presenta variaciones dependiendo del <em>hardware</em> que se utilice
            tr
              td(style='border-right: 1px solid #AFAFAF') 
              td
                
            tr
              td(style='border-right: 1px solid #AFAFAF') 
              td
                
            
                

    .row.justify-content-center.mb-4.mb-lg-5
      .col-sm-2.col-md-12
        hr


    .row.justify-content-center.mb-4
      .col-12.col-md-12
        #2.row.justify-content-between.mb-4
          .col.col-lg-4.align-self-center
            .p-3.pe-lg-5(style='background: linear-gradient(to right, #4DD0E1, #039BE5);')
              h3.mb-0.text-white Cálculo de métricas de <em>software</em>
          .col-auto.align-self-center
            a(@click="goToElement('base')" @mouseover="mostrarIndicador = false")
              figure
                img.mx-auto(src='@/assets/curso/tema2/up.svg' alt='Imagen relacionada' style='width:65px')
              .indicador--click(v-if="mostrarIndicador")


    p.mb-5 La ingeniería del <em>software</em> tiene como objetivo producir un sistema de óptima calidad.  Para lograr este objetivo, se debe usar métodos efectivos junto con herramientas y aplicaciones actuales. Al mismo tiempo, un buen desarrollador debe medir si la calidad se va a cumplir en todo aspecto.


    .row.justify-content-center.align-items-center.gx-0.mb-5
      .col-lg-6.order-2.order-lg-1
        .tarjeta.tarjeta--azulRey
          .px-5
                  
            figure.mb-4
              img.mt-0(src="@/assets/curso/tema1/comilla.svg", alt="imagen ambiental", style="width: 70px;")
                  
            p.text-white.text-center.mb-4 “La definición estándar de calidad en ISO-8402 es “La totalidad de rasgos y características de un producto, proceso o servicio que sostiene la habilidad de satisfacer estados o necesidades implícitas".(p.73).
            .floatRight.pb-5.justify-content-center
              p.pe-3.mb-0.text-white Según (López Bartolomé, 2014)
              i.fas.fa-square.cac(style='color: #FFA726')
      .col-10.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(style='background-color: #f6f6f6')
        figure
          img.m-auto(src="@/assets/curso/tema2/img8.svg", alt="imagen ambiental", style="width: 457px")
    
        


    .row.justify-content-center.align-items-center.fondo2.mb-5
      .col-lg-12.px-md-5
        .row.justify-content-center.align-items-center.mb-5.pt-5
          p.mb-0 (Pereira y otros, 2012). Refiere que la calidad de una solución de <em>software</em> o aplicación es tan buena como los requisitos que la detallan y las mediciones que evalúan los siguientes aspectos.
          
        .row.justify-content-center.align-items-center
          .col-auto.mb-4
            .tarjeta--sencilla.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/icon1.svg', alt='icono-avatar')
              h3.text-center Requisitos
              
          .col-auto.mb-4
            .tarjeta--sencilla.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/icon2.svg', alt='icono-avatar')
              h3.text-center Análisis
              
          .col-auto.mb-4
            .tarjeta--sencilla.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/icon3.svg', alt='icono-avatar')
              h3.text-center Modelos de diseño
              
          .col-auto.mb-4
            .tarjeta--sencilla.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/icon4.svg', alt='icono-avatar')
              h3.text-center Código fuente
              
          .col-auto.mb-4
            .tarjeta--sencilla.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/icon5.svg', alt='icono-avatar')
              h3.text-center Casos de prueba 
              


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img9.jpg', alt='imagen ambiental', style=' width: 430px').m-auto
      .col-lg-8
        p.mb-4 Para obtener estas métricas de calidad, el desarrollador debe usar medidas técnicas, que evalúan la calidad con objetividad, y los errores y defectos. 
        .cajon.color-acento-contenido.p-4
          p.mb-0 El mismo autor afirma que las métricas que provienen de estas medidas proporcionan una indicación de la efectividad de las actividades de control, de calidad, errores detectados, arrojando una visión profunda de la eficacia de cada una de las actividades evaluadas en la métrica. A continuación, se presenta los factores y categorización de los factores en el desarrollo de <em>software</em>:


    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Factores calidad de <em>software</em>")
        .row.justify-content-evenly.align-items-center
          .col-11.col-md-5.order-2.order-lg-1
            h3 Factores calidad de <em>software</em>
            p.mb-4 Los factores que hacen variable la calidad del <em>software</em> se pueden categorizar en dos grandes grupos:
            .row.justify-content-center
              .col-lg-10
                ul.lista-ul.mb-0
                  li 
                    i.fas.fa-layer-group(style='color: #039BE5')
                    p.mb-0 Factores que se miden directamente como son los defectos por puntos de función.
                  li 
                    i.fas.fa-layer-group(style='color: #039BE5')
                    p.mb-0 Factores que se miden indirectamente como son: facilidad de uso o de mantenimiento.
                  
          .col-10.col-md-5.mb-4.mb-md-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema2/img10.svg', alt='imagen ambiental', style='wisth: 459px;').m-auto
              
      .py-3.py-md-4(titulo="Categorización factores")
        .row.justify-content-evenly.align-items-center
          .col-11.col-md-5.order-2.order-lg-2
            h3 Categorización factores
            p.mb-4 McCall planteó una categorización de factores que perturban la calidad de <em>software</em>, donde se enfocan en tres aspectos relevantes de una solución de <em>software</em> que son: 
              
            .row.justify-content-center
              .col-lg-10
                ul.lista-ul.mb-0
                  li 
                    i.fas.fa-layer-group(style='color: #039BE5')
                    p.mb-0 Características operativas.
                  li 
                    i.fas.fa-layer-group(style='color: #039BE5')
                    p.mb-0 Capacidad de cambio.
                  li 
                    i.fas.fa-layer-group(style='color: #039BE5')
                    p.mb-0 Adaptabilidad a nuevos entornos.
              
          .col-10.col-md-5.mb-4.mb-md-0.order-1.order-lg-1
            figure
              img(src='@/assets/curso/tema2/img11.svg', alt='imagen ambiental', style='wisth: 459px;').m-auto
              


    .contenedor-total.mb-5
      figure
        img.mx-auto(src='@/assets/curso/tema2/img12.jpg' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.justify-content-center
          .col-auto
            p.mb-0.px-3.text-center.text-white Pérez Quintero (2019): recomienda presentar el esquema de puntuación desarrollado por McCall como una escala donde se emplean las siguientes métricas con los siguientes criterios: 
            
        

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          span Tabla de métricas de <em>software McCall</em>
          
        //.tabla-b.color-secundario.mb-5
          .tabla-b__header
            h5.mb-0 MÉTRICA DE CALIDAD DEL SOFTWARE
          table
        .tabla-a.color-secundario.mb-5 
          table
            caption Nota. McCall
            thead
              th.text-white.p-3(colspan="17", style="background-color: #12263F" ) 
                h3.mb-0 MÉTRICA DE CALIDAD DEL <em>SOFTWARE</em>
        
            tbody
              
              tr(style='background-color: #4DD0E1; color:#fff;')
                td.text-center(colspan='6') 
                  b FACTOR DE CALIDAD
                td.verticalText
                  b Corrección
                td.verticalText
                  b Fiabilidad
                td.verticalText
                  b Eficiencia
                td.verticalText
                  b Integridad
                td.verticalText
                  b Mantenimiento
                td.verticalText
                  b Flexibilidad
                td.verticalText
                  b Capacidad de pruebas
                td.verticalText
                  b Portabilidad
                td.verticalText
                  b Reusabilidad
                td.verticalText
                  b  Interoperabilidad
                td.verticalText
                  b Usabilidad
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 1
                td(colspan='5') Facilidad de auditor&iacute;a:  
                td
                td
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 2
                td(colspan='5') Exactitud:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 3
                td(colspan='5') Estandarizaci&oacute;n de comunicaciones:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 4
                td(colspan='5') Complexi&oacute;n:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 5
                td(colspan='5') Concisi&oacute;n:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 6
                td(colspan='5') Consistencia:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 7
                td(colspan='5') Estandarizaci&oacute;n de datos.
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 8
                td(colspan='5') Tolerancia al error:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 9
                td(colspan='5') Eficiencia de ejecuci&oacute;n:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 10
                td(colspan='5') Capacidad de expansi&oacute;n.  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 11
                td(colspan='5') Generalidad:   
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 12
                td(colspan='5') Independencia del <em>hardware</em>:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 13
                td(colspan='5') Instrumentaci&oacute;n:  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 14
                td(colspan='5') Modularidad 
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 15
                td(colspan='5') Operatividad 
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 16
                td(colspan='5') Autodocumentaci&oacute;n    
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 17
                td(colspan='5') Simplicidad   
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 18
                td(colspan='5') Independencia del sistema  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 19
                td(colspan='5') Trazabilidad
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr.tr-bgcolor
                td.text-center(style='background-color: #12263F; color: #fff;') 
                  b 20
                td(colspan='5') Facilidad de formaci&oacute;n
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  

    p En el apartado del glosario se hace referencia al concepto de cada uno de los términos tratados en la tabla No 3. de métricas McCall.




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
  methods: {
    goToElement(id) {
      const ele = document.getElementById(id)
      window.scrollTo(ele.offsetLeft, ele.offsetTop + 100)
    },
  },
}
</script>

<style lang="sass"></style>
