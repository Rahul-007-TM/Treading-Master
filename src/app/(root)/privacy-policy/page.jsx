import SectionHeading from "@/components/atoms/SectionHeading";
import React from "react";

const page = () => {
    return (
        <div className="flex w-full h-auto md:items-center md:justify-center ">
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4 gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 md:py-12 lg:py-16">
                <SectionHeading title="Privacy Policy" />
                <div className="prose lg:prose-xl space-y-4 md:space-y-6 prose-p:text-sm md:prose-p:text-base max-w-5xl mx-auto lg:prose-p:text-lg">
                    <p>
                        We may, if required by applicable law or regulations,
                        disclose the identity of the client to the issuer of
                        Securities held as part of the Assets or to the agents
                        of such issuer upon request of such issuer, or to any
                        Government or Regulatory body, without further consent
                        from the client.
                    </p>

                    <p>
                        The Trading Masters respects and values the right to
                        Privacy of each and every individual. We are esteemed by
                        the relationship and by becoming our clients you have a
                        promise from our side that we shall remain loyal to all
                        our clients and non-clients whose information resides
                        with us. This Privacy Policy of The Trading Masters
                        applies to the current clients as well as former
                        clients. Below are the word-by-word credentials of our
                        Privacy Policy:
                    </p>

                    <p>
                        By registering your mobile number on The Trading Masters
                        website – you agree to be contacted by our personnel or
                        to receive SMS’s and it shall be treated as ‘opt in’ in
                        case the contact number you have registered with us is
                        subscribed in the DND registry (Do Not Disturb). By
                        registering for our services, you also agree to comply
                        with our Private Policy and Terms & Conditions.
                    </p>

                    <p>
                        Please be aware that you may receive calls related to
                        service promotions and any sort of contests and polls
                        organized by us.
                    </p>

                    <p>
                        In case there are any changes in your contact
                        information that we retain, please bring this to our
                        knowledge either by call or email.
                    </p>

                    <p>
                        Your information whether public or private will not be
                        sold, rented, exchanged, transferred, or given to any
                        company or individual for any reason without your
                        consent.
                    </p>

                    <p>
                        The only use we will bring to your information will be
                        for providing the services to you for which you have
                        subscribed and for which you provided your information.
                    </p>

                    <p>
                        Your information given to us represents your identity
                        with us. If any changes are made to any of the fields of
                        information you provided, you shall bring it to our
                        notice by either calling us or dropping a mail to us.
                    </p>

                    <p>
                        In addition to the service provided to you, your
                        information (Mobile Number, E-Mail ID, etc.) may be used
                        for sending you newsletters, surveys, contest
                        information, or information about any new services of
                        the Company that will benefit you. By subscribing to our
                        services, you agree that The Trading Masters has the
                        right to do so.
                    </p>

                    <p>
                        By subscribing to our services, you consent to our
                        Privacy Policy and Terms of Use.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
