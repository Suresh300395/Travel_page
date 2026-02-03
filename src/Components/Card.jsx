function Card (data){

   const{image,title,description}=data
    return<div>
        <div className="card">
                <img src={image} alt={title} className="card-img" />
                <div className="card-body">
                    <h4 className="fw-bold text-info">{title}</h4>
                    <p>{description}</p>
                    <button className="card-btn">View More</button>
                </div>
            </div>
    </div>
}
export default Card;