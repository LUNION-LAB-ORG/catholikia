import React, { Suspense } from "react";

export default function CuturamaEventDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Suspense>{children}</Suspense>;
}
