import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';


const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-16 absolute text-white bg-gradient-to-r from-black">
     <h1 className="text-5xl font-bold">{title}</h1>
     <p className="py-6 text-lg w-1/3">{overview}</p>
     <div>
      <button className="bg-white text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-80">
      <FontAwesomeIcon icon={faPlay} /> Play</button>
      <button className="mx-2 bg-gray-400 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg">
      <FontAwesomeIcon icon={faInfoCircle} /> More Info</button>
     </div>
    </div>
  )
} 

export default VideoTitle;

