// import React from "react";

// type StudentProps = 
// {
//     name:string
//     age:number
// }

// const Student: React.FC<StudentProps> = ({name="kavi",age=22}) => {

//     return(
//         <>
//         {name} {age}
//         </>
//     )
// }


// export default Student;

// import React from "react";

// type StudentProps = {

//     array: {
//         name: string
//         age: number
//     }[]
// }

// const Student: React.FC<StudentProps> = ({ array }) => {

//     return (
//         <>
//             {array.map((value, index) => (
//                 <li key={index}>{value.name} {value.age}</li>
//             ))}
//         </>
//     )
// }


// export default Student;


import React from "react";

type StudentProps = {

   handleclick:()=>void
}

const Student: React.FC<StudentProps> = ({handleclick} ) => {

    return (
        <>
            <button onClick={handleclick} >Click</button>
        </>
    )
}


export default Student;