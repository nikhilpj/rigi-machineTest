import {useEffect, useRef, useState} from 'react'
import { VIDEO_DATA } from '../utils/constants';
import ThumbnailCard from './ThumbnailCard';

const VideoComponent = () => {

  const [allData,setAllData] = useState(VIDEO_DATA)
    const [data,setData] = useState(VIDEO_DATA[0])
    const [isPlaying,setIsPlaying] = useState(true)
    const [search,setSearch] = useState('')
    const videoRef = useRef(null)
    console.log(data,'data in state')

    
      const changeVideo=(info)=>{
        setData(info)
        console.log("info when clicked",info)
        console.log("state after update",data)
      }
      
    const searchVideos=()=>{
      const results = allData.filter((info)=>info.title.toLowerCase()===search.toLowerCase())
      setAllData(results)
    }
   
      const TogglePlay=()=>{
        if(isPlaying)
        {
          videoRef.current.pause()
          
        }
        else{
          videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
      }
    
  return (
    <div className=" flex mt-10 h-full ">
      <div className='grid-cols-8 w-3/4 p-2  h-screen  '>
        <video  id='video'  autoPlay   ref={videoRef} key={data.video} poster={data.image}>
          
          <source
            src={data.video}
            type="video/mp4"
            
          ></source>
           
        </video>
        <div onClick={TogglePlay} className='absolute '>
          <h2 className='font-bold cursor-pointer text-red-500 '>{!isPlaying?'Play':'Pause'}</h2>
        </div>
       
       
      </div>
      <div className='grid-cols-2 p-2 w-1/5 ml-11 overflow-y-scroll h-screen cursor-pointer' >
        <div className='border-black  rounded-md my-2 flex' >
          <input className='w-10/12 border-4 border-black' type='text' placeholder='search' onChange={(e)=>{setSearch(e.target.value)}}></input>
          <button className='font-bold bg-red-500 text-white' onClick={searchVideos}>search</button>
        </div>
        {allData.map((card,index)=>{
        return  <div onClick={()=>changeVideo(card)}>
         <ThumbnailCard key={index} onClick={()=>changeVideo(card)} src={card.image} />
        </div>
          
})}
       

      </div>
    </div>
  );
};

export default VideoComponent;
