export interface ContactUsFormProps extends Record<string, string | number | boolean | string[]> {
    name:string;
    email:string;
    message:string;
}