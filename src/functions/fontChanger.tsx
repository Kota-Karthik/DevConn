import { useEffect } from "react";

export const FontChanger = (changingFontDiv: React.RefObject<HTMLDivElement>, delay: number): void => {
    const fonts: string[] = ["Offbit-2", "Offbit-3", "Offbit-5"];

    useEffect(() => {
        const interval = setInterval(() => {
            if (changingFontDiv.current) {
                const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                changingFontDiv.current.style.fontFamily = randomFont;
            }
        }, delay);

        return () => clearInterval(interval);
    }, []);
};
