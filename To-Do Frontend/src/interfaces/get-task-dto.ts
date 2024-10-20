import { Priority } from "../enums/priority";
import { EntityDto } from "./shared/entity-dto";

export interface GetTaskDto extends EntityDto {
    taskName: string;
    description: string;
    dateToRemind: Date | null;
    priority?: Priority;
}