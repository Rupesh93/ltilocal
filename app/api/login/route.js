import { NextResponse } from 'next/server'
import fs from 'fs'

export async function POST(request) {
    const data = await request.json()
    const userid = data.userid;
    const password = data.password;
    // console.log(userid, password)
    console.log('form Login', data)
    try {

        fs.readFile("./database/user.json", "utf8", (error, data) => {
            return NextResponse.json({ message: "Invalid Credantials" })
        //     if (error) {
        //         console.log(error,'if');
        //         return NextResponse.json(error)
        //     }
        //     else {
        //         let userDatas = JSON.parse(data)
        //         userDatas = userDatas.userData
        //         console.log(userDatas,'jsonData')
        //         let objDta = userDatas.filter((userData) => userData.userId === userid && userData.password === password)
        //         // if (objDta.length > 0) {
        //         //     return NextResponse.json({
        //         //         id: objDta[0].id,
        //         //         username: objDta[0].username,
        //         //         userId: objDta[0].userId,
        //         //         role: objDta[0].role,
        //         //     })
        //         // }
        //         // else {
        //             return NextResponse.json({ message: "Invalid Credantials" })
        //         // }
        //     }
        });
    }
    catch (err) {
        console.log('wfewrfwefewf')
        return NextResponse.json({err})
    }
}

// const UserLogin = async (req, res) => {
//     const userid = req.body.userid;
//     const password = req.body.password;
//     // console.log(userid, password)
//     try {

//         fs.readFile("./jsonFiles/user.json", "utf8", (error, data) => {
//             if (error) {
//                 console.log(error);
//                 return;
//             }
//             else {
//                 let userDatas = JSON.parse(data)
//                 userDatas = userDatas.userData
//                 let objDta = userDatas.filter((userData) => userData.userId === userid && userData.password === password)
//                 console.log(objDta)
//                 if (objDta.length > 0) {
//                     res.send({
//                         id: objDta[0].id,
//                         username: objDta[0].username,
//                         userId: objDta[0].userId,
//                         role: objDta[0].role,
//                     })
//                 }
//                 else {
//                     res.send({ message: "Invalid Credantials" })
//                 }
//             }
//         });
//     }
//     catch (err) {
//         console.log('catch', err)

//         res.send(err)
//     }
// }
// module.exports = { UserLogin }
