import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubtitle";

export const MemoHook = () => {

  const [title, setTitle] = useState('Hola');
  const [subtitle, setSubTitle] = useState('Mundo');

  const handleMyAPICall = useCallback(() => {
    console.log('Llamar a mi API - ', subtitle);
  }, [subtitle])

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>
      <MyTitle title={title} />
      <MySubTitle subtitle={subtitle} callMyAPI={handleMyAPICall} />
      <button
        onClick={() => setTitle('Hello ' + Date.now())}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar titulo</button>
      <button
        onClick={() => setSubTitle('World')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Cambiar subtitulo</button>
    </div>
  )
}