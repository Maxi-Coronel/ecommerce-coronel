import React from 'react';

const Carousel = () => {
    return (
        <section>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.shopify.com/s/files/1/0049/0330/5265/files/ROTADOR_18CUOTAS_25_NEW_c4c5cedd-cee6-4ad6-af2e-310d63e8bb43_1400x.jpg?v=1635171678" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.shopify.com/s/files/1/0049/0330/5265/files/A_MEDIDA_WIDE_1400x.jpg?v=1634926173" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.shopify.com/s/files/1/0049/0330/5265/files/ROTADOR_WIDE_SOFA_CAMAS_1400x.jpg?v=1635184234" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Carousel;