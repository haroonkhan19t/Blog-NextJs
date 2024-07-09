import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me",
};

export default async function ContactPage(){
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}