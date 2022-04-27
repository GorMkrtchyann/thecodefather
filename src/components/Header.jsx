import React from "react";

function Header(){

    function hoverOn(){
        document.querySelector('.btn').classList.add('btn-hover');
    }
    function hoverOff(){
        document.querySelector('.btn').classList.remove('btn-hover');
    }

    return(
        <section>
            <header>
                <div className="container header">
                    <div className="header_text-btn">
                        <h1><span>The</span> CodeFather</h1>
                        <p>Սովորիր և զարգացրու ծրագրավորմանդ գիտելիքները մեզ հետ</p>
                        <a href="#">
                            <div className="btn" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                                <span>Մեր Մասին</span>
                                <div className="hover"></div>
                            </div>
                        </a>
                    </div>
                    <div className="header_img">
                        <div className="img">
                            <img src="images/vectors/vector-1-ani.gif" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;