import { knowledgeBase } from "./knowledge"

export function searchKnowledge(
  message: string
) {

  const query =
    message.toLowerCase()

  const words =
    query.split(" ")

  return knowledgeBase.filter(item => {

    const searchableText = `

      ${item.title}
      ${item.content}

    `.toLowerCase()

    return words.some(word =>

      searchableText.includes(word)
    )
  })
}