import React from 'react'
import css from './HelpCard2.module.css'

export default function HelpCard2({ el }) {
  return (
    <div className={css.helpCard} style={{ backgroundColor: el.bg, backgroundImage: el.bgi }} key={Math.random()} >
      <span></span>
      <div></div>
      <h1>{el.title}</h1>
    </div>
  )
}
