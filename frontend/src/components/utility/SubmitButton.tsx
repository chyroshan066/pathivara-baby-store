import { ClassName } from "@/types";
import { memo } from "react";

interface SubmitButtonProps extends ClassName {
    isButtonDisabled?: boolean;
    btnText: string;
}

export const SubmitButton = memo(({
    isButtonDisabled = false,
    btnText,
    className = "w-100 py-3 text-uppercase"
}: SubmitButtonProps) => (
    <button
        type="submit"
        className={`btn btn-primary ${className}`}
        style={{ letterSpacing: '2px' }}
        disabled={isButtonDisabled}
    >
        {btnText}
    </button>
));

SubmitButton.displayName = "SubmitButton";