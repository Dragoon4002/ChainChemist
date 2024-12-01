import { Handle, Position, NodeProps } from "reactflow"
import { Element } from "../types/chemistry"

export function ElementNode({ data }: NodeProps<Element>) {
  return (
    <div className="px-4 py-2 shadow-md rounded-lg bg-white border-2 border-primary w-24 text-center text-black">
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
      <div className="font-bold text-lg">{data.symbol}</div>
      <div className="text-sm text-muted-foreground">{data.name}</div>
      <div className="text-xs text-muted-foreground mt-1">{data.category}</div>
    </div>
  )
}
