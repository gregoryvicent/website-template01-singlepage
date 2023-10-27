// Importamos el componente Header de '../components/Header'
import Header from '../components/Header'
import JourneySection from '@/components/JourneySection.tsx'
import MyViewsSection from '@/components/MyViewsSection'
import MySystemSection from '@/components/MySystemSection/MySystemSection'
import SocialMediaSection from '@/components/SocialMediaSection'

// Exportamos la función Home como el componente predeterminado
export default function Home() {
  return (
    // El componente principal que se devuelve es un elemento <main>
    <main>
      {/* El componente Header representa la cabezera de la pagina web con la imagen del usuario y titulo principal de presentación */}
      <Header />
      {/* Insertamos el componente JourneySection, que representa la sección de la página que muestra el recorrido profesional del usuario */}
      <JourneySection />
      {/* Insertamos el componente MyViewsSection, que representa la sección de la página que muestra las vistas del usuario */}
      <MyViewsSection />
      {/* Insertamos el componente MySystemSection, que representa la sección de la página que muestra el sistema del usuario */}
      <MySystemSection />
      {/* Insertamos el componente SocialMediaSection, que representa la sección de la página que muestra las redes sociales del usuario */}
      <SocialMediaSection />
    </main>
  )
}