import { FC, useState } from "react";

type IProps = {
    nameForm?: string // dấu hỏi là có cũng được không có cũng không sao nè
} 

const Login: FC<IProps> = (props: IProps) => {// fc là function component
    const [email, setEmail] = useState<string>('')
    const [errors, setErrors] = useState<string[]>([])

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = event.target.value;
        if (!value || !value.length) { // input is empty
            setErrors(pre => {
                pre.push('Email is not empty')
                return pre
            })
        } else if (value.length < 6) {
            setErrors(pre => {
                pre.push('Email >= 6')
                return pre
            })
        } else {
            setErrors([])
        }

        console.log('event', event.target.value)
        setEmail(event.target.value)
    }

    return (
        <>
            {
                email && email.length && <h3>Email: {email}</h3>
            }
            <h1>{props.nameForm}</h1>
            <form>
                <input type="text" name="email" onChange={handleEmail} />
                {
                    errors.map((err, index) => {
                        return <p key={index}>{err}</p>
                    })
                }
            </form>
        </>
    )

}

export default Login;