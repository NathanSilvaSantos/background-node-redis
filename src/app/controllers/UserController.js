export default {
    async store(request, response) {
        const { name, email } = request.body;

        const user = {
            name,
            email,
            password: '123'
        };

        return response.json(user);
    }
}