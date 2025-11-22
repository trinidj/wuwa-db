// Utility functions for processing and displaying sonata descriptions
import { colorizeText } from './talents'

/**
 * Renders sonata set descriptions with proper formatting and attribute colorization
 * @param description - The sonata description text with section headers (##) and bold set names
 * @returns JSX element with formatted sonata description
 */
export function renderSonataDescription(description?: string) {
  if (!description) {
    return <p className="text-muted-foreground italic">Description coming soon...</p>
  }

  // Split by horizontal rules (---) to separate sections
  const sections = description.split(/\n?---\n?/).filter(s => s.trim())

  return (
    <>
      {sections.map((section, sectionIndex) => {
        const lines = section.trim().split('\n').filter(line => line.trim())
        
        return (
          <div key={sectionIndex} className="mb-4">
            {lines.map((line, lineIndex) => {
              const trimmedLine = line.trim()
              
              // Check if line is a bold set name (e.g., **2-Set**)
              const isBoldLine = trimmedLine.startsWith('**') && trimmedLine.endsWith('**')
              
              if (isBoldLine) {
                const boldText = trimmedLine.replace(/^\*\*|\*\*$/g, '')
                return (
                  <div key={lineIndex} className="mb-2">
                    <strong className="font-semibold text-base text-rarity-5">{boldText}</strong>
                  </div>
                )
              }
              
              // Regular content line
              return (
                <p key={lineIndex} className="text-sm sm:text-base">
                  {colorizeText(trimmedLine, `sonata-${sectionIndex}-${lineIndex}-`)}
                </p>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
