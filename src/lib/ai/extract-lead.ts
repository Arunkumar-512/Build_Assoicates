export function extractLead(message: string) {

  const phoneRegex =
    /(\+91)?[6-9]\d{9}/g

  const phone =
    message.match(phoneRegex)?.[0]

  return {
    phone
  }
}