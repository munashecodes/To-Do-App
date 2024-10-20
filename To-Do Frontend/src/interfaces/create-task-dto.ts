import { Priority } from "../enums/priority";
import { EntityDto } from "./shared/entity-dto";

export interface CreateTaskDto extends EntityDto {
    taskName: string;
    description: string;
    dateToRemind: Date | null;
    priority?: Priority;
}