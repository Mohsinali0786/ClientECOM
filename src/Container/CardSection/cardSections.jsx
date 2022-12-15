import { Card } from '../../Components'
import { Grid } from '@mui/material'
import Products from '../../Products/products'
export default function CardSection() {
    console.log('Products', Products)
    return (
        <Grid container spacing={3}>
            {
                Products.map((v, i) => {
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
