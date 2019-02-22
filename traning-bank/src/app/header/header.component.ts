import { debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formLogin: any;
  conversao: any;
  valorForm: any;
  cpf: any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf: ['']
    });

    this.formLogin.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valorForm = res;
      });
  }

  logon() {
    this.conversao = JSON.parse(localStorage.getItem('cadastro'));
    this.cpf = this.valorForm.cpf;

    if (this.conversao.cpf == this.cpf) {
      this.router.navigate(['home-logada'])
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}