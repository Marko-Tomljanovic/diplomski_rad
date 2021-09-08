export default{
    trenutniKorisnik: null,
    trazi: '',
    traziPocetna: '',
    traziZ: "",

    
    funkPass(checkbox){
        if(checkbox==true){
          return "text";
        }else{
          return "password";
        }
    }
};

