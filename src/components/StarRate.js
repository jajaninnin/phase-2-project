import React from "react";
import { FaStar } from "react-icons/fa";

// StarRate component now receives rating and setRating as props
export default function StarRate({ rating, setRating }) {
    return (
        <>
            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1;
                return (
                    <FaStar
                        key={index}
                        size={20} // Adjust the size as needed
                        color={currentRate <= rating ? "yellow" : "grey"}
                        onClick={() => setRating(currentRate)} // Set rating when star is clicked
                        style={{ cursor: "pointer" }} // Change cursor to pointer for interactivity
                    />
                );
            })}
        </>
    );
}