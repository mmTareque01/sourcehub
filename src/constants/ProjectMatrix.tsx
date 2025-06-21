import { BadgeVariant } from "@/components/Badge";
import React from "react";
import { FaArrowUp } from "react-icons/fa";


type ProjectMatrixItem = {
    id: number;
    name: string;
    count: number;
    growingRate: React.ReactNode;
    type: BadgeVariant;
};

export const ProjectMatrixData: ProjectMatrixItem[] = [
    {
        id: 1,
        name: 'Projects',
        count: 235,
        growingRate: <>
            <FaArrowUp />
            32.53%
        </>,
        type: 'default',
    },
        {
        id: 2,
        name: 'Active Projects',
        count: 202,
        growingRate: <>
            <FaArrowUp />
            5.53%
        </>,
        type: 'success',
    },
        {
        id: 3,
        name: 'Pending Projects',
        count: 33,
        growingRate: <>
            <FaArrowUp />
            01.53%
        </>,
        type: 'inactive',
    }
];