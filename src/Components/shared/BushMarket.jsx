import React from 'react'
import bushMarket from '../../assets/bushMarket.png'
import CommunityCarousel from '../carousel/CommunityCarousel'

const BushMarket = () => {
    return (
        <div>
            <section className=' text-center pt-20 my-[92px]'>
                <h3 className=' text-3xl mb-9 '>Bush Market</h3>
                <h2 className='text-5xl leading-[1.5]'>Your community hub for local insights and market <br /> trends</h2>
                <button className='text-[#e01a4f] rounded-[6px] px-6 py-[8px] font-bold text-xl my-9'>Enter market</button>

                <img src={bushMarket} alt="" className=' w-[1122px] rounded m-auto' />
            </section>
            <CommunityCarousel/>
        </div>
    )
}

export default BushMarket