
const CompanyThoughts = () => {
    return (
        <div className="flex w-full lg:py-16">
            <div className="flex w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16 rounded-3xl bg-secondary">
                <div className="flex w-full gap-8 flex-col">
                    <p className="text-sm md:text-base flex flex-col gap-2">
                        <span className="font-bold text-base md:text-lg">Dear Trader,</span>
                        <span>Greetings from [Your Trading Company Name]!</span>
                    </p>
                    <div className="flex flex-col w-full gap-4">
                        <p className="text-sm md:text-base">
                            We deeply value your trust and are committed to providing you with the best trading experience. Please note that all official offers, updates, promotions, and communications from [Your Trading Company Name] will only be sent from our official email address: [officialemail@yourcompany.com].
                        </p>
                        <p className="text-sm md:text-base">
                            It has come to our notice that fraudulent entities may attempt to misuse our brand and communication channels for malicious purposes. To safeguard yourself from phishing scams and other fraudulent activities, please ensure that you only respond to emails originating from our official email address: [officialemail@yourcompany.com].
                        </p>
                        <p className="text-sm md:text-base">
                            If you have any concerns about the authenticity of an email or encounter any suspicious activity, do not hesitate to reach out to us at our customer support number [Your Customer Support Number] or email us at [officialemail@yourcompany.com].
                        </p>
                        <p className="text-sm md:text-base">
                            Thank you for your attention and cooperation. We are here to help you trade confidently and securely.
                        </p>
                    </div>
                    <p className="text-sm md:text-base flex flex-col gap-2">
                        <span className="font-bold text-base md:text-lg">Best Regards,</span>
                        <span>Greetings from [Your Trading Company Name]!</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CompanyThoughts
