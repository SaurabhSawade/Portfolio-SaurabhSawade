import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ivo46pu",     // 👈 Replace this
        "template_kymmymr",    // 👈 Replace this
        formRef.current,
        "bynynrivnrmVeczmG"      // 👈 Replace this
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          formRef.current.reset();
        },
        () => {
          toast({
            title: "Message failed",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always open to new opportunities, collaborations, or just a tech chat!
          Whether you have a question or just want to say hi — I’ll try my best to get back to you.        
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:saurabhsawade6@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    saurabhsawade6@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+916261294715"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-6261294715
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Indore, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/saurabh-sawade6261/"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/sawade.saurabh/"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100059175214541"
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Saurabh Sawade..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="abcd@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Facebook
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";

// export const ContactSection = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };
//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary"> Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           I’m always open to new opportunities, collaborations, or just a tech chat!
//           Whether you have a question or just want to say hi — I’ll try my best to get back to you.        
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">
//               {" "}
//               Contact Information
//             </h3>

//             <div className="space-y-6 justify-center">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Email</h4>
//                   <a
//                     href="mailto:saurabhsawade6@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     saurabhsawade6@gmail.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Phone</h4>
//                   <a
//                     href="tel:+916261294715"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     +91-6261294715
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Location</h4>
//                   <a className="text-muted-foreground hover:text-primary transition-colors">
//                     Indore,India
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-8">
//               <h4 className="font-medium mb-4"> Connect With Me</h4>
//               <div className="flex space-x-4 justify-center ">
//                 <a href="https://www.linkedin.com/in/saurabh-sawade6261/" target="_blank" className="hover:text-primary">
//                   <Linkedin />
//                 </a>
//                 <a href="https://www.instagram.com/sawade.saurabh/" target="_blank" className="hover:text-primary">
//                   <Instagram />
//                 </a>
//                 <a href="https://www.facebook.com/profile.php?id=100059175214541" target="_blank" className="hover:text-primary">
//                   <Facebook />
//                 </a>

//               </div>
//             </div>
//           </div>

//           <div
//             className="bg-card p-8 rounded-lg shadow-xs"
//             // onSubmit={handleSubmit}
            
//           >
//             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

//             <form className="space-y-6 " onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="Saurabh Sawade..."
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="abcd@gmail.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello, I'd like to talk about..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn(
//                   "cosmic-button w-full flex items-center justify-center gap-2"
//                 )}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
