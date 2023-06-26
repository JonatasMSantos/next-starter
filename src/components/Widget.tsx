import { Rocket, X, Check } from "lucide-react";

export function Widget() {
  return (
    <div className="w-[410px] rounded overflow-hidden mt-2 p-3">
      {/** Header */}
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6  flex item-center justify-between">
        <span className="font-bold">Notificações</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          Marcar todas como vistas
        </button>
      </div>

      {/** Recent Section */}
      <div>
        <div className="font-medium bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
          <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
            <Rocket className=" w-6 h-6 text-violet-500 mt-3"></Rocket>
            <div className="flex-1 fle flex-col gap-2">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
                Você recebeu um convite
              </p>
              <div className="text-xxs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Há 3 min</span>
              </div>
            </div>

            <div className="flex gap-2 self-center">
              <button className="w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                <X className="w-3 h-3 text-zinc-50" />
              </button>

              <button className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600">
                <Check className="w-3 h-3 text-zinc-50" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
