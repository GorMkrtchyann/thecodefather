import React from "react";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer_logo">
                    <img src="images/logo/TCFLogo.png" alt="" />
                </div>
                    <ul className="footer_list">
                        <h3>Հիմնական</h3>
                        <li><a href="#header">Գլխավոր</a></li>
                        <li><a href="https://gormkrtchyann.github.io/thecodefather-about/" target={"_blank"}>Մասին</a></li>
                        <li><a href="#content">Վեբ Դասեր</a></li>
                        <li><a href="#content">Խաղեր</a></li>
                        <li><a href="#content">Թեմպլեյթներ</a></li>
                        <li><a href="#contact">Կոնտակտ</a></li>
                    </ul>

                    <ul className="footer_list">
                        <h3>Վեբ Դասեր</h3>
                        <li><a href="https://gormkrtchyann.github.io/HTMLLesson/" target={"_blank"}>HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">Bootstrap</a></li>
                        <li><a href="#">SASS</a></li>
                    </ul>

                    <ul className="footer_list">
                        <h3>Խաղեր</h3>
                        <li><a href="https://gormkrtchyann.github.io/thecodefather2.0/games/flexboxdevelopers/index.html" target={"_blank"}>FlexBox Developers</a></li>
                        <li><a href="https://gormkrtchyann.github.io/js-game/" target={"_blank"}>JavaScript Memory</a></li>
                        <li><a href="https://gormkrtchyann.github.io/thecodefather2.0/games/quiz/Html%20Quiz/index.html" target={"_blank"}>HTML Quiz</a></li>
                        <li><a href="https://gormkrtchyann.github.io/thecodefather2.0/games/quiz/Css%20Quiz/index.html" target={"_blank"}>CSS Quiz</a></li>
                        <li><a href="https://gormkrtchyann.github.io/thecodefather2.0/games/quiz/Bootstrap%20Quiz/index.html" target={"_blank"}>JS Quiz</a></li>
                        <li><a href="https://gormkrtchyann.github.io/thecodefather2.0/games/quiz/Js%20Quiz/index.html" target={"_blank"}>Bootstrap Quiz</a></li>
                    </ul>
            </div>
            <i>TheCodeFather<span>(3.0)</span>-2022</i>
        </footer>
    )
}

export default Footer