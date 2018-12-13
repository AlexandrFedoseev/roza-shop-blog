import React from "react"
import styles from "./siteMenu.module.scss"

export default () => (
    <div className={styles.siteMenu}>
        <ul>
            <li>
                <span className={styles.no}>No</span>
                <em className={styles.num}>1</em>
                <a href="/">
                    <p>Главная</p>
                    <span>→</span>
                </a>
            </li>
            <li>
                <span className={styles.no}>No</span>
                <em className={styles.num}>2</em>
                <a href="/services/">
                    <p>Услуги</p>
                    <span>→</span>
                </a>
            </li>
            <li>
                <span className={styles.no}>No</span>
                <em className={styles.num}>3</em>
                <a href="/projects/">
                    <p>Проекты</p>
                    <span>→</span>
                </a>
            </li>
            <li>
                <span className={styles.no}>No</span>
                <em className={styles.num}>4</em>
                <a href="/contacts/">
                    <p>Контакты</p>
                    <span>→</span>
                </a>
            </li>
        </ul>
    </div>
)
