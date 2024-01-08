
import { Si1001Tracklists } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";



export default function MusicInList({ music }) {
  function handleDeleteMusic (music){
    window.electronAPI.SendToElectron('music-delete', music)
  }
  function handleAdicionarMusica (music){
    window.electronAPI.SendToElectron('music-to-play', music);
  }
  return (
    <div className="p-2 flex flex-col items-center border border-gray-500 rounded-md w-60 gap-3 h-50">
      <Si1001Tracklists size={50} />
      <div className="flex flex-col items-center w-full gap-5">

        <div className="mx-auto">
          <h2 className="text-white h-6 overflow-hidden">{music}</h2>
        </div>
        <div className="flex gap-5 relative bottom-2">
            <IoMdAdd className="hover:scale-110 delay-75" size={30} onClick={() => handleAdicionarMusica(music)} />
            <IoTrashBin className="hover:scale-110 delay-75"  size={30} onClick={() => handleDeleteMusic(music)} />
        </div>
      </div>
    </div>
  );
}