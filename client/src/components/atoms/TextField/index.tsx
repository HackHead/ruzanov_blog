import React from "react";
import Icon from "../Icon";

type TextInputProps = {
    srLabel?: string;
    icon?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({
    srLabel = '',
    icon,
    ...attributes
}: TextInputProps) => {
    const InputRef = React.createRef<HTMLInputElement>();
    return (
        <div>
            {srLabel && <label htmlFor="email" className="sr-only">{srLabel}</label>}

            <div className="relative">
                <input
                    type={attributes.type}
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder={attributes.placeholder}
                />

                <span
                    className="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                    {icon && <Icon name={icon} width={16} height={16}/>}
                </span>
            </div>
        </div>
    );
};

export default TextField;

