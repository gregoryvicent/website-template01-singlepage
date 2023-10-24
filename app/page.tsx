// Importamos el componente Image de 'next/image'
import Image from 'next/image'

// Importamos el componente Header de '../components/Header'
import Header from '../components/Header'

// Exportamos la función Home como el componente predeterminado
export default function Home() {
  return (
    // El componente principal que se devuelve es un elemento <main>
    <main className="">
      {/* Dentro del elemento <main>, insertamos el componente Header */}
      <Header />
    </main>
  )
}