export interface UserDataTypes {
    _id: string;
    email: string;
    displayName: string;
    emailVerified: boolean;
    photoURL: string;
    gender: string;
    location: string;
    about: string;
    othersCuriculam: string;

    whatsapp: string;
    website: string;
    github: string;
    linkedin: string;
    youtube: string;
    facebook: string;
    twitter: string;
    instagram: string;

    des1?: string;
    des2?: string;
    age: number;
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