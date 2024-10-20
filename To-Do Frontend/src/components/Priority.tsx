import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { Dispatch, SetStateAction} from 'react';
import { Priority } from '../enums/priority';


interface Props {
  priority?: Priority
  change: Dispatch<SetStateAction<Priority>>
}
export default function PriorityComponent({ priority, change}: Props) {
  

  return (
    <Listbox value={priority} onChange={change}>
      <ListboxButton
        className={clsx(
          'relative block w-60 border border-gray-300 rounded-lg bg-white py-1.5 pr-8 pl-3 text-left text-sm text-black', // Changed to white background and black text
          'focus:outline-none focus:outline-2 focus:outline-blue-500'
        )}
      >
        {priority}
        <ChevronDownIcon
          className="absolute top-2.5 right-2.5 h-4 w-4 text-black" // Changed icon color to black
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          'w-60 rounded-xl border border-gray-300 bg-white p-1 focus:outline-none', // Set background to white
          'transition duration-100 ease-in'
        )}
      >
        {Object.values(Priority).map((value, index) => (
          <ListboxOption
            key={index} // Changed to use id for unique keys
            value={value}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none hover:bg-gray-100" // Added hover effect for better UX
          >
            <CheckIcon className="invisible h-4 w-4 fill-black group-data-[selected]:visible" /> {/* Changed check icon color */}
            <div className="text-sm text-black">{value}</div> {/* Changed text color to black */}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}