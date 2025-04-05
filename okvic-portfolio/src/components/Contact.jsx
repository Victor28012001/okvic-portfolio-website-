import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cat, congrats } from "../assets";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  // WhatsApp Function
  const sendToWhatsApp = (name, message) => {
    const phoneNumber = "2348137139081"; // Replace with your WhatsApp number
    const text = `Name: ${encodeURIComponent(name)}%0A%0A${encodeURIComponent(
      message
    )}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  // Email Function
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return; // Ensure formRef is valid

    setLoading(true);
    emailjs
      .sendForm(
        "service_t4rmxoj",
        "template_rjisct7",
        formRef.current,
        "JKXXW-sLKwoFExrWw"
      )
      .then(async () => {
        const nameWords = form.name.trim().split(" ");
        const username = `${nameWords[0]}-${nameWords[1] || ""}`;

        const messageWords = form.message.trim().split(" ");
        const password = `${username}${messageWords[0] || ""}${
          messageWords.at(-1) || ""
        }`;
        // ✅ Send to your backend
        await fetch(`${import.meta.env.VITE_BACKEND_URL}api/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            email: form.email
          }),
        });

        Swal.fire({
          title: "Message sent successfully!, Now Open the door for me",
          text: "I will get back to you as soon as possible.",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: `#fff url(${congrats})`,
          backdrop: `
            rgba(0,0,123,0.4)
            url(${cat})
            left top
            no-repeat
          `,
        });
        sendToWhatsApp(form.name, form.message); // Send to WhatsApp after email
        setForm({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send message. Try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 1, delay: 0.2 },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-12 gap-4 flex flex-col"
        >
          <span className="text-white font-medium mt-3">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your full name"
            required
            className="ok p-4 text-white border font-medium"
          />

          <span className="text-white font-medium mt-3">Email Address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email address"
            required
            className="ok p-4 text-white border font-medium"
          />

          <span className="text-white font-medium mt-3">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Enter your message"
            rows={5}
            required
            className="ok p-4 text-white border font-medium"
          />

          <button
            type="submit"
            style={{ cursor: "pointer" }}
            className="ok py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
