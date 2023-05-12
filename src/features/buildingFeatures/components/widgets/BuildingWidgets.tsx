import { useAppSelector } from '@/globalHooks'
import { BuildingWidget, WidgetsContainer } from './styles'

export default function BuildingWidgets() {
const activeBuildingDetails = useAppSelector(state=>state.utility.activeBuilding)
console.log('active building', activeBuildingDetails)
  return (
        <WidgetsContainer>
            <BuildingWidget>
                    <span id='clientLabel'>Client:</span>
                    <span id='clientName'>John Doe</span>
            </BuildingWidget>
            <BuildingWidget>
                    <span id='clientLabel'>Building Name:</span>
                    <span id='clientName'>{activeBuildingDetails.label}</span>
            </BuildingWidget>
            <BuildingWidget>
                    <span id='clientLabel'>Building location:</span>
                    <span id='clientName'>Makongeni, Thika</span>
            </BuildingWidget>
        </WidgetsContainer>
   )
}
