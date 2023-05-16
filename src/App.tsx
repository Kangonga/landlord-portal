import Sidebar from "@/shared/sidebar/Sidebar" 
import { ComponentContainer, Container } from "./shared/components/sharedStyles"
import { Outlet } from "react-router-dom"
export default function App() {
  return (
    <Container>
        <Sidebar />
        <ComponentContainer>
            <Outlet />
        </ComponentContainer>
    </Container>
  )
}
