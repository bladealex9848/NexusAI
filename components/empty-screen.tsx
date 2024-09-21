import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: '¿Como implementar la IA en la justicia colombiana?',
    message: '¿Como implementar la IA en la justicia colombiana?'
  },
  {
    heading: 'Por qué Nvidia está creciendo rápidamente?',
    message: 'Por qué Nvidia está creciendo rápidamente?'
  },
  {
    heading: 'El futuro de la IA',
    message: 'El futuro de la IA'
  },
  {
    heading: 'MALLO (MultiAgent LLM Orchestrator) Vs OpenAI o1',
    message: 'MALLO (MultiAgent LLM Orchestrator) Vs OpenAI o1'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
