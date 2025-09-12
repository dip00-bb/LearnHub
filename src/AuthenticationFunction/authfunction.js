


// register function
export const handleEmailPassReg = (register,update,setuser,dataObj,imgurl,apiPublic,successAlert,errorAlert) => {

    register(dataObj.email, dataObj.password)
        .then((res) => {
            if (res.user) {

                const user = res.user
                update(dataObj.userName, imgurl).then(() => {

                    setuser({ ...user, displayName: dataObj.userName, photoURL: imgurl });

                    const userInformation = {
                        fName: dataObj.firstName,
                        lName: dataObj.lastName,
                        email: dataObj.email,
                        photoURL: imgurl,
                    };

                    apiPublic.post('/user', userInformation)
                        .then(() => {
                            successAlert("Successfully registered")
                        }).catch((err) => {
                            errorAlert(err.message)
                        })

                }).catch(error => {
                   errorAlert(error.message)

                })
            }

        })
        .catch((error) => {
            errorAlert(error.message)
        });
} 


export const handleEmailPassLogIn=(loginFn,dataObj,successAlert,errorAlert)=>{
    loginFn(dataObj.email,dataObj.password).then(()=>{
        successAlert("Welcome back")
    }).catch(err=>{
        errorAlert(err.message)
    })
}