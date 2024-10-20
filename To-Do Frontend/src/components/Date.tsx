import { Datepicker } from "flowbite-react";

interface Props {
  date: Date | null
  change: (date: Date | null) => void
}
export function DatepickerComponent({date, change}: Props) {
  
  return <Datepicker value={date} name="creationDate" onChange={(date) => change(date)}/>;
}