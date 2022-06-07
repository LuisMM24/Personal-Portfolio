import React from "react"
import "./PrimaryButton.scss"

interface Props {
    children: JSX.Element | JSX.Element[] | string | string[]
}

const PrimaryButton: React.FC<Props> = ({ children }) => {
    return (
        <button className="primaryButton">{children}</button>
    )
}

export default PrimaryButton