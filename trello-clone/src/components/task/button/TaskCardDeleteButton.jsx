import React from 'react'

export const TaskCardDeleteButton = ({taskCardsList, setTaskCardsList, taskCard}) => {

  const handleDeleteTaskCard = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e)=> e.id !== id));
  };

  return (
    <div>
      <button
        className='taskCardDeleteButton'
        onClick={() => handleDeleteTaskCard(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}
