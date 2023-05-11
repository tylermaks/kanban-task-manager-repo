import { useState } from "react"
import useLightMode from "../../hook/useLightMode"
import useBoardData from "../../hook/useBoardData"
import InputList from "./InputList"
import TaskStatus from "./TaskStatus"

function TaskForm({ data }) {
    const { lightModeText } = useLightMode()
    const { columns, setColumns } = useBoardData()
    const [title, setTitle] = useState(data?.title)
    const [description, setDescription] = useState(data?.description)
    const [subtasks, setSubtaskList] = useState(data?.subtasks)
    const [status, setStatus] = useState(data?.status)

    const placeholderText = {
        title: "e.g. Take coffee break",
        description: "e.g. It's always good to teak a break. This 15 minute break will recharge the batteries"
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const columnID = columns.findIndex((col) => col.name === status)
        const prevTaskList = columns[columnID].tasks
        const newTask = { 
            title: title,
            description: description, 
            status: status,
        }

        columns[columnID] = { 
            ...columns[columnID],
            tasks: [...prevTaskList, newTask]
        }

        setColumns(columns)
        setTitle('')
        setDescription('')
        setStatus('Todo')
    }

    return(
        <form className="flex-column gap--1">
            <div>
                <label className={lightModeText} htmlFor="title">Title</label>
                <input 
                    name="title" 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder={placeholderText.title} 
                    required
                />
            </div>
            <div>
                <label className={lightModeText} htmlFor="description">Description</label>
                <textarea
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder={placeholderText.description} 
                    required
                />
            </div>

            <InputList listData={subtasks} setListData={setSubtaskList}/>
            <TaskStatus setStatus={setStatus}/>


            <button onClick={handleSubmit} className="button button--sm button__primary">{data ? "Save Changes" : "Create Task"}</button>
        </form>
    )
}

export default TaskForm