type OscarProps = {
    children: React.ReactNode // Children Props where the type is React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return(
        <div>
            {props.children}
        </div>
    )
}