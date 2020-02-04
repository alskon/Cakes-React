import React from 'react'
import './Section.css'

export default function Section(props) {
    return (
        <section>
            <h2>{props.header}</h2>
            {props.contentArea}
        </section>
    )
}