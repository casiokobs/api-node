import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  //email valida ok
  //senha valida com minlength
  //cpf valida apenas formato xxx.xxx.xxx-xx, não se é realmente valido de acordo com as formulas para calcular
  //validador de data compara data pelo ano, mensagem caso a validacao falhe nao é mostrada corretamente
  {
    id: {type: String},
    name: {type: String, required: true},
    cpf: {type: String, validate: {
      validator: function(v) {
        return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(v);
      },
      message: props => `${props.value} is not a valid cpf!`
    }, required: true },
    birthDate: {type: Date,
      validate: function(input) {
          var userInput = new Date(input);
          var now = new Date();
          var minimumAge = now.getFullYear() - userInput.getFullYear();
          return minimumAge >= 18;
      },
      message: `Must be 18 years or older!!`},
    email: {type: String,
      validate: {
        validator: function(v) {
          return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
      }, required: true},
    password: {type: String, minlength: [6, 'Password must have at least 6 characters long'], required: true},
    address: {type: String, required: true},
    number: {type: String, required: true},
    complement: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    zipCode: {type: String, required: true}    
  }
);


const users = mongoose.model('user', userSchema);

export default users;