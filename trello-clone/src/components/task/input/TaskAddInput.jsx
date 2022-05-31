import React from 'react'

export const TaskAddInput = ({
    inputText,
    setInputText,
    taskList,
    setTaskList
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        //空白ならタスクを追加しない
        if (inputText === "") {
            return;
        }
        //タスクを追加する
        setTaskList([
            ...taskList,
            {
                id  : taskList.length,
                draggableId: `task-${taskList.length}`,
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
