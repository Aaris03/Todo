import "./TodoLoading.css"

function TodoLoading(){
    return(
        <>
            <ul>
                <li className="loading-card">
                    <div className="circle-box"></div>
                    <div className="circle-box remove-box"></div>
                </li>
                <li className="loading-card">
                    <div className="circle-box"></div>
                    <div className="circle-box remove-box"></div>
                </li>
                <li className="loading-card">
                    <div className="circle-box"></div>
                    <div className="circle-box remove-box"></div>
                </li>
                <li className="loading-card">
                    <div className="circle-box"></div>
                    <div className="circle-box remove-box"></div>
                </li>
                <li className="loading-card">
                    <div className="circle-box"></div>
                    <div className="circle-box remove-box"></div>
                </li>
            </ul>
        </>
    )
}

export {TodoLoading};