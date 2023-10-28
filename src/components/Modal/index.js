import { React } from "react";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react';

const Modal = ({ onClose, content }) => {
    const closeByBackground = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    const closeByButton = () => {
        onClose();
    }


    return (
        <div className={styles.mainContainer}>
            <div className={styles.shadow}></div>
            <div className={styles.mainContentArea}>
                <div className={styles.container} onClick={closeByBackground}>
                    <div className={styles.contentArea}>
                        <div className={styles.topArea}>
                            <button className={styles.button} onClick={closeByButton}>
                                <Icon icon="tabler:x" />
                            </button>
                        </div>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
