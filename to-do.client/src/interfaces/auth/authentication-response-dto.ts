import { EntityDto } from "../shared/entity-dto";

export interface AuthenticationResponseDto extends EntityDto {
  firstName: string;
  lastName: string;
  email: string;
  jwtToken: string;
}