import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export function SectionFAQ() {
  return (
    <div className="flex flex-col gap-4 px-36 py-24 text-themeGreen">
      <h2 className="text-4xl font-extrabold">Perguntas frequentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Tarot online funciona?</AccordionTrigger>
          <AccordionContent>[Preencher]</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Como funcionam as consultas?</AccordionTrigger>
          <AccordionContent>[Preencher]</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Como agendar uma consulta?</AccordionTrigger>
          <AccordionContent>[Preencher]</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Quais são as formas de pagamento?</AccordionTrigger>
          <AccordionContent>[Preencher]</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Desisti da consulta, há devolução do dinheiro?
          </AccordionTrigger>
          <AccordionContent>[Preencher]</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
