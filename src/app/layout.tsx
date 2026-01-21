import '../App.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'yusuf',
    description: 'Yusuf International Travels',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
