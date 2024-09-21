import { tool } from 'ai'
import { createStreamableValue } from 'ai/rsc'
import { searchSchema } from '@/lib/schema/search'
import { ToolProps } from '.'
import { VideoSearchSection } from '@/components/video-search-section'

// Start Generation Here
export const videoSearchTool = ({ uiStream, fullResponse }: ToolProps) =>
  tool({
    // description: 'Search for videos from YouTube',
    description: 'Buscar videos de YouTube',
    parameters: searchSchema,
    execute: async ({ query }) => {
      let hasError = false
      // Append the search section
      const streamResults = createStreamableValue<string>()
      uiStream.append(<VideoSearchSection result={streamResults.value} />)

      let searchResult
      try {
        const response = await fetch('https://google.serper.dev/videos', {
          method: 'POST',
          headers: {
            'X-API-KEY': process.env.SERPER_API_KEY || '',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ q: query })
        })
        if (!response.ok) {
          // throw new Error('Network response was not ok')
          throw new Error('Respueta de red no fue correcta')
        }
        searchResult = await response.json()
      } catch (error) {
        // console.error('Video Search API error:', error)
        console.error('Error de API de búsqueda de videos:', error)
        hasError = true
      }

      if (hasError) {
        fullResponse = `A ocurrido un error mientras se buscaban videos con "${query}.`
        uiStream.update(null)
        streamResults.done()
        return searchResult
      }

      streamResults.done(JSON.stringify(searchResult))

      return searchResult
    }
  })
