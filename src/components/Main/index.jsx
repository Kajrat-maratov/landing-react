import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import { HelpCard } from '../HelpCard'
import HelpCard2 from '../HelpCard2'


export const MainPage = (props) => {

    return <div className={css.mainPage}>
        <div className={css.container}>
            <nav>
                <h3 className={css.title}>Thrivetalk</h3>
                <ul>
                    <li className={css.home}>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <span className={css.btn}>CONTACT US</span>
            </nav>
            <div className={css.mainBlock}>
                <div className={css.text}>
                    <h4 className={css.title}>Thrivetalk</h4>
                    <h1 style={{
                        fontSize: 50, color: '#22356F'
                    }}>HELPING YOU THRIVE <br /> IN ALL AREAS OF LIFE</h1>
                    <p style={{ color: '#22356F' }}>Our highly talented therapists can help you <br /> with a range of
                        issues including relationships, <br />sex, PTSD, depression, social
                        anxiety, or even <br /> just caring for yourself more.</p>
                    <div style={{ color: 'red' }}>
                        <button className='btn-warning'>WHO AM I</button>
                        <button className='btn2' >WHAT DO I DO</button>
                    </div>
                </div>
                <div >
                    <img src={mainPic} />
                </div>
            </div>
        </div>
        <div className={css.container1}>
            <div>
                <p>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help. Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                <h5>WE CAN HELP YOU WITH</h5>
            </div>
        </div>

        <div>

            <div style={{ display: 'flex', width: 1440, margin: 'auto' }}>
                {
                    props.helpCard.map((el, index) => {
                        return (
                            <HelpCard el={el} index={index} key={index} />
                        )
                    })
                }
            </div>

            <div style={{ width: '100%', height: '120px' }}></div>

            <div style={{ display: 'flex', width: 1440, margin: 'auto', flexWrap: 'wrap' }}>
                {
                    props.helpCard2.map((el, index) => {
                        return (
                            <HelpCard2 el={el} key={index} />
                        )
                    })
                }
            </div>

        </div>
    </div>
}