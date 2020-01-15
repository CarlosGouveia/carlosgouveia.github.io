function validate_form_contato(){

    var nome = formcontato.nome.value;
    var email = formcontato.email.value;
    var assunto = formcontato.assunto.value;
    var mensagem = formcontato.mensagem.value;

    if(nome == ""){
      alert("O campo nome é obrigatório.");
      formcontato.nome.focus();
      return false;
    }
    else if(email == ""){
      alert("O campo email é obrigatório. Formato: teste@exemplo.com");
      formcontato.email.focus();
      return false;
    }
    else if(assunto == ""){
      alert("O campo assunto é obrigatório");
      formcontato.assunto.focus();
      return false;
    }
    else if(mensagem == ""){
      alert("O campo mensagem é obrigatório");
      formcontato.mensagem.focus();
      return false;
    }
    else{
      alert("Agradeço pelo contato!!");
      return true;
    }
  }