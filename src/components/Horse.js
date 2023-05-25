import React from 'react';
import { useSpring, animated } from 'react-spring';



const Horse = () => {

    const animationProps = useSpring({
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity:  1, transform: 'scale(1)' },
        config: { duration: 1000 },

    });

    return (
        <animated.div style={animationProps}>
            {/* Find Horse Image */}
            <img src="horse.png" alt="Horse" />
        </animated.div>    
    );
};



export default Horse;