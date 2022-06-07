import React from 'react'
import { v4 as uuid } from 'uuid';

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {

  const handleAddTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardsList([
      ...taskCardsList,
      {
        id : taskCardId,
        draggableId: `item${taskCardId}`,
      }
    ]);
  };

  return (
    <div className='addTaskCardButtonArea'>
      <button
        className='addTaskCardButton'
        onClick={handleAddTaskCard}
      >
        +
      </button>
    </div>
  )
}
