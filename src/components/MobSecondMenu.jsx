import React from "react";

function MobSecondMenu(){

    function openMenu(){
        document.querySelector('.MobSecondMenu').classList.toggle('active');
    }

    return(
        <nav className="MobSecondMenu" onClick={openMenu}>
            <div className="icon"></div>
            <ul className="MobSecondMenu_links">
                <li><a href=""><img src="images/logo/casterlogo.png" alt="" /> Caster</a></li>
                <li><a href=""><img src="images/icons/codeeditor.svg" alt="" /> CodeEditor</a></li>
                <li><a href=""><img src="images/icons/notification.svg" alt="" /> Ծանուցում</a></li>
            </ul>
        </nav>
    )
}

export default MobSecondMenu