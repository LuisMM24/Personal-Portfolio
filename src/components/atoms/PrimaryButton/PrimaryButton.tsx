import React from "react"
import "./PrimaryButton.scss"

interface Props {
    children: JSX.Element | JSX.Element[] | string | string[],
    handleClick: () => void
}

const PrimaryButton: React.FC<Props> = ({ children, handleClick }) => {
    return (
        <button onClick={handleClick} className="primaryButton">{children}</button>
    )
}

export default PrimaryButton