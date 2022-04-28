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
                    <div className="products">
                        <li><a href=""><img src="images/logo/casterlogo.png" alt="" /> <span>Caster</span></a></li>
                        <li><a href=""><img src="images/icons/codeeditor.svg" alt="" /> <span>CodeEditor</span></a></li>
                    </div>
                </ul>
                <div className="notification">
                    <img src="images/icons/notification.svg" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Menu