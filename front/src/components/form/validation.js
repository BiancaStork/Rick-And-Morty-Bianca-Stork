const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword= /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export default function validation(inputs) {
  let errors={}
  if(!regexEmail.test(inputs.username))errors.username="Ingresa un mail valido";
  else if(!inputs.username)errors.username="Usuario incorrecto";
  else if(inputs.username.length>35) errors.username="Usuario incorrecto";
  else if(!regexPassword.test(inputs.password))errors.password="password incorrecto";
  else if(inputs.password.length<5 && inputs.password.length>10) errors.password="password incorrecto"
return errors;
}
