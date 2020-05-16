<template>
    <div class="footer">
        <div class="section">
            <p class="is-size-4 has-text-centered has-text-weight-bold has-text-white">Contacto</p>
            <div class="contactButtons">
                <a href="https://wa.me/5218114880483">
                    <button class="button is-rounded">
                        <i class="fab fa-whatsapp"></i>
                        Whatsapp
                    </button>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=max.lopez.dev@gmail.com&su=Asunto&body=Mensaje">
                    <button class="button is-rounded">
                        <i class="fas fa-envelope-open-text"></i>
                        Gmail
                    </button>
                </a>
                <a href="https://github.com/SoyTanMax">
                    <button class="button is-rounded">
                        <i class="fab fa-github"></i>
                        Github
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .footer{
        padding: 0;
    }
    .is-size-4 {
        padding-bottom: 24px;
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
    .section{
        background-color: hsl(197, 100%, 15%);
    }
    .contactButtons{
        display: flex;
        justify-content: space-around;
        margin: 0 192px;
    }
    .section button{
        background-color: hsl(197, 60%, 41%);
        color: white;
        width: 168px;
        font-size: 20px;
        display: flex;
        justify-content:space-evenly;
    }
    .section button:hover{
        background-color: white;
        color: hsl(197, 60%, 41%);
    }
    @media (max-width: 1023px){
        .section{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .contactButtons{
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin: 0 auto;
        }
    }
</style>