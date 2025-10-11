import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  avatar?: string
  rating?: number
}

export default function TestimonialCard({
  quote,
  name,
  location,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card className="p-4 md:p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <Quote className="w-6 h-6 md:w-8 md:h-8 text-amber-400 mr-2 flex-shrink-0" />
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-sm md:text-base text-slate-600 mb-4 flex-1">{quote}</p>
      <div className="flex items-center">
        <div className="relative w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden flex-shrink-0">
          {avatar ? (
            <Image src={avatar} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600"></div>
          )}
        </div>
        <div>
          <p className="font-semibold text-slate-800 text-sm md:text-base">{name}</p>
          <p className="text-xs md:text-sm text-slate-600">{location}</p>
        </div>
      </div>
    </Card>
  )
}

