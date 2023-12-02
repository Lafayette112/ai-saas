"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Charles",
        avatar: "C",
        title: "Software Engineer",
        description: "The code generation have streamlined our workflows. Highly recommend it."
    },
    {
        name: "Lawrence",
        avatar: "L",
        title: "Student",
        description: "Everything I need to study efficiently. Love the conversation AI."
    },
    {
        name: "Jacob",
        avatar: "J",
        title: "Architect",
        description: "I was looking for an image generation and this one transformed our design process."
    },
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-10">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>

                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            <footer className="text-white/60 text-center mt-20 font-light">
                Copyright © Monark Solutions
            </footer>
        </div>
    )
}