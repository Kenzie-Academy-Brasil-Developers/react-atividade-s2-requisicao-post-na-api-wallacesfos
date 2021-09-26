

export default function Display(props){
    const {Login, requests} = props
    return (
        <div>
            {Login ? requests : requests}
        </div>
    )
}