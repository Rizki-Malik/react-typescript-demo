type GreetProps = {
    name: string
    messageCount?: number // optional props
    isLoggedIn: boolean
}
//Class & Object Typing Props
export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return(
        <div>
            <h2>
                {
                    props.isLoggedIn
                    ? `Selamat Datang ${props.name}! Ada ${messageCount} Pesan yang belum terbaca.`
                    : `Selamat Datang, Pendatang Baru!`
                }
            </h2>
        </div>
    )
}
