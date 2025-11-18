"use client";

import { memo, useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export const Preloader = memo(() => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Add preloader-site class to body on mount
        document.body.classList.add('preloader-site');

        // Wait for window load event
        const handleLoad = () => {
            setIsVisible(false);
            document.body.classList.remove('preloader-site');
        };

        if (document.readyState === 'complete') {
            // If already loaded, trigger immediately
            handleLoad();
        } else {
            // Otherwise wait for load event
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
            document.body.classList.remove('preloader-site');
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={styles.preloaderWrapper}>
            <div className={styles.preloader} />
        </div>
    )
});

Preloader.displayName = "Preloader";