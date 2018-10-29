<template>
<div class="registrarse">
    
    <p> crear una cuenta </p>
    <input type="text" v-model="email" placeholder="Correo"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button v-on:click="Registrarse"> Registrarse</button>
    <span> o <router-link to ="/login">regresar</router-link>. </span>
    </div>

</template>
    


<script>
import firebase from 'firebase';
export default {
    name: 'Registrarse',
    data: function() {
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        Registrarse: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function (user) {
                    alert('Cuenta creada con exito')
                },
                function (err){
                    alert('Pucha.' + err.message)
                }
            );
        }
    }

}
</script>

<style scoped>

.registrarse{
    margin-top: 40px;

}

input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
body {
    background-color: white;
    }


</style>

