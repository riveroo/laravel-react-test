import React from "react";

const login = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-[85%] mx-auto">
            <div className=" mt-40 w-full">
                <form
                    onSubmit={onSubmit}
                    className="bg-white p-10 h-[350px] w-[400px] border mx-auto my-auto shadow-xl"
                    action=""
                >
                    <h1 className="w-full text-center text-xl mt-1 mb-2">
                        Login Into Your Account
                    </h1>
                    <input
                        className="pl-2 w-full h-10 border rounded-md shadow-md"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className=" mt-4 pl-2 w-full h-10 border rounded-sm shadow-md"
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 shadow-md text-white font-medium mt-10 pl-2 w-full h-10 rounded-md shadow-md"
                    >
                        Login
                    </button>
                    <div></div>
                    <p className="mt-4">
                        Not Registered?{" "}
                        <a className="text-blue-700" href="/signup">
                            Create an account
                        </a>{" "}
                    </p>{" "}
                </form>
            </div>
        </div>
    );
};

export default login;
