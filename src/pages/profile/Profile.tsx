import { Avatar, Divider, Typography } from "@mui/material";
import { Form, ProfilePageContainer, ProfileTopSection } from "./styles";

export default function Profile() {
  return (
    <ProfilePageContainer>
      <ProfileTopSection>
        <section className="avatar">
          <Avatar sx={{width:'150px', height:'150px'}}/>
        </section>
        <section className="nameContainer">
          <span className="name">John Doe</span>
          <span className="email">jdoe@mail.com</span>
        </section>
      </ProfileTopSection>
      <Form>
        <Typography fontSize='2rem'>My personal details</Typography>
        <Divider />
        <div>
          <label htmlFor="Full name">Full name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
      </Form>

    </ProfilePageContainer>
  )
}
