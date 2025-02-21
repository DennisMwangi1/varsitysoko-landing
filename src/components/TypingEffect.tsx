import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = () => {
    const text =
        "Your one-stop marketplace for campus essentials. Connect with fellow students, find what you need, and sell what you don't.";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (!isDeleting && index < text.length) {
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 50);
        } else if (isDeleting && index > 0) {
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }, 30);
        } else {
            timeout = setTimeout(() => {
                setIsDeleting((prev) => !prev);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text]);

    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
        >
            {displayText}
            <span className="animate-pulse">|</span> {/* Blinking Cursor */}
        </motion.p>
    );
};

export default TypingEffect;
