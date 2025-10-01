import React from 'react'
import Section from '../primitives/Section'

export default function NoData({
  message = "Aucune donnée disponible"
}) {
  return (
    <Section className="flex flex-col bg-background custom-container py-12 px-4 justify-center items-center">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 tracking-wide">
          {message}
        </h1>
      </div>
    </Section>
  )
}
