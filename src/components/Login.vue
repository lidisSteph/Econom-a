<template>
    

<body style="background-color: #666666;">
	
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
				<div class="logo">
					<center>
						<img src="images/logoA1.png">
					</center>
				</div>
					<span class="login100-form-title p-b-43">
						Inicio sesión
					</span>
					
					
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email">
						<span class="focus-input100"></span>
						<span class="label-input100">Correo Electronico</span>
					</div>
					
					
					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" name="pass">
						<span class="focus-input100"></span>
						<span class="label-input100">Contraseña</span>
					</div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
							<label class="label-checkbox100" for="ckb1">
								Recuérdame
							</label>
						</div>

						<div>
							<a href="#" class="txt1">
								Olvidaste tu contraseña
							</a>
                            <a>
                                <router-link to="/registrarse">Registrate</router-link>
                            </a>

						</div>
					</div>
			

					<div class="container-login100-form-btn">
						<button class="login100-form-btn" role="link" v-on:click ="login">
							Inicia sesión
						</button>
					</div>
					
					<div class="text-center p-t-46 p-b-20">
						<span class="txt2">
							- ó -
						</span>
					</div>

					<div class="login100-form-social flex-c-m">
						<a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
							<i class="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
				</form>

				<div class="login100-more" style="background-image: url('images/fondo_sesion.gif');">
				</div>
			</div>
		</div>
	</div>
	
</body>	



</template>

<script>
import firebase from 'firebase';

export default {
     name: 'login',
  data: function() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
      login: function(){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              function (user){
                  alert('Ya esta conectado')
              },
              function (err){
                  alert('Pucha. ' + err.message)
              }
          )
      }
  }
}
</script>

