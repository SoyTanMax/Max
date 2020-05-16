<template>
    <nav class="navbar is-transparent">
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
          <span class="has-text-white"></span>
          <span class="has-text-white"></span>
          <span class="has-text-white"></span>
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
    
    body{
        margin: 0;
    }
    li {
        list-style: none;
        color: white;
        margin: 0 24px;
    }
    .navbar-brand{
        padding-left: 48px;
    }
    .logo{
        font-family: 'Nunito', sans-serif;
    }
    .navbar-menu{
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        padding-right: 48px;
    }
    @media (max-width: 1023px){

        .navbar-menu{
            position: fixed;
            width: 100%;
            background-color: hsl(194, 27%, 38%);
            height: 100%;
        }
        li{
            text-align: center;
            font-size: 28px;
        }
        .navbar-menu li{
            margin: 48px 0;
        }
        .navbar-brand{
            padding: 0;
        }
        .navbar-menu{
            padding: 0;
        }
    }
</style>