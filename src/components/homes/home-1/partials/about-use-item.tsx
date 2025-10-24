import { ComponentProps } from 'react'

interface AboutUseItemProps extends ComponentProps<'div'> {
    title: string
    description: string
}

export default function AboutUseItem({title, description, className = '', ...props}: AboutUseItemProps) {
    return (
        <div className={"uxora-counter-item tw:items-start! tw:mb-4! tw:flex-col! " + className} {...props} >
            <h3 className="uxora-counter-data tw:h-auto!" aria-label="14">{title}</h3>
            <div className="uxora-counter-line">
                <img src="assets/images/about/line.png" alt="" />
            </div>
            <p className="tw:font-normal! tw:text-lg! tw:text-gray-600" >{description}</p>
        </div>
    )
}
