import React from 'react'
import Faq from "react-faq-component";
import styles from './FAQs.module.css'
import { useColorModeValue } from "../../hooks/useColorModeValue";

export default function FAQs() {
    const data = {
        title: "Frequently Asked Questions",
        rows: [
            {
                title: "What is DevFest?",
                content: "DevFest, a Tech Conference led by GDG community with goal to exchange knowledge, networking and learning about Google Dev Technologies.",
            },
            {
                title: "What are GDG's?",
                content:
                    "GDGs are focused on community building and learning about Google’s technologies."
            },
            {
                title: "Can I register at the venue?",
                content:
                    "No, you have to register prior only."
            },
            {
                title: "Will I get a certificate for attending?",
                content: "(Yes/no) also many perks awaiting for you."
            },
            {
                title: "Is there any age limit to register?",
                content: "There is no age limit to attend, Everybody having even a little interest in tech, beginners, professionals, developers and tech enthusiast can attend."
            },
            {
                title: "What is included under all access pass?",
                content: "Exclusive access to speaker sessions, Hackathons,  Schwags, Chance for networking, F&B and much more...."
            },
            {
                title: "If I have questions, who can I contact?",
                content: "Reach out to us at mail : support@devfestnagpur.in"
            },
        ]
    };
    return (
        <section className={styles[useColorModeValue("faqsSectionLight","faqsSectionDark")]}>
            <Faq style={styles['dark']} data={data} />
        </section>
    )
}