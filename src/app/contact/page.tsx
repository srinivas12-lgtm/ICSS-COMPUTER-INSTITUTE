import EnquiryForm from "@/components/EnquiryForm";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | ICSS",
};

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="font-display text-4xl font-bold text-navy-ink mb-4">Get In Touch</h1>
        <p className="font-body text-ink-body/70 max-w-2xl text-lg">Have a question about our courses or want to apply? Send us a message or visit our campus in Shadnagar.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(11,18,41,0.04)] border border-navy-ink/5">
            <h2 className="font-display text-2xl font-bold text-navy-ink mb-6">Send an Enquiry</h2>
            <EnquiryForm />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-navy-ink text-white p-8 rounded-2xl">
            <h3 className="font-display font-bold text-xl mb-6">Contact Information</h3>
            <div className="space-y-6 font-body">
              <div className="flex gap-4">
                <MapPin className="text-cyan-signal shrink-0" />
                <div>
                  <div className="font-bold mb-1">Address</div>
                  <div className="text-paper-white/80 leading-relaxed">Near Vignan Junior College,<br />Beside Zoin High School,<br />Gandhi Nagar Colony, Shadnagar,<br />Telangana 509216</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-cyan-signal shrink-0" />
                <div>
                  <div className="font-bold mb-1">Phone</div>
                  <a href="tel:9949087771" className="text-paper-white/80 hover:text-cyan-signal transition-colors">99490 87771</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-cyan-signal shrink-0" />
                <div>
                  <div className="font-bold mb-1">Working Hours</div>
                  <div className="text-paper-white/80">Monday - Saturday<br />9:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden border border-navy-ink/10">
            {/* Simple embedded map for Shadnagar without an API key */}
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              src="https://maps.google.com/maps?q=Shadnagar,+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
