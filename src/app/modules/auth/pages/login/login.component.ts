import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../../core/models/usuario';
import { AuthService } from '../../../../core/services/auth.service';
import { SesionDto } from '../../../../core/models/autenticacion/SesionDto';
import { GenericDto } from '../../../../core/models/genericDto';


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

  sesionLoginDto!:SesionDto;

  error: string = 'Esto es un error';
  respuestaError: boolean = false;

  miFormulario: FormGroup = this.fmbuilder.group({
    correo: [, Validators.required],
    password: [, Validators.required]
  })

  constructor(private fmbuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.usuario.correo = this.miFormulario.controls['correo'].value;
    this.usuario.contrasena = this.miFormulario.controls['password'].value;
    let status: number | undefined;
    this.authService.auth(this.usuario).subscribe(
      (data) => {
      // console.log(this.usuario);
      this.sesionLoginDto = data.payload;
      console.log(this.sesionLoginDto);
      status = data.status;
      console.log(status);

    });
  }

  validarErrores(status:number ): boolean {
    

    if(status === 200){
      this.respuestaError = false;
    }
    if(status == 500){
      this.respuestaError = true;
      this.error = 'Las credenciales son incorrectas\n Verifique las credenciales';
    }
    return this.respuestaError;
  }


}
