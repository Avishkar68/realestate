import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 md:py-24 text-gray-800 font-serif">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Villa Sofia Branding */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 mb-8 md:mb-0">
          <h2 className="text-3xl font-light mb-2">Villa Sofia</h2>
          <p className="text-lg text-gray-700">Experience Ultimate Luxury</p>
        </div>

        {/* Contact Info */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li>info@villasofia.com</li>
            <li>+30 12 34 567 89</li>
          </ul>
        </div>

        {/* Sitemap */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
            Sitemap
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Info</a></li>
            <li><a href="#" className="hover:underline">Explore</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="mb-8 md:mb-0">
          <h4 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
            Socials
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Savee</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
            Legal
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright / Made by */}
      <div className="container mx-auto px-4 mt-16 text-sm text-gray-500">
        <p>Made by ena.supply</p>
      </div>
    </footer>
  );
};

export default Footer;
