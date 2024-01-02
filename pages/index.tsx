import {BottomBar }from '@/components/BottomBar';
import MainScreen from '@/components/MainScreen';
import Toast from '@/components/Toast';
import ModalPlayList from '@/components/ModalPlayList'

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Toast />
      <MainScreen />
      <BottomBar />
      <ModalPlayList />
    </main>
  )
}
