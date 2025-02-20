"use client";

export default function UserForm() {
    return (
        <>
            <h2 className="fieldset-legend">Tell us about you</h2>

            <div>
                <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                    {/* Weight Input */}
                    <label htmlFor="weight" className="fieldset-label">
                        Weight
                    </label>
                    <input
                        type="number"
                        id="weight"
                        className="input"
                        placeholder="Enter your weight"
                    />

                    {/* Age Input */}
                    <label htmlFor="age" className="fieldset-label">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        className="input"
                        placeholder="Enter your age"
                    />

                    {/* Goal Select */}
                    <label htmlFor="goal" className="fieldset-label">
                        Goal
                    </label>
                    <textarea className="textarea" placeholder="Bio"></textarea>

                    {/* Modal Trigger Button */}
                    <button className="btn">Submit</button>
                </fieldset>
            </div>
        </>
    );
}
