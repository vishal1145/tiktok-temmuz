export default (to, from, next) => {
  
  if (
    localStorage.getItem("userInfo") != null &&
    localStorage.getItem("userInfo").length > 0
  ) {
    next();
  } 
  // else if(localStorage.getItem("userInfo") != null){
  //   localStorage.removeItem("userInfo");
  //   // next("/app/sessions/signIn");
  //   next("/app/sessions/searchCar");
  // }
  else{
    // next("/app/sessions/home");
    next("/app/sessions/signIn");
    

  }
};
