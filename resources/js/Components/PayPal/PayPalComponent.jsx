import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Alert } from "@material-tailwind/react";
import { useState } from 'react';

export default function PayPalComponent({ course, user, clientId }) {
    console.log(course);
    const [successMessage, setSuccessMessage] = useState("");
    const style = { "layout": "vertical" };

    const ButtonWrapper = ({ showSpinner }) => {
        const [{ isPending }] = usePayPalScriptReducer();

        return (
            <>
                {(showSpinner && isPending) && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    currency_code: "MXN",
                                    value: course?.price
                                },
                                reference_id: user.id
                            }]
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(details => {
                            const paymentData = {
                                order: {
                                    reference_id: details.purchase_units[0].reference_id,
                                    amount: details.purchase_units[0].amount,
                                    shipping: {
                                        address: details.purchase_units[0].shipping?.address || {}
                                    },
                                    payments: {
                                        captures: [
                                            {
                                                id: details.id,
                                                status: details.status,
                                                create_time: details.create_time
                                            }
                                        ]
                                    }
                                },
                                course: course
                            };

                            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

                            fetch('/paypal/paypal-payment', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    'X-CSRF-TOKEN': csrfToken
                                },
                                body: JSON.stringify(paymentData),
                                credentials: 'same-origin'
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.success) {
                                        console.log('Pago procesado exitosamente');
                                        setSuccessMessage(data.message);
                                        setTimeout(() => {
                                            window.location.href = '/login';
                                        }, 5000);
                                    } else {
                                        console.error('Error en la respuesta del backend:', data);
                                    }
                                })
                                .catch(error => {
                                    console.error('Error en el procesamiento del pago:', error);
                                });
                        });
                    }}
                />
            </>
        );
    };

    return (
        <div className="w-full py-8 px-2 relative" style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": clientId, // "AaoanUtNBlgTbkWyFJ4Q9tJ7obMyH5MLnuNNcccXLKYW_5XJXtYhTDAvi1DY3oH1HF6ClulT2nsx0EiR",
                    components: "buttons",
                    currency: "MXN",
                    locale: "es_MX"
                }}
            >
                <ButtonWrapper showSpinner={false} />
            </PayPalScriptProvider>
            {successMessage && (
                <div className="mt-4 text-green-800 font-bold flex flex-col items-center">
                    <Alert className="font-bold w-full text-center mt-2" variant="filled" color="green">
                        {successMessage}
                    </Alert>
                    <p className="text-center mt-2">Serás redirigido al login ...</p>
                </div>
            )}
        </div>
    );
}
