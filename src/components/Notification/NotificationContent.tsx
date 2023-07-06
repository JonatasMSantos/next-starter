interface NotificationContentProps {
  text: string
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="fle flex-1 flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
        {text}
      </p>
      <div className="flex items-center gap-1 text-xxs text-zinc-500 dark:text-zinc-400">
        <span>Convite</span>
        <span>Há 3 min</span>
      </div>
    </div>
  )
}
