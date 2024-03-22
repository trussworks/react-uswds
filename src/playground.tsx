import { createRoot } from 'react-dom/client'
import React from 'react'
import { LandingPage } from './stories/templates/landing.stories.js'

const container = document.querySelector('#root')

if (!container) throw new Error('Container element not found')

const root = createRoot(container)

root.render(<LandingPage />)
