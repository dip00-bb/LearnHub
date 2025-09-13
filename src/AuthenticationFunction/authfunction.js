


// register function
export const handleEmailPassReg = (register, update, setuser, dataObj, imgurl, apiPublic, successAlert, errorAlert) => {

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

// login function
export const handleEmailPassLogIn = (loginFn, dataObj, successAlert, errorAlert) => {
    loginFn(dataObj.email, dataObj.password).then(() => {
        successAlert("Welcome back")
    }).catch(err => {
        errorAlert(err.message)
    })
}


export const googleLoginFn = (loginFn, apiPublic, successAlert, errorAlert) => {
    loginFn()
        .then((res) => {
            const user = res.user
            const userInformation = {
                fName: user.displayName.split(" ")[0],
                lName: user.displayName.split(" ")[1],
                email: user.email,
                photoURL: user.photoURL,
                UID:user.uid
            };

            successAlert("User registered successfully")


            apiPublic.post('/user', userInformation)
                .then(() => {
                    return

                // eslint-disable-next-line no-unused-vars
                }).catch((err) => {
                    return
                })


        }).catch(errors => {
            errorAlert(errors.message)
        })
}