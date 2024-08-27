import { EntityDto } from "./entity-dto";

export interface AuditedEntityDto<T> extends EntityDto<number>{
    creatorId: number;
    creationTime: Date;
    deleterId: number;
    deletionTime: Date;
}