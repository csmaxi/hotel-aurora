import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Quote,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HotelAurora() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-2xl font-serif text-slate-800">Hotel Aurora</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-slate-700 hover:text-amber-600 transition-colors">
                Inicio
              </Link>
              <Link href="#habitaciones" className="text-slate-700 hover:text-amber-600 transition-colors">
                Habitaciones
              </Link>
              <Link href="#servicios" className="text-slate-700 hover:text-amber-600 transition-colors">
                Servicios
              </Link>
              <Link href="#galeria" className="text-slate-700 hover:text-amber-600 transition-colors">
                Galería
              </Link>
              <Link href="#contacto" className="text-slate-700 hover:text-amber-600 transition-colors">
                Contacto
              </Link>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Reservar Ahora</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hotel Aurora Exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Descansá donde empieza
            <span className="block text-amber-400">la experiencia</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            Hotel boutique de 4 estrellas en el corazón de la zona turística
          </p>

          {/* Quick Booking Form */}
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Check-in</label>
                  <Input type="date" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Check-out</label>
                  <Input type="date" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Huéspedes</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>1 Adulto</option>
                    <option>2 Adultos</option>
                    <option>2 Adultos, 1 Niño</option>
                    <option>Familia (4+)</option>
                  </select>
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white h-10">Consultar Disponibilidad</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Habitaciones Section */}
      <section id="habitaciones" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Nuestras Habitaciones</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Espacios diseñados para tu comodidad y descanso, con vistas espectaculares y amenities de lujo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Habitación Estándar */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Habitación Estándar"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-amber-600">Más Popular</Badge>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-serif mb-2">Habitación Estándar</CardTitle>
                <CardDescription className="text-slate-600 mb-4">
                  Elegante habitación con vista al jardín, perfecta para parejas o viajeros de negocios.
                </CardDescription>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Wifi className="w-4 h-4 mr-2" />
                    WiFi gratuito de alta velocidad
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Coffee className="w-4 h-4 mr-2" />
                    Minibar y cafetera
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Car className="w-4 h-4 mr-2" />
                    Estacionamiento incluido
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-amber-600">$120</span>
                    <span className="text-slate-600">/noche</span>
                  </div>
                  <Button className="bg-slate-800 hover:bg-slate-900 text-white">Reservar</Button>
                </div>
              </CardContent>
            </Card>

            {/* Suite */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=600" alt="Suite" fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-blue-900">Premium</Badge>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-serif mb-2">Suite Aurora</CardTitle>
                <CardDescription className="text-slate-600 mb-4">
                  Amplia suite con sala de estar separada, balcón privado y vista panorámica.
                </CardDescription>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Spa className="w-4 h-4 mr-2" />
                    Acceso gratuito al spa
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Utensils className="w-4 h-4 mr-2" />
                    Servicio a la habitación 24h
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="w-4 h-4 mr-2" />
                    Amenities de lujo
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-amber-600">$280</span>
                    <span className="text-slate-600">/noche</span>
                  </div>
                  <Button className="bg-slate-800 hover:bg-slate-900 text-white">Reservar</Button>
                </div>
              </CardContent>
            </Card>

            {/* Habitación Familiar */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Habitación Familiar"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Familiar</Badge>
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-serif mb-2">Habitación Familiar</CardTitle>
                <CardDescription className="text-slate-600 mb-4">
                  Espaciosa habitación con camas adicionales, ideal para familias con niños.
                </CardDescription>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="w-4 h-4 mr-2" />
                    Hasta 4 personas
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Heart className="w-4 h-4 mr-2" />
                    Actividades para niños
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Shield className="w-4 h-4 mr-2" />
                    Zona de juegos segura
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-amber-600">$200</span>
                    <span className="text-slate-600">/noche</span>
                  </div>
                  <Button className="bg-slate-800 hover:bg-slate-900 text-white">Reservar</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Servicios Exclusivos</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Disfruta de nuestras instalaciones de primera clase y servicios personalizados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Spa className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-serif mb-2">Spa & Wellness</h3>
              <p className="text-slate-600">Tratamientos relajantes y terapias de bienestar con productos naturales</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif mb-2">Piscina Infinity</h3>
              <p className="text-slate-600">Piscina climatizada con vista panorámica y área de relajación</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif mb-2">Gimnasio 24h</h3>
              <p className="text-slate-600">Equipamiento moderno y entrenadores personales disponibles</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-serif mb-2">Restaurante Gourmet</h3>
              <p className="text-slate-600">Cocina internacional y local con ingredientes frescos de temporada</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-serif mb-2">Bar & Lounge</h3>
              <p className="text-slate-600">Cócteles artesanales y ambiente relajado con música en vivo</p>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-serif mb-2">Traslados VIP</h3>
              <p className="text-slate-600">Servicio de transporte al aeropuerto y tours personalizados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería Section */}
      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Galería</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Descubre la belleza y elegancia de nuestras instalaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Lobby del hotel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Piscina"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Restaurante"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Spa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Vista panorámica"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Habitación de lujo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Lo que dicen nuestros huéspedes</h2>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
              <span className="ml-2 text-xl font-semibold text-slate-700">4.9/5</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-amber-400 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "Una experiencia inolvidable. El servicio es excepcional y las instalaciones son de primera clase.
                Definitivamente volveremos."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-slate-800">María González</p>
                  <p className="text-sm text-slate-600">Buenos Aires, Argentina</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-amber-400 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "El spa es increíble y la comida del restaurante es exquisita. Un lugar perfecto para relajarse y
                desconectar."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-slate-800">Carlos Mendoza</p>
                  <p className="text-sm text-slate-600">Montevideo, Uruguay</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-amber-400 mr-2" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "Perfecto para familias. Los niños se divirtieron mucho y nosotros pudimos relajarnos. Altamente
                recomendado."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-slate-800">Ana Silva</p>
                  <p className="text-sm text-slate-600">São Paulo, Brasil</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ubicación Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Ubicación Privilegiada</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              En el corazón de la zona turística, cerca de las mejores atracciones
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-600">Mapa Interactivo</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif mb-4">Cómo llegar</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Car className="w-5 h-5 text-amber-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Desde el aeropuerto</p>
                      <p className="text-slate-600">25 minutos en auto - Servicio de traslado disponible</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-amber-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Centro de la ciudad</p>
                      <p className="text-slate-600">10 minutos caminando - Transporte público cercano</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-2xl font-serif mb-4">Atractivos cercanos</h3>
                <div className="space-y-2">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-slate-600 mb-6">
                Hotel Aurora nació de la pasión por la hospitalidad auténtica y el deseo de crear experiencias
                memorables. Desde 2015, hemos sido reconocidos por nuestro servicio excepcional y atención al detalle.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Nuestro equipo de profesionales dedicados trabaja incansablemente para superar las expectativas de cada
                huésped, combinando la calidez humana con la excelencia en el servicio.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-semibold">Premio Excelencia</p>
                  <p className="text-sm text-slate-600">TripAdvisor 2023</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-semibold">Certificación</p>
                  <p className="text-sm text-slate-600">Turismo Sustentable</p>
                </div>
              </div>
            </div>

            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Equipo Hotel Aurora"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Experiencias Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Experiencias & Tips</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Descubre los mejores lugares y actividades de la zona
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Guía gastronómica"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Guía Gastronómica Local</CardTitle>
                <CardDescription className="mb-4">
                  Los mejores restaurantes y platos típicos que no puedes perderte durante tu estadía.
                </CardDescription>
                <Link href="#" className="text-amber-600 hover:text-amber-700 flex items-center">
                  Leer más <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Actividades de aventura"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Aventuras al Aire Libre</CardTitle>
                <CardDescription className="mb-4">
                  Senderismo, deportes acuáticos y excursiones para los amantes de la naturaleza.
                </CardDescription>
                <Link href="#" className="text-amber-600 hover:text-amber-700 flex items-center">
                  Leer más <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=400" alt="Cultura local" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Cultura y Tradiciones</CardTitle>
                <CardDescription className="mb-4">
                  Sumérgete en la rica historia y tradiciones locales con nuestras recomendaciones.
                </CardDescription>
                <Link href="#" className="text-amber-600 hover:text-amber-700 flex items-center">
                  Leer más <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-4">Contacto</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Estamos aquí para hacer tu estadía perfecta</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-slate-600">+54 11 4567-8900</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-slate-600">+54 9 11 4567-8900</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-600">reservas@hotelaurora.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-slate-600">Av. Costanera 1234, Zona Turística</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
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

            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[120px]"
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
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-2xl font-serif">Hotel Aurora</span>
              </div>
              <p className="text-gray-300 mb-4">
                Tu refugio de lujo en el corazón de la zona turística. Experiencias inolvidables te esperan.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#habitaciones" className="text-gray-300 hover:text-white transition-colors">
                    Habitaciones
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#galeria" className="text-gray-300 hover:text-white transition-colors">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-300">Spa & Wellness</span>
                </li>
                <li>
                  <span className="text-gray-300">Restaurante Gourmet</span>
                </li>
                <li>
                  <span className="text-gray-300">Piscina Infinity</span>
                </li>
                <li>
                  <span className="text-gray-300">Traslados VIP</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>+54 11 4567-8900</p>
                <p>reservas@hotelaurora.com</p>
                <p>Av. Costanera 1234</p>
                <p>Zona Turística</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Hotel Aurora. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
