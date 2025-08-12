import { useState, useEffect } from "react";

export const useScrollSpy = (sections: string[]) => {
    const [activeSection, setActiveSection] = useState(sections[0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if( section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    return [activeSection, setActiveSection] as const;
}