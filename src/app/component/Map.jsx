import React from "react";

export default function Map() {
    return (
      <div className="absolute w-full h-[584px] top-[2794px] left-[-1px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9024940593594!2d-73.6274542845942!3d40.70621304523426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2617e476a7615%3A0x6a14ec3b83f0b1b!2sHempstead%2C%20NY%2011550%2C%20USA!5e0!3m2!1sen!2sin!4v1616449933220!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    );
  }
  