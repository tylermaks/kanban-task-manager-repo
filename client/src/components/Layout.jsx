import { useState } from "react"
import { ModeProvider } from '../context/modeProvider'
import { BoardProvider } from '../context/boardProvider'
import MenuNav from './MenuNav'
import TopNav from './TopNav'
import KanbanBoard from './KanbanBoard'
import "../styles/layout.scss"

function Layout(){
    const [sidebar, setSidebar] = useState(true)

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }
    
    return(
        <BoardProvider>
            <ModeProvider>
                <main className={sidebar ? "layout layout--show-sidebar" : "layout layout--hide-sidebar"}>
                    {sidebar && <MenuNav toggleSidebar={toggleSidebar} />}
                    <TopNav />
                    <KanbanBoard 
                        sidebar={sidebar}
                        toggleSidebar={toggleSidebar}
                    />
                </main> 
            </ModeProvider>
        </BoardProvider>
    )
}

export default Layout