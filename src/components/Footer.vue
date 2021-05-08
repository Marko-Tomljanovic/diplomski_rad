 <template>
 <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
     <footer>
         <div class="row my-3 justify-content-center py-5">
             <div class="col-10">
                 <div class="row ">
                     <div class="col-xl-8 col-md-4 col-sm-4 my-auto mx-auto a">
                         <h3 class="text-muted mb-md-1 bold-text">ocijeniMajstora.</h3>
                         <img src="@/assets/logo.png" alt="logo" style="width:200px; margin-left:40px">
                     </div>
                     
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4">
                             <router-link class="bold-text" to="/Pitanja"><b>ČESTA PITANJA</b></router-link>
                             </h6>
                         <ul class="list-unstyled">
                             <li>Facebook</li>
                             <li>Instagram</li>
                             <li>Web</li>
                             <li>nanana</li>
                         </ul>
                     </div>
                     <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 class="mb-3 mb-lg-4"><router-link class="bold-text" to="#"><b>KONTAKT</b></router-link>
                         </h6>
                         <p class="mb-1">Marko Tomljanović</p>
                         <p>POŽEGA, CROATIA</p>
                     </div>
                 </div>
                 
             </div>
         </div>
     </footer>
 </div>
</template>


 <style scoped>
 body {
     background: linear-gradient(0deg, #fff, 50%, #DEEEFE);
     font-family: 'Rubik', sans-serif;
     background: #ffffff;
     height: 100 !important
 }

 .container-fluid {
     height: 350px;
     overflow: hidden;
     /* ovdje trebam staviti kolko da bude ispod prazno, ispod */
     margin-top: 350px;  
     background: #262626;
     color: #627482 !important;
     margin-bottom: 0;
     padding-bottom: 0
 }

 small {
     font-size: calc(12px + (15 - 12) * ((100vw - 360px) / (1600 - 360))) !important
 }

 .bold-text {
     color: #989c9e !important
 }

 .mt-55 {
     margin-top: calc(50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))) !important
 }

 h3 {
     font-size: calc(34px + (40 - 34) * ((100vw - 360px) / (1600 - 360))) !important
 }

 .social {
     font-size: 21px !important
 }

 .rights {
     font-size: calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important
 }
 .router-link-exact-active{
  background-color: #262626;
  border-radius: 19px;
}
 </style>
  