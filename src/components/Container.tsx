type ContainerProps = {
    styles: React.CSSProperties
}
// Style Props
// App.tsx
// <Container styles={{ border: '1px solid black', padding: '1 rem'  }}/>

export const Container = (props: ContainerProps) => {
    return(
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}
