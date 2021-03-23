import React from 'react'
import css from './HelpCard.module.css'

export const HelpCard = ({ el }) => {

    return (
        <div style={{ backgroundColor: el.bg }} className={css.helpCard}>
            <span></span>
            <div></div>
            <h1>{el.title}</h1>
        </div>
    )

}
