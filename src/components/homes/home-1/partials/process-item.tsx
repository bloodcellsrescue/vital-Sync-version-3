import React from "react";

interface ProcessItemProps extends React.ComponentProps<'div'>{
    title: string
    description: string
}

export default function ProcessItem({title, description}: ProcessItemProps) {
    return (
        <div className="card h-100 tw:shadow-lg! tw:border-gray-100! p-4">
            <div className="card-body d-flex flex-column align-items-center text-center">
                <h3 className="card-title fw-semibold text-dark mb-3" >{title}</h3>
                <p className="card-text text-muted flex-grow-1">{description}</p>
            </div>
        </div>
    )
}
