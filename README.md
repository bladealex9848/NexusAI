# NexusAI

Un motor de búsqueda potenciado por IA con una interfaz de usuario generativa, impulsado por MALLO (MultiAgent LLM Orchestrator).

![captura](/public/capture-240404_blk.png)

> [!NOTA]
> Por favor, ten en cuenta que pueden existir diferencias entre este repositorio y el sitio web oficial [nexusai.com](https://nexusai.com). El sitio web oficial es una bifurcación de este repositorio con características adicionales como autenticación, necesarias para proporcionar el servicio en línea. El código fuente principal de NexusAI reside en este repositorio y está diseñado para ser fácilmente construido y desplegado.

## 🗂️ Visión General

- 🛠 [Características](#-características)
- 🧱 [Stack Tecnológico](#-stack-tecnológico)
- 🚀 [Inicio Rápido](#-inicio-rápido)
- 🌐 [Despliegue](#-despliegue)
- 🔎 [Motor de Búsqueda](#-motor-de-búsqueda)
- ✅ [Modelos Verificados](#-modelos-verificados)
- 🤖 [Estructura de MALLO](#-estructura-de-mallo)

## 🛠 Características

- Búsqueda y respuesta utilizando Interfaz de Usuario Generativa
- Comprensión avanzada de las preguntas del usuario
- Funcionalidad de historial de búsquedas
- Compartir resultados de búsqueda
- Soporte para búsqueda de videos
- Obtener respuestas de URLs específicas
- Usar como motor de búsqueda predeterminado
- Soporte para múltiples proveedores de IA:
  - OpenAI
  - Google Generative AI
  - Azure OpenAI
  - Anthropic
  - Ollama
  - Groq
  - Together AI
  - DeepInfra
  - DeepSeek
  - Mistral AI
  - Cohere
- Especificar el modelo para generar respuestas
- Soporte para Redis local y en la nube (Upstash)
- Soporte para API de búsqueda SearXNG con profundidad personalizable
- Profundidad de búsqueda configurable (básica o avanzada)
- Integración con MALLO para razonamiento avanzado y orquestación de múltiples agentes de IA

## 🧱 Stack Tecnológico

- Framework de aplicación: [Next.js](https://nextjs.org/)
- Streaming de texto / UI Generativa: [Vercel AI SDK](https://sdk.vercel.ai/docs)
- Modelo Generativo Principal: [MALLO (MultiAgent LLM Orchestrator)](https://github.com/bladealex9848/MALLO)
- API de Búsqueda: [Tavily AI](https://tavily.com/) / [Serper](https://serper.dev) / [SearXNG](https://docs.searxng.org/)
- API de Lectura: [Jina AI](https://jina.ai/)
- Base de Datos (Serverless/Local): [Upstash](https://upstash.com/) / [Redis](https://redis.io/)
- Biblioteca de componentes: [shadcn/ui](https://ui.shadcn.com/)
- Primitivas de componentes sin cabeza: [Radix UI](https://www.radix-ui.com/)
- Estilos: [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Inicio Rápido

### 1. Bifurcar y Clonar el repositorio

Bifurca el repositorio a tu cuenta de Github, luego ejecuta el siguiente comando para clonar el repo:

```
git clone git@github.com:bladealex9848/NexusAI.git
```

### 2. Instalar dependencias

```
cd NexusAI
bun install
```

### 3. Configurar Upstash Redis

Sigue la guía para configurar Upstash Redis. Crea una base de datos y obtén `UPSTASH_REDIS_REST_URL` y `UPSTASH_REDIS_REST_TOKEN`. Consulta la [guía de Upstash](https://upstash.com/docs/redis/overall/getstarted) para obtener instrucciones detalladas.

Si planeas usar Redis local, puedes omitir este paso.

### 4. Completar los secretos

```
cp .env.local.example .env.local
```

Edita el archivo `.env.local` con tus claves API y configuraciones.

### 5. Ejecutar la aplicación localmente

#### Usando Bun

```
bun dev
```

#### Usando Docker

```
docker compose up -d
```

Visita http://localhost:3000 en tu navegador web.

## 🌐 Despliegue

Aloja tu propia versión en vivo de NexusAI con Vercel o Cloudflare Pages.

### Vercel

[![Desplegar con Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbladealex9848%2FNexusAI&env=OPENAI_API_KEY,TAVILY_API_KEY,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN)

## 🔎 Motor de Búsqueda

### Configurar NexusAI como Motor de Búsqueda en tu Navegador

1. Abre la configuración de tu navegador.
2. Navega a la sección de configuración del motor de búsqueda.
3. Añade un nuevo motor de búsqueda con la siguiente URL:
   `https://nexusai.com/search?q=%s`
4. Establece NexusAI como tu motor de búsqueda predeterminado.

### Usar SearXNG como Backend de Búsqueda Alternativo

NexusAI soporta SearXNG como backend de búsqueda alternativo. Consulta la sección de configuración en el archivo `config.yaml` para más detalles sobre cómo configurar y personalizar SearXNG.

## ✅ Modelos Verificados

NexusAI, potenciado por MALLO, soporta una amplia gama de modelos de lenguaje. Aquí se presenta una lista de los modelos verificados y compatibles:

### Modelos Generales

- OpenAI
  - GPT-4
  - GPT-4 Turbo
  - GPT-3.5 Turbo
- Google
  - Gemini Pro
  - Gemini Ultra (cuando esté disponible)
- Anthropic
  - Claude 2
  - Claude 3 (Opus, Sonnet, Haiku)
- Cohere
  - Command
  - Command-R
- Mistral AI
  - Mistral 7B
  - Mixtral 8x7B
- Ollama (modelos locales)
  - Llama 2
  - Mistral
  - Phi-2
- Groq
  - LLaMA 2 70B
  - Mixtral 8x7B
- Together AI
  - Varios modelos de código abierto
- DeepInfra
  - Soporte para múltiples modelos de diferentes proveedores

### Modelos Especializados

- Modelos de visión (multimodales)
  - GPT-4 Vision
  - Gemini Pro Vision
  - Claude 3 (con capacidades de visión)
- Modelos de código
  - OpenAI Codex
  - Anthropic Claude (optimizado para tareas de codificación)
  - GitHub Copilot (integración)

### Modelos de Embeddings

- OpenAI Ada
- Cohere Embed
- Mistral Embed

### Modelos de Voz y Audio

- Whisper (OpenAI)
- Google Speech-to-Text

Esta lista se actualiza regularmente a medida que se verifican y añaden nuevos modelos al ecosistema de NexusAI y MALLO.

## 🤖 Estructura de MALLO

MALLO (MultiAgent LLM Orchestrator) es el núcleo de NexusAI y proporciona las siguientes capacidades:

- Orquestación dinámica de múltiples modelos de lenguaje
- Evaluación de complejidad de consultas
- Sistema de caché para respuestas frecuentes
- Integración con APIs de búsqueda web
- Manejo de contexto y seguimiento de conversaciones
- Selección inteligente de agentes basada en el tipo de consulta
- Capacidad de expansión para nuevos modelos y proveedores

Para más detalles sobre la estructura y funcionamiento de MALLO, consulta la [documentación de MALLO](https://github.com/bladealex9848/MALLO).

## 📚 Documentación

Para obtener información más detallada sobre la configuración, uso y personalización de NexusAI, consulta nuestra [documentación completa](https://docs.nexusai.com).

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee nuestra [guía de contribución](CONTRIBUTING.md) antes de enviar pull requests.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

Para soporte o consultas, por favor abre un issue en este repositorio o contacta con nuestro equipo en info@marduk.pro.

---

Desarrollado con ❤️ por el equipo de [Marduk](https://marduk.pro)
