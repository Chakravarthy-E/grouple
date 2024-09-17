"use client"
import { FormGenerator } from "@/components/global/form-generator"
import { Loader } from "@/components/global/loader"
import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useAuthSignUp } from "@/hooks/authentication"
import dynamic from "next/dynamic"

const OtpInput = dynamic(
    () =>
        import("@/components/global/otp-input").then(
            (component) => component.default,
        ),
    { ssr: false },
)

function SignUpForm() {
    const {
        code,
        creating,
        errors,
        getValues,
        register,
        onGenerateCode,
        onInitiateUserRegistration,
        setCode,
        verifying,
    } = useAuthSignUp()
    return (
        <form
            className="flex flex-col gap-3 mt-10"
            onSubmit={onInitiateUserRegistration}
        >
            {verifying ? (
                <div className="flex justify-center mb-5">
                    <OtpInput otp={code} setOtp={setCode} />
                </div>
            ) : (
                GROUPLE_CONSTANTS.signUpForm.map((field) => (
                    <FormGenerator
                        {...field}
                        key={field.id}
                        register={register}
                        errors={errors}
                    />
                ))
            )}

            {verifying ? (
                <Button type="submit" className="rounded-2xl">
                    <Loader loading={creating}>Sign Up With Email</Loader>
                </Button>
            ) : (
                <Button
                    type="button"
                    className="rounded-2xl"
                    onClick={() =>
                        onGenerateCode(
                            getValues("email"),
                            getValues("password"),
                        )
                    }
                >
                    <Loader loading={false}>Generate Code</Loader>
                </Button>
            )}
        </form>
    )
}

export default SignUpForm
