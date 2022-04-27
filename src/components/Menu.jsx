import React from "react";

const Menu = () =>{
    return(
        <nav className="menu">
            <div className="container">
                <ul>
                    <li className="li"><a href="#"><img src="images/icons/home.svg" alt="" /> <span>Գլխավոր</span></a></li>
                    <li className="li"><a href="#"><img src="images/icons/information.png" alt="" /> <span>Մեր Մասին</span></a></li>
                    <li className="li"><a href="#"><img src="images/icons/layout.png" alt="" /> <span>Կոնտենտ</span></a></li>
                    <li className="li"><a href="#"><img src="images/icons/phone-call.png" alt="" /> <span>Կոնտակտ</span></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu