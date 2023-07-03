Document.getElementBlyId('formu').addEventListener('submit',function(event){
    event.preventDefault()

    let  nome = document.getElementById("nome").value ;
    let  email = document.getElementById("email").value ;
    
    console.log('Nome:',nome);
    console.log('Email:',email);    

let FormData = new FormData();
FormData.append("Email", email);

fetch("html://formspree.io/f/xzblplze", {
  method: "post",
  headers: {
    "Accept": "application/json"
  },
  body: FormData 

})

.then(function(response) {
  // Trata a resposta da da requisiçâo
  if(response.ok) {
   alert("Formilario enviado com sucesso!");
  } else {
    alert("Ocorreu um erro ao enviar o formulario. Por favor, tente novamente tarde")
  }
})

.catch(function(error) {
  alert("ocrreu um erro ao enviar o formulario. Por favor,tente novamente mais tarde")
});  
});