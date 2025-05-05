import { bookMockupLg, bookMockupMd, bookMockupTb } from "@/assets";

const BookMockup = () => {
    return (
        <picture className="">
            {/* Large screens */}
            <source
                srcSet={bookMockupLg}
                // className="w-full object-cover"
                media="(min-width: 1024px)"
            />

            {/* Medium screens */}
            <source
                srcSet={bookMockupTb}
                // className="w-full object-cover"
                media="(min-width: 640px)"
            />

            {/* Small screens (default) */}
            <img
                src={bookMockupMd}
                alt="7-Days Journey to Freedom Book"
                // className="w-full object-cover"
            />
        </picture>
    );
};

export default BookMockup;
