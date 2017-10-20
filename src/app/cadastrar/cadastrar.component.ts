import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  nome: string = '';
  email: string  ='';
  senha: string = '';
  telefone: string = ''; 
  nomeAlert: string = "Nome invalido ";
  sucess: string = "Campo preenchido com sucesso";
  telefoneAlert: string = 'Telefone Invalido';
  tellSucess:string ='Telefone esta correto';
  emailAlert:string = "E-mail é invalido";
  emailSucess:string = "E-mail correto";
  senhaAlert:string = "senha incorreta";
  senhaSucess:string = "Senha correta"

  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      'nome': ['', Validators.required],
      'email': ['', Validators.required],
      'senha': ['', Validators.required],
      'telefone': ['', Validators.required]
    });
  }
  
  addPost(post) {
    this.nome = post.nome;
    this.senha = post.senha;
    this.email = post.email;
    this.telefone = post.telefone;
  }

  ngOnInit() {
    this.rForm.get('nome').valueChanges.subscribe(
      (nome) => {
        if (nome.length < 3){
          this.rForm.get('nome').setValidators([Validators.required, Validators.minLength(3)]);
          this.nomeAlert = "Nome precisa ter no minimo 3 digitos";
        }else{
          this.rForm.get('nome').setValidators(Validators.required);
        }
        this.rForm.get('nome').updateValueAndValidity({onlySelf: true, emitEvent: false});
    });  
    this.rForm.get('telefone').valueChanges.subscribe(
      (telefone) => {
        if (telefone.length < 11){
          this.rForm.get('telefone').setValidators([Validators.required, Validators.minLength(11)]);
          this.telefoneAlert = "Nome precisa ter no minimo 11 digitos";
        }else{
          this.rForm.get('telefone').setValidators(Validators.required);
        }
        this.rForm.get('telefone').updateValueAndValidity({onlySelf: true, emitEvent: false});
    });      
    this.rForm.get('email').valueChanges.subscribe(
      (email) => {
        if (email.length < 10){
          this.rForm.get('email').setValidators([Validators.required, Validators.minLength(10)]);
          this.emailAlert = "E-mail esta invalido";
        }else{
          this.rForm.get('email').setValidators(Validators.required);
        }
        this.rForm.get('email').updateValueAndValidity({onlySelf: true, emitEvent: false});
    });
    this.rForm.get('senha').valueChanges.subscribe(
      (senha) => {
        if(senha.length < 4){
          this.rForm.get('senha').setValidators([Validators.required, Validators.minLength(4)]);
          this.senhaAlert = "Senha incorreta";
        }else{
          this.rForm.get('senha').setValidators(Validators.required);
        }
        this.rForm.get('senha').updateValueAndValidity({onlySelf: true, emitEvent: false});
      });
  }

}
