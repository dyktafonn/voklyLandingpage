import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq: { question: string; answer: string }[] = [
  {
    question: "What counts as run?",
    answer:
      "A run is one API request. Each time you fetch data, it counts one run. Failed requests don't count toward your limit.",
  },
  {
    question: "What counts as response fields?",
    answer:
      "Response records are the individual data items created when The Fetcher transforms an API response for monday. Each item in the transformed response counts as one record, even if it doesn't change any data in your monday board. For example, 100 items from an API would count as 100 response records.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "If you reach your monthly limit for runs or response record, you won't be able to run more requests until your limits reset at the beginning of your next billing cycle. Scheduled runs are paused when you hit your limit.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-primary/15">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex w-full flex-col gap-8 items-center justify-center py-12">
          <h2 className="text-4xl font-semibold text-center lg:text-left">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-3/4 bg-background p-4 rounded-2xl"
          >
            {faq.map(({ answer, question }) => (
              <AccordionItem value={question} key={question}>
                <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline text-xl">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
