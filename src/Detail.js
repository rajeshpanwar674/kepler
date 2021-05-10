const ForcastDetail = ({ selectedForcast }) => {
    const { title, content, forcastsMade, currentForcast, probability, dueDate, imageSrc } = selectedForcast;
    return <div className="detaiRow">
        <div className="detailTitel">
            <h2>{title}</h2>
            <div className="duedateBox">
                <h4>Due Date : {dueDate.toDateString()}</h4>
            </div>
        </div>
        <div className="questionBox">
                <h4>{content} </h4>
        </div>
        <div className="imgBox"> <img src={imageSrc}></img></div>
 
          
        
        <div className="forcastRow">
            <div className="forcast-list">
                <div className="forcast-list-item">Number of forcasts made :&nbsp;<b>{forcastsMade}</b> </div>
                </div>

            <div className="forcast-list">
            <div className="forcast-list-item">Current Forcasts :&nbsp; <b>{currentForcast}</b></div>
            </div>
            <div className="forcast-list">
            <div className="forcast-list-item">Probability : &nbsp;<b>{probability}</b></div>
                </div>
        </div>
                    </div>
 



}

export default ForcastDetail;