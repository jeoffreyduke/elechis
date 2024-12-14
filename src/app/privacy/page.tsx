/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <main>
      <Header />
      <section className="p-8">
        <p className="bg-[rgb(233,186,0)] w-fit p-3 text-[1.5rem] my-16 mt-8 max-sm:my-8">
          <b>Privacy Policy</b>
        </p>
        <p className="mt-2">
          This Privacy Policy describes how Elechi's Restaurant ("we," "us,"
          "our") collects, uses, and discloses information when you use our
          website. By using our website, you consent to the collection, use, and
          disclosure of information as described in this Privacy Policy.
        </p>
        <p className="mt-2">
          <strong>Linking and Labeling:</strong> Our Privacy Policy is easily
          accessible on our website, clearly labeled as a privacy policy.
        </p>
        <p className="mt-2">
          <strong>Entity Reference:</strong> Our Privacy Policy refers to the
          entity known as Elechi's Restaurant, the provider of the website.
        </p>
        <p className="mt-2">
          <strong>Accessibility:</strong> Our Privacy Policy is presented on our
          website, easily readable without the need for special software or
          plug-ins. It is available on a publicly accessible URL and is not
          editable by users.
        </p>
        <h2 className="mt-4 font-bold">Collection and Use of Information</h2>
        <p className="mt-2 font-semibold">
          We may collect and use the following types of user data:
        </p>
        <ul>
          <li>
            Information you provide when using our website, such as your name,
            email address, and reservation details.
          </li>
          <li>
            Information we collect during your use of the website, such as user
            activity and preferences.
          </li>
          <li>
            Information we receive from third-party services, such as payment
            processors and analytics providers.
          </li>
        </ul>
        <p className="mt-2 font-semibold">
          We use the information we collect to:
        </p>
        <ul>
          <li>Provide and improve our website services.</li>
          <li>Personalize your experience.</li>
          <li>Communicate with you.</li>
          <li>Send you important updates and information.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <h2 className="mt-4 font-bold">Sharing of Information</h2>
        <p className="mt-2">
          We may share user data with trusted third-party service providers who
          assist us in delivering and enhancing our website services. We may
          also share user data with legal authorities when required by law or to
          protect our rights.
        </p>
        <h2 className="mt-4 font-bold">
          Security and Retention of Information
        </h2>
        <p className="mt-2">
          We have implemented security measures to safeguard user data from
          unauthorized access or disclosure. Additionally, we have established
          secure procedures for handling user information. We retain user data
          for as long as necessary to deliver our services and comply with legal
          requirements.
        </p>
        <h2 className="mt-4 font-bold">Changes to Privacy Policy</h2>
        <p className="mt-2">
          We may update this Privacy Policy when necessary. In case of
          significant changes, we will notify you through the website or other
          appropriate means. Your continued use of the website after these
          changes indicates your acceptance of the updated Privacy Policy.
        </p>
        <h2 className="mt-4 font-bold">Contact Us</h2>
        <p className="mt-2">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at <a href="mailto:help@elechis.com">help@elechis.com</a>.
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default Privacy;
