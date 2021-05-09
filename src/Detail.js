const ForcastDetail = ({ selectedForcast }) => {
    const { title, content, forcastsMade, currentForcast, probability, dueDate, imageSrc } = selectedForcast;
    return <div>
        <div>{title}</div>
        <div>{content}</div>
        <div>{dueDate.toString()}</div>
        <img src={imageSrc}></img>
        <div>Number of forcasts made : { forcastsMade}</div>

        <div>Current Forcasts: {currentForcast}</div>
        <div>Probability, { probability}</div>
    </div>


}

export default ForcastDetail;