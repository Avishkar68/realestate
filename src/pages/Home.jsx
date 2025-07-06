import React, { useState } from 'react'

const Home = () => {
  const testimonials = [
    {
      text: "We loved the blend of traditional architecture and modern comforts at Villa Sofia. The staff were friendly and attentive, the views were breathtaking, and the location was ideal. We can't recommend this place enough!",
      author: "Timotheus",
    },
    {
      text: "Villa Sofia exceeded all our expectations! The serene environment, exquisite design, and impeccable service made our stay truly unforgettable. A perfect getaway for relaxation and luxury.",
      author: "Eleanor Vance",
    },
    {
      text: "From the moment we arrived, we felt completely at home. The attention to detail in every corner of Villa Sofia is remarkable. It's a hidden gem that offers both tranquility and adventure.",
      author: "Marcus Aurelius",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentTestimonialIndex(index);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className='relative bg-[url(../src/assets/hero.jpg)] bg-center bg-cover bg-no-repeat w-screen h-screen'>
        <div className='absolute inset-0 bg-[#00000035] bg-opacity-40'></div>
        <div className='relative z-10 w-full h-full flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center text-center text-white px-4'>
            <p className='font-sans text-[16px] leading-[16px] font-[300] tracking-[1px]'>Villa Sofia</p>
            <p className='font-garamond text-[40px] md:text-[70px] leading-[40px] md:leading-[70px] mb-6'>Your Luxurious<br /> Retreat in Santorini</p>
            <button className='text-[14px] font-sans border-[1px] border-white rounded-2xl px-8 py-1 hover:bg-white hover:text-[#262626] transition duration-300'>inquire</button>
          </div>
        </div>
      </div>

      {/* The Villa Section */}
      <div className='bg-white text-[#262626] min-h-screen mt-[80px] md:mt-[180px]'>
        <div className='relative z-10 w-full h-full flex items-center justify-center px-4 md:px-0'>
          <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-sans text-[16px] leading-[16px] font-[300] tracking-[1px] mb-[10px]'>THE VILLA</p>
            <p className='font-garamond text-[48px] md:text-[100px] leading-[48px] md:leading-[108px] mb-6'>Experience Unparalleled<br /> Luxury and Serenity</p>
            <div className='h-[300px] md:h-[470px] w-full md:w-[360px] bg-[url(../src/assets/hero2.jpg)] bg-center bg-cover bg-no-repeat'></div>
          </div>
        </div>
        
        <div className='w-full flex justify-center md:justify-end mt-[60px] md:mt-[140px] px-4 md:px-[60px]'>
          <p className='w-full md:w-[405px] text-[16px] leading-[19px] font-sans font-[300] text-center md:text-left'>Where timeless elegance meets modern comfort. Nestled in the heart of Santorini, our private villa offers a tranquil sanctuary overlooking the breathtaking Aegean Sea.</p>
        </div>
        
        <div className='w-full flex flex-col mt-[60px] md:mt-[140px] px-4 md:px-[60px] gap-4'>
          <div className='w-full h-[300px] md:h-[750px] bg-[url(../src/assets/hero3.jpg)] bg-center bg-cover bg-no-repeat'></div>
          <div className='flex flex-col md:flex-row w-full justify-between items-start gap-4 md:gap-0'>
            <p className='text-[28px] md:text-[36px] font-garamond'>Absolute Tranquility</p>
            <p className='w-full md:w-[405px] text-[16px] leading-[19px] font-sans font-[300]'>Our villa features meticulously designed interiors and boasts spacious living areas, lavish bedrooms, and private terraces that offer breathtaking views of the Santorini landscape.</p>
          </div>
        </div>
        
        {/* Features Section */}
        <div className='w-full mt-[80px] md:mt-[180px] flex items-center justify-center px-4 md:px-0'>
          <div className='flex flex-col items-center justify-center text-center'>
            <p className='font-sans text-[16px] leading-[16px] font-[300] tracking-[1px] mb-2'>FEATURES</p>
            <p className='font-garamond text-[48px] md:text-[70px] leading-[48px] md:leading-[70px] mb-6'>Your Ideal Stay</p>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-[40px]'>
              {[...Array(8)].map((_, i) => (
                <p key={i} className='text-[20px] md:text-[28px] leading-[20px] md:leading-[28px] w-full md:w-[426px] border-b border-[#BEBCB7] text-left font-garamond font-[300] pb-4'>
                  Living Area: 75 sqm. (807 sq. ft)
                </p>
              ))}
            </div>
            <button className='text-[14px] mt-8 md:mt-16 font-sans border-[1px] border-black rounded-2xl px-4 py-1 hover:bg-black hover:text-white transition duration-300'>See All Features</button>
          </div>
        </div>
        
        {/* Exquisite Elegance Section */}
        <div className='w-full flex flex-col md:flex-row mt-[80px] md:mt-[200px] px-4 md:px-[60px] gap-4'>
          <div className='w-full h-[400px] md:h-[750px] bg-[url(../src/assets/hero4.jpg)] bg-center bg-cover bg-no-repeat'></div>
          <div className='flex flex-col w-full justify-between items-center gap-8 md:gap-0'>
            <p className='text-[48px] md:text-[100px] leading-[48px] md:leading-[108px] text-center font-garamond'>Exquisite<br />Elegance</p>
            <p className='w-full md:w-[460px] text-[16px] leading-[19px] text-center font-sans font-[300]'>Immerse yourself in the tranquillity of this exquisite villa, where every detail has been meticulously designed to create an unforgettable experience.</p>
          </div>
        </div>
        
        {/* Timeless Luxury Section */}
        <div className='relative bg-[url(../src/assets/hero4.jpg)] bg-center bg-cover bg-no-repeat mt-[80px] md:mt-[200px] w-screen h-[400px] md:h-screen'>
          <div className='relative z-10 w-full h-full flex flex-col'>
            <div className='flex flex-col items-center text-center text-white mt-[100px] md:mt-[340px]'>
              <div>
                <p className='font-sans text-[16px] leading-[16px] font-[300] tracking-[1px]'>Details</p>
                <p className='font-garamond text-[48px] md:text-[100px] leading-[48px] md:leading-[108px] mb-6'>Timeless Luxury</p>
              </div>
              <p className='w-[300px] mt-[60px] md:mt-[250px] text-[16px] leading-[19px] text-center font-sans font-[300]'>Captivating arcs and archways found throughout the villa pay homage to the island's architectural heritage.</p>
            </div>
          </div>
        </div>
        
        {/* Explore Section */}
        <div className='relative z-10 w-full h-full flex flex-col'>
          <div className='flex flex-col items-center text-center text-[#262626] mt-[80px] md:mt-[340px]'>
            <div>
              <p className='font-sans text-[16px] leading-[16px] font-[300] tracking-[1px]'>EXPLORE</p>
              <p className='font-garamond text-[48px] md:text-[100px] leading-[48px] md:leading-[108px] mb-6'>Discover the Magic<br /> of Santorini</p>
            </div>
          </div>
        </div>
        
        <div className='w-full flex flex-col mt-[40px] px-4 md:px-[60px] gap-4'>
          <div className='w-full h-[300px] md:h-[750px] bg-[url(../src/assets/hero5.jpeg)] bg-center bg-cover bg-no-repeat'></div>
          <div className='flex flex-col md:flex-row w-full justify-between items-start gap-4 md:gap-0'>
            <p className='w-full md:w-[660px] text-[16px] leading-[19px] font-sans font-[300]'>Santorini offers a myriad of activities and local attractions that will enchant every visitor. Immerse yourself in the rich history and culture of the island by exploring the ancient ruins of Akrotiri or wandering through the narrow streets of the charming village of Oia, famous for its stunning sunsets.</p>
            <button className='text-[14px] font-sans border-[1px] border-black rounded-2xl px-4 py-1 hover:bg-black hover:text-white transition duration-300'>Explore Activities</button>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-[300px] text-center font-serif">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-[16px] uppercase tracking-widest font-sans text-[#262626] mb-[0px]">
              Testimonials
            </h3>
            <h2 className="text-4xl md:text-[60px] font-light font-garamond text-[#262626] mb-[50px] leading-[48px] md:leading-[58px]">
              Experiences & Stories
            </h2>
            <p className="text-lg md:text-[28px] font-garamond text-[#262626] leading-[24px] md:leading-[28px] mb-[20px] max-w-2xl mx-auto">
              {currentTestimonial.text}
            </p>
            <p className="text-[12px] font-sans text-[#262626] mb-[48px]">
              {currentTestimonial.author}
            </p>
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`block w-2 h-2 rounded-full transition-colors duration-300
                    ${index === currentTestimonialIndex ? 'bg-[#262626]' : 'bg-gray-400'}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <div className='relative bg-[url(../src/assets/hero6.png)] bg-center bg-cover bg-no-repeat w-screen h-[400px] md:h-screen'>
          <div className='relative z-10 w-full h-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center text-center text-white px-4'>
              <p className='font-sans text-[16px] leading-[16px] font-[300] tracking-[1px] uppercase'>find your paradise</p>
              <p className='font-garamond text-[40px] md:text-[70px] leading-[40px] md:leading-[70px] mb-6'>Reserve your stay</p>
              <button className='text-[14px] font-sans border-[1px] border-white rounded-2xl px-8 py-1 hover:bg-white hover:text-[#262626] transition duration-300'>Inquire now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home