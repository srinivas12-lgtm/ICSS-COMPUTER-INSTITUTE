"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EnquiryForm({ coursePreselect = "" }: { coursePreselect?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    mobile_number: "",
    course_interested: coursePreselect,
    preferred_batch: "",
    qualification: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");
      
      setStatus("success");
      setFormData({ name: "", mobile_number: "", course_interested: "", preferred_batch: "", qualification: "", message: "" });
    } catch (error) {
      setStatus("error");
      alert("Something went wrong. Please try calling us instead.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-cyan-signal/10 border border-cyan-signal/30 text-cyan-signal p-6 rounded-xl text-center">
        <h4 className="font-display font-bold text-xl mb-2">Thank You!</h4>
        <p className="font-body text-sm">Your details have been received. Our team will contact you shortly, or you can call us directly at 99490 87771.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold underline">Submit another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-body text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-red-500">*</span></label>
        <input required type="text" id="name" className="w-full px-4 py-2 border border-navy-ink/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
      </div>
      <div>
        <label className="block font-body text-sm font-medium mb-1" htmlFor="mobile">Mobile Number <span className="text-red-500">*</span></label>
        <input required pattern="[6-9][0-9]{9}" title="10-digit Indian mobile number" type="tel" id="mobile" className="w-full px-4 py-2 border border-navy-ink/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" value={formData.mobile_number} onChange={e => setFormData({...formData, mobile_number: e.target.value})} />
      </div>
      <div>
        <label className="block font-body text-sm font-medium mb-1" htmlFor="course">Course Interested In <span className="text-red-500">*</span></label>
        <select required id="course" className="w-full px-4 py-2 border border-navy-ink/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue bg-white" value={formData.course_interested} onChange={e => setFormData({...formData, course_interested: e.target.value})}>
          <option value="" disabled>Select a course</option>
          <option value="PGDSE">PGDSE (18 Months)</option>
          <option value="PGDCA">PGDCA (1 Year)</option>
          <option value="DCA">DCA (6 Months)</option>
          <option value="Accounting">Accounting Package (2 Months)</option>
          <option value="DCH">Hardware / DCH (3 Months)</option>
          <option value="Short-Term">Short-Term Course</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium mb-1" htmlFor="batch">Preferred Batch</label>
          <select id="batch" className="w-full px-4 py-2 border border-navy-ink/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue bg-white" value={formData.preferred_batch} onChange={e => setFormData({...formData, preferred_batch: e.target.value})}>
            <option value="">Any</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        <div>
          <label className="block font-body text-sm font-medium mb-1" htmlFor="qualification">Qualification</label>
          <input type="text" id="qualification" placeholder="e.g. 10th/Inter/Degree" className="w-full px-4 py-2 border border-navy-ink/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" value={formData.qualification} onChange={e => setFormData({...formData, qualification: e.target.value})} />
        </div>
      </div>
      <div>
        <label className="block font-body text-sm font-medium mb-1" htmlFor="message">Message (Optional)</label>
        <textarea id="message" rows={3} className="w-full px-4 py-2 border border-navy-ink/10 rounded-lg focus:outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
      </div>
      
      <button disabled={status === "submitting"} type="submit" className="w-full bg-royal-blue hover:bg-electric-blue text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70">
        {status === "submitting" ? "Submitting..." : <><Send size={18} /> Submit Enquiry</>}
      </button>
    </form>
  );
}
