import { ChangeEvent, useEffect, useState } from "react";
import { DatepickerComponent } from "./Date";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import { CreateTaskDto } from "../interfaces/create-task-dto";
import PriorityComponent from "./Priority";
import { taskRequests } from "../apiRequests/task-api";
import { Priority } from "../enums/priority";
        
interface Props {
    isOpen: boolean
    onClose: () => void
}
const AddTaskModal = ({ isOpen, onClose }: Props) => {

  const [time, setTime] = useState<Nullable<Date>>(null);
  const [task, setTask] = useState<CreateTaskDto>({

    id: 0,
    taskName: '',
    description: '',
    dateToRemind: null,
    priority: undefined

  })
  const [priority, setPriority] = useState<Priority>(Priority.Medium);
  const [date, setDate] = useState<Date | null>(null)

  useEffect(() => {
      task.priority = priority
      task.dateToRemind = date
      console.log(task)
  },[priority, date])

  const handleDate = (date: Date | null) => {
    
    setDate(date)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)    {
    const {name, value} = event.target
    setTask({...task, [name]: value})
  }
  
  if (!isOpen) return null;
    
  return (
    
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="rounded-lg bg-white p-4 shadow-2xl transform -translate-y-12"> {/* Adjust this value */}
      <input
        type='text'
        onChange={handleInputChange}
        value={task.taskName}
        name="taskName"
        placeholder="Task name"
        className="text-lg w-full p-1 mb-1 focus:outline-none focus:ring-0 border-none placeholder-font-weight"
      />

        
          <textarea
            id="autoResizeTextarea"
            
            onChange={handleInputChange}
            className="border-none rounded-lg p-2 focus:outline-none focus:ring-0 resize-none w-full " // Added text-sm for smaller font size
            placeholder="Description"
            name="description"
            rows={1}
            style={{ height: 'auto' }} // Allows the height to reset
            onInput={(e) => {
              const target = e.currentTarget;
              target.style.height = 'auto'; 
              target.style.height = `${target.scrollHeight}px`; 

              // Optionally adjust font size if needed
              if (target.value.trim() === '') {
                target.classList.add('text-xs');
              } else {
                target.classList.remove('text-xs'); 
              }
            }}
          />
            
        

       <div className="flex gap-4">
        <DatepickerComponent date={date} change={handleDate}/>
        <PriorityComponent priority={priority} change={setPriority} />

        
        
       </div>

       <div className="flex-auto">
                <label htmlFor="calendar-timeonly" className="font-bold text-gray-600 block mb-2">
                    Reminder
                </label>
                <Calendar id="calendar-timeonly"  value={time} onChange={(e) => setTime(e.value)} timeOnly />
            </div>
       <hr className="my-4 border-gray-300" />

        <div className="mt-4 flex justify-flex-end gap-2">
          <button type="button" onClick={async () => await taskRequests.createTask(task)} className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600 transition-transform transform active:scale-95">
            Add Task
          </button>

          <button type="button" onClick={onClose} className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 transition-transform transform active:scale-95">
            Cancel
          </button>
        </div>
      </div>
    </div>
   
  )
}

export default AddTaskModal