// Importamos el componente Header de '../components/Header'
import Header from '../components/Header'
import JourneySection from '@/components/JourneySection.tsx'
import MyViewsSection from '@/components/MyViewsSection'
import MySystemSection from '@/components/MySystemSection/MySystemSection'

// Exportamos la función Home como el componente predeterminado
export default function Home() {
  return (
    // El componente principal que se devuelve es un elemento <main>
    <main className="">
      {/* El componente Header representa la cabezera de la pagina web con la imagen del usuario y titulo principal de presentación */}
      <Header />
      {/* Insertamos el componente JourneySection, que representa la sección de la página que muestra el recorrido profesional del usuario */}
      <JourneySection />
      <MyViewsSection />
      <MySystemSection />
    </main>
  )
}