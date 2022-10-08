import React from "react";
import { useState } from "react";

// class ConfirmButton extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isConfirmed: false,
//         };

//         //1. bind() 함수
//         //this.handleConfirm = this.handleConfirm.bind(this);
//     }

//     //1. bind() 함수 - 이벤트 핸들러
//     // handleConfirm() {
//     //     this.setState((prevState) => ({
//     //         isConfirmed: !prevState.isConfirmed,
//     //     }));
//     // }

//     //2. 클래스필드 문법 - arrow function 사용 이벤트 핸들러
// //     handleConfirm = () => {
// //         this.setState((prevState) => ({
// //             isConfirmed: !prevState.isConfirmed,
// //         }));
// //     }

//     render() {
//         return (
//             <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>

//             {this.state.isConfirmed ? "확인됨" : "확인하기"}
            
//             </button>
//         );
//     }
// }


//3. 함수 컴포넌트 이용하기
function ConfirmButton(props) {
    //useState() 훅 사용하여 state 처리
    const [isConfirmed, setIsConfirmed] = useState(false);

    //arrow function 이용하여 이벤트 핸들러 생성
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;