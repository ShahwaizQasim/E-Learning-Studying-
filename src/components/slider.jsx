import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Slider() {
    return (
        <div className='container-slider'>
            <div className="grid grid-cols-2">
                <div className="flex w-full border-2 border-[#000] relative top-32 pb-[100px]">
                    <div className="slider-sec-1">
                        <h1 className='section-heading text-white font-[700]'> <span className='text-[#f48c06] font-[700]'>Studying </span>Online is now</h1>
                        <h1 className='section-heading2 text-white font-[700]'>much easier</h1>
                        <p className='slider-para'>TOTC is an interesting platform that will teach you in more an interactive way</p>
                        <div className="flex">
                        <button className='bg-[#FFFFFF4D] text-white text-[14px] w-[140px] h-[40px] rounded-[80px] font-[600] 
                        relative left-[120px] top-[110px] mb-[50px]'>
                            Join for free
                        </button>
                         <div className="slider-circle flex justify-center items-center">
                            <PlayArrowIcon style={{
                                color:'#23bdee',
                                fontSize:'1.6rem'
                            }}/>
                         </div>
                         <p className='slider-para2'>watch how its work</p>
                        </div>
                    </div>
                </div>
                <div className="flex border-2 border-[#000] relative top-32"></div>
            </div>
        </div>

    )
}

export default Slider