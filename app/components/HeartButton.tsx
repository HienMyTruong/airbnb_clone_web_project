'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//import useFavorite from "@/app/hooks/useFavorite";
import { SafeUser } from "@/app/types";
import ClientOnly from "./ClientOnly";

interface HeartButtonProps {
    listingId: string
    currentUser?: SafeUser | null
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser
}) => {
    const hasFavorited = false;
    const toggleFavorite = () => { };
    //hardcoded but a hook for favorites is comming

    return (
        <div
            onClick={toggleFavorite}
            className="
                relative
                hover:opacity-80
                transition
                cursor-pointer
            "
        >
            <AiOutlineHeart
                size={28}
                className="
                    fill-white
                    absolute
                    -top-[2px]
                    -right-[2px]
                "
            />
            <AiFillHeart
                size={24}
                className={
                    hasFavorited ? 'fill-rose-500' : 'fill-neutral-300/70'
                }
            />
        </div>
    );
}

export default HeartButton;