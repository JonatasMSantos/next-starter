'use client'

import { ArrowRight, Check, Rocket, X } from 'lucide-react'
import { Notification } from './Notification'

export function Widget() {
  return (
    <div className="mt-2 w-[410px] overflow-hidden rounded p-3">
      {/** Header */}
      <div className="item-center flex justify-between bg-zinc-200  px-6 py-4 dark:bg-zinc-800">
        <span className="font-bold">Notificações</span>
        <button className="text-xs font-bold text-violet-500 hover:text-violet-400">
          Marcar todas como vistas
        </button>
      </div>

      {/** Recent Section */}
      <div>
        <div className="bg-zinc-300 px-5 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite" />
            <Notification.Actions>
              <Notification.Action onClick={() => {}} icon={X} />
              <Notification.Action
                icon={Check}
                className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"
              />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite" />
            <Notification.Actions>
              <Notification.Action onClick={() => {}} icon={X} />
              <Notification.Action
                icon={ArrowRight}
                className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>
    </div>
  )
}
