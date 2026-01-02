export function AdPlaceholder({
    slot,
    format = "auto",
    className,
}: {
    slot: string;
    format?: "auto" | "rectangle" | "vertical";
    className?: string;
}) {
    return (
        <div
            className={`relative w-full overflow-hidden bg-r6-darker/50 border border-white/5 rounded-lg flex items-center justify-center ${className}`}
        >
            <div className="text-xs text-gray-600 uppercase tracking-widest p-4">
                Advertisement Space
            </div>
            {/* 
        In production, replace the above with actual AdSense script.
        Example:
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      */}
        </div>
    );
}
