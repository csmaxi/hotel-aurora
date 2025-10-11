import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl md:text-2xl font-serif">Hotel Aurora</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
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

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm md:text-base">
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

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li>Spa & Wellness</li>
              <li>Restaurante Gourmet</li>
              <li>Piscina Infinity</li>
              <li>Traslados VIP</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm md:text-base text-gray-300">
              <p>+54 11 4567-8900</p>
              <p>reservas@hotelaurora.com</p>
              <p>Av. Costanera 1234</p>
              <p>Zona Turística</p>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hotel Aurora. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <Link href="#" className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white text-xs md:text-sm transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

