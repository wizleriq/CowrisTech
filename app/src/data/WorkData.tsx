import { Work } from "../types/cards";
import Good from "@/app/src/img/Good.png"

const works: Work[] = [
    {
        id: 1,
        image: Good.src,
        heading: "Register & Complete KYC — Create an account and verify your identity.",
    },
      {
        id: 2,
        image: Good.src,
        heading: "Choose Payment Type — Tuition or GIC.",
    },
     {
        id: 3,
        image: Good.src,
        heading: "Enter Payment Details — Select institution/bank, input amount in CAD, and view NGN equivalent.",
    },
     {
        id: 4,
        image: Good.src,
        heading: "Lock Your Rate & Pay Locally — Accept the rate and transfer funds in Naira.",
    },
    {
        id: 5,
        image: Good.src,
        heading: "Track Your Payment — Get notified once the school or bank confirms receipt."

    },
]

export default works;