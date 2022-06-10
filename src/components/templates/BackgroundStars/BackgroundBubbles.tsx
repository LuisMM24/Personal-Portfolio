
import "./BackgroundBubbles.scss"

interface Props {
    children: string | string[] | JSX.Element | JSX.Element[]
}

const BackgroundBubbles: React.FC<Props> = ({ children }) => {
    return (
        <div className="bgAnimatedWrapper">
            <div className="bubbles">
                {children}

            </div>


        </div>
    )
}

export default BackgroundBubbles