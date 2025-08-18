import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoIosSend } from "react-icons/io";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjkodjyq", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Something went wrong. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <SiGmail className="w-5 h-5" />,
      label: "Email",
      value: "shubhankarnayak05@gmail.com",
      href: "mailto:shubhankarnayak05@gmail.com"
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7008815575",
      href: "tel:+917008815575"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      label: "Location",
      value: "Rourkela, Odisha",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Shubhankar-Nayak"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shubhankar-nayak-1b953328a/"
    },
    {
      icon: <FaXTwitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://x.com/ShubhNayak6839"
    }
  ];

  return (
    <section id='contact' className='py-20 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
            Get In Touch
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-white rounded-2xl p-4 sm:p-8 shadow-lg'>
            <h3 className='text-2xl font-bold text-slate-800 mb-6'>Send Me a Message</h3>

            {isSubmitted ? (
              <div className='text-center py-8'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <IoIosSend className='w-8 h-8 text-green-600' />
                </div>
                <h4 className='text-xl font-semibold text-green-600 mb-2'>Message Sent!</h4>
                <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label htmlFor="name" className='block text-sm font-medium text-slate-700 mb-2'>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors'
                      placeholder='John Doe'
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className='block text-sm font-medium text-slate-700 mb-2'>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors'
                      placeholder='John@example.com'
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className='block text-sm font-medium text-slate-700 mb-2'>
                    Subject
                  </label>
                  <input
                    type="text"
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:border-transparent transition-colors'
                    placeholder='Project Inquiry'
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <IoIosSend />
                      Send Message
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <p className="text-green-500 text-sm mt-2">
                    ✅ Your message has been sent successfully!
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-slate-800 mb-6'>Contact Information</h3>

              <div className='space-y-4'>
                {contactInfo.map((item, index) => (
                  <a
                    key={index} 
                    href={item.href}
                    className='flex items-center gap-4 p-2 sm:p-4 rounded-lg hover:bg-slate-50 transition-colors group'
                  >
                    <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors'>
                      {item.icon}
                    </div>
                    <div>
                      <p className='text-sm text-slate-500 text-clip'>{item.label}</p>
                      <p className='w-[160px] sm:w-auto font-medium text-slate-800 truncate'>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-slate-800 mb-6'>Follow Me</h3>

              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index} 
                    href={social.href}
                    target='_blank'
                    rel='nooopener noreferrer'
                    className='w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transform hover:scale-110 transition-all duration-200'
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className='mt-6 pt-6 border-t border-slate-200'>
                <p className='text-slate-600 text-sm'>
                  Available for freelance opportunities and exciting projects. 
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact