import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HeroBg from '../assets/heroBg.png'
import market from '../assets/HeroRhombus/Marketplaces.png'
import print from '../assets/HeroRhombus/Printshop.png'
import store from '../assets/HeroRhombus/Stores.png'
import taxi from '../assets/HeroRhombus/LocalTaxi.png'
import seeAll from '../assets/HeroRhombus/seeAll.png'
// import CarouselSlider from '../Components/carousel/CarouselSlider';
import oneClick from '../assets/oneClick.png'
import linkage from '../assets/linkage.png'
import layla1 from '../assets/layla.jpeg'
import arrow from '../assets/arrow.png'
import pos from '../assets/pos.png'
import marketWoman from '../assets/marketWoman.png'
import join from '../assets/join.png'
import map from '../assets/map.png'
import landing12 from '../assets/landing12.png'
import carouselRight from '../assets/carouselRight.png'
import arrowDown from '../assets/arrowDown.png'
import scan from '../assets/scan.png'
import laada_farm from '../assets/laada_farm.jpg'
import LearnButton from '../Components/LearnButton'
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AOS from 'aos'
import 'aos/dist/aos.css'
import FAQ from '../Components/FAQ';
import { topMarkets } from '../../data';


const CarouselComp = ({ name, image, address }) => {
  return (
    <div className='flex justify- items-center bg-[#feeeed] border py-2 px-2 w-full  '>
      <div>
        <img
          // src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className=" h-[160px] xl:h-[180px] object-cover object-center"
          src={image}
        />
      </div>
      <div className='pl-4 flex flex-col justify-between h-[150px] xl:h-[150px] '>

        <div>
          <p className='font-bold'>{name}</p>
          <p className='text-[.9rem] pb-2'>{address}</p>
        </div>

        <div>
          <Link to={"/markets"}>
            <div className='cursor-pointer flex gap-x-2 items-center border rounded-lg text-red-500 border-red-500 py-1 px-1 max-w-fit '>
              <p className='whitespace-nowrap'>Visit  Now</p>
              <FaArrowRightLong className='text-xl' />
            </div>
          </Link>
        </div>
      </div>
    </div>


  )
}


