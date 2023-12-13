export interface UserDataTypes {
    email: string;
    displayName: string;
    emailVerified: boolean;
    photoURL: string;
    _id: string;

    des1?: string;
    des2?: string;
    location: string;
    age: number;
    gender: string;
    bodyType?: string; // optional property
    ethnicity?: string;
    height?: string;
    hair_color?: string;
    eye_color?: string;
    piercings?: string;
    tattoos?: string;
    smoking?: string;
    drinking?: string;
    education?: string;
    yearly_income?: string;
    net_worth?: string;

    interest: string[];
    offer?: string;
    tagLine?: string;
    interested?: string;
    looking_for?: string;
}