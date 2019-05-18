import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import '../static/css/index.css'
import {
    Container,
    Grid,
    Header,
    Icon
} from 'semantic-ui-react'

function Home() {
    return (
        <div>
            <Container>
                <Grid centered columns={1}>
                    <Grid.Column>
                        <Header as='h1' textAlign='center'>
                            <Icon name='terminal' />
                            Welcome to the Next.js Semantic Starter Kit!
                        </Header>
                    </Grid.Column>
                </Grid>
                <Grid centered columns={1}>
                    <div className="ball"></div>
                </Grid>
            </Container>
        </div>
    );
}

export default Home;