import Column from "@/components/Column";
import initialData from "@/data/initial-data"
import { useState } from "react"

export default function Home() {
  const [initialState, setInitialState] = useState(initialData);
  return (
  <>
  {
    initialState.columnOrder.map((columnId)=>{
      const column = initialState.columns[columnId];

      const tasks = column?.taskIds?.map(taskId => initialState?.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks}/>
    })
  }
  </>
  )
}
