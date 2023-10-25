// Este es el componente Header de la aplicación
export default function Header() {
  return (
    // Este es el elemento principal del Header
    <header className={`w-full h-screen bg-cover bg-no-repeat bg-fixed bg-[url('/image/people.jpg')]`} style={{ backgroundPosition: '80% 40%' }}>
    {/* Aquí se controla la imagen de fondo del Header y su posición con el 'backgroundPosition' */}
      <div className="flex justify-center items-center mx-auto px-6 h-screen">
        {/* Este div es el cuadro donde se sostiene el texto */}
        <div className="bg-[rgba(0,0,0,0.3)] rounded-lg container max-w-[780px]">
          {/* Este span contiene un texto introductorio */}
          <span className="text-white text-center font-normal text-2xl sm:text-3xl block mt-10 overflow-y-hidden"><i>Hola, yo soy</i></span>
          {/* Este h1 contiene el nombre principal */}
          <h1 className="flex justify-center items-center flex-col text-white text-center font-bold text-6xl sm:text-8xl mx-10 mb-8 h-[150px] overflow-y-hidden">Lara Rojas</h1>
        </div>
      </div>
    </header>
  )
}