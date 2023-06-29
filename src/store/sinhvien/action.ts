import { DispatchType } from "./type"

// ddinh nghia khuon mau sinh vien co clj
export interface ISinhVien  {
    ten:string,
    namsinh: number
}
// dinh nghia 1 cái action  
 
export interface SinhVienAction   {
    type:string, // phân biệt được action đấy là action gì (Thêm , Xóa , Sửa)
    payload : ISinhVien// là dữ liệu được gửi đến cái tk lozz reducer để xử lý 
}
export function addSinhVien(sv:ISinhVien) {
    //khoi tao 1 action (bao gom 2 gia tri - kieu action - gia tri cua action payload )
    const action:SinhVienAction =  {
        type : 'add-sv',
        payload : sv
    }
    // gọi đến 1 hàm dispatch 
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}
export function deleteSinhVien(sv:ISinhVien) {
    //khoi tao 1 action (bao gom 2 gia tri - kieu action - gia tri cua action payload )
    const action:SinhVienAction =  {
        type : 'xoa-sv',
        payload : sv
    }
    // gọi đến 1 hàm dispatch 
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}