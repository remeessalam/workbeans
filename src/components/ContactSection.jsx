import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import contactus from "../assets/image/contactus.jpg";
const ContactSection = () => {
  const [spinner, setSpinner] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    setSpinner(true);

    var emailBody = "Name: " + data.fullName + "\n\n";
    emailBody += "Email: " + data.email + "\n\n";
    emailBody += "Phone: " + data.mobileNumber + "\n\n";
    // emailBody += "Subject: " + data.subject + "\n\n";
    emailBody += "Message:\n" + data.message;

    // Construct the request payload
    var payload = {
      to: "support@workbeans.ai",
      // to: "remeesreme4u@gmail.com",
      subject: "You have a new message from Velandirch",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
        // navigate("/thank-you");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div
      data-aos="fade-up"
      id="contact"
      className=" py-[2rem] sm:py-[5rem] text-primarytextcolor bg-backgro-gradient-revert"
    >
      <div className="wrapper">
        <div className="h-full grid md:grid-cols-2 gap-10 py-5">
          <div className="flex flex-col gap-4">
            <h2 className="heading-2 text-white" data-aos="fade-right">
              Get In Touch With Us!
            </h2>
            <p className="desc text-white" data-aos="fade-right">
              Get in touch with{" "}
              <span className="font-semibold text-violet-600">
                Workbeans AI
              </span>{" "}
              and let us be the catalyst for your digital transformation.
              Together, we can create solutions that align with your vision,
              helping your business reach new heights.
            </p>
            <img
              data-aos="fade-right"
              src={contactus}
              alt=""
              className="max-h-[21rem] object-cover rounded-xl"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 md:px-[1rem] text-black"
          >
            <div
              data-aos="fade-left"
              className="hover:scale-105 !transition-all duration-500"
            >
              <label htmlFor="" className="mb-6 font-medium">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 w-full bg-[#faf3ef] placeholder-slate-800  outline-none border-2 rounded-sm font-light border-primary px-2 py-3"
                placeholder="Enter Full Name"
                {...register("fullName", {
                  required: "Full name is required",
                })}
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            <div
              data-aos="fade-left"
              className="hover:scale-105 !transition-all duration-500"
            >
              <label htmlFor="" className="mb-6 font-medium">
                Mobile Number
              </label>
              <input
                type="text"
                className="mt-1 w-full bg-[#f3effa] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                placeholder="Enter Mobile Number"
                {...register("mobileNumber", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
              />
              {errors.mobileNumber && (
                <span className="text-red-500 text-sm">
                  {errors.mobileNumber.message}
                </span>
              )}
            </div>

            <div
              data-aos="fade-left"
              className="hover:scale-105 !transition-all duration-500"
            >
              <label htmlFor="" className="mb-6 font-medium">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div
              data-aos="fade-left"
              className="hover:scale-105 !transition-all duration-500"
            >
              <label htmlFor="" className="mb-6 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-1 w-full bg-[#faf3ef] outline-none placeholder-slate-800 border-2 rounded-sm font-light border-primary px-2 py-3"
                placeholder="Enter Message"
                {...register("message", { required: "Message is required" })}
                style={{
                  borderImageSource:
                    "linear-gradient(90deg, rgba(250,120,67,0.545) 0%, rgba(164,164,164,0.612) 100%)",
                  borderImageSlice: 1,
                }}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              data-aos="fade-left"
              className="bg-white text-violet-600 hover:text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-violet-400 transition duration-300"
              type="submit"
            >
              {spinner ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
