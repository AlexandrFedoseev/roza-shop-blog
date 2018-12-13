import React from "react"
import ReactDOM from "react-dom"
import { Link } from "gatsby"
import styles from "./menuBtn.module.scss"
import headerStyles from "./header.module.scss"
import SiteMenu from "./siteMenu"

let menuButton = (btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle(styles.isMenu);
        ReactDOM.findDOMNode(btn).parentNode.parentNode.parentNode.parentNode.classList.toggle(headerStyles.isMenu);
    });
}

export default (props) => (
    <div >
        <div id="menu_btn" className={styles.menuBtn} ref={menuButton}>
            <span className={styles.top}></span>
            <span className={styles.center}></span>
            <span className={styles.bottom}></span>
        </div>
    </div>
)
