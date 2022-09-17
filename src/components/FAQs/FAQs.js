import React from 'react'
import Faq from "react-faq-component";
import styles from './FAQs.module.css'

export default function FAQs() {
    const data = {
        title: "FAQ's",
        rows: [
            {
                title: "What is DevFest?,",
                content: "DevFest is a community-led, developer event hosted by GDG Lagos. It is a day-long event that brings together developers from all over Lagos to learn, share and network. It is a free event and open to all developers, designers, students, and tech enthusiasts.",
            },
            {
                title: "What are GDG's?",
                content:
                    "GDG's are Google Developer Groups, a community of developers who are interested in Google's developer technologies. GDG's are open to anyone who is interested in Google's developer technologies. GDG's are open to anyone who is interested in Google's developer technologies."
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
                content: "Reach out to us at mail"
            },
        ]
    };
    return (
        <section className={styles['faqs-section']}>
            <Faq data={data} />
        </section>
    )
}