import ContactForm from "@/components/contact-form";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with me",
};

export default async function ContactPage() {
    return (

        <div>
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
                <div className="container flex flex-col gap-4 text-center">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
                        Get In Touch With Me!
                    </h1>
                    <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
                        Get a free qoute and lets build your dream website
                    </p>
                    <div className="flex flex-col gap-4 justify-center sm:flex-row">
                        <Link
                            href="/blog"
                            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
                        >
                            View my blog
                        </Link>
                        <Link
                            href={siteConfig.links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({ variant: "outline", size: "lg" }),
                                "w-full sm:w-fit"
                            )}
                        >
                            Linkedin
                        </Link>
                    </div>
                </div>
            </section>
            <ContactForm />
        </div>
    )
}