"use client"

import { cn } from "@/lib/utils"

type GroupListItemProps = {
    icon: JSX.Element
    label: string
    selected?: string
    onClick?: () => void
}

export const GroupListItem = ({
    icon,
    label,
    selected = "",
    onClick,
}: GroupListItemProps) => {
    console.log(selected)
    return (
        <div
            className={cn(
                "flex gap-3 items-center py-2 px-4 rounded-2xl border-2 cursor-pointer",
                selected === label
                    ? "border-themeTextGray text-blue-600"
                    : "border-themeGray bg-themeGray text-white",
            )}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            {icon}
            {label}
        </div>
    )
}
