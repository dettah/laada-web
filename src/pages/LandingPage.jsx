import React from 'react'
import NavBar from '../Components/shared/NavBar'
import Footer from '../Components/shared/Footer'
import HeroBg from '../assets/heroBg.png'
import school from '../assets/HeroRhombus/Schools.png'
import print from '../assets/HeroRhombus/Printshop.png'
import store from '../assets/HeroRhombus/Stores.png'
import taxi from '../assets/HeroRhombus/LocalTaxi.png'
import seeAll from '../assets/HeroRhombus/seeAll.png'
import CarouselSlider from '../Components/carousel/CarouselSlider';
import oneClick from '../assets/oneClick.png'
import linkage from '../assets/linkage.png'
import layla1 from '../assets/layla.jpeg'
import arrow from '../assets/arrow.png'
import pos from '../assets/pos.png'
import marketWoman from '../assets/marketWoman.png'
import join from '../assets/join.png'
import map from '../assets/map.png'
import mall from '../assets/mall.png'
import carouselRight from '../assets/carouselRight.png'
import arrowDown from '../assets/arrowDown.png'
import scan from '../assets/scan.png'
import LearnButton from '../Components/LearnButton'


const LandingPage = () => {
  return (
    <div>
      <NavBar />

      <div className='mx-20'>
        <div className='w-full h-[744px]bg-cover pt-[200px] h-screen rounded-[10px]' style={{ backgroundImage: `url(${HeroBg})` }}>

          <h1 className='pb-10 text-[50px] text-white font-bold'>Find + connect with people and places </h1>
          <input type="search" name="search" placeholder='Type to find' className='px-6 rounded mb-20 w-[630px] h-[56px]' id="" />


          <div className=' flex justify-center'>
            <img src={school} alt="school" />
            <img src={print} alt="print" />
            <img src={store} alt="stores" />
            <img src={taxi} alt="Taxi" />
            <img src={seeAll} alt="see all" />
          </div>




        </div>

        <h2 className='text-[48px] font-semibold mt-28 mb-6 '>Top Bush Markets People Visit</h2>

        <div>
          <CarouselSlider />
        </div>

        <div className='flex mt-[140px] gap-10'>
          <div>
            <img src={oneClick} alt="" className='rounded-[8px]' />
          </div>
          <div className='w-[50%] text-left'>
            <div className='text-[48px] border '>
              <span className='text-[#E01A4F] font-semibold text-[53px]'>With One Click</span><br /> Buy food items quick and easy from <span className='underline decoration-[#E01A4F] underline-offset-4' >bush markets</span>  across Nigeria
            </div>
            <button className='text-[16px] w-[101px] h-[51px] rounded text-[#E01A4F] mt-10 border border-[#E01A4F]'>
              Start now
            </button>
          </div>
        </div>

        <p className='text-center text-[48px] mt-36 leading-[1.3] px-40'>We celebrate your convenience! With our assisted market solution, you can now do your market shopping with ease when you connect with our <span className='text-[#E01A4F]'> trusted and reliable </span>agents to all your vendors across various city and local markets.</p>


        <img src={linkage} alt="" className=' my-40  rounded-[10px] ' />

        <h3 className='font-semibold text-[48px] my-20 ' >One-Stop-Payment for all your shopping </h3>

        <div className='h-[342px] w-[960px] m-auto flex items-center gap-40' >
          <div className='text-left'>
            <p className=' text-[32px] '>Utilize the convenience of</p>
            <h3 className='text-[#E01A4F] font-bold text-[64px]'>Point of Sales</h3>
            <p className=' text-[32px] '>for seamless transactions</p>
          </div>
          <img src={pos} alt="" />

        </div>

        <div className='flex gap-5 mt-20 '>
          <img src={marketWoman} alt="" className='rounded-lg' />
          <div className='text-left'>
            <h3 className='font-semibold text-[38px] leading-1 '>Out-smart competitors,<br />Sell more as a Vendor!</h3>
            <p className='my-4 text-xl '>
              La'ada vendors are part of a huge trader community who connect with multiple customers that are always looking forward to buying from them.
              <br />  <br />
              They generate huge business traffic to their physical stores, increase sales, and receive instant payment from a variety of customers always searching and shopping using la'ada seamless payment.
            </p>
            <button className='flex text-[#E01A4F] items-center gap-2 border-none'>Learn more
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <div className='flex my-36 gap-5'>
          <div className='text-left py-20'>
            <h3 className='font-semibold text-[45px] mb-6'>Join our community</h3>
            <p className='my-4 text-xl'>
              Connect with like minded individuals, unlock new opportunities, exchange information and advertise your products.
              <br /> <br />
              Get information about current trends, market insights, local discoveries, and development in various industries.
            </p>
            <button className='flex text-[#E01A4F] items-center gap-2 border-none'>Learn more
              <img src={arrow} alt="" />
            </button>
          </div>

          <img src={join} alt="" className='rounded-lg w-[753px] h-[538px]' />

        </div>
      </div>
      <div className='bg-[#EBEBEB] px-20'>

        <div className='mb-7 '>
          <div className='pt-20'>
            <h3 className=' text-[52px] font-semibold text-[#E01A4F]' >Do you need a boost?</h3>
            <h4 className='mb-10 text-[48px]' >Spotlight your business on the map</h4>
            <div>
              <img src={map} alt="" className='rounded-[8px]' />
              <button className='flex text-[#E01A4F] items-center gap-2 border-none float-right my-2 '>Learn more
                <img src={arrow} alt="" />
              </button>
            </div>

          </div>

        </div>

        <div className='flex justify-between mt-[160px] border bg-[#EBEBEB] w-full p-6'>
          <div className='text-left border h-[506px] relative'>
            <h4 className='text-[30px]' >Discover La'ada...</h4>
            <p className='text-[18px] mt-5' >Learn more about what you can do with La'ada</p>
            <img src={carouselRight} alt="" className='absolute bottom-10 rounded right-10' />
          </div>
          <div className='w-[779px] h-[506px]'>
            <img src={mall} alt="" className=' rounded-[8px]' />
            <div className='text-left'>
              <h4 className='mt-5 text-xl'>List of Market with the best Discounts</h4>
              <p>Alaba Int'l market</p>
            </div>
          </div>
        </div>
      </div>

      <div className='my-40'>
        <h3 className='text-[40px] font-semibold'>Need to know more?</h3>
        <div className='flex gap-20 mt-14'>
          <div className='mx-20 '>
            <h2 className=' text-left text-2xl mb-8' >FAQs</h2>
            <div className='flex items-center gap-4 mb-6' >
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <img src={arrowDown} alt="" className='w-4' />

            </div>
            <div className='flex items-center gap-4 mb-6' >
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <img src={arrowDown} alt="" className='w-4' />

            </div>
            <div className='flex items-center gap-4 mb-6' >
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <img src={arrowDown} alt="" className='w-4' />

            </div>
            <div className='flex items-center gap-4 mb-6' >
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <img src={arrowDown} alt="" className='w-4' />

            </div>
            <div className='flex items-center gap-4 mb-6' >
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <img src={arrowDown} alt="" className='w-4' />

            </div>
            <div className='flex items-center gap-4 mb-6' >
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <img src={arrowDown} alt="" className='w-4' />

            </div>

          </div>

          <div className='bg-[#fde6a9] p-8 w-[520px] h-[545px]'>
            <h3 className='text-left text-4xl mb-10 '>Scan-to-pay</h3>
            <img src={scan} alt="" className='' />
            <div className='flex mt-12 justify-between '>
              <p>Download our app to enjoy new feature</p>
              <LearnButton/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage