import { Select } from "../types/cards";
import Good from "@/app/src/img/Good.png"

const selects: Select[] = [
    {
        id: 1,
        image: Good.src,
        heading: "Simplified Process",
        text: "No complex bank procedures — initiate and complete your international payment in just a few easy steps.",
    },
     {
        id: 2,
        image: Good.src,
        heading: "Transparent Rates",
        text: "View live forex rates before every transaction, lock in your rate for 6 hours, and avoid hidden charges.",
    },
     {
        id: 3,
        image: Good.src,
        heading: "Verified Institutions",
        text: "Pay directly to accredited Canadian universities and approved GIC banks.",
    },
     {
        id: 4,
        image: Good.src,
        heading: "Fast Confirmation",
        text: "Receive transaction updates and school/bank confirmations within 1–2 business days.",
    },
]

export default selects;