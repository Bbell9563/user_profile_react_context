import React from "react";
import { Card, Image, Segment, Grid } from "semantic-ui-react";
import { UserConsumer, } from "./UserProvider";


const User = () => (
  <UserConsumer>
    {value => {
      return (
        <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Image src={value.avatar} />

                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Card.Header>Name</Card.Header>
                    <Card.Meta>
                      {value.f_Name}{value.l_Name}
                    </Card.Meta>
                  </Card.Content>

                  <Card.Content>
                    <p>Email: {value.email}</p>
                  </Card.Content>
                  <Card.Content>
                    <p>Phone: {value.phone}</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>
      )
    }}
  </UserConsumer >
)


export default User;