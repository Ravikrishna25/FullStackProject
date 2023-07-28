import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <section className='container-xxl' >
            <div className='row' style={{display:"flex",marginRight:"50px",justifyContent:"center"}}>
                <div className='col-4' style={{marginRight:"50px"}}>
                    <Card sx={{ maxWidth: 380 }}>
                        <CardMedia
                            sx={{ height: 150 }}
                            image="./fraud.jpg"
                            title="Financial Fraud"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Financial Fraud
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Financial crime is crime committed against property, involving the unlawful conversion
                                of the ownership of property to one's own personal use and benefit.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href='https://cybercrime.gov.in/pdf/Financial%20Fraud%20Brochures%20final.pdf' target='_blank'><Button style={{ color: 'black', fontSize: '20px' }}>Open</Button></a>
                        </CardActions>
                    </Card>
                </div>
                <div className='col-4'  style={{marginRight:"50px"}}>
                    <Card sx={{ maxWidth: 380 }}>
                        <CardMedia
                            sx={{ height: 150 }}
                            image="./job.jpg"
                            title="Financial Fraud"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Job Fraud
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A job scam occurs when a scammer poses as an employer or recruiter, and offers attractive
                                employment opportunities.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href='https://cybercrime.gov.in/pdf/Job%20Fraud%20Brochure%20Final.pdf' target='_blank'><Button style={{ color: 'black', fontSize: '20px' }}>Open</Button></a>
                        </CardActions>
                    </Card>
                </div>
                <div className='col-4'>
                    <Card sx={{ maxWidth: 380 }}>
                        <CardMedia
                            sx={{ height: 150 }}
                            image="./rink.jpg"
                            title="Financial Fraud"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Matrimonial Fraud
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                As the name itself suggests, matrimonial frauds are those types of fraud which are
                                committed under the pretext of marriage.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href='https://cybercrime.gov.in/pdf/Matrimonial%20fraud%20brochure%20final.pdf' target='_blank'><Button style={{ color: 'black', fontSize: '20px' }}>Open</Button></a>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </section>
    );
}