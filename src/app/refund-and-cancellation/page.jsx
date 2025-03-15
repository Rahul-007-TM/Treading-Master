import SectionHeading from "@/components/atoms/SectionHeading";
import React from "react";

const page = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center ">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                <SectionHeading title="Refund & Cancellation" />
                <div className="prose lg:prose-xl space-y-4 md:space-y-6 prose-p:text-base max-w-5xl mx-auto prose-p:text-justify md:prose-p:text-lg prose-strong:mx-2 prose-h2:text-xl md:prose-h2:text-2xl lg:prose-h2:text-3xl">
                    <p>
                        All sales are final. The Trading Masters Firm provides
                        expert advice to help you make informed decisions before
                        purchasing. Since our products and services are designed
                        to meet your needs upfront, we do not offer refunds or
                        cancellations under any circumstances.
                    </p>
                    <p>
                        Our The Trading Masters receive no compensation,
                        payment, or any form of consideration from us, our
                        affiliates, or subsidiaries for providing distribution
                        or execution services related to the securities or
                        products for which investment advice is given to
                        clients.
                    </p>
                    <p>
                        Before subscribing to our services, we encourage you to
                        utilize our Expert Advice and the evaluation version we
                        provide. As we are confident in the quality of our
                        services and support, we uphold a strict
                        <strong>NO REFUND POLICY</strong> on all subscriptions.
                        Please ensure you make an informed decision, as all
                        purchases are final.
                    </p>
                    <h2>Before Making a Payment:</h2>
                    <ul>
                        <li>
                            Carefully review all details about our products,
                            services, and client support.
                        </li>
                        <li>
                            Assess the quality of our services by utilizing our
                            Expert Advice.
                        </li>
                        <li>
                            Read our
                            <strong>
                                About Us, Terms & Conditions, and Privacy Policy
                            </strong>
                            sections.
                        </li>
                        <li>
                            Ensure that children, unauthorized family members,
                            or friends do not have access to your credit cards
                            or payment accounts to prevent unintended purchases.
                        </li>
                    </ul>
                    <p>
                        By completing a payment for Membership on our site, you
                        confirm that you have read, understood, and agreed to
                        our
                        <strong>No Refund and No Cancellation Policy.</strong>
                    </p>
                    <p>
                        All subscription purchases are final and non-refundable,
                        as we enforce a strict No Refund Policy. By accessing
                        our website, you acknowledge and agree to comply with
                        all terms and conditions outlined on our site.
                    </p>
                    <p>
                        <strong>Note:</strong> Investment in stock or commodity
                        market is subject to market risk. Before taking Expert
                        Advice & any services with The Trading Masters Firm as
                        an Investment Advisor, clients should read the
                        disclaimer, terms and conditions, and refund policy of
                        the company. Past performance is not a guarantee of
                        future performance. The Trading Masters Firm, as an
                        Investment Advisor, does not claim or provide any
                        assured returns, profit sharing, commitment, or
                        guaranteed plan. Please beware of fraudulent calls.
                        Expert Advice clients may receive SMS or calls,
                        including on DND numbers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
