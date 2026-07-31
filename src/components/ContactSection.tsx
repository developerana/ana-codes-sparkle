import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anahelouise.ss@email.com",
    href: "mailto:anahelouise.ss@email.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@overlouise",
    href: "https://www.instagram.com/overlouise/",
  },
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

export const ContactSection = ({ showHeading = true }: { showHeading?: boolean }) => {
  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="md:col-span-12 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 grid gap-8 md:gap-12 md:grid-cols-2 md:items-center"
      >
        {showHeading && (
          <div className="max-w-md">
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
              VAMOS TRABALHAR JUNTOS?
            </h2>
            <p className="font-medium mt-3 opacity-90">
              Estou aberta a novas oportunidades e adoraria ouvir sobre o seu
              projeto.
            </p>
          </div>
        )}

        <div
          className={
            showHeading
              ? "grid sm:grid-cols-2 gap-x-8 gap-y-6"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:col-span-2 w-full"
          }
        >
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

    </>
  );
};
