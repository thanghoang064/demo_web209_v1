import { FC } from "react";


interface IProps {
    name: string,
    type: number,
    onHandler: () => void,
}

const Button: FC<IProps> = ({name, onHandler}) => {
    return (
        <button onClick={onHandler}>{name}</button>
    )
}

export default Button;
