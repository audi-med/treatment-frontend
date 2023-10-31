import { React } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const Modal = ({ onClose, content }) => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.container}>
                <div className={styles.backdrop} onClick={onClose}></div>
                <div className={styles.contentArea}>
                    <div className={styles.topArea}>
                        <button className={styles.button} onClick={onClose}>
                            <Icon icon="tabler:x" />
                        </button>
                    </div>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Modal
