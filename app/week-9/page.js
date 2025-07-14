"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        // Sign in to Firebase with GitHub authentication
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    async function handleSignOut() {
        // Sign out of Firebase
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="bg-gray-600 max-w-sm w-full justify-items-center rounded-2xl border">
            <header>
                <h1 className="text-2xl font-serif underline my-4">Firebase Auth</h1>  
            </header>

            {
                user ? (
                    <section>
                        <div>
                            <p>
                                Welcome, {user.displayName} ({user.email})
                                <img src={user.photoURL} className="w-50 justify-self-center border-1 bg-gray-700" />
                                <Link href="./week-9/shopping-list/" className="ml-16 hover:text-blue-300">Click here for Shopping List</Link>
                            </p>
                        </div>
                        <div className="text-center mb-4">
                            <button 
                                onClick={handleSignOut} 
                                className="text-lg bg-blue-600 text-white rounded px-2 mt-4 hover:bg-blue-800" 
                                type="button">
                                Sign Out
                            </button>
                        </div>
                    </section>
                ) : (
                    <section className="text-center mb-4">
                        <button 
                        onClick={handleSignIn} 
                        className="text-lg bg-blue-600 text-white rounded px-2 mt-4 hover:bg-blue-800" 
                        type="button">
                            Sign In With Github
                        </button>
                    </section>
                )
            }
        </main>
    );
}