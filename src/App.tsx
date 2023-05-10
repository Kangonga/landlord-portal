import Sidebar from "@/shared/sidebar/Sidebar" 
import { ComponentContainer, Container } from "./shared/components/sharedStyles"
import Topbar from "./shared/topbar/Topbar"
import { Outlet } from "react-router-dom"
export default function App() {
  return (
    <Container>
        <Sidebar />
        <ComponentContainer>
          <Topbar />
            <Outlet />
        </ComponentContainer>
    </Container>
  )
}
