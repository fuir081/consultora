

export const validateLogin = (
    email: string,
    password: string
): string | null => {
    if(!email || !password){
        return "Completar todo los campos";
    }
    return null;
}