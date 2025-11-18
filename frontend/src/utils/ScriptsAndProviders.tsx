'use client';

import { ReactNode, useState } from 'react';
import Script from 'next/script';
import JQueryProvider from './jQueryProvider';

interface ScriptsAndProvidersProps {
    children: ReactNode;
}

export default function ScriptsAndProviders({ children }: ScriptsAndProvidersProps) {
    const [jQueryLoaded, setJQueryLoaded] = useState(false);

    const handleJQueryReady = () => {
        console.log('📢 jQuery is ready, loading dependent scripts...');
        setJQueryLoaded(true);
    };

    return (
        <>
            {/* Bootstrap can load independently */}
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                strategy="afterInteractive"
            />

            {/* Load jQuery first through JQueryProvider */}
            <JQueryProvider onJQueryReady={handleJQueryReady}>
                {children}
            </JQueryProvider>

            {/* Load jQuery-dependent scripts ONLY after jQuery is ready */}
            {jQueryLoaded && (
                <>
                    <Script
                        src="/js/plugins.js"
                        strategy="afterInteractive"
                        onError={() => console.error('❌ Failed to load Plugins')}
                    />
                </>
            )}
        </>
    );
}