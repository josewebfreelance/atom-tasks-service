import jwt, { Jwt } from "jsonwebtoken";
import { Token } from "../interfaces/Token";

const tokenDecode = (token?: string): Token | null => {
    if (token) {
        const tokenClear = token.toString().split(' ').pop();

        if (tokenClear != null) {
            return jwt.decode(tokenClear, { complete: true }) as Token;
        }
    }
    return null;
}

export { tokenDecode }
