import { onAuthenticatedUser } from "@/actions/auth"
import GlassCard from "@/components/global/glass-card"
import { redirect } from "next/navigation"

async function AuthLayout({ children }: { children: React.ReactNode }) {
    const user = await onAuthenticatedUser()
    if (user.status === 200) redirect("/callback/sign-in")
    return (
        <div className="container h-screen flex justify-center items-center">
            <div className="flex flex-col w-full items-center py-24">
                <h2 className="text-4xl font-bold mb-4 text-themeTextWhite">
                    Grouple
                </h2>
                <div className="w-6/12 h-2/6  text-white container flex flex-col items-center">
                    <GlassCard>{children}</GlassCard>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
