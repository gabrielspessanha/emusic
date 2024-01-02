import AdicionarIcon from './icons/Adicionaricon'
import ExcluirIcon from './icons/ExcluirIcon'
import AlbumVazioIcon from './icons/AlbumVazioIcon'

interface MusicListType {
  music: string
}


const MusicInList = ({music}: MusicListType) => {
  return (
    <div className="m-5 p-2 flex-row border-gray-500 w-full gap-2">
      <AlbumVazioIcon />
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-white">Nome</h1>
          <h2 className="text-white">{music}</h2>
        </div>

        <div className="flex flex-row justify-center gap-5 h-full">
          <AdicionarIcon onClick={()=> console.log('teste1')}/>
          <ExcluirIcon onClick={()=> console.log('teste2')} />
        </div>
      </div>
    </div>
  )
}

export default MusicInList