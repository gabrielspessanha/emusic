import PlayListIcon from './icons/PlayListIcon'
import ControlMusic from './ControlMusic'

export function BottomBar(){

  function handleModalPlayList(){
    document.getElementById("modal-play-list").classList.toggle('hidden')
  }

  return(
    <>
      <nav className="fixed bottom-0 pt-4 w-full h-24 bg-[#1f1f22] flex justify-cente">
        <ControlMusic />
      </nav>
      <div className="absolute flex justify-end items-center bottom-0 right-0 p-7">
        <PlayListIcon onClick={handleModalPlayList} />
      </div>
    </>
  )
}