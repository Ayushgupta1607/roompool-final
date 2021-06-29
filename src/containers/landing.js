import React, { Component } from 'react'
import About from '../components/About'
import BannerIntro from '../components/BannerIntro'
import Contactus from '../components/Contact'
import Counter from '../components/Counter'
import Services from '../components/Services'

export default class landing extends Component {
    render() {
        return (
            <>
               <BannerIntro></BannerIntro>
               <About></About>
               <Counter></Counter>
               <Services></Services>
               <Contactus></Contactus>
            </>
        )
    }
}
