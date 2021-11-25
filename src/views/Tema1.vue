<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Informe de análisis
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1/img1.png", alt="alt", style='width: 616px').m-auto
      .col-lg-6
        .bg--grey.neg--left
          p.mb-0
            b(style='color: #FFA726;') Dorrego (1994): 
            b define que el informe de análisis son documentos en los cuales se plasma una serie de procesos de acuerdo a los requerimientos y objetivos a alcanzar, también conocidos como reporting y su fin es realizar un análisis exhaustivo del sistema que se desea desarrollar y el rendimiento de los procesos logrando influir directamente en la toma de decisiones. 
            b-none En el siguiente video se presenta algunos aspectos a tener en cuenta para el desarrollo de un informe de análisis:


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


    .row.justify-content-center.fondo1
      .col-lg-12.px-md-5
          
        .row.justify-content-center.mb-5
          .cajon.color-acento-contenido.p-4.mb-lg-4
            p.mb-0 Es importante tener en cuenta la información obtenida y como punto de partida el informe de requisitos de <em>software</em> para generar una óptima validación de documentos.
          
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.mb-4.mb-lg-0.p-lg-4
            h4 Proceso de búsqueda de la información evaluación y síntesis de las fuentes
            p.mb-0 Al momento de realizar un informe el principal elemento de trabajo es la información que tenemos o hemos recolectado para tal fin, esta información debe ser confiable, objetiva, precisa y actualizada; Aquí se busca evaluar la calidad de las fuentes como son seguimientos, pruebas, historias de usuario, listas de chequeo, y en este caso específico el Informe de requerimientos de software. En las siguientes diapositivas se presenta la definición de sistemas de información y las fuentes de esos sistemas de información: 
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1/img2.png", alt="alt", style='width: 450px').m-auto
            
            
        .row.justify-content-center.align-items-center.mb-5
          .fondo-slider
            SlyderA(tipo="b").pt-5
              .row.justify-content-center.align-items-center
                .col-11.col-md-5.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img3.svg', alt='imagen ambiental', style='width: 370px;').m-auto
              
                .col-10.col-md-5
                  h4.mb-4 Fuentes de información
                  p.mb-0 Son todos aquellos medios de los cuales procede la información, que satisfacen las necesidades de conocimiento de una situación o problema presentado, que posteriormente será utilizado para lograr los objetivos esperados.  De acuerdo a su origen se clasifican en: fuentes primarias y fuentes secundarias.
                    
              .row.justify-content-center.align-items-center
                .col-11.col-md-5.mb-4.mb-md-0
                  h4.mb-4 Según (Torres y otros 2019): 
                  p.mb-0 Las fuentes primarias son aquellas en las que los datos provienen directamente del objeto de estudio, mientras que las fuentes secundarias son aquellas que parten de datos pre elaborados, como pueden ser datos obtenidos de otros proyectos, de Internet, de medios de comunicación”.(p.03)
              
                .col-10.col-md-5
                  figure
                    img(src='@/assets/curso/tema1/img4.svg', alt='imagen ambiental', style='width: 408px;').m-auto
                    
              .row.justify-content-center.align-items-center
                .col-11.col-md-5.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img5.svg', alt='imagen ambiental', style='width: 370px;').m-auto
              
                .col-10.col-md-5
                  h4.mb-4 A su vez las fuentes primarias pueden subdividirse en:
                  .row.justify-content-center
                    .col-10
                      ul.lista-ul
                        li 
                          i.fas.fa-layer-group(style='color: #039BE5')
                          | Observación indirecta.
                  p.mb-0 Cuando el investigador toma directamente los datos de la población, sin necesidad de cuestionarios, entrevistadores. Por ejemplo, cuando un profesor realiza un estudio sobre el avance de sus estudiantes en una materia.
                    
              .row.justify-content-center.align-items-center
                .col-11.col-md-5.mb-4.mb-md-0
                  h4.mb-4 A su vez las fuentes primarias pueden subdividirse en:
                  .row.justify-content-center
                    .col-10
                      ul.lista-ul
                        li 
                          i.fas.fa-layer-group(style='color: #039BE5')
                          | Observación directa.
                  p.mb-0 Cuando los datos no son obtenidos directamente, sino por medio de un cuestionario, lista de chequeo u otra fuente.
              
                .col-10.col-md-5
                  figure
                    img(src='@/assets/curso/tema1/img6.svg', alt='imagen ambiental', style='width: 408px;').m-auto
                    


    .row.justify-content-center.fondo1.mb-5
      .col-lg-12.px-md-5
        .row.justify-content-center.align-items-center.pb-lg-5.mb-5
          .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img7.svg', alt='imagen ambiental', style='width: 345px;').m-auto
          .col-lg-7
            p.mb-4 Las fuentes primarias se adquieren por medio de una investigación directa al objeto de estudio, por métodos establecidos con anticipación. Para reunir datos primarios, lo ideal es recurrir a un plan.
            .cajon.color-acento-contenido.p-4.mb-4
              p.mb-0 Las fuentes secundarias para ser utilizadas deben ser detalladas con cuatro preguntas básicas que son: ¿Es pertinente?, ¿Es obsoleta?, ¿Es fidedigna?, ¿Es digna de confianza? 
            p.mb-0 En el siguiente esquema se resume de forma general la forma en que se estructuran los sistemas de información:
            
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .row
              .col-lg-11
                .titulo-sexto.color-acento-contenido.mb-5
                  span Sistemas de información
                  
                figure
                  img(src='@/assets/curso/tema1/conceptual1.svg', alt='sistemas de informacion', style='').m-auto

    .contenedor-total.mb-5
      figure
        img.mx-auto(src='@/assets/curso/tema1/img8.jpg' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.justify-content-center
          .col-auto
            p.mb-3.text-center.text-white Un Informe se debe estructurar de la siguiente manera:
            p.mb-0.text-center
              b.text-white Resumen de no más de 200 palabras describiendo los objetivos y motivación del trabajo.
        

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Introducción")
        .col-lg-12
          .row.justify-content-center.mb-4
            .col-lg-11
              p.mb-0 De acuerdo con (Acosta Hoyos, 1972) una introducción no debe contener más de 2 páginas, se debe detallar el ámbito, objetivos y resultados del trabajo, este debe contener:
            
          .row.justify-content-center.mb-4
            .crd.crd--topLine.m-1
              img(src="@/assets/curso/tema1/icon1.svg", alt="alt", style="width: 85px;").m-auto.mb-2
              h4.text-center Contexto
              p.text-center Descripción del ámbito del trabajo. Definiciones generales, longitud máxima de 200 palabras.
              
            .crd.crd--topLine.crd--topLine_green.m-1
              img(src="@/assets/curso/tema1/icon2.svg", alt="alt", style="width: 85px;").m-auto.mb-2
              h4.text-center Motivación
              p.text-center Porque es relevante dicho trabajo (usar referencias).
              
            .crd.crd--topLine.m-1
              img(src="@/assets/curso/tema1/icon3.svg", alt="alt", style="width: 85px;").m-auto.mb-2
              h4.text-center Tema del documento
              p.text-center  Sobre qué parte específica del trabajo trata este documento.
              
            .crd.crd--topLine.crd--topLine_green.m-1
              img(src="@/assets/curso/tema1/icon4.svg", alt="alt", style="width: 85px;").m-auto.mb-2
              h4.text-center Objetivo
              p.text-center Cuál es el objetivo de este documento. NOTA: en las Conclusiones: debemos argumentar como hemos cubierto nuestros objetivos.
              
            .crd.crd--topLine.m-1
              img(src="@/assets/curso/tema1/icon5.svg", alt="alt", style="width: 85px;").m-auto.mb-2
              h4.text-center Metodología
              p.text-center Breve resumen del procedimiento seguido para elaborar el trabajo.
              
        
      .row(titulo="Contenido")
        .col-lg-12
          .row.justify-content-center.mb-4
            .col-lg-11
              p.mb-4 Tantas secciones como hagan falta para explicar los contenidos técnicos del trabajo, lo puedes ilustrar con imágenes y esquemas si es considerado necesario.
              p.mb-0 Uno de los componentes medulares del contenido es la redacción, aquí debemos tener en cuenta:
            
          .row.justify-content-center.align-items-center.mb-4
            .col-8.col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img9.svg", alt="imagen ambiental", style="width: 415px;").m-auto
            .col-lg-7
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 1]
                  p.mb-0 
                    b Ordena tus ideas: 
                    b-none  lo importante es tener claro qué es lo que se quiere expresar y cómo lo quieres decir antes de iniciar a escribir. Para ello haz un esquema con las principales ideas.
                      
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 2]
                  p.mb-0 
                    b Usa frases cortas: 
                    b-none al momento de plasmar nuestras ideas debemos ser directos y concisos, así logramos que los lectores entiendan el mensaje.
                      
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 3]
                  p.mb-0 
                    b Adjetivos: 
                    b-none  cuando se usan bien enriquecen el texto y ayudan a describir de manera óptima una idea, se recomienda no excederse en ellos para no saturar el texto.
                      
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 4]
                  p.mb-0 
                    b Revisar el texto: 
                    b-none es recomendable leer el texto varias veces ya que al hacerlo de manera constante podemos corregir errores y enriquecer el documento, se recomienda esta actualizado en cuanto al lenguaje técnico.
                      
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 5]
                  p.mb-0 
                    b No se debe escribir como hablas: 
                    b-none la elaboración de la redacción difiere mucho del lenguaje hablado por lo cual no debemos seguir el patrón de una conversación, cuando estamos redactando debemos estructurar el texto de la siguiente manera (sujeto, predicado y complementos) expresando de manera concreta la idea principal.
                      
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 6]
                  p.mb-0 
                    b Usa puntos y comas: 
                    b-none es indispensable para expresarnos de manera correcta, dando fluidez al discurso escrito, permitiendo que el lector pueda disfrutar y comprender el texto.
                      
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-11
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong 7]
                  p.mb-0 
                    b Conclusiones y Resultados: 
                    b-none  las conclusiones de un informe son el producto de la investigación y el análisis del tema que se trató, aquí se expone los resultados obtenidos, esta debe tener unas características como son: 
              .row.justify-content-center.align-items-center
                .col-lg-5.order-2.order-lg-1
                  ul.lista-ul.mb-0
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 Un resumen del texto que aporta una perspectiva general del contenido.
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 Debe ser reflexiva sobre el tema tratado.
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 Debe expresar de manera clara los resultados obtenidos en la investigación.
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 Se debe utilizar un lenguaje formal.
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 Hay que evitar redundancias.
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 Los resultados deben ser explícitos y concretos.
                .col-10.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema1/img10.svg", alt="imagen ambiental", style="width: 330px;").m-auto

          
      .row(titulo="Metodología")
        .col-lg-12
          .row.justify-content-center.mb-4
            .col-lg-11
              p.mb-0 Es la descripción del proceso seguido para la elaboración del trabajo, es decir se explica el diseño de la investigación como: hipótesis, variables, tipo de estudio, diseño utilizado, instrumentos de recolección de información, muestreo y procedimientos.
              
          .row.justify-content-center.align-items-center.mb-4
            .col-10.col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img11.svg", alt="imagen ambiental", style="width: 370px;").m-auto
            .col-lg-7
              p.mb-4 El mismo autor afirma que la metodología de investigación tecnológica nos brinda las pautas para resolver problemas de la realidad y tiene base empírica porque aplica los conocimientos teóricos de la ciencia a la práctica, adoptando el método experimental en la solución de los problemas en forma sistémica.
              p.mb-4 El tipo de investigación es tecnológico porque busca resolver un problema práctico para satisfacer las necesidades de una solución de <em>software</em>. 
              .cajon.color-acento-botones.p-4.mb-3
                p.mb-0 Hipótesis, según Pájaro (2002): se tienen dos grandes vías a partir de las cuales se descubren hipótesis y por lo tanto se formulan o redactan: 
              .row.justify-content-center
                .col-11
                  ul.lista-ul.mb-0
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 A partir de la razón (razonando).
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 A partir de la experiencia, usando la inducción.
              
          .row.justify-content-center.mb-4
            .col-lg-11
              p.mb-4 En ambos casos es importante recalcar que el programador ha tenido una etapa previa de observación y acumulación de datos relacionados con el problema de la naturaleza que está investigando; por lo que la tradición científica permite desprender al menos tres procedimientos que llevan a la formulación de hipótesis, los cuales son:
              .row.justify-content-center.mb-4
                .col-11
                  ul.lista-ul
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 La información respecto a la observación de un fenómeno es tan clara que conduce fácilmente a una hipótesis.
                      
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 El programador tiene una serie de convicciones o prejuicios filosóficos, producto de una gran experiencia en torno al problema que aborda. Lo cual lo conduce fácilmente a una hipótesis.
                      
                    li 
                      i.fas.fa-layer-group(style='color: #039BE5')
                      p.mb-0 Una analogía, con relación al problema de interés podrá conducir a la hipótesis buscada.
                      
          .row.justify-content-center.mb-4
            .col-lg-11
              h4.mb-4 Espinoza Montez (2018), afirma que: 
              .tarjeta.tarjeta--azulRey
                .px-5
                  
                  figure.mb-4
                    img.mt-0(src="@/assets/curso/tema1/comilla.svg", alt="imagen ambiental", style="width: 70px;")
                  
                  p.text-white.mb-4 Las variables son factores que intervienen tanto como causa o como resultado dentro del proceso o fenómeno de la realidad formando parte esencial de la estructura del tema, Las variables intervienen como causa o como efecto en el proceso investigativo, estas quedan identificadas desde el momento en que se define el problema. (p.92)
                  .floatRight.pb-5
                    i.fas.fa-square.cac(style='color: #FFA726')
                  









  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
