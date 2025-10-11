import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hotel-exterior.jpg"
          alt="Hotel Aurora Exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 py-12 md:py-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-4 md:mb-6 leading-tight">
          Descansá donde empieza
          <span className="block text-amber-400">la experiencia</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-200">
          Hotel boutique de 4 estrellas en el corazón de la zona turística
        </p>

        {/* Quick Booking Form */}
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 items-end">
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
              <Button className="bg-amber-600 hover:bg-amber-700 text-white h-10 w-full">
                Consultar Disponibilidad
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

