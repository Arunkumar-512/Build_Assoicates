type Message = {

  role: "user" | "assistant"

  content: string
}

const conversations:
Record<string, Message[]> = {}

export function saveMessage(

  sessionId: string,

  role: "user" | "assistant",

  content: string

) {

  if (!conversations[sessionId]) {

    conversations[sessionId] = []
  }

  conversations[sessionId].push({

    role,

    content
  })

  // LIMIT MEMORY
  conversations[sessionId] =
    conversations[sessionId].slice(-10)
}

export function getConversation(
  sessionId: string
) {

  return conversations[sessionId] || []
}