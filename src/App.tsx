import Sidebar from "@/shared/sidebar/Sidebar" 
import { ComponentContainer, Container } from "./shared/components/sharedStyles"
import Topbar from "./shared/topbar/Topbar"
export default function App() {
  return (
    <Container>
        <Sidebar />
        <ComponentContainer>
          <Topbar />
        </ComponentContainer>
    </Container>
  )
}
