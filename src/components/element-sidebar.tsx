import { useState } from "react"
import { SAMPLE_ELEMENTS, ElementCategory, type Element } from "../types/chemistry"

interface ElementSidebarProps {
  onDragStart: (event: React.DragEvent, element: Element) => void
}

export function ElementSidebar({ onDragStart }: ElementSidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState<ElementCategory | "all">("all")
  
  const filteredElements = SAMPLE_ELEMENTS.filter(
    element => selectedCategory === "all" || element.category === selectedCategory
  )

  return (
    <div className="w-64 bg-background border-r p-4 text-black">
      <h2 className="font-bold mb-4">Element Inventory</h2>
      
      <select 
        className="w-full mb-4 p-2 border rounded"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value as ElementCategory | "all")}
      >
        <option value="all">All Elements</option>
        {Object.values(ElementCategory).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-2 gap-2">
        {filteredElements.map((element) => (
          <div
            key={element.id}
            className="p-2 border rounded cursor-move bg-white hover:bg-accent"
            draggable
            onDragStart={(e) => onDragStart(e, element)}
          >
            <div className="font-bold">{element.symbol}</div>
            <div className="text-xs text-muted-foreground">{element.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

