import React, { useState, useEffect } from 'react';
import '../style/Ajay/style.css'
import axios from 'axios';

const Video = () => {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/Data/video.json'); 
                setVideo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div className="flex justify-center items-center h-screen">
        <div className='video'>
            <div className='container-1 flex'>
                <div className='video-wrapper'>
                    <div className='video-container pb-1'>

                    <h1 className=' font-inter font-bold leading-55.67'>Create Better <br /> Videos</h1>

                <div>
                    <div className='pb-1'>
                        <p className='lfont-inter text-base font-normal leading-19.76 pt-[20px]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con</p>
                    </div>
                    <div className='max-w-max pb-1 pt-[20px]'>
                        <button className='btn rounded-4px  font-inter rounded-4 gap-10px text-xs font-bold pl-7 pr-7 pt-3 pb-3 bg-blue-600 text-white'>Get Started Now</button>
                    </div>
                </div>
                </div>
                </div>

                <div className='products  '>
                    {video.map((video) => (
                        <div className='product-cards-container '  key=     {video.id}> 
                            <div className='' >
                                <img src= {video.icon} alt="" /></div>
                            <h3 className='pt-[20px] text-'>{video.heading}</h3>
                            <p className='pt-[20px]'>{video.description}</p>
                        </div>
                    ))}
                </div>

                
            </div>
        </div>
        </div>
    );
}

export default Video;