function Gallary(data) {

    const { image, title } = data
    return (
        <div className="portfolio_card" style={{ backgroundImage: `url(${image})` }}>
            <div className="card-body">
                <h4 className="fw-bold text-white text-center mb-3">{title}</h4>
                <button className="card-btn">View Gallery</button>
            </div>
        </div>
    )
}
export default Gallary;