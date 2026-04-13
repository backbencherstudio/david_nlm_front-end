"use client";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@/icons";

function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
}

export interface SelectOption {
    label: string;
    value: string;
    className?: string;
    icon?: React.ReactNode;
}

export type SelectVariant = "primary" | "outline" | "ghost";

export interface GenericSelectProps {
    options: SelectOption[];
    placeholder?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    defaultValue?: string;
    disabled?: boolean;
    name?: string;

    // ── Variant ─────────────────────────────────────────────────────────────
    variant?: SelectVariant;

    // ── Typography ──────────────────────────────────────────────────────────
    textSize?: string;
    textColor?: string;
    placeholderColor?: string;

    // ── Layout ──────────────────────────────────────────────────────────────
    width?: string;
    height?: string;
    padding?: string;

    // ── Border & Shadow ─────────────────────────────────────────────────────
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    focusBorderColor?: string;
    hoverBorderColor?: string;
    hoverTextColor?: string;
    shadow?: string;

    // ── Dropdown Content (The Popover) ──────────────────────────────────────
    dropdownClassName?: string;
    /** Tailwind shadow class for the dropdown container, e.g. "shadow-none" */
    dropdownShadow?: string;
    /** Tailwind bg class for the dropdown container */
    dropdownBg?: string;
    
    // ── Dropdown Item Styling ───────────────────────────────────────────────
    itemClassName?: string;
    /** Tailwind hover class for items, e.g. "focus:bg-gray-100" */
    itemHoverBg?: string;
    /** Tailwind text color class for items on hover/focus */
    itemHoverText?: string;

    // ── Icons ───────────────────────────────────────────────────────────────
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode | null;

    // ── State styling ───────────────────────────────────────────────────────
    disabledClassName?: string;

    // ── Wrapper ─────────────────────────────────────────────────────────────
    wrapperClassName?: string;

    // ── Escape hatch ────────────────────────────────────────────────────────
    className?: string;
}

const VARIANT_DEFAULTS: Record<SelectVariant, string> = {
    primary: "bg-white border border-gray-200 text-gray-900",
    outline: "bg-transparent border border-gray-400 text-gray-900",
    ghost: "bg-gray-100 border border-transparent text-gray-700",
};

const GenericSelect = ({
    options,
    placeholder = "Select…",
    value,
    onValueChange,
    defaultValue,
    disabled,
    variant = "primary",
    textSize = "text-sm",
    textColor,
    placeholderColor = "text-gray-400",
    width = "w-full",
    height = "h-10",
    padding = "px-3",
    borderColor,
    borderWidth,
    borderRadius = "rounded-lg",
    focusBorderColor = "focus-visible:ring-2 focus-visible:ring-purpleOne/20",
    hoverBorderColor = "hover:border-borderColor",
    hoverTextColor,
    shadow = "shadow-none",
    
    dropdownClassName,
    dropdownShadow = "shadow-lg",
    dropdownBg = "bg-white",
    
    itemClassName,
    itemHoverBg = "focus:bg-gray-50",
    itemHoverText = "focus:text-purpleOne",
    
    leftIcon,
    rightIcon,
    disabledClassName = "opacity-50 cursor-not-allowed",
    wrapperClassName,
    className,
}: GenericSelectProps) => {
    const variantBase = VARIANT_DEFAULTS[variant];

    return (
        <div className={cn("relative", width, wrapperClassName)}>
            <Select
                value={value}
                onValueChange={onValueChange}
                defaultValue={defaultValue}
                disabled={disabled}
            >
                <SelectTrigger
                    className={cn(
                        "flex w-full items-center justify-between transition-all duration-200 cursor-pointer",
                        variantBase,
                        height,
                        padding,
                        textSize,
                        borderWidth,
                        borderColor,
                        borderRadius,
                        focusBorderColor,
                        hoverBorderColor,
                        hoverTextColor,
                        shadow,
                        !value && placeholderColor,
                        textColor,
                        disabled && disabledClassName,
                        className
                    )}
                >
                    <div className="flex items-center gap-2 truncate">
                        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
                        <SelectValue placeholder={placeholder} />
                    </div>
                    {/* {rightIcon !== null && (
                        <div className="shrink-0 ml-2">
                            {rightIcon !== undefined ? rightIcon : <ChevronDownIcon className="h-4 w-4 opacity-50" />}
                        </div>
                    )} */}
                </SelectTrigger>

                <SelectContent
                    className={cn(
                        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 mt-1",
                        dropdownBg,
                        dropdownShadow,
                        dropdownClassName
                    )}
                >
                    <div className="p-1">
                        {options.map((opt) => (
                            <SelectItem
                                key={opt.value}
                                value={opt.value}
                                className={cn(
                                    "relative flex w-full select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none transition-colors cursor-pointer",
                                    itemHoverBg,
                                    itemHoverText,
                                    itemClassName,
                                    opt.className
                                )}
                            >
                                <div className="flex items-center gap-2">
                                    {opt.icon && <span className="shrink-0">{opt.icon}</span>}
                                    <span>{opt.label}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </div>
                </SelectContent>
            </Select>
        </div>
    );
};

GenericSelect.displayName = "GenericSelect";

export default GenericSelect;