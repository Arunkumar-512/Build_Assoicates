import { services } from "./services"

export function recommendServices(userMessage: string) {

  const message =
    userMessage.toLowerCase()

  const matchedServices = services.filter(service =>

    service.keywords.some(keyword =>

      message.includes(keyword)
    )
  )

  return matchedServices.map(service => ({
    name: service.name,

    category: service.category,

    description: service.description,

    benefits: service.benefits
  }))
}