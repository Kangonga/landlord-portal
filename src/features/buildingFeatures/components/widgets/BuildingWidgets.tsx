import { BuildingWidget, WidgetsContainer } from './styles'

export default function BuildingWidgets() {
  return (
        <WidgetsContainer>
            <BuildingWidget>
                    <span id='clientLabel'>Client:</span>
                    <span id='clientName'>John Doe</span>
            </BuildingWidget>
            <BuildingWidget>
                    <span id='clientLabel'>Building Name:</span>
                    <span id='clientName'>Building One</span>
            </BuildingWidget>
            <BuildingWidget>
                    <span id='clientLabel'>Building location:</span>
                    <span id='clientName'>Makongeni, Thika</span>
            </BuildingWidget>
        </WidgetsContainer>
   )
}
