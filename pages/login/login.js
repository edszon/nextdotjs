import React from "react";

class Login extends React.Component{
    render()
    {
        return
        (


            <div>
                <form onSubmit>
                    <input type="email" name="email" placeholder="digite seu email" required onChange/>
                    <input type="password" name="passwrd" placeholder="senha" required onChange/>
                </form>
            </div>
        )
    }
}

export default Login;