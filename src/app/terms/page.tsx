/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Terms() {
  return (
    <main>
      <Header />

      <section className="p-8">
        <p className="bg-[rgb(233,186,0)] w-fit p-3 text-[1.5rem] my-16 mt-8 max-sm:my-8">
          <b>Terms of Use</b>
        </p>

        <p className="mt-2">
          By using Elechi's Restaurant website, you agree to comply with the
          following Terms of Use. Please review these terms carefully before
          using the website.
        </p>
        <h2 className="mt-4 font-bold">Acceptance of Terms</h2>
        <p className="mt-2">
          By accessing and using the website, you acknowledge that you have
          read, understood, and agreed to be bound by these Terms of Use. If you
          do not agree with these terms, please refrain from using the website.
        </p>
        <h2 className="mt-4 font-bold">Use of the Website</h2>
        <p className="mt-2">
          Elechi's Restaurant website is designed to provide information about
          our restaurant, showcase our menu, and allow you to book reservations.
          You may use the website for its intended purpose and in compliance
          with these Terms of Use and applicable laws.
        </p>
        <h2 className="mt-4 font-bold">Account Registration</h2>
        <p className="mt-2">
          To access certain features and services, such as booking reservations,
          you may need to create an account. When registering, you agree to
          provide accurate information and to safeguard your account
          credentials.
        </p>
        <h2 className="mt-4 font-bold">Intellectual Property</h2>
        <p className="mt-2">
          The website and its content are Elechi's Restaurant's intellectual
          property and are protected by relevant laws. You may not modify,
          reproduce, distribute, or create derivative works based on the website
          without explicit permission.
        </p>
        <h2 className="mt-4 font-bold">Prohibited Conduct</h2>
        <p className="mt-2">
          When using the website, you agree not to engage in prohibited conduct,
          including:
        </p>
        <ul>
          <li>Violating laws, regulations, or third-party rights.</li>
          <li>Attempting unauthorized access or disruption of the website.</li>
          <li>
            Using the website for fraudulent, malicious, or unlawful purposes.
          </li>
          <li>Uploading or transmitting harmful or offensive content.</li>
          <li>
            Imposing an unreasonable burden on the website's infrastructure.
          </li>
        </ul>
        <h2 className="mt-4 font-bold">Limitation of Liability</h2>
        <p className="mt-2">
          Elechi's Restaurant and its affiliates are not liable for any damages
          arising from website usage. Please review the Terms of Use for more
          information.
        </p>
        <h2 className="mt-4 font-bold">Modification of Terms</h2>
        <p className="mt-2">
          Elechi's Restaurant reserves the right to modify these Terms of Use at
          any time. It is your responsibility to periodically review the terms.
          Continued use of the website indicates your acceptance of the updated
          terms.
        </p>
        <h2 className="mt-4 font-bold">Contact Us</h2>
        <p className="mt-2">
          If you have any questions or concerns regarding these Terms of Use,
          please contact us at{" "}
          <a href="mailto:help@elechis.com">help@elechis.com</a>.
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default Terms;
