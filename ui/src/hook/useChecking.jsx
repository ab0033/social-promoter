import React, {useLayoutEffect, useState} from 'react';

export default function UseChecking() {
    const [checked, setChecked] = useState(true);

    useLayoutEffect(() => {
        function checkPosition() {
            if (window.scrollY > 5) {
                setChecked(false);
            }
            if (window.scrollY < 4) {
                setChecked(true);
            }
        }
        window.addEventListener('scroll', checkPosition);
        checkPosition();
        return () => window.removeEventListener('scroll', checkPosition);
    }, []);
    return checked;
}