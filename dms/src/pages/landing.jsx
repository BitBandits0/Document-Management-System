import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
      <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 items-center justify-center">
        <section className="text-center">
          <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
            Welcome to Vault
            <span className="flex items-center gap-2 sm:gap-6">
              Your most compatible Document Management System
              <img src="/logo.png" className="h-14 sm:h-24 lg:h-32" alt="Logo" />
            </span>
          </h1>
          <p className="text-white-300 sm:mt-4 text-xs sm:text-xl">
            Seamlessly, Upload, Edit your documents in one place
          </p>
        </section>
        <div className="flex gap-6 justify-center">
          <Link to={"/"}>
            <Button variant="blue" size="xl">
              Try Here
            </Button>
          </Link>
        </div>
        <img src="/banner.jpeg" className="w-full" />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">Feature 1</CardTitle>
            </CardHeader>
            <CardContent>Content 1</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">Feature 2</CardTitle>
            </CardHeader>
            <CardContent>Content 2</CardContent>
          </Card>
        </section>
        <Accordion type="multiple" className="w-full max-w-screen-lg">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    );
  };
  
  export default LandingPage;