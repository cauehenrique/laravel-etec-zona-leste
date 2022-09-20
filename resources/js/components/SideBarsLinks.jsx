import React from "react"

export default function SideBarsLink({ icon, title }) {
    return (
        <div className="my-0 mx-2 p-2 flex rounded-md hover:bg-sky-100 hover:text-sky-800 space-x-2">
            {icon}
            <p>{title}</p>
        </div>
    )
}