<template>
  <div class="home">
    <div class="hero is-fullheight" :style="{'background-image':'url(https://bit.ly/2Ar2jrT)'}">
      <div class="hero-head">
        <Navbar/>
      </div>
      <div class="hero-body">
        <img src="@/assets/photo.jpeg" width="192"/>
        <!-- <p class="logo has-text-white is-size-4">Hola, soy Max!</p> -->
        <p class="has-text-white is-size-5 has-text-centered">Desarrollador web y estudiante de la carrera de Business Informatics en el Tecnológico de Monterrey.</p>
        <router-link :to="{ name: 'Portfolio' }">
          <button class="button is-uppercase is-rounded is-size-6 has-text-weight-medium">Conoce mi trabajo</button>
        </router-link>
      </div>
    </div>
    <div class="box">
      <p class="is-size-4 has-text-centered has-text-weight-bold">Acerca de mi</p>
      <div class="columns is-multiline">
        <div v-for="(elemento, index) in elementos" class="column is-half" :key="index">
            <p class="title is-size-5"><i class="material-icons">{{ elemento.icon }}</i>{{ elemento.titulo }}</p>
            <p class="is-size-6">{{ elemento.descripcion }}</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        elementos: [
          {titulo: 'Quién soy?', descripcion: 'Mi nombre es Maximiliano López Fuentes, tengo 20 años y estudio la carrera de Ingeniería en Negocios y Tecnologías de la Información (INT) en el Tecnológico de Monterrey.', icon: 'account_circle'},
          {titulo: 'Experiencia Laboral', descripcion: 'He trabajado como Desarrollador de Front-End y Diseñador de la Experiencia del Usuario para la web, diseño y renovación de marcas, y producción de contenido para redes sociales.', icon: 'assignment'},
          {titulo: 'Conocimientos', descripcion: 'Soy un entusiasta de la tecnología y el diseño y desarrollo de software. Tengo conocimientos de desarrollo web con el framework de Javascript conocido como VueJs y Programación Orientada a Objetos con Python.', icon: 'explore'},
          {titulo: 'Pasatiempos', descripcion: 'Formo parte de la Asociación de Scouts de México y actualmente organizo un proyecto de viaje que se llevará a cabo en Irlanda en el verano de 2021.', icon: 'loyalty'}
        ] 
      }
    },
  }
</script>

<style scoped>
  .hero{
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }
  .hero-body{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .logo{
    font-family: 'Permanent Marker', cursive;
  }
  img {
    border-radius: 50%;
    margin: 24px auto;
  }
  p{
    font-family: 'Nunito', sans-serif;
    margin-top: 12px;
  }
  .button {
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    border: none;
    background-color: white;
    color: hsl(197, 70%, 32%);
    margin: 24px 0px;
    width: 210px;
    height: 56px;
    transition-duration: 500ms;
  }
  .button:hover{
    background-color: hsl(197, 70%, 32%);
    color: white;
  }
  .box{
    margin: -48px auto 48px;
    width: 75%;
    background-color: hsl(210, 24%, 98%);
  }
  .is-size-4 {
    padding-bottom: 24px;
  }
  .title{
    display: flex;
    align-items: center;
    color: hsl(197, 85%, 24%);
  }
  i {
    padding-right: 8px;
    color:hsl(197, 60%, 41%);
  }
  li{
    color: white;
    list-style: none;
  }
  @media (max-width: 1023px){
    .column{
      text-align: center;
    }
    .title{
      justify-content: center;
    }
  }
</style>