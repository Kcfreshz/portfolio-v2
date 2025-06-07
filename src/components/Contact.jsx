import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "./Reusable_UI/FormInput";
import FormTextArea from "./Reusable_UI/FormTextArea";
import SubmitButton from "./Reusable_UI/SubmitButton";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // ✅ Basic client-side validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      setIsSending(false); // reset the loading state
      return; // exit the function
    }

    // ✅ Prepare the template parameters
    // These parameters should match the fields in your EmailJS template
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // ✅ Send the email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          // Reset form fields and states
          setIsSending(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error(error.text);
          toast.error("❌ Something went wrong. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <ScrollReveal>
      <Toaster position="top-right" />
      <section id="contact" className="pl-10 md:pl-[400px]">
        <form
          onSubmit={handleSubmit}
          className="containers max-w-3xls  pb-10 mx-auto flex flex-col gap-5"
        >
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
            Contact
          </h2>
          <FormInput
            label="Name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormTextArea
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <SubmitButton isSending={isSending} />
        </form>
      </section>
    </ScrollReveal>
  );
}

export default Contact;
