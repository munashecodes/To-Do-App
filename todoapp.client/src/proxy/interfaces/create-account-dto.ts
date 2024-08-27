import { EntityDto } from "../shared/entity-dto";

export interface CreateAccountDto extends EntityDto<number>{
   
    firstName: string
    lastName : string
    email : string
    password : string
    confirmPassword : string

}