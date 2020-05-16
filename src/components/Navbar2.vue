<template>
    <nav class="navbar">
      <div class="navbar-brand">
          <div class="navbar-item">
            <router-link :to="{name: 'Home'}">
                <li class="is-size-5 is-uppercase logo"><strong>Max</strong>López</li>
            </router-link>
          </div>
          
        <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
            <ul class="navbar-item">
                <router-link :to="{ name: 'Portfolio'}">
                    <li>Portafolio</li>
                </router-link>
                <li>Blog</li>
            </ul>
        </div>
      </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                showNav: false
            }
        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    
    nav{
        box-shadow: 0px 0px 8px rgba(0,0,0,0.18);
    }
    body{
        margin: 0;
    }
    li {
        list-style: none;
        color: hsl(210, 20%, 37%);
        margin: 0 24px;
    }
    .logo{
        font-family: 'Nunito', sans-serif;
        color: hsl(197, 100%, 15%);
    }
    .navbar-menu{
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        padding-right: 48px;
    }
    span{
        color: hsl(197, 100%, 15%) !important;
    }
    @media (max-width: 1023px){

        .navbar-brand{
            padding: 0;
        }
        .navbar-menu{
            position: fixed;
            width: 100%;
            background-color: hsl(210, 38%, 97%);
            height: 100%;
            padding: 0;
        }
        li{
            text-align: center;
            font-size: 28px;
        }
        .navbar-menu li{
            margin: 48px 0;
        }
    }
</style>