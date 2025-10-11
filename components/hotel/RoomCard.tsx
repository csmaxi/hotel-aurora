import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { LucideIcon } from "lucide-react"

interface RoomFeature {
  icon: LucideIcon
  text: string
}

interface RoomCardProps {
  image: string
  title: string
  description: string
  features: RoomFeature[]
  price: number
  badgeText?: string
  badgeColor?: string
}

export default function RoomCard({
  image,
  title,
  description,
  features,
  price,
  badgeText,
  badgeColor = "bg-amber-600",
}: RoomCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative h-48 md:h-64">
        <Image src={image} alt={title} fill className="object-cover" />
        {badgeText && <Badge className={`absolute top-4 left-4 ${badgeColor}`}>{badgeText}</Badge>}
      </div>
      <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
        <CardTitle className="text-xl md:text-2xl font-serif mb-2">{title}</CardTitle>
        <CardDescription className="text-slate-600 mb-4">{description}</CardDescription>
        <div className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-slate-600">
              <feature.icon className="w-4 h-4 mr-2 flex-shrink-0" />
              {feature.text}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
          <div>
            <span className="text-2xl md:text-3xl font-bold text-amber-600">${price}</span>
            <span className="text-slate-600">/noche</span>
          </div>
          <Button className="bg-slate-800 hover:bg-slate-900 text-white w-full sm:w-auto">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

