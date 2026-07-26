export const handler = async (event) => {
    const { principal, rate, time } = event;
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    return {
        Principal: principal,
        Rate: rate,
        Time: time,
        SimpleInterest: interest,
        TotalAmount: totalAmount
    };
};
