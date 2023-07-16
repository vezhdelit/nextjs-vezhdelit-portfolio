import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-night">
      <div className="max-w-5xl flex flex-col sm:flex-row mx-auto py-8 md:py-24 px-3 lg:px-0 justify-between  space-y-3 sm:space-y-0">
        <h1 className="text-white text-lg text-center">
          Copyright © 2023. All rights are reserved
        </h1>
        <h1 className="text-white text-lg text-center">Developed by Vasyl Vezhdel</h1>
      </div>
    </footer>
  );
};

export default Footer;
