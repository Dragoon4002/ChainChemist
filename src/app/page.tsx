import { Toaster } from "sonner"
import ChemistryLab from "@/chemistry-lab"

export default function Page() {
  return (
    <main className="h-screen caret-amber-50">
      <Toaster />
      <ChemistryLab />
    </main>
  )
}

