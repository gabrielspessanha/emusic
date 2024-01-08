import { useState, useEffect } from "react";
import MusicInList from "./MusicInList";

export default function MusicList() {
    const [musicList, setMusicList] = useState([])
  
    const fetchMusicList = async () => {
        try {
            await window.electronAPI.SendToElectron('music-get')
            await window.electronAPI.ReciveFromElectron("music:list", (event, arg) => {
                setMusicList(arg);
            });
            
        } catch (error) {
            console.error('Erro ao obter a lista de músicas:', error);
        }
    };
  
    useEffect(() => {
        fetchMusicList()
    }, []);
    return (
        <div className="p-10">
            <h2 className="ml-5 mb-5 text-white text-2xl">Music List</h2>
            <div className="flex flex-wrap gap-5 w-full">
                {musicList.length === 0 ? <p className="text-zinc-400">Empty</p> : musicList.map((music, index) => {
                    return <MusicInList key={index} music={music} />
                })}
            </div>
        </div>
    )
  }