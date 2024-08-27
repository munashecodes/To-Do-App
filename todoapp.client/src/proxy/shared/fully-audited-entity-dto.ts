import { AuditedEntityDto } from "./audited-entity-dto";

export interface FullyAuditedEntityDto<T> extends AuditedEntityDto<number>{
    lastModifierId: number;
    lastModifiedTime: Date;
}