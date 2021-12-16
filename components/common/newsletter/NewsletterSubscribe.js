import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        const isAlreadySubscirbed = message?.includes("is already subscribed");
        const isAlreadySubscirbedMsg = isAlreadySubscirbed
          ? `${
              message.split(" ")[0]
            } is already subscribed to our newsletter. Thank you for subscribing.`
          : "";

        return (
          <NewsletterForm
            status={status}
            message={isAlreadySubscirbedMsg ? isAlreadySubscirbedMsg : message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
