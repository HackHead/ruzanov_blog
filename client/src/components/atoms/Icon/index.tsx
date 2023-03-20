import React, { useEffect } from "react";
import Icons from "../../../utils/Icons";

export type IconProps = {
    name: string;
    width: number;
    height: number;
    viewBox?: string;
}


const Icon = ({name, width, height, viewBox = '0 0 24 24'}: IconProps) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox={viewBox}
        stroke="currentColor"
        width={width}
        height={height}
         dangerouslySetInnerHTML={{ __html: Icons[name] }}/>
    );
};

export default Icon;