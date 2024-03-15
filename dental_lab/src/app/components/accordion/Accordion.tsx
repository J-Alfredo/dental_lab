import React from 'react'

export const Accordion = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>¿Cómo puedo contactar al laboratorio dental y programar una cita?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            SAAS platform is a cloud-based software service that allows users to access
                            and use a variety of tools and functionality.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>¿Cómo se realiza el proceso de toma de impresiones dentales?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            We offers a variety of billing options, including monthly and annual subscription plans,
                            as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                            card or other secure online payment method.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>¿Cómo se manejan los casos de emergencia o ajustes necesarios en las prótesis?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
                            satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
                            for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
                            basis.
                        </p>
                    </details>
                </div>
            </div>
        </div>
  )
}
