import React from "react";

function MobSecondMenu(){

    function openMenu(){
        document.querySelector('.MobSecondMenu').classList.toggle('active');
    }

    return(
        <nav className="MobSecondMenu" onClick={openMenu}>
            <ul className="MobSecondMenu_links">
                <li className="s-li"><a href="">Գլխավոր</a></li>
                <li className="s-li"><a href="">Մեր Մասին</a></li>
                <li className="s-li"><a href="">Կոնտենտ</a>
                    <ul>
                        <li><a href="">Վեբ Դասեր</a></li>
                        <li><a href="">Խաղեր</a></li>
                        <li><a href="">Թեմպլեյտներ</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default MobSecondMenu