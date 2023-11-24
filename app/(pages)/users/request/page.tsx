import RequestModal from "@/components/ui/RequestModal";
import { Button } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <>
      <main className="p-3">
        <h3 className=" font-extrabold text-2xl leading-tight font-nunito">
          Request Testimonial
        </h3>{" "}
        <br />
        <p className=" font-inter">
          Welcome to the Testimonial Request Center! Harness the power of
          positive feedback and enhance your online presence by requesting
          testimonials from your satisfied customers. Follow the simple steps
          below to initiate the testimonial collection process:
        </p>{" "}
        <br />
        <h4 className="font-nunito">
          1. Customize Your Testimonial Request Form
        </h4>
        <p className=" font-inter">
          Start by customizing your testimonial request form. Choose from a
          variety of form fields and question types to gather valuable insights
          from your customers. Add a personal touch by crafting a compelling
          message to encourage your customers to share their experiences.
        </p>{" "}
        <br />
        <h4 className="font-nunito">2. Select Recipients</h4>
        <p className=" font-inter">
          Choose the recipients who will receive your testimonial requests. You
          can input individual email addresses or import contacts from your
          existing lists. Make sure to personalize your requests for a higher
          response rate.
        </p>{" "}
        <br />
        <h4 className="font-nunito">3. Review and Preview</h4>
        <p className=" font-inter">
          Before sending out your requests, take a moment to review the
          customized form and message. Ensure that everything looks just the way
          you want it. Preview the form to see how it will appear to your
          recipients.
        </p>{" "}
        <br />
        <h4 className="font-nunito">4. Send Testimonial Requests</h4>
        <p className=" font-inter">
          Hit the "Send Requests" button to dispatch your personalized
          testimonial requests. Sit back and relax as your customers receive
          invitations to share their positive experiences with your products or
          services.
        </p>{" "}
        <br />
        <h4 className="font-nunito">5. Track Responses</h4>
        <p className=" font-inter">
          Keep track of responses in real-time. Our dashboard provides insights
          into who has opened your requests, who has responded, and the
          testimonials you've received. Use this information to follow up and
          express gratitude to customers who have shared their feedback.
        </p>{" "}
        <br />
        <h4 className="font-nunito">6. Enhance Your Online Reputation</h4>
        <p className=" font-inter">
          {" "}
          <br />
          Once you've collected testimonials, leverage them to enhance your
          online reputation. Showcase the positive experiences of your customers
          on your website, social media, and other marketing channels. Thank you
          for choosing our Testimonial Management Tool! If you have any
          questions or need assistance, feel free to reach out to our support
          team.
        </p>
      </main>
      <RequestModal />
    </>
  );
};

export default page;
