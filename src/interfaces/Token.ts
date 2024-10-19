export interface Token {
    header:    Header;
    payload:   Payload;
    signature: string;
}

export interface Header {
    alg: string;
    kid: string;
    typ: string;
}

export interface Payload {
    name:           string;
    iss:            string;
    aud:            string;
    auth_time:      number;
    user_id:        string;
    sub:            string;
    iat:            number;
    exp:            number;
    email:          string;
    email_verified: boolean;
    firebase:       Firebase;
}

export interface Firebase {
    identities:       Identity[];
    sign_in_provider: string;
}

export interface Identity {
}
