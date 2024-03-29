import { useEffect } from 'react';
import image from '../assets/undraw_gift_box_re_vau4.svg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CTA from '../CTA/Cta'
import { Grid } from '@mui/material';
export default function About(){
    useEffect(()=>{
        AOS.init({duration:1000});
      },[]);
    return(
        <Grid container id='about us'  className="about-us">
            <Grid item md={6} xs={12} data-aos='fade-right' className='about-left' >
                <img src={image}></img>
            </Grid>
            <Grid item md={6} xs={12}  data-aos='fade-left' className='overlapping' >
                <div  className='about-right'>
                    <h1 >ABOUT US</h1>
                    <p>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                        Our customer service is always prepared to support you 24/7.
                        3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                        Our customer service is always prepared to support you 24/7.
                        3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
                        Our customer service is always prepared to support you 24/7.</p>
                        <CTA name='Contact us'/>
                </div>
                <div className='about-us-bg'></div>
            </Grid>
           
        </Grid>
    )
}