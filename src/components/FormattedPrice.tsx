import {number} from "prop-types";

interface Amount {
    amount: number;
}
const FormattedPrice = ({amount}: Amount) => {
    const formattedAmount = new Number(amount).toLocaleString(
        "en-us",{
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        }
    )
    return (
        <>
            <span>{formattedAmount}</span>
        </>
    );
};

export default FormattedPrice;