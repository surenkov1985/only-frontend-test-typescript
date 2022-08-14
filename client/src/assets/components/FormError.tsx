import * as React from "react";
import {ErrIcon, ErrorEl} from "./styledComponents";

type FormErrorProps = {
    error: string
}

export const FormError:React.FC<FormErrorProps> = ({error})=> {

    return (
        <ErrorEl>
            <ErrIcon>!</ErrIcon>
            {error}
        </ErrorEl>
    )
}