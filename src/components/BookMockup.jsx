import { bookMockupLg, bookMockupMd, bookMockupTb } from "@/assets";

const BookMockup = () => {
    return (
        <>
            <img
                src={bookMockupLg}
                alt="7-Days Journey to Freedom Book"
                className="w-full object-cover hidden lg:flex"
            />

            <img
                src={bookMockupMd}
                alt="7-Days Journey to Freedom Book"
                className="w-full object-cover hidden md:flex lg:hidden"
            />

            <img
                src={bookMockupTb}
                alt="7-Days Journey to Freedom Book"
                className="w-full object-cover md:hidden flex"
            />
        </>
    );
};

export default BookMockup;
