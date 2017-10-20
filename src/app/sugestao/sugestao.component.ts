import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/do';
@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})
export class SugestaoComponent implements OnInit {

  rFormSug:FormGroup;
  post:any;
  nome:string = '';
  email:string = '';
  telefone:string = '';
  assunto:string = '';
  mensagem:string = '';

  nomeAlert:string = 'Nome inválido';
  emailAlert:string = 'E-mail inválido';
  telefoneAlert:string = 'Telefone inválido';
  assuntoAlert:string = 'Informe um assunto';
  mensagemAlert:string = 'Informe a sua mensagem';

  nomeSucess:string = 'Nome válido';
  emailSucess:string = 'E-mail válido';
  telefoneSucess:string = 'Telefone válido';
  assuntoSucess:string = 'Assunto válido';
  mensagemSucess:String = 'Obrigado por digitar sua mensagem';


  constructor(private fb: FormBuilder) {
    this.rFormSug = fb.group({
      'nome': ['', Validators.required],
      'email': ['', Validators.required],
      'telefone': ['', Validators.required],
      'assunto': ['', Validators.required],
      'mensagem':['', Validators.required]
    });
   }

   addPost(post){
     this.nome = post.nome;
     this.email = post.email;
     this.telefone = post.telefone;
     this.assunto = post.assunto;
     this.mensagem = post.mensagem;
   }

  ngOnInit() {
    this.rFormSug.get('nome').valueChanges.subscribe(
      (nome) => {
        if (nome.length < 3){
          this.rFormSug.get('nome').setValidators([Validators.required, Validators.minLength(3)]);
          this.nomeAlert = "Nome precisa ter no minimo 3 digitos";
        }else{
          this.rFormSug.get('nome').setValidators(Validators.required);
        }
        this.rFormSug.get('nome').updateValueAndValidity({onlySelf: true, emitEvent: false});
    });
    this.rFormSug.get('email').valueChanges.subscribe(
      (email) => {
        if(email.length < 10){
          this.rFormSug.get('email').setValidators([Validators.required, Validators.minLength(10)]);
          this.emailAlert = "E-mail invalido";
        }else{
          this.rFormSug.get('email').setValidators(Validators.required);
        }
        this.rFormSug.get('email').updateValueAndValidity({onlySelf:true, emitEvent:false});
      });
      this.rFormSug.get('telefone').valueChanges.subscribe(
        (telefone) => {
          if (telefone.length < 11){
            this.rFormSug.get('telefone').setValidators([Validators.required, Validators.minLength(11)]);
            this.telefoneAlert = "Telefone precisa ter no minimo 11 digitos";
          }else{
            this.rFormSug.get('telefone').setValidators(Validators.required);
          }
          this.rFormSug.get('telefone').updateValueAndValidity({onlySelf: true, emitEvent: false});
      });
      this.rFormSug.get('assunto').valueChanges.subscribe(
        (assunto) => {
          if (assunto.length < 3){
            this.rFormSug.get('assunto').setValidators([Validators.required, Validators.minLength(3)]);
            this.assuntoAlert = "Assunto invalido";
          }else{
            this.rFormSug.get('assunto').setValidators(Validators.required);
          }
          this.rFormSug.get('assunto').updateValueAndValidity({onlySelf: true, emitEvent: false});
      });

    }
}
