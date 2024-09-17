"use client"

import { useStripeElements } from "@/hooks/payment"
import { Elements } from "@stripe/react-stripe-js"

function StripeElements({ children }: { children: React.ReactNode }) {
    const { StripePromise } = useStripeElements()

    const promise = StripePromise()

    return promise && <Elements stripe={promise}>{children}</Elements>
}

export default StripeElements
