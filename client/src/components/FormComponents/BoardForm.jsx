import { useState } from "react"
import useLightMode from "../../hook/useLightMode"
import InputList from "./InputList"

function BoardForm(){
    const { lightModeText } = useLightMode()
    const [title, setTitle] = useState('')

    return(
        <section>
           
            <form className="flex-column gap--1">
                <div>
                    <label className={lightModeText} htmlFor="board-name">Board Name</label>
                    <input 
                        name="board-name" 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="eg. Web Design" 
                        required
                    />
                </div>
                <InputList />
            </form>
        </section>
        
    )
}

export default BoardForm