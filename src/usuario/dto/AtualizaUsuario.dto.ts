import { IsEmail, MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { EmailUnico } from '../validation/email-unico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O email é inválido' })
  @EmailUnico({ message: 'O email já está em uso' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @IsOptional()
  senha: string;
}
