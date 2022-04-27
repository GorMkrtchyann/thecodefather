import React from "react";

function Content(){

    return(
        <section className="content">
            <div className="content_desktop" id="content_desktop">
                <div className="container">
                    <div className="items">
                        <div className="icons" id="web-icon">
                            <a href="https://gormkrtchyann.github.io/HTMLLesson/" target={"_blank"}>
                                <i className="fa-brands fa-html5"><p>HTML</p></i>
                            </a>
                            <i className="fa-brands fa-css3-alt"><p>CSS</p></i>
                            <i className="fa-brands fa-bootstrap"><p>BS</p></i>
                            <i className="fa-brands fa-sass"><p>SASS</p></i>
                            <i className="fa-brands fa-js"><p>JS</p></i>
                        </div>
                        <div className="main-item" id="web-logo">
                            <img src="images/icons/weblesson.svg" alt="" />
                            <p>Վեբ Դասեր</p>
                        </div>
                    </div>

                    <div className="items">
                        <div className="game-icons" id="game-icon">
                            <a href="games/flexboxdevelopers/index.html" target={"_blank"}>
                                <i className="fa-solid fa-users">
                                    <p>FlexBox Dev</p></i>
                            </a>
                            <a href="https://gormkrtchyann.github.io/js-game/" target={"_blank"}>
                                <i className="fa-solid fa-brain">
                                    <p>JS Memory</p></i>
                            </a>
                            <a href="games/quiz/Html Quiz/index.html" target={"_blank"}>
                                <i className="fa-brands fa-html5">
                                    <p>HTML Quiz</p>
                                </i>
                            </a>
                            <a href="games/quiz/Css Quiz/index.html" target={"_blank"}>
                                <i className="fa-brands fa-css3-alt">
                                    <p>CSS Quiz</p>
                                </i>
                            </a>
                            <a href="games/quiz/Bootstrap Quiz/index.html" target={"_blank"}>
                                <i className="fa-brands fa-bootstrap">
                                    <p>BS Quiz</p>
                                </i>
                            </a>
                            <a href="games/quiz/Js Quiz/index.html" target={"_blank"}>
                                <i className="fa-brands fa-js">
                                    <p>JS Quiz</p>
                                </i>
                            </a>
                        </div>
                        <div className="main-item" id="game-logo">
                            <img src="images/icons/game.svg" alt="" />
                            <p>Խաղեր</p>
                        </div>
                    </div>


                    <div className="items">
                        <div className="temp-icons" id="temp-icon">
                            <a href="https://gormkrtchyann.github.io/templates/" target={"_blank"}>
                                <i className="fa-brands fa-shopify">
                                    <p>Խանութ</p></i>
                            </a>
                            <a href="https://gormkrtchyann.github.io/templates/" target={"_blank"}>
                                <i className="fa-brands fa-bitcoin">
                                    <p>Կրիպտո</p>
                                </i>
                            </a>
                            <a href="https://gormkrtchyann.github.io/templates/" target={"_blank"}>
                                <i className="fa-brands fa-42-group">
                                    <p>Ավելին</p>
                                </i>
                            </a>
                        </div>
                        <div className="main-item" id="temp-logo">
                            <img src="images/icons/template.svg" alt="" />
                            <p>Թեմպլեյթներ</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Content