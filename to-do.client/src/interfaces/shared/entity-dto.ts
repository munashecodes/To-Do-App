export interface EntityDto{
    id: number
}

export interface AuditedEntityDto extends EntityDto{
    creatorId: number
    creationTime: Date
    deleterId: number
    deletionTime: Date
}

export interface FullyAuditedEntityDto extends AuditedEntityDto{
    lastModifierId: number
    lastModificationTime : Date
}

