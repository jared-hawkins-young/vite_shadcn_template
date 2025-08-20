import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

// Init PostHog once (before render)
posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
})

// Get the root element (non-null assert)
const rootEl = document.getElementById('root')!
createRoot(rootEl).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>
)