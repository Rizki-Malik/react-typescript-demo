import { PersonProps } from "./Person.types"
//Class & Object Basic Props
export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}
