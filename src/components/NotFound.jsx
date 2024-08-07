
const NotFound = () => {
    const handleRefresh = () =>  window.location.reload();
    return(
        <div className="loading-container">
            <h1 className="hourglass">
            <i className="bi bi-file-earmark-excel-fill"></i>
            </h1>
            <div></div>
            <h1>City does not exist.</h1>
            <button onClick={handleRefresh}>Try again</button>
        </div>
    )
}

export default NotFound