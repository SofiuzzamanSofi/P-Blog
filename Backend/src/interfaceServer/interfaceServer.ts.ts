export interface UserDataTypes {
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
    createdAt?: string,
    updatedAt?: string,
    _id?: string;
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
}



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
    ans?: AnsTypes[];
};

export interface JobApplicants {
    userId?: string;
    userEmail?: string;
};

export interface JobDataTypes {
    email: string;
    photoURLs?: string[];
    title?: string;
    details?: string;
    tags?: string[];
    // _id?: string;
    // __v?: string;
    applicants?: JobApplicants[];
    questionAns?: QuestionAnsTypes[];
    timestamp: Date;
};

//
export interface postMessageByIdServiceType {
    messageId: string,
    senderId: string;
    senderEmail: string;
    content: string;
};
// messageTypes 
export interface MessageType {
    messageId: string;
    timestamp: Date; // Use Date type if you prefer
    senderId: string;
    senderEmail: string;
    content: string;
};

export interface Participant {
    userId: string;
    userName: string;
    userEmail: string;
};

export interface MessageObjectType {
    _id: string;
    __v: string;
    chatId: string;
    participants: Participant[];
    messages: MessageType[];
};

// job query search types
export interface getAllJobBySearchTextTypes {
    position?: RegExp;
    companyName?: RegExp;
    isOpen?: boolean;
    location?: RegExp;
    // experience?: RegExp;
    // createdAt?: Date;
    timestamp?: Date;
    // Add other fields from your schema here...
}