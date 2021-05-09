const ForcastDetail = ({ selectedForcast }) => {
    const { title, content, forcastsMade, currentForcast, probability, dueDate, imageSrc } = selectedForcast;
    return <div className="detaiRow">
        <div className="detailTitel">
            <h2>{title}</h2>
        </div>
        <div className="detailCenterrow">
        <div className="info-box ">
            <h4>{content}                </h4>
                </div>
        <div className="duedateBox">
            <h4>{dueDate.toString()}</h4>
            </div>
       <div className="imgBox"> <img src={imageSrc}></img></div>
        </div>
        <div className="forcastRow">
        <div>Number of forcasts made : { forcastsMade}</div>

<div>Current Forcasts: {currentForcast}</div>
<div>Probability, { probability}</div>
        </div>
       
    </div>


}

export default ForcastDetail;