import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anahelouise.ss@email.com",
    href: "mailto:anahelouise.ss@email.com",
  },
  { icon: MapPin, label: "Localização", value: "Brasil", href: null },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ana Helouise",
    href: "https://www.linkedin.com/in/anahelouise/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@anahelouise",
    href: "https://github.com/anahelouise",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato. Responderei em breve!",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="md:col-span-5 rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between gap-8"
      >
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            VAMOS TRABALHAR JUNTOS?
          </h2>
          <p className="font-medium mt-3 opacity-90">
            Estou aberta a novas oportunidades e adoraria ouvir sobre o seu
            projeto.
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-background/15 flex items-center justify-center">
                <info.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs opacity-70">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="font-bold text-sm hover:underline"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-bold text-sm">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:col-span-7 bento p-6 lg:p-8"
      >
        <h3 className="font-heading font-bold text-xl mb-6">
          Envie uma mensagem
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <Input id="name" name="name" placeholder="Seu nome" required className="bg-background/60" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="bg-background/60"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Assunto
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Assunto da mensagem"
              required
              className="bg-background/60"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensagem
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Sua mensagem..."
              rows={5}
              required
              className="bg-background/60 resize-none"
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </>
  );
};
