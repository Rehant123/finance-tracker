import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { projectAuth } from '../firebase/config';
import { useState } from 'react';
export default function useSignup() {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);

    const signup = async (email, password, displayname) => {
        setError(null);
        setIsPending(true);
        
        try {
            const res = await createUserWithEmailAndPassword(projectAuth, email, password);
            
            console.log(res);

            if (!res) {
                throw new Error("Could not complete new Signup");
            }

            await updateProfile(res.user, { displayName: displayname });
            setIsPending(false);
            setError(null);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    }

    return { error, isPending, signup };
}
