function validate_form_contato(){

    var nome = formcontato.nome.value;
    var email = formcontato.email.value;
    var assunto = formcontato.assunto.value;
    var mensagem = formcontato.mensagem.value;

    if(nome == ""){
      alert("O campo nome é obrigatório");
      formcontato.nome.focus();
      return false;
    }
    if(email == ""){
      alert("O campo email é obrigatório");
      formcontato.email.focus();
      return false;
    }
    if(assunto == ""){
      alert("O campo assunto é obrigatório");
      formcontato.assunto.focus();
      return false;
    }
    if(mensagem == ""){
      alert("O campo mensagem é obrigatório");
      formcontato.mensagem.focus();
      return false;
    }
  }