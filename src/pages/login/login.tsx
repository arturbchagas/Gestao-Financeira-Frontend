import Form, { FormField }  from "../../components/form";

function LoginPage (){
    const loginFields: FormField[] = [
        {
            type:'email',
            name:'email',
            label: 'E-mail',
            placeholder: 'Digite seu e-mail',
            required: true,
        },
        {
            type:'password',
            name:'password',
            label: 'Senha',
            placeholder: 'Digite sua senha',
            required: true,
        }
    ];
    const handleLoginSubmit = (data: Record<string,string>) => {
        //logica de autenticação aqui
        console.log('Dados do login:', data)
    }
    return (
        <div>
            <Form fields={loginFields} onSubmit={handleLoginSubmit}></Form>
        </div>
    )
}
export default LoginPage