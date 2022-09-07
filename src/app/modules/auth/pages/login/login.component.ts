import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../../core/models/usuario';
import { AuthService } from '../../../../core/services/auth.service';
import { SesionDto } from '../../../../core/models/autenticacion/SesionDto';
import { GenericDto } from '../../../../core/models/genericDto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {
    correo: '',
    contrasena: ''
  };



  token: string = '';
  sesionLoginDto!: SesionDto;
  error: string = '';
  respuestaError: boolean = false;
  miFormulario: FormGroup = this.fmbuilder.group({
    correo: [, Validators.required],
    password: [, Validators.required]
  })

  constructor(private fmbuilder: FormBuilder, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.usuario.correo = this.miFormulario.controls['correo'].value;
    this.usuario.contrasena = this.miFormulario.controls['password'].value;
    this.authService.auth(this.usuario).subscribe({
      next:(data:GenericDto) => {
        // console.log(this.usuario);
        this.respuestaError= false;
        this.sesionLoginDto = data.payload;
        this.token = this.sesionLoginDto.token || "";
        console.log(this.sesionLoginDto);
        localStorage.setItem('Token', this.token);
        this.router.navigate(['home']);
      },
      error:() => {
        this.error = 'Las credenciales son incorrectas\n Verifique las credenciales';
        this.respuestaError= true;
      },
    });
  }

  

}
