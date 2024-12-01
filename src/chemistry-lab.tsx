"use client"

import { useCallback, useState } from "react"
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from "reactflow"
import { toast } from "sonner"
import "reactflow/dist/style.css"

import { ElementSidebar } from "./components/element-sidebar"
import { ElementNode } from "./components/element-node"
import { KNOWN_COMPOUNDS, type Element } from "./types/chemistry"

const nodeTypes = {
  element: ElementNode,
}

export default function ChemistryLab() {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      setEdges((eds) => {
        const newEdges = addEdge(params, eds)
        
        // Check for compound formation
        const connectedNodes = nodes.filter(node => 
          newEdges.some(edge => 
            edge.source === node.id || edge.target === node.id
          )
        )

        // Count elements
        const elementCounts: Record<string, number> = {}
        connectedNodes.forEach(node => {
          const element = node.data as Element
          elementCounts[element.symbol] = (elementCounts[element.symbol] || 0) + 1
        })

        // Check if this matches any known compounds
        const compound = KNOWN_COMPOUNDS.find(c => {
          return Object.entries(c.elements).every(
            ([symbol, count]) => elementCounts[symbol] === count
          )
        })

        if (compound) {
          toast.success(`Compound Formed: ${compound.name}`, {
            description: `${compound.formula}: ${compound.description}`,
          })
        }

        return newEdges
      })
    },
    [nodes]
  )

  const onDragStart = (event: React.DragEvent, element: Element) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(element))
    event.dataTransfer.effectAllowed = "move"
  }

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault()

      const elementData = JSON.parse(
        event.dataTransfer.getData("application/reactflow")
      ) as Element

      // Get the position of the drop
      const reactFlowBounds = document.querySelector(".react-flow-wrapper")?.getBoundingClientRect()
      if (!reactFlowBounds) return

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      }

      const newNode: Node = {
        id: `${elementData.symbol}-${nodes.length + 1}`,
        type: "element",
        position,
        data: elementData,
      }

      setNodes((nds) => nds.concat(newNode))
    },
    [nodes, setNodes]
  )

  return (
    <div className="h-screen flex">
      <ElementSidebar onDragStart={onDragStart} />
      <div className="flex-1 react-flow-wrapper">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDragOver={onDragOver}
          onDrop={onDrop}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  )
}

