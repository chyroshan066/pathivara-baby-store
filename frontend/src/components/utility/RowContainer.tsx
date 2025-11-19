import { Children } from "@/types";
import { memo } from "react";

export const RowContainer = memo(({
    children
}: Children) => (
    <div className="row">
        <div className="col-md-12">
            {children}
        </div>
    </div>
));

RowContainer.displayName = "RowContainer";