export default interface SignUpUser {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  cPassword:string;
  isAgent: boolean | null;
}
