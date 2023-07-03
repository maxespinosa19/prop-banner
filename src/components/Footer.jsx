const gitHubLink= 'https://github.com/maxespinosa19/prop-banner'
const fullYear= new Date().getFullYear()

export default function Footer(){

    return (
        <footer>
            <p>&copy;{fullYear}</p>
            <p><a href={gitHubLink} target="_blank" rel="norefferer">Github </a></p>
        </footer>
    )
}

