// Importamos el tipo Metadata de 'next'
import type { Metadata } from 'next'
// Importamos la fuente Inter de 'next/font/google'
import { Inter } from 'next/font/google'
// Importamos los estilos globales
import './globals.css'

// Creamos una instancia de la fuente Inter con el subconjunto 'latin'
const inter = Inter({ subsets: ['latin'] })

// Exportamos los metadatos de la aplicación
export const metadata: Metadata = {
  title: 'LaraTech', // Título de la aplicación
  description: 'LaraTech Portfolio', // Descripción de la aplicación
}

// Exportamos el componente RootLayout por defecto
export default function RootLayout({
  children, // Propiedad children que representa los componentos hijos
}: {
  children: React.ReactNode // Definimos el tipo de children como ReactNode
}) {
  return (
    // Devolvemos un elemento html con el atributo lang establecido en 'es'
    <html lang="es">
      {/* // Dentro del elemento html, tenemos un elemento body con la clase de la fuente Inter */}
      <body className={inter.className}>{children}</body> {/* Renderizamos los componentes hijos dentro del body */}
    </html>
  )
}