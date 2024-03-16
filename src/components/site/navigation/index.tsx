// import { ModeToggle } from '@/components/global/mode-toggle'
// import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'

type Props = {
    user?: null | User
}

const Navigation = ({ user }: Props) => {
    return (
        <div className="p-4 flex items-center justify-between relative">
            <aside className="flex items-center gap-2">
                <Image
                    src={'./assets/plura-logo.svg'}
                    width={40}
                    height={40}
                    alt="plur logo"
                />
            </aside>
        </div>
    )
}

export default Navigation