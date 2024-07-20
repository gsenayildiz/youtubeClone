import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { VideoContext } from '../context/videoContext';
import Loader from '../components/Loader';
import ErrorDisplay from '../components/ErrorDisplay';
import VideoCard from '../components/VideoCard';


const Feed = () => {
//*VideoContexte useContext yapısı ile abone olup, içerisine tanımladığımız statelere eriştik.
  const {error, isLoading, videos } = useContext(VideoContext);
 //console.log(videos);
  return (
    <div className='flex'>
      <Sidebar />

       <div className='videos'>
       {isLoading ? (<Loader />) 
       : error ? (<ErrorDisplay />) 
       : (videos?.map((item) => 
          item.type === "video" 
       && <VideoCard video={item} key={item.videoId} />) 
         )}
       </div>
    </div>
  )
}

export default Feed;