const LandingPage = () => {
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1124 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1124, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    AOS.init({ duration: 600 })
    AOS.init({ duration: 600 })
  }, [])


  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  return (
    <div>


      <div className='px-4 lg:mx-20' >
        <div className='w-full px-4 lg:px-0 bg-cover pt-[160px] pb-40 rounded-[10px]' style={{ backgroundImage: `url(${HeroBg})` }}>

          <h1 className='pb-10 text-[24px] lg:text-[50px] text-white font-bold'>Find + connect with people and bush markets </h1>
          {/* <input type="search" name="search" placeholder='Type to find' className='px-6 rounded mb-20 w-[630px] h-[56px]' id="" /> */}


          <div className='flex justify-center'>


            <Link to={"/bushmarket/"}>
              <img src={market} alt="school" />
            </Link>
            <Link to={"/bushmarket/"}>
              <img src={market} alt="school" />
            </Link>
            <Link to={"/bushmarket/"}>
              <img src={market} alt="school" />
            </Link>
            <Link to={"/bushmarket/"}>
              <img src={market} alt="school" />
            </Link>
            <Link to={"/bushmarket/"}>
              <img src={seeAll} alt="see all" />
            </Link>



          </div>
        </div>


        <h2 className='text-[28px] lg:text-[42px] font-semibold mt-4 mb-6'>Top Bush Markets People Visit</h2>

    
        {/* CAROUSEL */}
        
          <Carousel
            // responsive={responsive}
            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            // infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlay={true}
            // autoPlaySpeed={1000}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-0-px"
          >

          {topMarkets.map(market => (
              <div key = {market.id}>
                  <CarouselComp name={market.name} address={market.address} image={market.marketImage} />
              </div>
            ))}

          </Carousel>
        
        {/* CAROUSEL */}


      


        {/* 
        <div>
          <CarouselSlider />
        </div> */}

        <div className="lg:flex mt-[140px] gap-10">

          <div data-aos='fade-right'>
            <img src={oneClick} alt="" className='rounded-[8px] w-full' />
          </div>
          <div className='w-full lg:w-[50%] text-left'>
            <div className='text-[38px] md:text-[48px] border '>
              <span className='text-[#E01A4F] font-semibold text-[53px]'>With One Click</span><br /> Buy food items quick and easy from <span className='underline decoration-[#E01A4F] underline-offset-4'>bush markets</span>  across Nigeria
            </div>

            <Link to={"/bushmarket/"}>

              <button className='text-[16px] w-[101px] h-[51px] rounded text-[#E01A4F] mt-10 border border-[#E01A4F]'>
                Start now
              </button>
            </Link>


          </div>
        </div>

        <p className='text-left md:text-center text-[38px] lg:text-[48px] mt-12 lg:mt-36 leading-[1.3] lg:px-40' data-aos='fade-up'>We celebrate your convenience! With our assisted market solution, you can now do your market shopping with ease when you connect with our <span className='text-[#E01A4F]'> trusted and reliable </span>agents to all your vendors across various city and local markets.</p>


        <img src={linkage} alt="" className='mt-8 md:mt-40 mb-5  rounded-[10px] ' data-aos='fade-up' />

        <Link to={"/ma/"}>

          <button className=' float-right border border-[#E01A4F] p-2 rounded hover:p-3 font-semibold '>
            Connect now
          </button>
        </Link>

        <h3 className='font-semibold md:text-[48px] mt-20 mb-12 md:my-20  text-[38px]' data-aos='fade-up'>One-Stop-Payment for all your shopping </h3>

        <div className=' w-full lg:h-[342px] lg:w-[960px] mb-8 md:m-auto md:flex items-center gap-40'>
          <div className='text-left' data-aos='fade-left'>
            <p className=' text-[32px] '>Utilize the convenience of</p>
            <h3 className='text-[#E01A4F] font-bold text-[38px] md:text-[64px]'>Point of Sales</h3>
            <p className=' text-[32px] '>for seamless transactions</p>
          </div>
          <img src={pos} alt="" data-aos='fade-right' />

        </div>

        <div className='lg:flex gap-5 mt-20' >


          <img src={marketWoman} alt="market woman" className='rounded-lg' />


          <div className='text-left' data-aos='fade-left'>
            <h3 className='font-semibold text-[38px] leading-1 '>Out-smart competitors,<br />Sell more as a Vendor!</h3>
            <p className='my-4 text-xl '>
              La'ada vendors are part of a huge trader community who connect with multiple customers that are always looking forward to buying from them.
              <br />  <br />
              They generate huge business traffic to their physical stores, increase sales, and receive instant payment from a variety of customers always searching and shopping using la'ada seamless payment.
            </p>

            <Link to={"/vendor/"}>

              <button className='flex text-[#E01A4F] items-center gap-2 border-none'>Learn more
                <img src={arrow} className='object-cover object-top' alt="" />
              </button>
            </Link>
          </div>
        </div>

        <div className='lg:flex my-36 gap-5'>
          <div className='text-left py-20' data-aos='fade-right'>
            <h3 className='font-semibold text-[45px] mb-6'>Join our community</h3>
            <p className='my-4 text-xl'>
              Connect with like minded individuals, unlock new opportunities, exchange information and advertise your products.
              <br /> <br />
              Get information about current trends, market insights, local discoveries, and development in various industries.
            </p>

            <Link to={"/community/"}>

              <button className='flex text-[#E01A4F] items-center gap-2 border-none'>Learn more
                <img src={arrow}  alt="" />
              </button>
            </Link>
          </div>

          <img src={join} alt="" className='rounded-lg lg:w-[753px] lg:h-[538px]' />

        </div>
      </div>
      <div className='bg-[#EBEBEB] lg:px-20 px-4'>

        <div className='mb-7  '>
          <div className='pt-20'>
            <h3 className='text-[38px] md:text-[52px] font-semibold text-[#E01A4F]' data-aos='fade-up'>Do you need a boost?</h3>
            <h4 className='mb-10 text-[48px]' data-aos='fade-up'>Spotlight your business on the map</h4>
            <div>
              <img src={map} alt="" className='rounded-[8px]' />
              <Link to={"/vendor/"}>

                <button className='flex text-[#E01A4F] items-center gap-2 border-none float-right my-2 '>Learn more
                  <img src={arrow} alt="" />
                </button>
              </Link>

            </div>

          </div>

        </div>

        <div className='flex justify-between mt-[160px] border bg-[#EBEBEB] w-full p-6'>
          <div className='text-left border h-[506px] relative' data-aos='fade-right'>
            <h4 className='text-[30px] ' >Discover La'ada...</h4>
            <p className='text-[18px] mt-5'>Learn more about what you can do with La'ada</p>

            <Link to={"/bushmarket/"}>
              <button>
                <img src={carouselRight} alt="" className='absolute bottom-10 rounded right-10 transition-transform duration-300 transform-gpu hover:scale-110' />
              </button>
            </Link>

          </div>
          <div className='w-[779px] h-[506px]' data-aos='fade-left'>
            <img src={landing12} alt="" className=' rounded-[8px]' />
            <div className='text-left'>
              <h4 className='mt-5 text-xl'>List of Market with the best Discounts</h4>
              <p>Alaba Int'l market</p>
            </div>
          </div>
        </div>
      </div>

      <div className='my-40 mb-80 md:mx-20 lg:mx-40'>
        <h3 className='text-[2.5rem] sm:px-0 px-4 font-semibold' data-aos='fade-up'>Need to know more?</h3>
        <div className='md:flex gap-20 justify-between mt-14' data-aos='fade-right'>
          <div className=' sm:px-0 px-4 '>

            <FAQ />

          </div>

          <div className='bg-[#fde6a9] p-8 w-full lg:w-[520px] sm:h-[545px] h-full' data-aos='fade-left'>
            <h3 className='text-left text-4xl mb-10 '>Scan-to-pay</h3>
            <img src={scan} alt="" className='w-full' />
            <div className='flex mt-12 justify-between '>
              <p>Download our app to enjoy new feature</p>
              <LearnButton />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage