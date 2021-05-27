<template>
  <section id="footer">
    <div class="container">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Korisnikov račun</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Prijavi se</a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Registriraj se</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Kako se registrirati</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Privatnost podataka</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Registriraj firmu</a
              >
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Naša stranica</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Ocjeni nas</a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Prednosti
                ocjeniMastora</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Vizija i misija</a
              >
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Top 5</a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Prijavi grešku</a
              >
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>Kontakt</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Kontakt</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>O nama</a>
            </li>
            <li>
              <a href="/pitanja"
                ><i class="fa fa-angle-double-right"></i>Česta pitanja</a
              >
            </li>
            <li>
              <a href="/Izvodaci"
                ><i class="fa fa-angle-double-right"></i>Počni ocjenjivati</a
              >
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1_h0nvcZz0PuLW4TwUho9GDpJsismKUlP/view"
                title="Design and developed by"
                ><i class="fa fa-angle-double-right"></i>Razrada teme</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item">
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fa fa-instagram"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fa fa-google-plus"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#" target="_blank"><i class="fa fa-envelope"></i></a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"
        >
          <p>
            A project that is made for the purpose of the final work. It is a
            web application that will have the ability to provide reviews for
            construction contractors.
          </p>
          <p class="h6">
            © All right Reversed.<a
              class="ml-2"
              href="https://github.com/Marko-Tomljanovic"
              target="_blank"
              >Marko Tomljanović</a
            >
          </p>
        </div>
        <hr />
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 150px;
  padding: 50px 0;
}
section .section-title {
  text-align: center;
  color: #101312;
  margin-bottom: 50px;
  text-transform: uppercase;
}
#footer {
  background: #2677a7 !important;
}
#footer h5 {
  padding-left: 10px;
  border-left: 3px solid #eeeeee;
  padding-bottom: 6px;
  margin-bottom: 20px;
  color: #ffffff;
}
#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
#footer ul.social li {
  padding: 3px 0;
}
#footer ul.social li a i {
  margin-right: 5px;
  font-size: 28px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
  font-size: 35px;
  margin-top: -10px;
}
#footer ul.social li a,
#footer ul.quick-links li a {
  color: #ffffff;
}
#footer ul.social li a:hover {
  color: #eeeeee;
}
#footer ul.quick-links li {
  padding: 3px 0;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.quick-links li:hover {
  padding: 3px 0;
  margin-left: 5px;
  font-weight: 700;
}
#footer ul.quick-links li a i {
  margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
  font-weight: 700;
}

@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
</style>
