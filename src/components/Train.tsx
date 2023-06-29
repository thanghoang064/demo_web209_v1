import { useEffect, useState } from "react";

const Train = () => {
    const [ten, setTen] = useState<string>('');
    const [namsinh, setNamSinh] = useState<number>();
    const [isDisplay, setDisplay] = useState(false);
    const [tuoi,setTuoi] = useState<number>(0);
    const handleTenInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTen(event.target.value);
    }
    const handleTuoiInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNamSinh(+event.target.value);
    }
    const handleCheck = (event: any) => {
        if (ten.length && namsinh && namsinh > 0) {
            setTuoi(new Date().getFullYear() - namsinh)
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }

    // useEffect(() => {
    //     console.log('useEffect chay khi deps thay doi => ', ten)
    //     const searchRealtime = async () => {
    //         const profile = await fetch('/searchProfileByTen')
    //         setNameCallApiSearch(profile)
    //     }
    //     searchRealtime()
    // }, [ten])

    // useEffect(() => {
    //     console.log('useEffect chay khi co event cua component')
    // })

    // useEffect(() => {
    //     console.log('useEffect chi chay 1 lan')
    //     const getProfile = async () => {
    //         const profile = await fetch('/getProfile')
    //         setProfile(profile)
    //     }
    //     getProfile()
    // }, [])

    return (<>
        <input type="text" name="ten" onChange={handleTenInput}></input>
        <input type="text" name="namsinh" onChange={handleTuoiInput} ></input>
        <input type="button" name="check" value={'Tinh'} onClick={handleCheck}></input>
        {
            isDisplay ? <h1>Tooi ten la {ten} toi co tuoi la {tuoi}</h1> : <></>
        }

    </>)
}

export default Train;