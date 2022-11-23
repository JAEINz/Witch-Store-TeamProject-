// $(document).ready(function(){

//     document.getElementById("footer").innerHTML='<object type="text/html" data="footer.html"></object>';

// })

import React from "react";
import style from "./footer.module.css"

function Footer(){
    return(
        <footer id="footer">
        <div class="footer-container">
            
            <div class="footer-box">
                <div class="footer-copy-box">
                    <p>
                        서울특별시 강남구 선릉로 433, 신관 6층<br />
                         team K1ng의 모든 컨텐츠는 저작권의 보호를 받고 있습니다.<br />
                        Copyright © 2022 team K1ng all rights Reserved.
                    </p>
                </div>
    
                <div class="footer-sns-box">
                    <a href="#"><i class="fa-brands fa-square-youtube"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
            
        </div>
    </footer>
    )
}

export default Footer;