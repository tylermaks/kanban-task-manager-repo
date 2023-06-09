import useBoardData from "../hook/useBoardData"
import useLightMode from "../hook/useLightMode"
import "../styles/top-nav.scss"

function TopNav(){
    const { toggleModal } = useBoardData()
    const { lightModePrimary, lightModeText } = useLightMode()

    return(
        <section className={`${lightModePrimary} flex-row flex-row--space`}>
            <h1 className={lightModeText}>Placeholder Project</h1>
            <div>
                <div onClick={() => toggleModal('addTask')} className="button button--lg button__primary">
                    <h3>+ Add New Task</h3>
                </div>
            </div>
        </section>
    )
}

export default TopNav