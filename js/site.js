// File: /js/site.js

export function headerContent(){
    return `
    <div><img class="header-img" src="res/mia.png" onclick="loadPage('homepage');"><h1 class="header-text">Beagley Industries</h1></div>
    `;
}

export function footerContent(){
    return `
    <div class="footer-top">
        <p class="copy-text">&copy; 2026 C. Small. All rights reserved.</p>
        <p class="perm-text">Site technical design used with permission.</p>
    </div>

    <div class="footer-bottom">
        <p class="motto-text"><i>Ad Majorem Dei Gloriam</i></p>
    </div>
    `;
}
