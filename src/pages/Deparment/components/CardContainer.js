import React from 'react'
import CardComponent from './Card'
import { Grid, Container,  } from '@material-ui/core'

export default function CardContainer() {
    return (
        <div>
            
            
            <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <CardComponent title="Số giảng viên" total={10} index={1}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <CardComponent title="Số môn" total={10} index={2}/>
          </Grid>
          
        </Grid>
      </Container>
        </div>
    )
}
