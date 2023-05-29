'use client';

import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
    return (
        <Toaster />
    );
}
export default ToasterProvider; // For some reason, you cant just use Toaster from 'react-hot-toast' in layout.tsx and needs to be wrapped  