import {NextFunction, Request, Response} from "express";
import admin from 'firebase-admin';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).send({message: 'No token provided'});
    }

    const idToken = authorizationHeader.split('Bearer ')[1];

    try {
        await admin.auth().verifyIdToken(idToken);
        next();
    } catch (error: any) {
        return res.status(403).send({message: 'Unauthorized', error: error.message});
    }
};

export {verifyToken};
