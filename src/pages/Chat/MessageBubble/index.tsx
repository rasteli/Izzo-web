import styles from "./styles.module.scss"

interface MessageBubbleProps {
  sender: string
  text: string
  sentAt: number
}

export function MessageBubble({ sender, text, sentAt }: MessageBubbleProps) {
  const senderIsUser = sender === "user"

  // Calculate Date.now() to hour string
  const sentAtHour = new Date(sentAt).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit"
  })

  return (
    <div className={`${senderIsUser ? styles.userBubble : styles.AIBubble}`}>
      <p>{text}</p>
      <span>{sentAtHour}</span>
    </div>
  )
}
