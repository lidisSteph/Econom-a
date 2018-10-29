<template>
  <div class="hello">
   <header class="s-header">
        <div class="header-logo">
            <a class="site-logo" href="index.html">
                <img v-bind:src="'/assets/images/' + image1"/>
            </a>
        </div>

        <nav class="header-nav">

            <a href="#0" class="header-nav__close" title="close"><span>Close</span></a>

            <div class="header-nav__content">
                <h3>Navigation</h3>
                
                <ul class="header-nav__list">
                    <li class="current"><a class="smoothscroll"  href="#home" title="home">Home</a></li>
                    <li><a class="smoothscroll"  href="#about" title="about">About</a></li>
                    <li><a class="smoothscroll"  href="#services" title="services">Services</a></li>
                    <li><a class="smoothscroll"  href="#works" title="works">Works</a></li>
                    <li><a class="smoothscroll"  href="#clients" title="clients">Clients</a></li>
                    <li><a class="smoothscroll"  href="#contact" title="contact">Contact</a></li>
                </ul>
    
                <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
    
                <ul class="header-nav__social">
                    <li>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-behance"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-dribbble"></i></a>
                    </li>
                </ul>

            </div> <!-- end header-nav__content -->

        </nav>  <!-- end header-nav -->

        <a class="header-menu-toggle" href="#0">
            <span class="header-menu-text">Menu</span>
            <span class="header-menu-icon"></span>
        </a>

    </header> <!-- end s-header -->


    <!-- home
    ================================================== -->
    <section id="home" class="s-home target-section" data-parallax="scroll" data-image-src="images/vista.jpeg" data-natural-width=3000 data-natural-height=2000 data-position-y=center>

        <div class="overlay"></div>
        <div class="shadow-overlay"></div>

        <div class="home-content">

            <div class="row home-content__main">

                <h3>Bienvenido a AriEdit</h3>

                <h1>
                    CLOUD WORKSPACE <br>
                    PARA DEV TEAMS
                    
                </h1>
                <div class="row">
                             <div class="col-md-4 col-xs-4 col-sm-4 col-lg-4">
                                    <h4>
                                            Un sitio dónde puedes desarrollar<br>
                                             de código en línea y portable. <br>
                                            Crear workspaces en "modo desarrollo", <br>
                                            donde puedes escribir <br>
                                            código CSS, JS y HTML.<br>
                                            Crear teams y compartir tu trabajo<br>
                                            de manera privada.
                                            
                                    </h4>
                                    <div class="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                            <div class="home-content__buttons">
                                                    <a href="Login/index.html" class=" btn btn--stroke" id="holaMundo">
                                                        Start a Project
                                                    </a>
                                                    <a href="#" class=" btn btn--stroke">
                                                        Sign in
                                                    </a>
                                            </div>
                                    </div>
                           
                            </div>
                            <div class="computador col-md-6 col-xs-6 col-sm-6 col-lg-6" >
                                    <img src="images/browser.png" alt="Homepage">
                                    
                            </div>
                            
                </div>

                

            </div>

            <div class="home-content__scroll">
                <a href="#about" class="scroll-link smoothscroll">
                    <span>Scroll Down</span>
                </a>
            </div>

            <div class="home-content__line"></div>

        </div> <!-- end home-content -->


        <ul class="home-social">
            <li>
                <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-behance" aria-hidden="true"></i><span>Behance</span></a>
            </li>
            <li>
                <a href="#0"><i class="fa fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></a>
            </li>
        </ul> 
        <!-- end home-social -->

    </section> <!-- end s-home -->


    <!-- about
    ================================================== -->
    <section id='about' class="s-about">

        <div class="row section-header has-bottom-sep" data-aos="fade-up">

                <div class="about-logo">
                        <a class="site-logo" href="index.html">
                            <img src="logoA.png" alt="Homepage">
                        </a>
                </div>
            <div class="col-full">
                
                <div class="display-1 display-1--light">Somos AriEdit
                </div>
            </div>
        </div> <!-- end section-header -->

        <div class="row about-desc" data-aos="fade-up">
            <div class="col-full">
                <p>
                Somos una aplicación donde puedes crear, guardar y descargar tus proyectos en tiempo real utilizando HTML, CSS y Javascript. También puedes usar AriEdit como un currículum online mostrando tu mejor trabajo de diseño y desarrollo.
                </p>
            </div>
        </div> <!-- end about-desc -->

        <div class="row about-stats stats block-1-4 block-m-1-2 block-mob-full" data-aos="fade-up">
                
            <div class="col-block stats__col ">
                <div class="stats__count">127</div>
                <h5>Premios Recibidos</h5>
            </div>
            <div class="col-block stats__col">
                <div class="stats__count">1505</div>
                <h5>Tazas de café tomadas</h5>
            </div>
            <div class="col-block stats__col">
                <div class="stats__count">109</div>
                <h5>Proyectos Completados</h5>
            </div>
            <div class="col-block stats__col">
                <div class="stats__count">102</div>
                <h5>Desarrolladores felices</h5> 
            </div>

        </div> <!-- end about-stats -->

        <div class="about__line"></div>

    </section> <!-- end s-about -->



 </div>   
</template>

<script>

data:{
  image1:'nombre2.png'

}


export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
