type HeadingProps = {
    children: string // Children Props
}

export const Heading = (props: HeadingProps) => {
    return(
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}