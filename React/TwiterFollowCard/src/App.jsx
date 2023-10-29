import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const user = [
    {
        userName: 'harri_arias',
        name: 'Harrison arias f',
        isFollowing: true
    },
    {
        userName: 'daniel.arias.benavides',
        name: 'Daniel Arias Benavides',
        isFollowing: false
    },
    {
        userName: 'jhonathan_campuzano',
        name: 'Jhonathan Campuzano',
        isFollowing: false
    },
]

export function App() {
    const formatUsername = (userName) => `@${userName}`
    return (    
        <section className="tw-content">
            {user.map(user =>{
                const {userName,name, isFollowing} = user
                return (
                <TwitterFollowCard 
                    key={userName}
                    userName={userName}
                    name={name}
                    initIsFollowing={isFollowing}
                    formatUsername={formatUsername}
                />
                )
            })}
            </section>
    )
}