<template>
  <div>
      <div class="about-section paddingTB60 white-bg">
                <div class="container">
                    <div class="row">
						<div class="col-md-7 col-sm-6">
							<div class="about-title clearfix">
								<h1>About <span>Our Company</span></h1>
								<h3>Company Sporting goods</h3>
								<p class="about-paddingB">If you think there is something we should know about any product, please get in touch writting us by whatsapp. We will acknowledge your message within 24 hours, and aim to reply within 10 working days.</p>
                                <div class="about-icons"> 
                                    <ul >
                                        <li><a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a> </li>
                                        <li><a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a> </li>
                                        <li> <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a> </li>
                                        <li> <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a> </li>
                                    </ul>     
                                </div>
							</div>
						</div>
						<div class="col-md-5 col-sm-6">
							<div class="about-img">
								<img src="https://devitems.com/preview/appmom/img/mobile/2.png" alt="">
							</div>
						</div>	
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
    NavBar,Footer
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
.paddingTB60 {padding:60px 0px 60px 0px;}
.white-bg {background: white;}
.about-title h1 {color: Black; font-size:45px;font-weight:600;font-family:"Nunito", sans-serif;}
.about-title span {color: #203b4f; font-size:45px;font-weight:700;font-family:"Nunito", sans-serif;}
.about-title h3 {color: #535353; font-size:23px;margin-bottom:24px;font-family:"Nunito", sans-serif;}
.about-title p {color: #7a7a7a;line-height: 1.8;margin: 0 0 15px;font-family:"Nunito", sans-serif;}
.about-paddingB {padding-bottom: 12px;}
.about-img {padding-left: 57px;}

/* Social Icons */
.about-icons {margin:48px 0px 48px 0px ;}
.about-icons i{margin-right: 10px;padding: 0px; font-size:35px;font-family:"Nunito", sans-serif;color:#323232;box-shadow: 0 0 3px rgba(0, 0, 0, .2);}
.about-icons li {margin:0px;padding:0;display:inline-block;}
#social-fb:hover {color: #3B5998;transition:all .001s;}
 #social-tw:hover {color: #4099FF;transition:all .001s;}
 #social-gp:hover {color: #d34836;transition:all .001s;}
 #social-em:hover {color: #f39c12;transition:all .001s;}
body{
    font-family: Nunito;

}

</style>