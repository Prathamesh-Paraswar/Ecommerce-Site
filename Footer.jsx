import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer()
{
    return(
        <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
            <section className="mb-4">
                <div className="d-flex justify-content-center border border-primary">
                    <a  className="fa fa-facebook"></a>
                    <a className= "fa fa-instagram"></a>
                    <a  className= "fa fa-twitter"></a> 
                </div>
                
            </section>
            
        </div>
        <div className="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}>
            © 2022 Copyright:
            <a className="text-white" href="#!">Prathamesh Paraswar</a>
        </div>
        </footer>
    )
}

export default Footer;