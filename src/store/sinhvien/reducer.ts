import { ISinhVien, SinhVienAction } from "./action";

//Định nghĩa cái state của sinh viên
export interface ISinhVienState {
    sinhviens: ISinhVien[]
}
// giá trị mặc định defaut cho nó 
const initSinhVienState: ISinhVienState = {
    sinhviens: []
}

const sinhVienReducer = (state: ISinhVienState = initSinhVienState, action: SinhVienAction): ISinhVienState => {
    switch (action.type) {
        case 'add-sv':
            state = {
                ...state,
                sinhviens: state.sinhviens.concat(action.payload)
            }
            console.log(action);
            break;
        case 'xoa-sv':
            const idx = state.sinhviens.findIndex(sv => sv.ten === action.payload.ten)
            console.log('idx', idx)
            if (idx !== -1) {
                state.sinhviens.splice(idx, 1)
                state = {
                    ...state
                }
            }

            console.log(action);
            break;
        default:
            break;
    }
    return state;
}
export default sinhVienReducer;