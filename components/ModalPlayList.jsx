import { useState } from "react"


export default function ModalPlayList(){
  const [musicPlayList, setMusicPlayList] = useState([])
  return(
    <div id="modal-play-list" className="absolute flex flex-col right-0 bottom-20 bg-[#212124] w-80 h-auto border-solid mr-2">
      <h1 className="text-center text-white">Playlist</h1>
      
      <dir className='m-4 bg-[#171719] '>
        { musicPlayList.length === 0 ? <p>Vazio</p> : musicPlayList.map((music)=>{
          return <p className="text-white" key={index}>{music}</p>
        })}
      </dir>
    </div>
  )
}