import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { DroneCanvas } from '../components/visuals/DroneCanvas'

export function DroneVisualizationSection() {
  return (
    <SectionShell id="visualization">
      <SectionTitle
        eyebrow="3D Visualization"
        title="Interactive Tactical Drone Rendering"
        description="Rotate and zoom into a command-grade 3D representation to inspect frame geometry, propulsion layout, and mission profile posture."
      />
      <DroneCanvas />
    </SectionShell>
  )
}

export default DroneVisualizationSection
