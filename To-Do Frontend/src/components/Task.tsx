import { Priority } from "../enums/priority"
import { GetTaskDto } from "../interfaces/get-task-dto"

interface Props{
  task: GetTaskDto
}

const Task = ({task}: Props) => {
  return (
    <div className="">
        <a
  href="#"
  
  className= {`relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 ${
    task.priority === Priority.High ? 'bgHigh' : task.priority === Priority.Low ? 'bgLow' : 'bgMedium'} `}
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-red-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4 ">
    <div>
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {task.taskName}
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">By Me</p>
    </div>

    
  </div>

  <div className="mt-4">
    <p className="text-pretty text-sm text-gray-500">
      {task.description}
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Created On</dt>
      <dd className="text-xs text-gray-500">31st June, 2021</dd>
    </div>

    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Date </dt>
      <dd className="text-xs text-gray-500">{ new Date(task.dateToRemind!).toISOString().split('T')[0]}</dd>
    </div>
  </dl>
</a>
    </div>
  )
}

export default Task