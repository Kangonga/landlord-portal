import { Avatar, Divider, Typography } from "@mui/material";
import { Form, ProfilePageContainer, ProfileTopSection } from "./styles";
import { useAppSelector } from "@/globalHooks";

export default function Profile() {
  const utilityState = useAppSelector((state) => state.utility);
  return (
    <ProfilePageContainer>
      <ProfileTopSection>
        <section className="avatar">
          <Avatar sx={{ width: "150px", height: "150px" }} />
        </section>
        <section className="nameContainer">
          <span className="name">{utilityState.data.Names}</span>
          <span className="email">{utilityState.data.email}</span>
          <span className="email">
            {utilityState.data.phone1 ? utilityState.data.phone1 : ""}
          </span>
        </section>
      </ProfileTopSection>
      <Form>
        <Typography fontSize="2rem">My personal details</Typography>
        <Divider />
        <div>
          <label htmlFor="Full name">Full name</label>
          <input type="text" disabled value={utilityState.data.Names} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            disabled
            value={utilityState.data.email ? utilityState.data.email : ""}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" disabled value={"*******"} />
        </div>
      </Form>
    </ProfilePageContainer>
  );
}
