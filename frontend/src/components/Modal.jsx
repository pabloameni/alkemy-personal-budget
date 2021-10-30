import { useEffect } from "react";

const Modal = ({isOpen, title, children, onAccept, onCancel}) => {
    const styles = {
        overlay: {
            position: 'fixed',
            left: '0',
            top: '0',
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            width: '100vw',
            height: '100vh',
            overflow: 'auto',
            zIndex: '99999',
        },
        content: {
            width: '320px',
            backgroundColor: '#fff',
            margin: "0 auto",
        },
        title: {
            padding: "30px 15px 15px",
        },
        footer: {
            margin: "0 auto",
            padding: "15px",
        },
        button: {
            margin: "15px",
        }
    };

    // Close modal on Escape key press
    useEffect( () => {   
        const closeOnEscapeDown = (e) => {
            if ((e.charCode || e.keyCode) === 27) {
                onCancel();
            }
        };

        window.addEventListener('keydown', closeOnEscapeDown);

        return () => {
            window.removeEventListener('keydown', closeOnEscapeDown);
        }
    }, [onCancel]);

    if (!isOpen) {
        return null;
    }

    return (
        <div style={styles.overlay} onClick={onCancel}>
            <div style={styles.content} onClick={e => e.stopPropagation()}>
                <h2 style={styles.title}>{title}</h2>
                <div>
                    { children }
                </div>
                <div style={styles.footer}>
                    <button style={styles.button} onClick={onCancel}>Cancel</button>
                    <button style={styles.button} onClick={onAccept}>Ok</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;