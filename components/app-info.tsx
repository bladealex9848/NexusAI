'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Menu, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Suspense } from 'react'
import { useAppState } from '@/lib/utils/app-state'

type AppInfoProps = {
  location: 'sidebar' | 'header'
  children?: React.ReactNode
}

export function AppInfo({ location, children }: AppInfoProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const { isGenerating, setIsGenerating } = useAppState()

  const onOpenChange = (open: boolean) => {
    if (open) {
      startTransition(() => {
        router.refresh()
      })
    }
  }

  return (
    <Sheet onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn({
            'rounded-full text-foreground/30': location === 'sidebar'
          })}
          disabled={isGenerating}
        >
          {location === 'header' ? <Menu /> : <ChevronLeft size={16} />}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-64 rounded-tl-xl rounded-bl-xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1 text-sm font-normal mb-2">
            <Info size={14} />
            Información de la Aplicación
          </SheetTitle>
        </SheetHeader>
        <div className="my-2 h-full pb-12 md:pb-10 overflow-y-auto">
          <Suspense fallback={<div>Cargando...</div>}>
            <AppInfoContent />
          </Suspense>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function AppInfoContent() {
  return (
    <div className="space-y-4">
      <section>
        <h3 className="font-semibold">¿Qué es NexusAI?</h3>
        <p>
          NexusAI es un motor de búsqueda potenciado por IA con una interfaz de
          usuario generativa, impulsado por MALLO (MultiAgent LLM Orchestrator).
        </p>
      </section>
      <section>
        <h3 className="font-semibold">Uso</h3>
        <p>
          Simplemente ingresa tu consulta en la barra de búsqueda y NexusAI te
          proporcionará respuestas detalladas utilizando múltiples fuentes de
          información y modelos de IA.
        </p>
      </section>
      <section>
        <h3 className="font-semibold">Preguntas Frecuentes</h3>
        <ul className="list-disc pl-5">
          <li>¿Es gratuito? Sí, NexusAI es gratuito para uso personal.</li>
          <li>
            ¿Puedo usarlo como mi motor de búsqueda predeterminado? Sí, puedes
            configurar NexusAI como tu motor de búsqueda predeterminado en tu
            navegador.
          </li>
          <li>
            ¿Qué tipos de consultas puedo hacer? Puedes hacer cualquier tipo de
            consulta, desde preguntas simples hasta análisis complejos.
          </li>
        </ul>
      </section>
    </div>
  )
}
