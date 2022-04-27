function Section(props) {

    let image
    if(props.image) {
        image = (
            <div className="col">
                <img src={props.image.thumbnail} alt={props.label} className="img-fluid" />
            </div>
        )
    }

    const text = (
        <div className={props.image ? "col col-md-9" : "col"}>
            <div className={props.imageDisplay === 'left' ? "row justify-content-end" : "row"}>
                <div className="col col-md-auto">
                    <h1>{props.displayName}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{props.value}</p>
                </div>
            </div>
        </div>
    )

    let content
    if(!props.image) {
        content = text
    } else if (props.imageDisplay === 'left') {
        content = <>{image}{text}</>
    } else {
        content = <>{text}{image}</>
    }

    return(
        <div className="row justify-content-md-center mt-3">
            {content}
        </div>
    )
}

export default Section