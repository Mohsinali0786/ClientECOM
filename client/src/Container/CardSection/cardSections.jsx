import { Card } from '../../Components'
import { Grid } from '@mui/material'
// import Products from '../../Products/products'
import { useContext } from 'react'
import { myContext } from '../../Components/NavBar/SubMenus'
import { useEffect } from 'react'
export default function CardSection({Products}) {

    return (
        <Grid container spacing={3}>
            {
                Products?.map((v, i) => {
                    return (
                        <Grid item md={4} key={i}>
                            <Card data={v} />
                        </Grid>
                    )
                })
            }
        </Grid>

    )
}
