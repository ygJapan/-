import React from 'react'
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
    inputText,
    setInputText,
    taskList,
    setTaskList
}) => {
    const handleSubmit = (e) => {
        const taskId = uuid();

        e.preventDefault();
        //空白ならタスクを追加しない
        if (inputText === "") {
            return;
        }
        //タスクを追加する
        setTaskList([
            ...taskList,
            {
                id  : taskId,
                draggableId: `task-${taskId}`,
                text: inputText,
            },
        ])

        //追加後にテキストを空にする
        setInputText("");
    };

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='add a task'
                className="taskAddInput"
                onChange={handleChange}
                value={inputText}
            />
        </form>
    </div>
  )
}
