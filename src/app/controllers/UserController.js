import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail';

export default {
    async store(request, response) {
        const { name, email } = request.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        await Mail.sendMail({
            from: 'Nathan <nathan013silva@gmail.com>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem-vindo a DIO`
        });

        return response.json(user);
    }
}