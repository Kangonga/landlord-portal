import { render, screen } from "@testing-library/react";

import Sidebar from './Sidebar'
import { BrowserRouter } from "react-router-dom";

test('should render links to dashboard, building, main meter, statements and profile pages ', () =>{ 
    render(<BrowserRouter><Sidebar /></BrowserRouter>);
    const linkValues:string[] = ['building', 'meter', 'statements','profile']
    linkValues.forEach(link=>{
        const element = screen.queryByText(link)
        expect(element && linkValues.includes(element.innerText)).toBeTruthy
    })
})