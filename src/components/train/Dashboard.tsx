import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store";
import { ISinhVien, deleteSinhVien } from "../../store/sinhvien/action";
import { Dispatch } from "redux";

const Dashboard = () => {
    // len rootstate de lay ve state cua cac feature minh mong muon 
    const sinhvienState = useSelector(
        (state: IRootState) => state.sinhvien,
    )
    const dispatch: Dispatch<any> = useDispatch()
    const handleDeleteSV = (sv:ISinhVien) => {
        dispatch(deleteSinhVien(sv));
    }
    console.log('sinhvienState', sinhvienState)
    return (
        <>
        <h1>Dashboard</h1>
            {sinhvienState.sinhviens.map((sv, index) => {
                return <h1 key={index}>Sinh vien them moi co ten la {sv.ten} tuoi la {2023 - sv.namsinh} <button onClick={event => handleDeleteSV(sv)}>Xóa</button> </h1>
            })}
        </>
    );
}
export default Dashboard;