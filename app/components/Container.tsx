'use client'; //this needs to be a client componenet otherwise there will be hydration problems

interface ContainerProps {
    children: React.ReactNode;
}


const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div
            className="
                max-w-[2520px]
                mx-auto
                xl:px-20
                md:px-10
                sm:px-2
                px-4
            "
        >
            {children}
        </div>
    )
}
export default Container; 