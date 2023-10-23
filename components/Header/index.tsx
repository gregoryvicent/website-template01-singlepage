export default function Header() {
  return (
    <header className="w-full h-screen bg-cover bg-center bg-[url('/image/people3.jpg')]">
      <div className="flex justify-center items-center container mx-auto px-6 h-screen">
        <div className="bg-[rgba(0,0,0,0.3)] rounded-lg">
          <span className="text-white text-center font-normal text-3xl block mt-10 overflow-y-hidden"><i>Hola, yo soy</i></span>
          <h1 className="text-white text-center font-bold text-8xl m-10 h-28 min-h-full overflow-y-hidden">Lara Rojas</h1>
        </div>
      </div>
    </header>
  )
}