import React from 'react';
import booksData from "../../public/books.json";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const featuredBooks = booksData.slice(0, 4);

  return (
    <div className="bg-primary py-4">
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        <div className="flex items-center gap-10 mx-10 text-white font-bold uppercase tracking-widest text-sm">
          
          {featuredBooks.map((book, index) => (
            <React.Fragment key={index}>
              <span>New Arrivals: {book.title}</span>
              <span className="opacity-40">|</span>
            </React.Fragment>
          ))}

          <span>Special Discount on Memberships...</span>
          <span className="opacity-40">|</span>

          <span>Read Anywhere, Anytime</span>
          <span className="opacity-40">|</span>

        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;