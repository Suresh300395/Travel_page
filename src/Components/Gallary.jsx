function Gallary(data) {

    const { image, title } = data
    return <div>
        <div className="portfolio_grid">
            <div className="portfolio_card" style={{ backgroundImage: `url(${image})` }}>
                <div className="card-body">
                    <h4 className="fw-bold text-white text-center">{title}</h4>
                    <button className="card-btn">View Gallery</button>
                </div>
            </div>
        </div>
    </div>
}
export default Gallary;