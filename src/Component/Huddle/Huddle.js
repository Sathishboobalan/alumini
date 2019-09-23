import React from 'react';


class Huddle extends React.Component{
    render(){
        return(
            <div className="d-none d-lg-block col-lg-4">
                <div className="slider-light">
                    <div className="slick-slider">
                        <div>
                            <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                                <div className="slide-img-bg"></div>
                                <div className="slider-content"><h3 class='huddle'><span style={{color:"#ed1c24"}}>Huddle</span> <span style={{color:"#69A1BA"}}>pep</span></h3>
                                    <p className='quotes'>Welcome to the environment of memories and joy !!</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Huddle;