import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  Star,
  Wifi,
  Car,
  Coffee,
  Waves,
  Dumbbell,
  Utensils,
  SpadeIcon as Spa,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Award,
  Shield,
  Heart,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Importar componentes nuevos
import Navigation from "@/components/hotel/Navigation"
import Hero from "@/components/hotel/Hero"
import RoomCard from "@/components/hotel/RoomCard"
import ServiceCard from "@/components/hotel/ServiceCard"
import TestimonialCard from "@/components/hotel/TestimonialCard"
import Footer from "@/components/hotel/Footer"

export default function HotelAurora() {
  // Datos de habitaciones
  const rooms = [
    {
      image: "/room-standard.jpg",
      title: "Habitación Estándar",
      description: "Elegante habitación con vista al jardín, perfecta para parejas o viajeros de negocios.",
      features: [
        { icon: Wifi, text: "WiFi gratuito de alta velocidad" },
        { icon: Coffee, text: "Minibar y cafetera" },
        { icon: Car, text: "Estacionamiento incluido" },
      ],
      price: 120,
      badgeText: "Más Popular",
      badgeColor: "bg-amber-600",
    },
    {
      image: "/room-suite.jpg",
      title: "Suite Aurora",
      description: "Amplia suite con sala de estar separada, balcón privado y vista panorámica.",
      features: [
        { icon: Spa, text: "Acceso gratuito al spa" },
        { icon: Utensils, text: "Servicio a la habitación 24h" },
        { icon: Award, text: "Amenities de lujo" },
      ],
      price: 280,
      badgeText: "Premium",
      badgeColor: "bg-blue-900",
    },
    {
      image: "/room-family.jpg",
      title: "Habitación Familiar",
      description: "Espaciosa habitación con camas adicionales, ideal para familias con niños.",
      features: [
        { icon: Users, text: "Hasta 4 personas" },
        { icon: Heart, text: "Actividades para niños" },
        { icon: Shield, text: "Zona de juegos segura" },
      ],
      price: 200,
      badgeText: "Familiar",
      badgeColor: "bg-green-600",
    },
  ]

  // Datos de servicios
  const services = [
    {
      icon: Spa,
      title: "Spa & Wellness",
      description: "Tratamientos relajantes y terapias de bienestar con productos naturales",
      iconColor: "text-amber-600",
      iconBgColor: "bg-amber-100",
    },
    {
      icon: Waves,
      title: "Piscina Infinity",
      description: "Piscina climatizada con vista panorámica y área de relajación",
      iconColor: "text-blue-600",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: Dumbbell,
      title: "Gimnasio 24h",
      description: "Equipamiento moderno y entrenadores personales disponibles",
      iconColor: "text-green-600",
      iconBgColor: "bg-green-100",
    },
    {
      icon: Utensils,
      title: "Restaurante Gourmet",
      description: "Cocina internacional y local con ingredientes frescos de temporada",
      iconColor: "text-orange-600",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: Coffee,
      title: "Bar & Lounge",
      description: "Cócteles artesanales y ambiente relajado con música en vivo",
      iconColor: "text-purple-600",
      iconBgColor: "bg-purple-100",
    },
    {
      icon: Car,
      title: "Traslados VIP",
      description: "Servicio de transporte al aeropuerto y tours personalizados",
      iconColor: "text-red-600",
      iconBgColor: "bg-red-100",
    },
  ]

  // Datos de testimonios
  const testimonials = [
    {
      quote:
        "Una experiencia inolvidable. El servicio es excepcional y las instalaciones son de primera clase. Definitivamente volveremos.",
      name: "María González",
      location: "Buenos Aires, Argentina",
    },
    {
      quote:
        "El spa es increíble y la comida del restaurante es exquisita. Un lugar perfecto para relajarse y desconectar.",
      name: "Carlos Mendoza",
      location: "Montevideo, Uruguay",
    },
    {
      quote:
        "Perfecto para familias. Los niños se divirtieron mucho y nosotros pudimos relajarnos. Altamente recomendado.",
      name: "Ana Silva",
      location: "São Paulo, Brasil",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Habitaciones Section */}
      <section id="habitaciones" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-4">
              Nuestras Habitaciones
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Espacios diseñados para tu comodidad y descanso, con vistas espectaculares y amenities de lujo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-4">
              Servicios Exclusivos
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Disfruta de nuestras instalaciones de primera clase y servicios personalizados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-4">Galería</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Descubre la belleza y elegancia de nuestras instalaciones
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/lobby.jpg", alt: "Lobby del hotel" },
              { src: "/pool.jpg", alt: "Piscina" },
              { src: "/restaurant.jpg", alt: "Restaurante" },
              { src: "/spa.jpg", alt: "Spa" },
              { src: "/view.jpg", alt: "Vista panorámica" },
              { src: "/room-suite.jpg", alt: "Habitación de lujo" },
            ].map((image, index) => (
              <div key={index} className="relative h-64 md:h-80 overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-4">
              Lo que dicen nuestros huéspedes
            </h2>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-amber-400 fill-current" />
              ))}
              <span className="ml-2 text-lg md:text-xl font-semibold text-slate-700">4.9/5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-4">
              Ubicación Privilegiada
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              En el corazón de la zona turística, cerca de las mejores atracciones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="bg-gray-300 h-64 md:h-96 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-600">Mapa Interactivo</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-4">Cómo llegar</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Car className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Desde el aeropuerto</p>
                      <p className="text-sm md:text-base text-slate-600">
                        25 minutos en auto - Servicio de traslado disponible
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Centro de la ciudad</p>
                      <p className="text-sm md:text-base text-slate-600">
                        10 minutos caminando - Transporte público cercano
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-4">Atractivos cercanos</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <div className="flex items-center justify-between">
                    <span>Playa principal</span>
                    <span className="text-slate-600">5 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Centro histórico</span>
                    <span className="text-slate-600">8 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Museo de arte</span>
                    <span className="text-slate-600">12 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Mercado local</span>
                    <span className="text-slate-600">15 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-4 md:mb-6">
                Nuestra Historia
              </h2>
              <p className="text-base md:text-lg text-slate-600 mb-4 md:mb-6">
                Hotel Aurora nació de la pasión por la hospitalidad auténtica y el deseo de crear experiencias
                memorables. Desde 2015, hemos sido reconocidos por nuestro servicio excepcional y atención al
                detalle.
              </p>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8">
                Nuestro equipo de profesionales dedicados trabaja incansablemente para superar las expectativas
                de cada huésped, combinando la calidez humana con la excelencia en el servicio.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm md:text-base">Premio Excelencia</p>
                  <p className="text-xs md:text-sm text-slate-600">TripAdvisor 2023</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm md:text-base">Certificación</p>
                  <p className="text-xs md:text-sm text-slate-600">Turismo Sustentable</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 md:h-96 order-1 lg:order-2">
              <Image src="/team.jpg" alt="Equipo Hotel Aurora" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Experiencias Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-4">
              Experiencias & Tips
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Descubre los mejores lugares y actividades de la zona
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image: "/food-guide.jpg",
                title: "Guía Gastronómica Local",
                description:
                  "Los mejores restaurantes y platos típicos que no puedes perderte durante tu estadía.",
              },
              {
                image: "/adventure.jpg",
                title: "Aventuras al Aire Libre",
                description: "Senderismo, deportes acuáticos y excursiones para los amantes de la naturaleza.",
              },
              {
                image: "/culture.jpg",
                title: "Cultura y Tradiciones",
                description: "Sumérgete en la rica historia y tradiciones locales con nuestras recomendaciones.",
              },
            ].map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40 md:h-48">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4 md:p-6">
                  <CardTitle className="mb-2 text-lg md:text-xl">{article.title}</CardTitle>
                  <CardDescription className="mb-4 text-sm md:text-base">{article.description}</CardDescription>
                  <Link href="#" className="text-amber-600 hover:text-amber-700 flex items-center text-sm md:text-base">
                    Leer más <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-800 mb-4">Contacto</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Estamos aquí para hacer tu estadía perfecta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-serif mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm md:text-base">Teléfono</p>
                    <p className="text-sm md:text-base text-slate-600">+54 11 4567-8900</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm md:text-base">WhatsApp</p>
                    <p className="text-sm md:text-base text-slate-600">+54 9 11 4567-8900</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm md:text-base">Email</p>
                    <p className="text-sm md:text-base text-slate-600">reservas@hotelaurora.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm md:text-base">Dirección</p>
                    <p className="text-sm md:text-base text-slate-600">Av. Costanera 1234, Zona Turística</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-base md:text-lg font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="hover:bg-amber-50">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-amber-50">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-amber-50">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-4 md:p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg md:text-xl">Envíanos un mensaje</CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Completa el formulario y te responderemos a la brevedad
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre</label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Asunto</label>
                    <Input placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[120px] text-sm md:text-base"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Enviar Mensaje</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
