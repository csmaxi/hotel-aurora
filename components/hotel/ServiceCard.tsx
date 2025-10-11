import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
  iconBgColor: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  iconColor,
  iconBgColor,
}: ServiceCardProps) {
  return (
    <div className="text-center p-4 md:p-6 rounded-lg hover:bg-gray-50 transition-colors">
      <div className={`w-14 h-14 md:w-16 md:h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`w-6 h-6 md:w-8 md:h-8 ${iconColor}`} />
      </div>
      <h3 className="text-lg md:text-xl font-serif mb-2">{title}</h3>
      <p className="text-sm md:text-base text-slate-600">{description}</p>
    </div>
  )
}

