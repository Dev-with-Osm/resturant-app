import React from "react";
import Header from "./Header";
import './Home.css';
import prideimg from './../../assets/1.png'


const Home = () => {
    return (
        <> 
            <Header />
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3" >
                            <h1>1287+</h1>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3" >
                            <h1>5786+</h1>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3" >
                            <h1>1440+</h1>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3" >
                            <h1>7110+</h1>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-7" >
                            <img src={prideimg} title="prideimg" />
                        </div>
                        <div className="col-md-5" >
                            <h2>We pride ourselves on <br></br> making real food from the <br></br> best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a className="btn btn-lg btn-primary" href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;