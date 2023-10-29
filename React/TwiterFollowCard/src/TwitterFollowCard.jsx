import { useState } from "react"

export function TwitterFollowCard({ formatUsername, userName, name, initIsFollowing }) {
    //Forma 1 de declarar un stade: const stade =useState(false) const isFollowing =stade[0] setIsFollowing = stade[1]
    //forma 2 y la mejor destruturin
    const [isFollowing, setIsFollowing] = useState(initIsFollowing)

    const imgSrc = `https://unavatar.io/${userName}`
    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    const handelClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={imgSrc}
                    alt="El avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>{formatUsername(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handelClick}>
                    <span className="tw-followCard-text">{textButton}</span>     
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span> 
                </button>
            </aside>
        </article>
    )
}