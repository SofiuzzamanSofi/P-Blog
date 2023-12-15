export interface UserDataTypes {
    _id: string;
    email?: string;
    displayName: string;
    emailVerified: boolean;
    photoURL: string;
    location: string;
    gender?: string;
    about?: string;
    othersCuriculam?: string;

    whatsapp: string;
    website: string;
    github: string;
    linkedin: string;
    youtube: string;
    facebook: string;
    twitter: string;
    instagram: string;


    // physical
    bodyType: String,
    hair_color: String,
    eye_color: String,
    piercings: String,
    tattoos: String,
    height: String,

    // life style
    drinking: String,
    yearly_income: String,
    smoking: String,
    net_worth: String,
    education: String,

    // donate payment
    donateDetails: {
        totalSendAmount: number;
        totalReceiveAmount: number;
        senders: Sender[];
        receivers: Receiver[];
    }

    role?: string;
    country?: string;
    address?: string;
    city?: string;
    postcode?: string;
    companyName?: string;
    companyCategory?: string;
    employeeRange?: string;
    roleInCompany?: string;
    term?: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
};

interface Sender {
    userId: string;
    useremail: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    postalCode: string;
    amount: number;
    transactionId: string;
    time: Date;
}

interface Receiver {
    userId: string;
    useremail: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    postalCode: string;
    amount: number;
    transactionId: string;
    time: Date;
};



export interface AnsTypes {
    time: Date;
    ansString: string;
};

export interface QuestionTypes {
    time: Date;
    questionString: string;
};

export interface QuestionAnsTypes {
    userId: string;
    userEmail: string;
    questionId: string;
    question: QuestionTypes;
    ans?: AnsTypes[] | undefined;
};

export interface JobApplicantsTypes {
    userId?: string;
    userEmail?: string;
};

export interface BlogDataTypes {
    photoURLs?: string[];
    email?: string;
    displayName?: string;
    bloggerId?: string;
    title?: string;
    details?: string;
    tags?: string[];
    _id?: string;
    __v?: string;
    timestamp?: string;
    applicants?: JobApplicantsTypes[];
    questionAns?: QuestionAnsTypes[];
};
