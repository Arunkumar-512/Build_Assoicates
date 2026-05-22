export function detectIntent(message: string) {

  const text = message.toLowerCase()

  // PRICING
  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("budget") ||
    text.includes("quotation")
  ) {

    return "pricing_inquiry"
  }

  // CONSULTATION
  if (
    text.includes("contact") ||
    text.includes("call me") ||
    text.includes("consultation") ||
    text.includes("meeting")
  ) {

    return "consultation_request"
  }

  // SERVICE REQUEST
  if (
    text.includes("design") ||
    text.includes("house") ||
    text.includes("villa") ||
    text.includes("interior") ||
    text.includes("3d")
  ) {

    return "service_inquiry"
  }

  // SUPPORT
  if (
    text.includes("help") ||
    text.includes("problem") ||
    text.includes("issue")
  ) {

    return "support_request"
  }

  return "general_inquiry"
}