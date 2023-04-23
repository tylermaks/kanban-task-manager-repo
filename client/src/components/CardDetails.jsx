import useBoardData from "../hook/useBoardData"
import dotIcon from "../assets/icon-vertical-ellipsis.svg"
import "../styles/modal.scss"


//1. onClick on card to pass specific data -- COMPLETE
//2. Map data to card detail modal -- COMPLETE
//3. Create a function that updates the json data when checkbox === true
//4. Create data object with subtask #
//5. Add a function to dot
//6. Consider making dropdown into it's own component -- set default option set to the column name


function CardDetails({ data }){
    const { columns, activeBoard, handleRefresh } = useBoardData()

    const handleCheckboxUpdate = (e) => {
        const storedAppData = JSON.parse(localStorage.getItem('appData'))
        const columnID = columns.findIndex((col) => col.name === data.status) 
        const taskID = columns[columnID].tasks.findIndex(task => task.title === data.title)
        const currentIsCompleted = data.subtasks[e.target.name].isCompleted

        storedAppData.boards[activeBoard].columns[columnID].tasks[taskID].subtasks[e.target.name].isCompleted = !currentIsCompleted
        localStorage.setItem('appData', JSON.stringify(storedAppData))
        handleRefresh()
    }

    return(
        <section className="flex-column gap--2">
            <div className="test flex-row flex-row--space"> 
                <h2>{data.title}</h2>
                <img src={dotIcon} alt="Card detail options" />
            </div> 
            { data.description  && <p className="body-lg">{data.description}</p>}
            <div>
                <label>Subtasks </label>
                {
                    data.subtasks.map((subtask, id) => { 
                        return(
                            <div key={id} className="checkbox-container flex-row gap--1">   
                                <input name={id} onChange={handleCheckboxUpdate} checked={subtask.isCompleted} className="checkbox" type="checkbox" /> 
                                <label htmlFor={id}>{subtask.title}</label>
                             </div>
                        )
                    })
                }
            </div>
            <div>
                <label htmlFor="status">Current Status</label>
                <select name="status" id="status">
                    {
                        columns && columns.map((column, id) => { 
                            return(
                                <option key={id} value={column.name}>{column.name}</option>
                            )
                        })
                    }
                </select>
            </div>

        </section>
    )
}

export default CardDetails