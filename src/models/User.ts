export interface User {
    id?: string,
    email: string,
    password: string,
    name: string,
    lastName: string,
    creation: FirebaseFirestore.Timestamp
}
