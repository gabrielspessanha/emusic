import { useState, useEffect } from "react"


export default function ModalPlayList(){
  const [musicPlayList, setMusicPlayList] = useState([])

  useEffect(() => {
    window.electronAPI.ReciveFromElectron("music-playable", (event, music)=>{
      setMusicPlayList([...musicPlayList, music])
    })
  }, [musicPlayList])
  
  
  return(
    <div id="modal-play-list" className="absolute flex flex-col right-0 bottom-24 bg-[#212124] w-96 h-auto p-2 ">
      <h1 className="text-center text-white font-bold text-lg">Playlist</h1>
      
      <dir className='flex flex-col gap-3'>
        { musicPlayList.length === 0 ? <p>Vazio</p> : musicPlayList.map((music, index)=>{
          return <p className="text-white bg-[#171719]" key={index}>{music}</p>
        })}
      </dir>
    </div>
  )
}