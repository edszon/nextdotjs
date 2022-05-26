const Test = () => {
    return (
        <div id="loginwrapper">
            <h1>faça login</h1>
            <form action="loginsucess">
                <input type="email" name="email" placeholder="digite email" required/>
                <input type="password" name="pword" placeholder="senha" required/>
                <button onSubmit>Logar</button>
            </form>
        </div>
    );
}

export default Test;