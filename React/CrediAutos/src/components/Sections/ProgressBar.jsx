import { useEffect, useState } from 'react';
import '../../assets/styles/progressBar.css';

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
        setScrollProgress(scrollPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollProgress);
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    return (
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
    );
};

export default ProgressBar;
