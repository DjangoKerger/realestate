import React from 'react'
import "./Body.css"
import House1 from "../../pictures/House1.jpg"
import House2 from "../../pictures/House2.jpg"
import House3 from "../../pictures/House3.jpg"

const Body = () => {
    return (
        <div className='container'>
            <h2>Cards</h2>

            <div className='row'>
                <div className='col l4 s12 16'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={House1} alt="picture" className="materialboxed"></img>
                            <span className='card-title'> P. Sherman Wallaby way</span>
                            <a href="#" className="halfway-fab btn-floating red pulse">
                                <i className=' material-icons'>favorite</i>
                            </a>
                        </div>
                        <div className='card-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="card-action">
                            <a href="#"> More Details </a>
                            <a href="#"> Contact Me </a>
                        </div>
                    </div>
                </div>
                <div className='col l4 s12 16'>
                <div className='card'>
                        <div className='card-image'>
                            <img src={House2} alt="picture" className="materialboxed"></img>
                            <span className="card-title"> 6 Catoosa rd. </span>
                            <a href="#" className="halfway-fab btn-floating red pulse">
                                <i className=' material-icons'>favorite</i>
                            </a>
                        </div>
                        <div className='card-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="card-action">
                            <a href="#"> More Details </a>
                            <a href="#"> Contact Me </a>
                        </div>
                    </div>    
                </div>
                <div className='col l4 s12 16'>
                <div className='card'>
                        <div className='card-image'>
                            <img src={House3} alt="picture" className="materialboxed"></img>
                            <span className="card-title"> 6 Catoosa rd. </span>
                            <a href="#" className="halfway-fab btn-floating red pulse">
                                <i className=' material-icons'>favorite</i>
                            </a>
                        </div>
                        <div className='card-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="card-action">
                            <a href="#"> More Details </a>
                            <a href="#"> Contact Me </a>
                        </div>
                    </div>    
                </div>
            </div>
    </div>
    )
}

export default Body;
